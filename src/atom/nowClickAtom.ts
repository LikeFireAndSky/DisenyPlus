import { atom, selector } from 'recoil';
import truncate from '../utils/truncate';

export interface Root {
	backdrop: string;
	id: number;
	title: string;
	overview: string;
}

const nowClickAtom = atom({
	key: 'nowClick',
	default: { backdrop: '', id: 0, title: '', overview: '' },
});

const getNowClick = selector({
	key: 'isInitialLoading',
	get: ({ get }) => {
		const nowClick = get(nowClickAtom);
		const { backdrop, id, title, overview } = nowClick;
		return {
			backdrop,
			id,
			title,
			overview: truncate(overview, 100),
		};
	},
});

export { nowClickAtom, getNowClick };
