import { Guid } from "../helpers/guid";

export const SINGLE_PAYOUT = "Single Payout";
export const MULTI_PAYOUT = "Multi User Payout";

export class Tournament {
    id: string;
    type: string;
    title: string;
    contestants: Contestant[];
    winner: Contestant;
    status: string;
    start: Date;
    end: Date;
    prize: number;

    constructor(title: string, contestants: Contestant[], prize: number) {
        this.type = SINGLE_PAYOUT; // can also be "MULTI_PAYOUT" for more than one user payout from pot
        this.title = title;
        this.contestants = contestants;
        this.winner = new Contestant("Not assigned", "no address");
        this.id = Guid.newGuid();
        this.status = "Started";
        this.start = new Date();
        this.end = new Date();
        this.prize = prize;
    }
}

export class Contestant {
    id: string;
    name: string;
    address: string;

    constructor(name: string, address: string) {
        this.id = Guid.newGuid();
        this.name = name;
        this.address = address;
    }
}