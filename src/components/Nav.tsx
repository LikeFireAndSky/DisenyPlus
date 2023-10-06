import React from 'react';
import {
	Navbar,
	Collapse,
	Typography,
	IconButton,
} from '@material-tailwind/react';
import { InputWithButton } from './InputElement';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const NavList = () => {
	return (
		<div className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<InputWithButton />
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium"
			>
				<Link
					to="/"
					className="flex items-center hover:text-blue-500 transition-colors"
				>
					Pages
				</Link>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium"
			>
				<Link
					to={`/`}
					className="flex items-center hover:text-blue-500 transition-colors"
				>
					Account
				</Link>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium"
			>
				<Link
					to="/search?q="
					className="flex items-center hover:text-blue-500 transition-colors"
				>
					Blocks
				</Link>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium"
			>
				<Link
					to="/"
					className="flex items-center hover:text-blue-500 transition-colors"
				>
					Docs
				</Link>
			</Typography>
		</div>
	);
};

const Nav = () => {
	const [openNav, setOpenNav] = React.useState(false);
	const [show, handleShow] = React.useState(true);

	const handleWindowResize = () =>
		window.innerWidth >= 960 && setOpenNav(false);

	React.useEffect(() => {
		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	React.useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY < 30) {
				handleShow(!show);
			} else handleShow(!show);
		});

		return () => {
			window.removeEventListener('scroll', () => {});
		};
	}, [show]);

	return (
		<Navbar
			className={`mx-auto fixed w-5/6 max-w-none px-6 py-3 z-50 transition-background-color duration-default transition-in ${
				show ? 'bg-blue-gray-400' : 'bg-brown-500'
			}`}
		>
			<div className="flex items-center justify-between text-blue-gray-900">
				<Typography
					as="a"
					variant="h6"
					className="mr-4 cursor-pointer py-1.5"
				>
					<Link to="/">Movie DB APP</Link>
				</Typography>
				<div className="hidden lg:block">
					<NavList />
				</div>
				<IconButton
					variant="text"
					className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<XMarkIcon
							className="h-6 w-6"
							strokeWidth={2}
						/>
					) : (
						<Bars3Icon
							className="h-6 w-6"
							strokeWidth={2}
						/>
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<NavList />
			</Collapse>
		</Navbar>
	);
};

export default Nav;
