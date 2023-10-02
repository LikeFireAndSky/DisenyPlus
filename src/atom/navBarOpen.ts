import { atom, selector } from 'recoil';

const navBarOpen = atom({
	key: 'navBarOpen',
	default: false,
});

const isNavBarOpen = selector({
	key: 'isNavBarOpen',
	get: ({ get }) => {
		const toggle = get(navBarOpen);
		if (toggle) {
			return 'translateX(0)';
		}
		return 'translateX(-100%)';
	},
});

export { navBarOpen, isNavBarOpen };
