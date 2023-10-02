/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
	content: [
		'./src/**/*.html',
		'./src/**/*.jsx',
		'./src/**/*.js',
		'./src/**/*.ts',
		'./src/**/*.tsx',
		'./node_modules/@material-tailwind/react/components/**/*.{js,jsx,ts,tsx}',
		'./node_modules/@material-tailwind/react/theme/components/**/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			transitionProperty: {
				'background-color': 'background-color',
			},
			transitionDuration: {
				default: '1s',
			},
			transitionTimingFunction: {
				in: 'ease',
			},
			backgroundImage: {
				'main-image': "url('/src/assets/HomeImage.jpg')",
			},
		},
	},
	plugins: [],
});
