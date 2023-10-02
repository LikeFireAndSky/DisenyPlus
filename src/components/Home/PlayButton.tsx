import React from 'react';

import { Button } from '@material-tailwind/react';

type PlayButtonProps = {
	fn: () => void;
};

const PlayButton = ({ fn }: PlayButtonProps) => {
	return (
		<Button
			onClick={fn}
			className="mt-5"
		>
			play
		</Button>
	);
};

export default PlayButton;
