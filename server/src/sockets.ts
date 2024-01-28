import { Server } from "socket.io";
import { SocketEvents } from "./enum";
import { TicketListModel, UserModel } from "./models";

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

			socket.on(SocketEvents.CREATE_TICKET, (_, cb: Function) => {
				const ticket = this.ticketList.createTicket();
				cb(ticket);
			});

			socket.on(SocketEvents.NEXT_TICKET, (user: UserModel, cb: Function) => {
				const ticket = this.ticketList.attendTicket(user.agent, user.desktop);
				cb(ticket);
			});

		});
	}
}
