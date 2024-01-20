import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd"

const { Text, Title } = Typography;

export const CreateTicketPage = () => {
	const handleNewTicket = () => { }

	return (
		<>
			<Row>
				<Col span={14} offset={6} className="u-center">
					<Title level={3}>Press to create a new ticket</Title>
					<Button
						type="primary"
						shape="round"
						icon={<DownloadOutlined />}
						size="large"
						onClick={handleNewTicket}
					>
						New Ticket
					</Button>
				</Col>
			</Row>
			<Row className="u-mt-50">
				<Col span={14} offset={6} className="u-center">
					<Text>Your number</Text>
					<br />
					<Text type="success" style={{ fontSize: 55 }}>
						55
					</Text>
				</Col>
			</Row>
		</>
	)
}