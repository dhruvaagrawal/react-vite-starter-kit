module.exports = {
	$schema: "https://json.schemastore.org/eslintrc",
	env: { browser: true, es2020: true },
	root: true,
	extends: [
		"prettier",
		"plugin:tailwindcss/recommended",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
		"plugin:import/recommended",
		"eslint-config-prettier",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["tailwindcss", "react-refresh"],
	rules: {
		"react/react-in-jsx-scope": "off",
		"react/jsx-key": "off",
		"tailwindcss/no-custom-classname": "off",
		"tailwindcss/classnames-order": "off",
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
	},
	settings: {
		settings: {
			react: {
				version: "detect",
			},
			"import/resolver": {
				node: {
					paths: ["src"],
					extensions: [".js", ".jsx", ".ts", ".tsx"],
				},
			},
		},
		tailwindcss: {
			callees: ["cn"],
			config: "tailwind.config.js",
		},
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			parser: "@typescript-eslint/parser",
		},
	],
};
