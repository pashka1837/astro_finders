import {create} from 'zustand';

type Store = {
	isMenuOpen: boolean;
	setOpen: (setVal: boolean) => void;
};

const useStore = create<Store>()(set => ({
	isMenuOpen: false,
	setOpen(setVal) {
		set(() => ({isMenuOpen: setVal}));
	},
}));

export default useStore;
