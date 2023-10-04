import React from 'react';
import { Drawer, Typography } from '@material-tailwind/react';

import { Root } from '../../types/movieData';
import PlayButton from './PlayButton';

import truncate from '../../utils/truncate';

type MainViewProps = {
	data: Root;
};

const MainView = ({ data }: MainViewProps) => {
	const [openTop, setOpenTop] = React.useState(false);

	const openDrawerTop = () => {
		setOpenTop(true);
	};
	const closeDrawerTop = () => {
		setOpenTop(false);
	};

	const bgImage = data.backdrop_path;
	const description = truncate(data.overview, 50);

	return (
		<div className="flex flex-col px-3 pt-3">
			<figure className="relative h-96 w-full">
				<img
					className="h-full w-full rounded-xl object-cover-top object-center"
					src={`https://image.tmdb.org/t/p/original${bgImage}`}
					alt={data.title}
				/>
				<Drawer
					placement="top"
					open={openTop}
					onClose={closeDrawerTop}
					className="flex max-h-none justify-center items-center h-[1000px]"
				>
					<iframe
						src={`https://www.youtube.com/embed/${data?.videos?.results[0]?.key}?autoplay=1`}
						width="100%"
						height="100%"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
					></iframe>
				</Drawer>
				<figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
					<div>
						<Typography
							variant="h5"
							color="blue-gray"
						>
							{data.title}
						</Typography>
						<Typography
							color="gray"
							className="mt-2 font-normal"
						>
							{description}
						</Typography>
						{data?.videos?.results[0]?.key && <PlayButton fn={openDrawerTop} />}
					</div>
					<Typography
						variant="h5"
						color="blue-gray"
						className=" whitespace-nowrap"
					>
						{data.genres[0].name}
					</Typography>
				</figcaption>
			</figure>
		</div>
	);
};

export default MainView;
