import { CloseCircleOutlined } from "@ant-design/icons"
import { Button, Col, Row, Typography } from "antd"

import "./DesktopPage.scss"

export const DesktopPage = () => {

	const handleExit = () => { }

	return (
		<>
			<Row className="desktop">
				<Col xl={12} md={24} sm={24}>
					<Typography.Title level={2}>Desktop</Typography.Title>
					<Typography.Text>You are working in desktop: </Typography.Text>
					<Typography.Text type="success">No. 55</Typography.Text>
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
		</>
	)
}