import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
// import HomeLayout from '../layout/HomeLayout';

const router = () => {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
			</Routes>
		</>
	);
};

export default router;
