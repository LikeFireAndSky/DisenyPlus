import React from 'react';

import { useRecoilState } from 'recoil';
import { nowClickAtom } from '../../atom/nowClickAtom';
import { useToggleModal } from '../../hooks/useModalOpen';

type RowCarouselItemProps = {
	chunk: Record<string, string | number>[];
};

const RowCarouselItem = ({ chunk }: RowCarouselItemProps) => {
	const [nowClick, setNowClick] = useRecoilState(nowClickAtom);
	const { openModal } = useToggleModal();

	const handleClick = (item: Record<string, string | number>) => {
		const updateData = { ...nowClick, ...item };
		setNowClick(updateData);
		openModal();
	};

	return (
		<div className="flex-row">
			<ul className="grid grid-flow-col gap-3 w-full h-56 overflow-hidden">
				{chunk.map((item: Record<string, string | number>) => (
					<li
						key={item.id}
						className="flex justify-center items-center"
					>
						<img
							src={`https://image.tmdb.org/t/p/original${item.backdrop}`}
							alt="backdrop"
							className="w-full h-52 object-center rounded-xl hover:border-r-2 hover:scale-105 transition-all duration-[0.5s]"
							onClick={() => handleClick(item)}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default RowCarouselItem;
