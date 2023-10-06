import { atom } from 'recoil';

export const modalState = atom({
	key: 'modalState',
	default: false, // 모달의 초기 상태 (닫힌 상태)
});
