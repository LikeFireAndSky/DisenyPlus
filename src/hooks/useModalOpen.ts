import { useRecoilState } from 'recoil';
import { modalState } from '../atom/modalAtom';

export function useToggleModal() {
	const [isOpen, setIsOpen] = useRecoilState(modalState);

	// 모달 열기 함수
	const openModal = () => {
		setIsOpen(cur => !cur);
	};

	return { isOpen, openModal };
}
