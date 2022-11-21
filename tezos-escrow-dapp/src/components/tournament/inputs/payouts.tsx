import { Payout } from "../../../models/tournament";
import PayoutInput from "./payout";

interface PayoutsInputElementProps {
    payouts: Payout[];
    prize: string;
    OnChangePayouts: (payouts: Payout[]) => void;
}

const PayoutsInputElement: React.FC<PayoutsInputElementProps> = (props) => {
    const OnAddNewPayout = () => {
        const newPayouts: Payout[] = [...props.payouts, new Payout(parseFloat(props.prize), 100)];
        props.OnChangePayouts(newPayouts);
    }

    const OnRemovePayout = (id: string) => {

    }

    const OnPayoutChange = (payout: Payout) => {
        const newPayouts: Payout[] = [...props.payouts];
        var found = newPayouts.find(p => p.id === payout.id);

        if(found) {
            found.amount = payout.amount;
            found.percentage = payout.percentage;

            props.OnChangePayouts(newPayouts);
        }
        
    }

    return <>
        <div className="mb-4">
            <a onClick={OnAddNewPayout} className="btn btn-sm btn-primary float-end">
                <i className="fi fi-plus"></i> Add Payout Option
            </a>
            <h1 className="h4 mb-1 fw-bold">Payouts ({props.payouts.length})</h1>
        </div>
        {props.payouts.map(p => {
          return <PayoutInput 
                    key={p.id} 
                    id={p.id}
                    amount={p.amount} 
                    percentage={p.percentage} 
                    prize={props.prize} 
                    setPayout={OnPayoutChange} 
                    OnRemovePayout={OnRemovePayout}/>;  
        })}
    </>
}

export default PayoutsInputElement;

