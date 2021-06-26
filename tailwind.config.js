const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
			padding: '4rem',
		},
		extend: {
			colors: {
				gray: colors.trueGray,
				amber: colors.amber,
				currentColor: 'currentColor',
				cc: {
					yellow: '#fccf14',
					orange: '#ffbc02',
				},
				mine: {
					black: '#000000',
					white: '#ffffff',
					dark: {
						blue: '#0000AA',
						green: '#00AA00',
						aqua: '#00AAAA',
						red: '#AA0000',
						purple: '#AA00AA',
						gray: '#555555',
					},
					light: { purple: '#FF55FF' },
					gray: '#AAAAAA',
					gold: '#FFAA00',
					blue: '#5555FF',
					green: '#55FF55',
					aqua: '#55FFFF',
					red: '#FF5555',
					yellow: '#FFFF55',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
