import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd"
import { useUser } from "../../hooks";

const { Text, Title } = Typography;

export const CreateTicketPage = () => {
	const { user } = useUser();
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
					<Text type="success" className="u-font-55">
						{user.desktop}
					</Text>
				</Col>
			</Row>
		</>
	)
}