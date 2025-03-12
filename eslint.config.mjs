import mheob from '@mheob/eslint-config';

export default mheob({
	ignores: ['**/typegen.d.ts'],
	typescript: {
		overrides: {
			'no-restricted-syntax': 'off',
			'node/prefer-global/process': 'off',
		},
	},
	unicorn: {
		overrides: {
			'unicorn/prefer-module': 'off',
		},
	},
});
