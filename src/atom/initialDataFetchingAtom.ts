import { atom, selector } from 'recoil';

const initialLoading = atom({
	key: 'isInitialLoading',
	default: false,
});

const isInitialLoading = selector({
	key: 'isInitialLoading',
	get: ({ get }) => {
		const isDataFetchingNeeded = get(initialLoading);
		if (isDataFetchingNeeded) {
			return true;
		} else {
			return false;
		}
	},
});

export { initialLoading, isInitialLoading };
