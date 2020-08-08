import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function HeadingSection() {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "idea.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 75) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<div className='flex flex-row justify-around'>
			<Img
				fluid={{ ...data.file.childImageSharp.fluid, aspectRatio: 1 }}
				style={{ width: '30vw' }}
			/>
			<div>text</div>
		</div>
	);
}
