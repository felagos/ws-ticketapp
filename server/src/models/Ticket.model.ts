import { v4 as uuid } from 'uuid'

export class TicketModel {

	private readonly id = uuid();

	constructor(
		private readonly numberTicket: number,
		private readonly desktop?: number,
		private readonly agent?: string) { }

	getId() {
		return this.id;
	}

	getNumberTicket() {
		return this.numberTicket;
	}

	getDesktop() {
		return this.desktop;
	}

	getAgent() {
		return this.agent;
	}

}