import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "../components";

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
				path: "/about",
				element: <div>About</div>,
			},
		]
	},
]);

export const Router = () => {
	return (
		<RouterProvider router={router} />
	);
}