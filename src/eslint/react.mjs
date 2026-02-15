import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import baseConfig from './base.mjs';

export default [
	...baseConfig,
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
			'jsx-a11y': jsxA11yPlugin,
			import: importPlugin,
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			...reactPlugin.configs.recommended.rules,
			...reactHooksPlugin.configs.recommended.rules,
			...jsxA11yPlugin.configs.recommended.rules,

			// React 17+ JSX Transform
			'react/react-in-jsx-scope': 'off',
			'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

			// ==================================================================================
			// ENTERPRISE/PROFESSIONAL RECOMMENDATIONS:
			// The following rules are currently warnings (or off) by default but should be
			// errors in professional/enterprise projects to prevent production bugs.
			// Uncomment and adjust as needed for your project's requirements.
			// ==================================================================================

			// React Hooks - CRITICAL: Prevents bugs from missing dependencies in useEffect/useCallback/useMemo
			// 'react-hooks/exhaustive-deps': 'error', // Default: 'warn' | Recommended: 'error'

			// React Unsafe Methods - Prevents usage of deprecated lifecycle methods
			// 'react/no-unsafe': 'error', // Default: 'off' | Recommended: 'error'

			// React Best Practices
			// 'react/no-array-index-key': 'error', // Prevents using index as key (causes re-render issues)
			// 'react/jsx-no-useless-fragment': 'warn', // Removes unnecessary <> fragments
			// 'react/self-closing-comp': 'warn', // Enforces <Component /> over <Component></Component>

			// Code Quality - Prevent debug code in production
			// 'no-console': 'warn', // Warns about console.log in code
			// 'no-debugger': 'error', // Prevents debugger statements in production

			// TypeScript Strict Rules (only if using TypeScript)
			// '@typescript-eslint/no-explicit-any': 'error', // Prohibits 'any' type
			// '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			// '@typescript-eslint/no-non-null-assertion': 'error', // Prevents usage of '!' operator

			// Import/Export Organization
			// 'import/no-duplicates': 'error', // Prevents duplicate imports
			// 'import/no-cycle': 'error', // Detects circular dependencies
		},
	},
	eslintConfigPrettier,
];
