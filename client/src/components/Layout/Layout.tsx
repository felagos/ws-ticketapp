import { useState } from "react";
import { Layout as LayoutAnt, Menu, Button, theme } from 'antd';
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

const { Header, Sider, Content } = LayoutAnt;

export const Layout = () => {
	const screen = useScreenSize();
	const [hidden, setHidden] = useState(false);
	const collapsed = screen.width < 1000;

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
				<Header className="layout__header" style={{ background: colorBgContainer }}>
					<Button
						type="text"
						icon={hidden ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={() => setHidden(!hidden)}
						className="layout__collapsible"
					/>
				</Header>
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
		</LayoutAnt>
	)
}