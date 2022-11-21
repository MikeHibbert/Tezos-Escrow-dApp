import { useState, useEffect } from "react";
import TournamentForm from "./form";
import {Contestant, Payout} from '../../models/tournament';

interface NewTournamentProps {
    setPageTitle: (title:string) => void,
    useBackLink: boolean,
    setUseBackLink: (useBackLink: boolean) => any,
    backLinkTitle: string,
    setBackLinkTitle: (backLinkTitle: string) => any
}

const NewTournament: React.FC<NewTournamentProps> = (props) => {
    const [id, setId] = useState("");
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [contestants, setContestants] = useState<Contestant[]>([]);
    const [status, setStatus] = useState<string>('Not Saved');
    const [start, setStart] = useState<Date>(new Date());
    const [end, setEnd] = useState<Date>(new Date());
    const [prize, setPrize] = useState<string>("0"); 
    const [payouts, setPayouts] = useState<Payout[]>([new Payout(0, 100)]);

    useEffect(() => {
        props.setPageTitle("Setup tournament escrow");
        props.setBackLinkTitle(props.backLinkTitle);
        props.setUseBackLink(true);
    },[]);  

    const blankForm = {
        id: "",
        type:"",
        title: "",
        contestants: [],
        winner: null,
        status: 'Not saved',
        start: new Date(),
        end: new Date(),
        prize: "0"
    }

    return <TournamentForm 
                id={id}
                type={type}
                title={title}
                contestants={contestants}
                winner={null}
                status={status}
                start={start}
                end={end}
                prize={prize}
                payouts={payouts}
                
                setType={setType}
                setTitle={setTitle} 
                setContestants={setContestants} 
                setStatus={setStatus} 
                setStart={setStart} 
                setPrize={setPrize} 
                setWinner={() => {}}
                setEnd={setEnd} 
                setPayouts={setPayouts} />;
}

export default NewTournament;