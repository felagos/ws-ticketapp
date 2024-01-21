import { StateCreator, create } from "zustand";

interface UiState {}

const storeApi: StateCreator<UiState> = (set) => ({
});

export const useAuthStore = create<UiState>()(storeApi);