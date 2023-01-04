// const colors = require('tailwindcss/colors')

module.exports = {
	content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
	theme: {
		extend: {
			fontFamily: {
				montse: ["Montserrat", "sans-serif"],
				display: ["Display", "sans-serif"],
				"display-thin": ["Display-Thin", "sans-serif"],
			},
			fontWeight: {
				bold: 700,
				semi: 600,
				medium: 500,
			},
      colors: {
        "gray-dark-900": "#404041",
        "gray-dark-700": "#4A4A4A",
        white: "#FFFFFF",
        "gray-light-100": "#EFEFEF",
        "gray-light-200": "#F8F8F8",
        "gray-light-300": "#DBDBDB",
        "gray-light-400": "#D8D8D8",
        "gray-light-500": "#9B9B9B",
        "gray-light-600": "#979797",
        "gray-light-700": "#929292",
        aqua: "#3DC0CB",
        "blue-light": "#009FDC",
        blue: "#174985",
        "blue-dark-100": "#0D2643",
        "blue-dark-200": "#071526"
      },
		},
	},
	plugins: [],
};
