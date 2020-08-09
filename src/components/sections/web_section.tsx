import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import Img from 'gatsby-image/withIEPolyfill';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../../variables.module.scss';

export default function WebSection() {
	const data = useStaticQuery(graphql`
		query {
			file(
				relativePath: { eq: "Deimos-Forum-Beautyshot-Twothemes.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 75) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<div className='flex flex-row justify-around my-16'>
			<div className='d-rotate-270-wrapper w-20 uppercase'>
				<div className='c-blue text-6xl font-thin d-rotate-270'>
					Web
				</div>
			</div>
			<Img
				className='flex-grow img-white-shadow mr-6 ml-10'
				objectFit='contain'
				alt='Desarollo móvil'
				fluid={{
					...data.file.childImageSharp.fluid,
					aspectRatio: 1,
				}}
				style={{ width: '70vh', backgroundColor: style.deimosBlue }}
			/>
			<div className='flex flex-col justify-end text-justify font-hairline tracking-wider uppercase my-16 px-10 w-6/12'>
				<div className='font-thin'>
					Desarrollo de plataformas web, sistemas de gestión,
					ecommerce e ideas innovativas hechas realidad
				</div>
				<div className='cursor-pointer c-blue font-normal mt-5'>
					Cotizar proyecto{' '}
					<FontAwesomeIcon
						icon='arrow-right'
						color={style.deimosBlue}
					/>
				</div>
			</div>
		</div>
	);
}
