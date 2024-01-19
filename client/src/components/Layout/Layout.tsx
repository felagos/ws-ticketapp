import { useEffect, useState } from "react";
import { Layout as LayoutAnt, Menu, theme, FloatButton } from 'antd';
import { Link, Outlet } from "react-router-dom";
import {
	FormOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { useScreenSize } from "../../hooks";

import './Layout.scss';

const MENU_BREAKPOINT = 1000;

const { Sider, Content } = LayoutAnt;

export const Layout = () => {
	const screen = useScreenSize();
	const [hidden, setHidden] = useState(false);
	const collapsed = screen.width < MENU_BREAKPOINT;

	useEffect(() => {
		setHidden(screen.width < MENU_BREAKPOINT);
	}, [screen.width]);

	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	return (
		<LayoutAnt className="layout">
			<Sider
				hidden={hidden}
				trigger={null}
				collapsible
				collapsed={collapsed}
				className={`menu ${hidden ? 'menu--opacity-0' : 'menu--opacity-1'}`}>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
					<Menu.Item key="1" icon={<UserOutlined />}>
						<Link to="/login">Log In</Link>
					</Menu.Item>

					<Menu.Item key="2" icon={<TeamOutlined />}>
						<Link to="/queue">Queue</Link>
					</Menu.Item>

					<Menu.Item key="3" icon={<FormOutlined />}>
						<Link to="/create-ticket">Create Ticket</Link>
					</Menu.Item>
				</Menu>
			</Sider>
			<LayoutAnt>
				<Content
					className="layout__content"
					style={{
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}
				>
					<Outlet />
				</Content>
			</LayoutAnt>
			<FloatButton
				icon={hidden ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				onClick={() => setHidden(!hidden)}
				className="layout__collapsible"
			/>
		</LayoutAnt>
	)
}