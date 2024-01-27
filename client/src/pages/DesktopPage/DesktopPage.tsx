import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons"
import { Button, Col, Divider, Row, Typography } from "antd"
import { useUser } from "../../hooks"

import "./DesktopPage.scss"

export const DesktopPage = () => {
	const { user } = useUser();

	const handleExit = () => { }

	const handleNextTicket = () => { }

	return (
		<>
			<Row className="desktop">
				<Col xl={12} md={24} sm={24}>
					<Typography.Title level={2}>{user.agent}</Typography.Title>
					<Typography.Text>You are working in desktop: </Typography.Text>
					<Typography.Text type="success">No. {user.desktop}</Typography.Text>
				</Col>
				<Col xl={12} md={24} sm={24} className="right">
					<Button
						type="primary"
						danger
						icon={<CloseCircleOutlined />}
						shape="round"
						onClick={handleExit}
						size="large"
					>
						Exit
					</Button>
				</Col>
			</Row>

			<Divider />

			<Row>
				<Col>
					<Typography.Title level={3}>You are attending ticket: </Typography.Title>
					<Typography.Text className="u-font-30" type="danger">No. {user.desktop}</Typography.Text>
				</Col>
			</Row>

			<Row>
				<Col xl={24} md={24} sm={24} className="right">
					<Button
						type="primary"
						shape="round"
						onClick={handleNextTicket}
						icon={<RightOutlined />}
					>
						Next Ticket
					</Button>
				</Col>
			</Row>

		</>
	)
}