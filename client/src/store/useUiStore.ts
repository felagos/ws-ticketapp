import { StateCreator, create } from "zustand";

interface UiState {
	hiddenMenu: boolean;
	toggleMenu: (hiddenMenu: boolean) => void;
}

const storeApi: StateCreator<UiState> = (set) => ({
	hiddenMenu: false,
	toggleMenu: (hiddenMenu: boolean) => set({ hiddenMenu }),
});

export const useAuthStore = create<UiState>()(storeApi);