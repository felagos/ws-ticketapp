import { Col, Divider, List, Row, Typography } from "antd";
import { useSocket } from "../../hooks";
import { useEffect, useState } from "react";
import { SocketEvents } from "../../enum";
import { TicketModel } from "../../models";

export const QueuePage = () => {

	const { socket } = useSocket();
	const [tickets, setTickets] = useState<TicketModel[]>([]);

	useEffect(() => {
		socket.on(SocketEvents.TICKET_ASSIGNED, (tickets: TicketModel[]) => {
			setTickets(tickets);
		});

		return () => {
			socket.off(SocketEvents.TICKET_ASSIGNED);
		}

	}, [socket])

	const renderItem = (item: TicketModel) => (
		<List.Item>
			<List.Item.Meta
				title={`Ticket No. ${item.numberTicket}`}
				description={
					<>
						<Typography.Text type="secondary">Agent: </Typography.Text>
						<Typography.Text>{item.agent}</Typography.Text>

						<Typography.Text type="secondary" className="u-ml-10">On desk: </Typography.Text>
						<Typography.Text>{item.desktop}</Typography.Text>
					</>
				}
			/>
		</List.Item>
	)

	const renderHistoryItem = (item: TicketModel) => (
		<List.Item>
			<List.Item.Meta
				title={`Ticket No. ${item.numberTicket}`}
				description={
					<>
						<Typography.Text type="secondary" className="u-ml-10">Agent: </Typography.Text>
						<Typography.Text>{item.agent}</Typography.Text>

						<Typography.Text type="secondary">On desk: </Typography.Text>
						<Typography.Text>{item.desktop}</Typography.Text>
					</>
				}
			/>
		</List.Item>
	)

	return (
		<>
			<Typography.Title level={1}>Attending client</Typography.Title>
			<Row>
				<Col span={12}>
					<List
						dataSource={tickets.slice(0, 3)}
						renderItem={renderItem}
					/>
				</Col>
				<Col span={12}>
					<Divider>History</Divider>
					<List
						dataSource={tickets.slice(3)}
						renderItem={renderHistoryItem}
					/>
				</Col>
			</Row>
		</>
	)
}