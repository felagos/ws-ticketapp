import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "../components";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
	},
]);

export const Router = () => {
	return (
		<RouterProvider router={router} />
	);
}