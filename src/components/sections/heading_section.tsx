import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../variables.scss';

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
		<div className='flex flex-row justify-around my-10'>
			<Img
				fluid={{ ...data.file.childImageSharp.fluid, aspectRatio: 1 }}
				style={{ width: '90vh' }}
			/>
			<div className='flex flex-col font-hairline tracking-wider uppercase my-16 pl-10'>
				<div className='relative text-6xl' style={{ right: '150px' }}>
					Great ideas
				</div>
				<div
					className='c-primary relative overflow-visible whitespace-no-wrap text-6xl'
					style={{ right: '150px' }}
				>
					Better future
				</div>
				<hr />
				<div className='flex-grow' />
				<div className='font-thin'>
					Send an email. Request a meeting and get your dreams built
					in no time
				</div>
				<div className='cursor-pointer c-primary font-normal'>
					Start a project{' '}
					<FontAwesomeIcon
						icon='arrow-right'
						color={styles.deimosPrimary}
						style={{ color: styles.deimosPrimary }}
					/>
				</div>
			</div>
		</div>
	);
}
