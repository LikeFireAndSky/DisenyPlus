import React, { useMemo } from 'react';

import { Carousel } from '@material-tailwind/react';

import RowCarouselItem from './RowCarouselItem';

import chunkArray from '../../utils/chunkyArray';

import { Root } from '../../types/movieManyData';

type MainViewProps = {
	data: Root;
};

const RowCarousel = React.memo(({ data }: MainViewProps) => {
	const backdropArrays = useMemo(() => {
		const backdropArray = [] as Record<string, string | number>[];

		data.data.results.forEach(item => {
			if (item.backdrop_path) {
				backdropArray.push({
					backdrop: item.backdrop_path,
					id: item.id,
					title: item.title,
					overview: item.overview,
				});
			}
		});

		return backdropArray;
	}, [data]);

	// 배열에 backdrop_path가 있는 경우만 추가

	const chunkedData = chunkArray(backdropArrays);

	return (
		<Carousel
			className="rounded-xl w-full h-56 mt-3 flex"
			navigation={({ setActiveIndex, activeIndex, length }) => (
				<div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
					{new Array(length).fill('').map((_, i) => (
						<span
							key={i}
							className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
								activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
							}`}
							onClick={() => setActiveIndex(i)}
						/>
					))}
				</div>
			)}
		>
			{chunkedData.map(
				(chunk: Record<string, string | number>[], i: number) => (
					<RowCarouselItem
						key={i}
						chunk={chunk}
					/>
				),
			)}
		</Carousel>
	);
});

export default RowCarousel;
