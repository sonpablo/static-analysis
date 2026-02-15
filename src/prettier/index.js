export default {
	singleQuote: true,
	useTabs: true,
	trailingComma: 'es5',
	printWidth: 100,
	arrowParens: 'avoid',
	plugins: ['@ianvs/prettier-plugin-sort-imports'],
	importOrder: ['^react', '', '<THIRD_PARTY_MODULES>', '', '^@/.*', '', '^[./]'],
};
