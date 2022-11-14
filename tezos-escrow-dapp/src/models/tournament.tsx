import { Guid } from "../helpers/guid";

export class Contestant {
    name: string;
    address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}

export class Tournament {
    id: string;
    title: string;
    contestants: Contestant[];
    winner: Contestant;
    status: string;
    start: Date;
    end: Date;
    prize: number;

    constructor(title: string, contestants: Contestant[], prize: number) {
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
