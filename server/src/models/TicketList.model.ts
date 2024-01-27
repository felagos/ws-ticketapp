import { TicketModel } from "./Ticket.model";

export class TicketListModel {

	constructor(
		private lastNumber: number = 0,
		private readonly pendingTickets: TicketModel[] = [],
		private readonly attendedTickets: TicketModel[] = []) {}

		get nextNumber() {
			this.lastNumber++;
			return this.lastNumber;
		}

		getLastTickets(limit: number = 13) {
			return this.attendedTickets.slice(0, limit);
		}

		createTicket() {
			const ticket = new TicketModel(this.nextNumber);
			this.pendingTickets.push(ticket);

			return ticket;
		}

		attendTicket(agent: string, desktop: number) {
			if (this.pendingTickets.length === 0) {
				return null;
			}

			const ticket = this.pendingTickets.shift();
			const newTicket = new TicketModel(ticket!.getNumberTicket(), desktop, agent);

			this.attendedTickets.unshift(newTicket);

			return newTicket;

		}

}