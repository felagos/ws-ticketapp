import { useState } from "react";

type User = {
	agent: string;
	desktop: string;
}

export const useUser = () => {

	const [user] = useState<User>(() => {
		const agent = localStorage.getItem('agent') ?? '';
		const desktop = localStorage.getItem('desktop') ?? '';

		return { agent, desktop }
	});

	return {
		user
	};

}