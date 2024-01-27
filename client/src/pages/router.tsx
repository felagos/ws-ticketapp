import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "../components";
import { LogInPage } from "./LogInPage/LogInPage";
import { CreateTicketPage, DesktopPage, QueuePage } from ".";
import { RoutesEnum } from "../enum";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				path: RoutesEnum.LOGIN,
				element: <LogInPage />,
			},
			{
				path: RoutesEnum.QUEUE,
				element: <QueuePage />,
			},
			{
				path: RoutesEnum.CREATE_TICKET,
				element: <CreateTicketPage />,
			},
			{
				path: RoutesEnum.DESKTOP,
				element: <DesktopPage />,
			},
			{
				path: RoutesEnum.NOT_FOUND,
				element: <Navigate to="/" />,
			}
		]
	},
]);

export const Router = () => {
	return (
		<RouterProvider router={router} />
	);
}