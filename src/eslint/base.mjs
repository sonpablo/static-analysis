import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		ignores: [
			'**/dist/**',
			'**/vite.config.*.timestamp*',
			'**/vitest.config.*.timestamp*',
			'**/monaco/**',
			'**/public/monaco/**',
			'**/docs/generated/**',
			'**/*.worker.js',
			'**/*.min.js',
			'**/node_modules/**',
			'**/generated/**',
		],
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
		},
		rules: {},
	},
];
