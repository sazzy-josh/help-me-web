import { Link } from 'react-router-dom';
import React from 'react';

const AuthNav = () => {
	return (
		<nav className=' p-4 px-4 lg:px-16 xl:px-36 flex items-center justify-between '>
			<div className='flex items-center'>
				<Link to='/'>
					<img src='logo.png' alt='Logo' width={160} height={70} className=' mr-2' />
				</Link>
			</div>

			<section className='flex items-center gap-2'>
				<img src='profile-circle.png' alt='Logo' width={30} height={30} className='' />
				<h3>John Mark</h3>
				<img src='arrow-down.png' alt='Logo' width={20} height={20} className=' ' />
			</section>
		</nav>
	);
};

export default AuthNav;
