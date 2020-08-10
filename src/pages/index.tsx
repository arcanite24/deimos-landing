import React from 'react';
import Navbar from '../components/navbar';
import HeadingSection from '../components/sections/heading_section';
import MobileSection from '../components/sections/mobile_section';
import WebSection from '../components/sections/web_section';
import DesktopSection from '../components/sections/desktop_section';
import SEO from '../components/seo';

export default function index() {
	return (
		<SEO>
			<Navbar onContact={onContact} />
			<div className='p-6 lg:px-16 lg:pb-5'>
				<HeadingSection onContact={onContact} />
				<MobileSection onContact={onContact} />
				<WebSection onContact={onContact} />
				<DesktopSection onContact={onContact} />
			</div>
		</SEO>
	);
}

function onContact() {
	window.location.href =
		'mailto:hola@deimos.app?subject=Cotización de proyecto&body=Hola. Me gustaría cotizar un proyecto de TI con ustedes';
}
