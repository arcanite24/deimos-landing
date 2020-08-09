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
		<div className='flex flex-row justify-around my-16'>
			<div className='flex flex-col justify-end text-justify font-hairline tracking-wider uppercase my-16 px-10 w-6/12'>
				<div className='font-thin'>
					Desarrollo mobile híbrido y nativo, especializado para que
					obtengas un producto de la mejor calidad en el menor tiempo
					posible
				</div>
				<div className='cursor-pointer font-normal mt-5'>
					<FontAwesomeIcon icon='arrow-left' /> Cotizar proyecto
				</div>
			</div>
			<Img
				className='flex-grow img-white-shadow mx-6'
				objectFit='contain'
				fluid={{
					...data.file.childImageSharp.fluid,
					aspectRatio: 1,
				}}
				style={{ width: '70vh', backgroundColor: 'white' }}
				alt='Desarrollo de aplicaciones de escritorio'
			/>
			<div className='d-rotate-90-wrapper w-20 uppercase'>
				<div className='text-6xl font-thin d-rotate-90'>Desktop</div>
			</div>
		</div>
	);
}
