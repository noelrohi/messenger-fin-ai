import { useEffect } from "react";
import Intercom from "@intercom/messenger-js-sdk";

interface User {
	id: string;
	name: string;
	email: string;
	createdAt: number;
}

interface IntercomMessengerProps {
	user?: User;
}

export default function IntercomMessenger({ user }: IntercomMessengerProps) {
	useEffect(() => {
		if (user) {
			Intercom({
				app_id: "rd1y46a7",
				user_id: user.id,
				name: user.name,
				email: user.email,
				created_at: user.createdAt,
			});
		} else {
			// Initialize Intercom for anonymous users
			Intercom({
				app_id: "rd1y46a7",
			});
		}
	}, [user]);

	return null;
}