/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%': { transform: 'rotate(0deg)' },
					'90% ': { transform: 'rotate(0deg)' },
					'92.5%': { transform: 'rotate(8deg)' },
					'95%': { transform: 'rotate(-8deg)' },
					'100%': { transform: 'rotate(0deg)' },
				},
			},
			animation: {
				'wiggle-hand': 'wiggle 3s ease-in-out infinite',
			},

		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require('flowbite/plugin')],
};
