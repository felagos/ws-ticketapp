import { useState } from "react";

type User = {
	agent: string;
	desktop: number;
}

export const useUser = () => {

	const [user] = useState<User>(() => {
		const agent = localStorage.getItem('agent') ?? '';
		const desktop = parseInt(localStorage.getItem('desktop') ?? '0');

		return { agent, desktop }
	});

	return {
		user
	};

}