import React from 'react';

type RowCarouselItemProps = {
	chunk: string[];
};

const RowCarouselItem = ({ chunk }: RowCarouselItemProps) => {
	return (
		<div className="flex-row">
			<ul className="grid grid-flow-col gap-3 w-full h-56 overflow-hidden">
				{chunk.map((item: string) => (
					<li
						key={item}
						className="flex justify-center items-center"
					>
						<img
							src={`https://image.tmdb.org/t/p/original${item}`}
							alt="backdrop"
							className="w-full h-52 object-center rounded-xl hover:border-r-2 hover:scale-105 transition-all duration-[0.5s]"
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default RowCarouselItem;
