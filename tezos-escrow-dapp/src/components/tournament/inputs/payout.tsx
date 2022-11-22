import { Payout } from "../../../models/tournament";

interface PayoutInputProps {
    id: string;
    amount: number;
    percentage: number;
    prize: string;
    setPayout: (payout: Payout) => void;
    OnRemovePayout: (id: string) => void;
}

const PayoutInput: React.FC<PayoutInputProps> = (props) => {

    const OnChangePercentage = (event: React.FormEvent<HTMLInputElement>) => {
            const percentage = Number(event.currentTarget.value);
            const prize = Number(props.prize);
            const amount = prize * (percentage / 100);
            let newPayout = new Payout(amount, percentage);
            newPayout.id = props.id;

            props.setPayout(newPayout);
    }

    return <div className="input-group">
        <input type="number" name="amount" disabled={true} placeholder="Amount" value={props.amount} className="form-control form-control-clean" />
        <input type="number" name="percentage" placeholder="Percentage" value={props.percentage} onChange={OnChangePercentage} className="form-control form-control-clean" />
        <button onClick={() => props.OnRemovePayout(props.id)} className="btn btn-default">X</button>
    </div>;
}

export default PayoutInput;