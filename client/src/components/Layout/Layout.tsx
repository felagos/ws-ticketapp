import { Layout as LayoutAnt } from "antd";
import { Outlet } from "react-router-dom";

import './Layout.scss';

export const Layout =  () => (
	<LayoutAnt className="layout">
		<Outlet />
	</LayoutAnt>
)