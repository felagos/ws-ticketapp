import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd"
import { useSocket } from "../../hooks";
import ENV from '../../env'
import { SocketEvents } from "../../enum";
import { useState } from "react";
import { TicketModel } from "../../models";

const { Text, Title } = Typography;

export const CreateTicketPage = () => {
	const [ticket, setTicket] = useState<TicketModel>();
	const { socket } = useSocket(ENV.SOCKET_URL);

	const handleNewTicket = () => {
		socket.emit(SocketEvents.CREATE_TICKET, null, (ticket: TicketModel) => {
			setTicket(ticket);
		});
	};

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
			{ticket ? (
				<Row className="u-mt-50">
					<Col span={14} offset={6} className="u-center">
						<Text>Your number</Text>
						<br />
						<Text type="success" className="u-font-55">
							{ticket?.numberTicket}
						</Text>
					</Col>
				</Row>
			) : null}
		</>
	)
}