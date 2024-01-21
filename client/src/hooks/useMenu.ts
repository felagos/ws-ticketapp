import { useEffect } from "react";
import { useAuthStore } from "../store";

export const useMenu = (hidden: boolean) => {

	const toggleMenu = useAuthStore(state => state.toggleMenu);

	useEffect(() => {
		toggleMenu(hidden);
	}, [hidden, toggleMenu]);

}