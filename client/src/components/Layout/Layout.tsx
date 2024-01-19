import { useEffect, useState } from "react";
import { Layout as LayoutAnt, Menu, theme, FloatButton } from 'antd';
import { Outlet } from "react-router-dom";
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';

import './Layout.scss';
import { useScreenSize } from "../../hooks";

const { Sider, Content } = LayoutAnt;

export const Layout = () => {
	const screen = useScreenSize();
	const [hidden, setHidden] = useState(false);
	const collapsed = screen.width < 1000;

	useEffect(() => {
		setHidden(screen.width < 1000);
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
							label: 'nav 1',
						},
						{
							key: '2',
							icon: <VideoCameraOutlined />,
							label: 'nav 2',
						},
						{
							key: '3',
							icon: <UploadOutlined />,
							label: 'nav 3',
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