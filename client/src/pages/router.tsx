import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "../components";
import { LogInPage } from "./LogInPage";
import { CreateTicketPage, DesktopPage, QueuePage } from ".";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
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
				element: <DesktopPage />,
			}
		]
	},
]);

export const Router = () => {
	return (
		<RouterProvider router={router} />
	);
}