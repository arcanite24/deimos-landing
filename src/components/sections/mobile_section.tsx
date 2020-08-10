import React from 'react';
// tslint:disable-next-line: no-submodule-imports
import Img from 'gatsby-image/withIEPolyfill';
import { useStaticQuery, graphql } from 'gatsby';
import style from '../../variables.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MobileSection(props: IMobileSectionProps) {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "Deimos-Forum-Beautyshot-Green.png" }) {
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
					Desarrollo mobile híbrido y nativo, especializado para que
					obtengas un producto de la mejor calidad en el menor tiempo
					posible
				</div>
				<div
					onClick={props.onContact}
					className='cursor-pointer c-bg-alt font-normal mt-5'
				>
					<FontAwesomeIcon
						icon='arrow-left'
						color={style.deimosBgAlt}
						style={{ color: style.deimosBgAlt }}
					/>{' '}
					Cotizar proyecto
				</div>
			</div>
			<Img
				className='img-white-shadow mx-6 w-8/12 self-end lg:w-5/12'
				objectFit='contain'
				fluid={{
					...data.file.childImageSharp.fluid,
					aspectRatio: 1,
				}}
				style={{ backgroundColor: style.deimosBgAlt }}
				alt='Desarrollo móvil'
			/>
			<div className='d-rotate-90-wrapper w-20 uppercase'>
				<div className='c-bg-alt text-5xl lg:text-6xl font-thin d-rotate-90'>
					Mobile
				</div>
			</div>
		</div>
	);
}

export interface IMobileSectionProps {
	onContact?: () => void;
}
