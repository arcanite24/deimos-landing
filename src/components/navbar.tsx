import React from 'react';
import logo from '../../assets/img/logo-trans.svg';
import RoundedButton from './buttons/rounded_button';

export default function Navbar(props: INavbarSectionProps) {
	return (
		<div className='flex flex-row w-screen items-center justify-between align-middle pt-5 px-4 lg:px-16'>
			<img className='w-5/12 lg:w-2/12' src={logo} alt='logo' />
			<RoundedButton text='Contáctanos' onClick={props.onContact} />
		</div>
	);
}

export interface INavbarSectionProps {
	onContact?: () => void;
}
