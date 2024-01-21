import { StateCreator, create } from "zustand";

interface UiState {
	hideMenu: boolean;
	toggleMenu: (hideMenu: boolean) => void;
}

const storeApi: StateCreator<UiState> = (set) => ({
	hideMenu: false,
	toggleMenu: (hideMenu: boolean) => set({ hideMenu }),
});

export const useAuthStore = create<UiState>()(storeApi);