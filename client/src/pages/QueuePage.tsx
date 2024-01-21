import { Col, Divider, List, Row, Typography } from "antd";

interface Ticket {
	ticketNo: number;
	escritorio: number;
	agente: string;
}

const data: Ticket[] = [
	{
		ticketNo: 33,
		escritorio: 3,
		agente: 'Jotaro Kujo'
	},
	{
		ticketNo: 34,
		escritorio: 4,
		agente: 'Jonathan Joestar'
	},
	{
		ticketNo: 35,
		escritorio: 5,
		agente: 'Joseph Joestar'
	},
	{
		ticketNo: 36,
		escritorio: 3,
		agente: 'Jotaro Kujo'
	},
	{
		ticketNo: 37,
		escritorio: 3,
		agente: 'Jotaro Kujo'
	},
	{
		ticketNo: 38,
		escritorio: 2,
		agente: 'Dio Brando'
	},
	{
		ticketNo: 39,
		escritorio: 5,
		agente: 'Joseph Joestar'
	},
];

export const QueuePage = () => {

	const renderItem = (item: Ticket) => (
		<List.Item>
			<List.Item.Meta
				title={`Ticket No. ${item.ticketNo}`}
				description={
					<>
						<Typography.Text type="secondary">Agent: </Typography.Text>
						<Typography.Text>{item.agente}</Typography.Text>

						<Typography.Text type="secondary" className="u-ml-10">On desk: </Typography.Text>
						<Typography.Text>{item.escritorio}</Typography.Text>
					</>
				}
			/>
		</List.Item>
	)

	const renderHistoryItem = (item: Ticket) => (
		<List.Item>
			<List.Item.Meta
				title={`Ticket No. ${item.ticketNo}`}
				description={
					<>
						<Typography.Text type="secondary" className="u-ml-10">Agent: </Typography.Text>
						<Typography.Text>{item.agente}</Typography.Text>

						<Typography.Text type="secondary">On desk: </Typography.Text>
						<Typography.Text>{item.escritorio}</Typography.Text>
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
						dataSource={data.slice(0, 3)}
						renderItem={renderItem}
					/>
				</Col>
				<Col span={12}>
					<Divider>History</Divider>
					<List
						dataSource={data.slice(3)}
						renderItem={renderHistoryItem}
					/>
				</Col>
			</Row>
		</>
	)
}