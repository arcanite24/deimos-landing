import React from 'react';
import logo from '../../assets/img/logo-trans.svg';
import RoundedButton from './buttons/rounded_button';

export default function Navbar() {
	return (
		<div className='flex flex-row items-center align-middle'>
			<img className='w-2/12' src={logo} alt='logo' />
			<div className='flex-grow' />
			<RoundedButton
				text='Contáctanos'
				onClick={() => {
					throw Error('Unimplemented error');
				}}
			/>
		</div>
	);
}
