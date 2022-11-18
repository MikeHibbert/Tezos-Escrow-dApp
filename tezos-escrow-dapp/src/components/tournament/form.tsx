import { ChangeEvent, useState } from 'react';
import {Contestant, SINGLE_PAYOUT, MULTI_PAYOUT} from '../../models/tournament';
import ContestanstFormElement from './inputs/contestants';
import { DateRangePicker } from 'react-dates';
import Moment from 'react-moment';

interface TournamentFormProps {
    id: string;
    type: string;
    title: string;
    contestants: Contestant[] | null;
    winner: Contestant | null;
    status: string;
    start: Date;
    end: Date | null;
    prize: number;

    setType: (type: string) => void;
    setTitle: (title: string) => void;
    setContestants: (contestants: Contestant[]) => void;
    setWinner: (winner: Contestant) => void | null;
    setStatus: (status: string) => void;
    setStart: (start: Date) => void;
    setEnd: (end: Date) => void | null;
    setPrize: (amount: number) => void;
}

const TournamentForm: React.FC<TournamentFormProps> = (props) => {
    const [contestants, setContestants] = useState<Contestant[]>([new Contestant("", "")]);

    const OnChangeType = (event: ChangeEvent<{value: string}>) => {
        props.setType(event.currentTarget.value);
    }

    const OnChangeTitle = (event: React.FormEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value);
    }

    const OnChangeContestants = (contestant: Contestant) => {
        let newContestants: Contestant[] = [];
        let contestantsFound = contestants.find(c => c.address === contestant.address);
        if(!contestantsFound) {
            newContestants = [...contestants, contestant];
        } else {
            contestantsFound.name = contestant.name;
            contestantsFound.address = contestant.address;
        }

        setContestants(newContestants);
        props.setContestants(newContestants);
    }

    const OnChangeWinner = (winner: Contestant) => {
        props.setWinner(winner);
    }

    const OnChangeStatus = (event: React.FormEvent<HTMLInputElement>) => {
        props.setStatus(event.currentTarget.value);
    }

    const OnChangeStart = (event: React.FormEvent<HTMLInputElement>) => {
        props.setStart(new Date(event.currentTarget.value));
    }

    const OnChangeEnd = (event: React.FormEvent<HTMLInputElement>) => {
        props.setEnd(new Date(event.currentTarget.value));
    }

    const OnChangePrize = (event: ChangeEvent<{value: number}>) => {

        props.setPrize(event.currentTarget.value);
    }


    if(props.type == MULTI_PAYOUT) {

    }
    
    return <div className="card mb-3">
                <div className="card-body">
                    <div><h1 className="h4 mb-1 fw-bold mb-4">Tournament Details</h1></div>
                    <div className="form-floating mb-3">
                        <input placeholder="Title" id="title" name="title" type="text" className="form-control" />
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input placeholder="Prize in XTZ" id="title" name="title" type="number" className="form-control" />
                        <label htmlFor="title">Prize in XTZ</label>
                    </div>
                    {/* <div className='form-floating mb-4'>
                        <DateRangePicker 
                            startDate={<Moment>props.start</Moment>}/>
                    </div> */}
                    <div className='form-floating mb-4'>
                        <select onChange={OnChangeType} className="form-select form-select-sm" aria-label="Default select example">
                            <option value="">Choose tournament payout</option>
                            <option value={SINGLE_PAYOUT}>{SINGLE_PAYOUT}</option>
                            <option value={MULTI_PAYOUT}>{MULTI_PAYOUT}</option>
                        </select>
                        <label htmlFor="floatingSelect">Tournament payout</label>
                    </div>
                    
                    <div className='form-floating mb-3'>
                        <ContestanstFormElement 
                            contestants={contestants}
                            setContestants={setContestants}
                        />
                    </div>
                    <div className='form-floating mb-3'>

                    </div>
                    
                </div>
            </div>;
}

export default TournamentForm;