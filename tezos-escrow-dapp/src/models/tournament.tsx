class Tournament {
    id: string;
    title: string;
    contestants: string[];
    winner: string;
    status: string;
    start: Date;
    end: Date;

    constructor(title: string, contestants: string[]) {
        this.title = title;
        this.contestants = contestants;
        this.winner = "";
        this.id = new Date().toISOString();
        this.status = "Started";
        this.start = new Date();
        this.end = new Date();
    }
}

export default Tournament;