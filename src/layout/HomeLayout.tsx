import React from 'react';
import Nav from '../components/Nav';
import MainView from '../components/Home/MainView';

type HomeLayoutProps = {
	children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
	return (
		<section className="flex flex-col items-center w-screen h-screen overflow-x-hidden">
			<Nav />
			<main className="w-5/6 mt-20 h-full rounded-md mb-5 bg-amber-700">
				{children}
			</main>
		</section>
	);
};

export default HomeLayout;
