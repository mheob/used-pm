import defaultConfig from '@mheob/commitlint-config';

/** @type {import('@mheob/commitlint-config').UserConfig} */
const config = {
	...defaultConfig,
	prompt: {
		...defaultConfig.prompt,
		allowEmptyScopes: true,
		scopes: ['deps', 'release', 'repo'],
	},
};

export default config;
