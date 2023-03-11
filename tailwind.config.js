// @ts-check
const defaults = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import("tailwindcss").Config } */
module.exports = {
	content: ['./src/**/*.{tsx,ts,css}'],

	theme: {
		fontFamily: {
			mono: ['"DM Mono"', 'monospace'],
			sans: ['"brandon-grotesque"', 'sans-serif'],
		},
		fontWeight: {
			light: 300,
			medium: 500,
		},
	},
	// plugins: [],

	plugins: [require('@tailwindcss/typography')],
};
