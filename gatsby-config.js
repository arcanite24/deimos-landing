const path = require('path');

module.exports = {
	/* Your site config here */
	plugins: [
		'gatsby-plugin-typescript',
		'gatsby-plugin-tslint',
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				postCssPlugins: [
					require('tailwindcss'),
					require('./tailwind.config'),
				],
			},
		},
		'gatsby-image',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'img',
				path: path.join(__dirname, 'assets', 'img'),
			},
		},
	],
};
