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
						'@shared': './app/shared/',
						'@screens': './app/screens/',
						'@components': './app/components/',
						'@ui': './app/components/ui/',
						'@assets': './assets/',
					},
				},
			],
		],
	}
}
