import React from 'react';
import { DialogWithImage } from '../MovieModal/MovieModal';

type RowCarouselWrapperProps = {
	children: React.ReactNode;
};

const RowCarouselWrapper = ({ children }: RowCarouselWrapperProps) => {
	return (
		<div className="flex flex-col items-center px-5">
			{children}
			<DialogWithImage />
		</div>
	);
};

export default RowCarouselWrapper;
