import { Server } from "socket.io";
import { SocketEvents } from "./enum";
import { TicketListModel } from "./models";

export class Sockets {

	private readonly io: Server;
	private readonly ticketList = new TicketListModel();

	constructor(io: Server) {
		this.io = io;

		this.socketEvents();
	}

	socketEvents() {
		this.io.on('connection', (socket) => {
			console.log('Client connected');			

			socket.on(SocketEvents.CREATE_TICKET, (_, cb) => {
				const ticket = this.ticketList.createTicket();
				cb(ticket);
			});

		});
	}
}
