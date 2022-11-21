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
            const percentage = parseFloat(event.currentTarget.value);
            const prize = parseFloat(props.prize);
            const amount = prize * (percentage / 100);
            let newPayout = new Payout(amount, percentage);
            newPayout.id = props.id;

            props.setPayout(newPayout);
    }

    return <div className="input-group">
        <input type="text" name="amount" disabled={true} placeholder="amount" value={props.amount} className="form-control form-control-clean" />
        <input type="text" name="address" placeholder="Wallet Address" value={props.percentage} onChange={OnChangePercentage} className="form-control form-control-clean" />
        <button onClick={() => props.OnRemovePayout(props.id)} className="btn btn-default">X</button>
    </div>;
}

export default PayoutInput;