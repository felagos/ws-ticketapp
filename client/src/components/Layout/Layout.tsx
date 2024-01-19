import { useEffect, useState } from "react";
import { Layout as LayoutAnt, Menu, theme, FloatButton } from 'antd';
import { Outlet } from "react-router-dom";
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
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
			<Sider hidden={hidden} trigger={null} collapsible collapsed={collapsed}>
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={['1']}
					items={[
						{
							key: '1',
							icon: <UserOutlined />,
							label: 'Log In',
						},
						{
							key: '1',
							icon: <UserOutlined />,
							label: 'Queue',
						},
						{
							key: '3',
							icon: <UploadOutlined />,
							label: 'Create Ticket',
						},
					]}
				/>
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