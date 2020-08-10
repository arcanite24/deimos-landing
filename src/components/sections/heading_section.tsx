import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../variables.module.scss';

export default function HeadingSection(props: IHeadingSectionProps) {
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
		<div className='flex flex-col lg:flex-row lg:justify-around my-10'>
			<Img
				className='img-filtered w-full lg:w-7/12'
				fluid={{
					...data.file.childImageSharp.fluid,
					aspectRatio: 1,
				}}
				alt='Idea'
			/>
			<div className='flex flex-col font-hairline tracking-wider uppercase mb-16 mt-3 lg:my-16 lg:pl-10'>
				<div className='relative text-4xl lg:text-6xl lg:d-right'>
					Great ideas
				</div>
				<div className='c-primary relative overflow-visible whitespace-no-wrap text-4xl lg:text-6xl lg:d-right'>
					Better future
				</div>
				<hr />
				<div className='flex-grow' />
				<div className='font-thin mt-2'>
					Envía un email. Solicita una reunión y ve tus sueños
					construidos de inmediato
				</div>
				<div
					onClick={props.onContact}
					className='cursor-pointer c-primary font-normal'
				>
					Cotizar proyecto{' '}
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

export interface IHeadingSectionProps {
	onContact?: () => void;
}
