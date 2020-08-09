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
		<div className='flex flex-col lg:flex-row justify-around lg:my-16'>
			<div className='flex flex-row-reverse lg:flex-row w-full lg:w-7/12'>
				<div className='w-20 uppercase d-rotate-270-wrapper'>
					<div className='c-blue text-6xl font-thin d-rotate-270'>
						Web
					</div>
				</div>
				<Img
					className='img-white-shadow mr-6 ml-10 self-end w-full'
					objectFit='contain'
					alt='Desarollo móvil'
					fluid={{
						...data.file.childImageSharp.fluid,
						aspectRatio: 1,
					}}
					style={{ backgroundColor: style.deimosBlue }}
				/>
			</div>
			<div className='flex flex-col lg:justify-end text-justify font-hairline tracking-wider uppercase my-16 lg:px-10 lg:w-6/12'>
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
