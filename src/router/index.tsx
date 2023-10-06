import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SearchPage from '../pages/SearchPage';
import Layout from '../layout/Layout';
import DetailPage from '../pages/DetailPage';
// import HomeLayout from '../layout/HomeLayout';

const router = () => {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Layout />}
				>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path=":detail"
						element={<DetailPage />}
					/>
					<Route
						path="search"
						element={<SearchPage />}
					/>
				</Route>
			</Routes>
		</>
	);
};

export default router;
