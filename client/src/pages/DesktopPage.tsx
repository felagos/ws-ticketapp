import { Col, Row, Typography } from "antd"

export const DesktopPage = () => {
	return (
		<>
			<Row>
				<Col span={20}>
					<Typography.Title level={2}>Desktop</Typography.Title>
					<Typography.Text>You are working in desktop: </Typography.Text>
					<Typography.Text type="success">No. 55</Typography.Text>
				</Col>
				<Col span={4}>
					
				</Col>
			</Row>
		</>
	)
}