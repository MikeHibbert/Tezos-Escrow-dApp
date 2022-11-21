import { ChangeEvent, useState } from 'react';
import {Contestant, Payout, SINGLE_PAYOUT, MULTI_PAYOUT} from '../../models/tournament';
import ContestanstFormElement from './inputs/contestants';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, FocusedInputShape } from 'react-dates';
import moment from 'moment';
import { title } from 'process';
import PayoutsInputElement from './inputs/payouts';

interface TournamentFormProps {
    id: string;
    type: string;
    title: string;
    contestants: Contestant[] | null;
    winner: Contestant | null;
    status: string;
    start: Date;
    end: Date | null;
    prize: string;
    payouts: Payout[];

    setType: (type: string) => void;
    setTitle: (title: string) => void;
    setContestants: (contestants: Contestant[]) => void;
    setWinner: (winner: Contestant) => void | null;
    setStatus: (status: string) => void;
    setStart: (start: Date) => void;
    setEnd: (end: Date) => void | null;
    setPrize: (amount: string) => void;
    setPayouts: (payouts: Payout[]) => void;
}

const TournamentForm: React.FC<TournamentFormProps> = (props) => {
    const [contestants, setContestants] = useState<Contestant[]>([new Contestant("", "")]);
    const [datepickerFocused, setDatepickerFocused] = useState<FocusedInputShape | null>(null);

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

    const setStart = (date: moment.Moment | null) => {
        if(date) props.setStart(date.toDate());
    }

    const setEnd = (date: moment.Moment | null) => {
        if(date) props.setEnd(date.toDate());
    }

    interface IHandleDatesChange {
        startDate: moment.Moment | null,
        endDate: moment.Moment | null,
    }
    
    const OnChangeDates = ({startDate, endDate}: IHandleDatesChange) => {
        setStart(startDate);
        setEnd(endDate);
    }

    const OnChangePrize = (event: React.FormEvent<HTMLInputElement>) => {
        props.setPrize(event.currentTarget.value);
        const prize = Number(event.currentTarget.value);
        recalculatePayouts(prize);
    }

    const recalculatePayouts = (prize: number) => {
        props.payouts.map(p => {
            p.amount = prize * (p.percentage / 100);
        })
    }

    const OnChangePayouts = (payouts: Payout[]) => {
        props.setPayouts(payouts);
        recalculatePayouts(Number(props.prize));        
    }


    let multi_payout_options = null;
    if(props.type == MULTI_PAYOUT) {
        multi_payout_options = <div className='form-floating mb-3'>
            <PayoutsInputElement
                prize={props.prize}
                payouts={props.payouts}
                OnChangePayouts={OnChangePayouts}
            />
        </div>
    }
    
    return <div className="card mb-3">
                <div className="card-body">
                    <div><h1 className="h4 mb-1 fw-bold mb-4">Tournament Details</h1></div>
                    <div className="form-floating mb-3">
                        <input onChange={OnChangeTitle} placeholder="Title" value={props.title} id="title" name="title" type="text" className="form-control" />
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input onChange={OnChangePrize} value={props.prize} pattern="^-?[0-9]\d*\.?\d*$" placeholder="Prize in XTZ" id="title" name="title" type="number" className="form-control" />
                        <label htmlFor="title">Prize in XTZ</label>
                    </div>
                    <div className='form-floating mb-4'>
                        <DateRangePicker 
                            startDate={moment(props.start)}
                            startDateId="unique_start_date_id"
                            endDate={moment(props.end)}
                            endDateId="unique_end_date_id"
                            onDatesChange={OnChangeDates}
                            focusedInput={datepickerFocused}
                            onFocusChange={focusedInput => setDatepickerFocused(focusedInput)}
                        />
                    </div>
                    <div className='form-floating mb-3'>
                        <select onChange={OnChangeType} className="form-select form-select-sm" aria-label="Default select example">
                            <option value="">Choose tournament payout. (Single or Multi)</option>
                            <option value={SINGLE_PAYOUT}>{SINGLE_PAYOUT}</option>
                            <option value={MULTI_PAYOUT}>{MULTI_PAYOUT}</option>
                        </select>
                        <label htmlFor="floatingSelect">Tournament payout</label>
                    </div>
                    <div className='form-floating mb-4'>
                        {multi_payout_options}
                    </div>
                    
                    <div className='form-floating mb-3'>
                        <ContestanstFormElement 
                            contestants={contestants}
                            setContestants={setContestants}
                        />
                    </div>
                    
                    
                </div>
            </div>;
}

export default TournamentForm;