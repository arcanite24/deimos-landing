import React from 'react';
import logo from '../../assets/img/logo.svg';

export default function fourOfour() {
	return (
		<div className='flex flex-col h-screen items-center justify-evenly'>
			<img className=' w-1/2' src={logo} alt='Logo Deimos grande' />
			<div className='text-4xl'>Esta página no existe</div>
		</div>
	);
}
