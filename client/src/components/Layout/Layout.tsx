import { useEffect, useState } from "react";
import { Layout as LayoutAnt, Menu, theme, FloatButton } from 'antd';
import { Outlet, useNavigate } from "react-router-dom";
import {
	FormOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { useScreenSize } from "../../hooks";

import './Layout.scss';
import { RoutesEnum } from "../../enum";
import { useAuthStore } from "../../store";

const MENU_BREAKPOINT = 1000;

const { Sider, Content } = LayoutAnt;

export const Layout = () => {
	const screen = useScreenSize();
	const navigate = useNavigate();
	const hiddenMenu = useAuthStore(state => state.hiddenMenu);
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
			{!hiddenMenu && (
				<Sider
					hidden={hidden}
					trigger={null}
					collapsible
					collapsed={collapsed}
					className={`menu ${hidden ? 'menu--opacity-0' : 'menu--opacity-1'}`}>
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={[
						{
							key: '1',
							icon: <UserOutlined />,
							title: 'Log In',
							label: 'Log In',
							onClick: () => navigate(RoutesEnum.LOGIN),
						},
						{
							key: '2',
							icon: <TeamOutlined />,
							title: 'Queue',
							label: 'Queue',
							onClick: () => navigate(RoutesEnum.QUEUE),
						},
						{
							key: '3',
							icon: <FormOutlined />,
							title: 'Create Ticket',
							label: 'Create Ticket',
							onClick: () => navigate(RoutesEnum.CREATE_TICKET),
						}
					]} />
				</Sider>
			)}
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
			{!hiddenMenu && (
				<FloatButton
					icon={hidden ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					onClick={() => setHidden(!hidden)}
					className="layout__collapsible"
				/>
			)}
		</LayoutAnt>
	)
}