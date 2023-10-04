import React from 'react';

type RowCarouselWrapperProps = {
	children: React.ReactNode;
};

const RowCarouselWrapper = ({ children }: RowCarouselWrapperProps) => {
	return <div className="flex flex-col items-center px-5">{children}</div>;
};

export default RowCarouselWrapper;
