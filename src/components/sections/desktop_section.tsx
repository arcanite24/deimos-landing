import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import Img from 'gatsby-image/withIEPolyfill';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DesktopSection() {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "black.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 75) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<div className='flex flex-col-reverse lg:flex-row justify-around lg:my-16'>
			<div className='flex flex-col items-end lg:items-start justify-end text-justify font-hairline tracking-wider uppercase my-16 lg:px-10 lg:w-6/12'>
				<div className='font-thin'>
					Desarrollo de aplicaciones de escritorio. Si las páginas web
					no es lo que necesitas, prueba las aplicaciones de
					escritorio. Robustos sistemas de gestión y plataformas
					hechas a la medida de tus necesidades
				</div>
				<div className='cursor-pointer font-normal mt-5'>
					<FontAwesomeIcon icon='arrow-left' /> Cotizar proyecto
				</div>
			</div>
			<Img
				className='img-white-shadow mx-6 w-8/12 self-end lg:w-5/12'
				objectFit='contain'
				fluid={{
					...data.file.childImageSharp.fluid,
					aspectRatio: 1,
				}}
				style={{ backgroundColor: 'white' }}
				alt='Desarrollo de aplicaciones de escritorio'
			/>
			<div className='d-rotate-90-wrapper w-20 uppercase'>
				<div className='text-5xl lg:text-6xl font-thin d-rotate-90'>
					Desktop
				</div>
			</div>
		</div>
	);
}
