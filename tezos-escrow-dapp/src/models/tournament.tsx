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

    constructor(title: string, contestants: Contestant[]) {
        this.title = title;
        this.contestants = contestants;
        this.winner = new Contestant("Not assigned", "no address");
        this.id = new Date().toISOString();
        this.status = "Started";
        this.start = new Date();
        this.end = new Date();
    }
}
