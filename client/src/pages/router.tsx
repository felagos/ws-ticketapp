import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "../components";
import { LogInPage } from "./LogInPage";
import { CreateTicketPage, QueuePage } from ".";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <div>Home</div>,
			},
			{
				path: "/login",
				element: <LogInPage />,
			},
			{
				path: "/queue",
				element: <QueuePage />,
			},
			{
				path: "/create-ticket",
				element: <CreateTicketPage />,
			},
			{
				path: "/desktop",
				element: <div>Desktop</div>,
			}
		]
	},
]);

export const Router = () => {
	return (
		<RouterProvider router={router} />
	);
}