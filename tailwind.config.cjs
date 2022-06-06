const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	// darkMode: "media",
	theme: {
		screens: {
			xs: '500px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1576px',
			'3xl': '2440'
		},
		container: {
			center: true,
			padding: '16px'
		},
		extend: {
			fontFamily: { poppins: "'Poppins', sans-serif" },
			fontSize: {
				xxs: '0.675rem'
			},
			boxShadow: {}
		}
	},

	plugins: []
};

module.exports = config;
