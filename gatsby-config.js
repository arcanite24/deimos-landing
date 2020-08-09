const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'Deimos Applications',
		titleTemplate: '%s · Deimos',
		description:
			'Deimos Applications. Consultora de TI que proporciona las mejores soluciones en desarrollo de software',
		url: 'https://www.deimos.app',
		image: '/logo-bg-full.jpg',
		twitterUsername: '@deimosApps',
	},
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
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'assets/img/logo_single.png',
			},
		},
		'gatsby-plugin-react-helmet',
	],
};
