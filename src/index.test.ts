import { describe, expect, test } from 'vitest';

import getCurrentPackageManager from './index.mjs';

const userAgents = [
	{
		agent: 'npm/9.6.7 node/v18.16.0 darwin arm64 workspaces/false',
		name: 'npm',
		version: '9.6.7',
	},
	{
		agent: 'yarn/1.22.19 npm/? node/v18.16.0 darwin arm64',
		name: 'yarn',
		version: '1.22.19',
	},
	{
		agent: 'pnpm/8.5.1 npm/? node/v18.16.0 darwin arm64',
		name: 'pnpm',
		version: '8.5.1',
	},
];

describe('getCurrentPackageManager', () => {
	test.each(userAgents)('returns correct package manager', ({ agent, name, version }) => {
		process.env.npm_config_user_agent = agent;

		const result = getCurrentPackageManager();

		expect(result).toEqual({ name, version });
	});

	test('returns the name and an empty version', () => {
		process.env.npm_config_user_agent = 'whatever';

		const result = getCurrentPackageManager();

		expect(result).toEqual({ name: 'whatever', version: '' });
	});

	test('returns undefined if package manager is not found', () => {
		process.env.npm_config_user_agent = '';

		const result = getCurrentPackageManager();

		expect(result).toBeUndefined();
	});

	test('returns undefined if npm_config_user_agent is not set', () => {
		// @ts-expect-error "The operand of a 'delete' operator must be optional. ts(2790)"
		delete process.env.npm_config_user_agent;

		const result = getCurrentPackageManager();

		expect(result).toBeUndefined();
	});
});
