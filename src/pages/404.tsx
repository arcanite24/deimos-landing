import React from 'react';
import logo from '../../assets/img/logo.svg';

export default function fourOfour() {
	return (
		<div className='flex flex-col h-screen items-center justify-center lg:justify-evenly'>
			<img
				className='w-10/12 lg:w-1/2 my-10'
				src={logo}
				alt='Logo Deimos grande'
			/>
			<div className='text-2xl lg:text-4xl'>Esta página no existe</div>
		</div>
	);
}
