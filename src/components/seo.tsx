import React from 'react';
import { Helmet } from 'react-helmet';
// tslint:disable-next-line: no-implicit-dependencies
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SEO: React.SFC<ISeoProps> = props => {
	const query = graphql`
		query SEO {
			site {
				siteMetadata {
					defaultTitle: title
					titleTemplate
					defaultDescription: description
					siteUrl: url
					defaultImage: image
					twitterUsername
				}
			}
		}
	`;

	const { pathname } = useLocation();
	const { site } = useStaticQuery(query);

	const {
		defaultTitle,
		titleTemplate,
		defaultDescription,
		siteUrl,
		defaultImage,
		twitterUsername,
	} = site.siteMetadata;

	const seo = {
		title: props.title || defaultTitle,
		description: props.description || defaultDescription,
		image: `${siteUrl}${props.image || defaultImage}`,
		url: `${siteUrl}${pathname}`,
	};

	return (
		<div>
			<Helmet title={seo.title} titleTemplate={titleTemplate}>
				<html lang='es' />
				<meta name='description' content={seo.description} />
				<meta name='image' content={seo.image} />

				{seo.url && <meta property='og:url' content={seo.url} />}

				{(props.article ? true : null) && (
					<meta property='og:type' content='article' />
				)}

				{seo.title && <meta property='og:title' content={seo.title} />}

				{seo.description && (
					<meta property='og:description' content={seo.description} />
				)}

				{seo.image && <meta property='og:image' content={seo.image} />}

				<meta name='twitter:card' content='summary_large_image' />

				{twitterUsername && (
					<meta name='twitter:creator' content={twitterUsername} />
				)}

				{seo.title && <meta name='twitter:title' content={seo.title} />}

				{seo.description && (
					<meta
						name='twitter:description'
						content={seo.description}
					/>
				)}

				{seo.image && <meta name='twitter:image' content={seo.image} />}
			</Helmet>
			{props.children}
		</div>
	);
};

export default SEO;

const defaultProps: Partial<ISeoProps> = {
	title: undefined,
	description: undefined,
	image: undefined,
	article: false,
};
SEO.defaultProps = defaultProps;

export interface ISeoProps {
	title?: string;
	description?: string;
	image?: string;
	article?: boolean;
}
