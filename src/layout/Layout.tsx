import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<section className="flex flex-col items-center w-screen h-screen overflow-x-hidden">
			<Nav />
			<main className="w-5/6 mt-20 rounded-md mb-5 bg-amber-700">
				<Outlet />
			</main>
		</section>
	);
};

export default Layout;
