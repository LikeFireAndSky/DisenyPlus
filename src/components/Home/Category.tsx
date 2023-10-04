import React from 'react';

const LiItemsStype =
	'flex items-center justify-center rounded-md h-24 cursor-pointer hover:border-2 border-white hover:bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all';

const Category = () => {
	return (
		<div className="px-3 mt-3">
			<ul className="w-full grid grid-cols-1 text-2xl font-extrabold gap-x-1 gap-y-3 md:grid-cols-5">
				<li className={`${LiItemsStype} bg-gray-500`}>Diseny</li>
				<li className={`${LiItemsStype} bg-brown-800`}>Fox</li>
				<li className={`${LiItemsStype} bg-red-500`}>Marvel</li>
				<li className={`${LiItemsStype} bg-yellow-700`}>Paramount</li>
				<li className={`${LiItemsStype} bg-green-700`}>PIXA</li>
			</ul>
		</div>
	);
};

export default Category;
