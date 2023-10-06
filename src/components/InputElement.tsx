import React from 'react';
import { Input, Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export function InputWithButton() {
	const [email, setEmail] = React.useState('');
	const navigate = useNavigate();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setEmail(e.target.value);
		navigate(`/search?q=${e.target.value}`);
	};

	return (
		<div className="relative flex w-full max-w-[24rem]">
			<Input
				type="text"
				label="검색어를 입력하세요"
				value={email}
				crossOrigin="true"
				onChange={onChange}
				className="pr-20"
				containerProps={{
					className: 'min-w-0',
				}}
			/>
			<Button
				size="sm"
				color={email ? 'gray' : 'blue-gray'}
				disabled={!email}
				className="!absolute right-1 top-1 rounded"
			>
				SEARCH
			</Button>
		</div>
	);
}
