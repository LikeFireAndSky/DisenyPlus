import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalState } from '../../atom/modalAtom';
import { useToggleModal } from '../../hooks/useModalOpen';
import { getNowClick } from '../../atom/nowClickAtom';
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Avatar,
	Typography,
} from '@material-tailwind/react';

export function DialogWithImage() {
	const isOpen = useRecoilValue(modalState);
	const nowClick = useRecoilValue(getNowClick);
	const { openModal } = useToggleModal();

	return (
		<>
			<Dialog
				size="xl"
				open={isOpen}
				handler={openModal}
				className="w-full h-3/4 flex flex-col"
			>
				<DialogHeader className="justify-between">
					<div className="flex items-center gap-3">
						<Avatar
							size="sm"
							variant="circular"
							alt="tania andrew"
							src="https://firebasestorage.googleapis.com/v0/b/testfc-74eda.appspot.com/o/camera.png?alt=media&token=061b51b5-e37a-40a8-a404-dbd3c75c6a15"
						/>
						<div className="-mt-px flex flex-col">
							<Typography
								variant="small"
								color="blue-gray"
								className="font-medium"
							>
								{nowClick.title}
							</Typography>
							<Typography
								variant="small"
								color="gray"
								className="text-xs font-normal"
							>
								@TheMovieAPP
							</Typography>
						</div>
					</div>
				</DialogHeader>
				<DialogBody
					divider={true}
					className="p-0 h-3/4"
				>
					<img
						alt="nature"
						className="h-full w-full object-cover object-center"
						src={`https://image.tmdb.org/t/p/original${nowClick.backdrop}`}
					/>
				</DialogBody>
				<DialogFooter className="justify-between">
					<div className="flex items-center gap-16">
						<div>
							<Typography
								variant="small"
								color="gray"
								className="font-normal"
							>
								OverViews
							</Typography>
							<Typography
								color="blue-gray"
								className="font-medium"
							>
								{nowClick.overview}
							</Typography>
						</div>
					</div>
					<Button
						size="sm"
						variant="outlined"
						color="blue-gray"
						className="flex items-center gap-3"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="h-4 w-4"
						>
							<path
								fillRule="evenodd"
								d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
								clipRule="evenodd"
							/>
						</svg>
						Share
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
}
