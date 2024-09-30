module.exports = function (api) {
	api.cache(true)
	return {
		presets: [
			[
				'babel-preset-expo',
				{
					jsxImportSource: 'nativewind',
				},
			],
			'nativewind/babel',
		],

		plugins: [
			[
				'module-resolver',
				{
					root: ['./'],
					extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
					alias: {
						'@': './app/',
						'@shared': './shared/',
						'@screens': './screens/',
						'@components': './components/',
						'@ui': './components/ui/',
						'@assets': './assets/',
					},
				},
			],
		],
	}
}
