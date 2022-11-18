import React from "react";

interface ContestantInputProps {
    id: string;
    name: string;
    address: string;
    setName: (name: string) => void;
    setAddress: (address: string) => void;
    OnRemoveContestant: (id: string) => void;
}

const ContestantInput: React.FC<ContestantInputProps> = (props) => {
    const OnChangeName = (event: React.FormEvent<HTMLInputElement>) => {
        props.setName(event.currentTarget.value);
    }

    const OnChangeAddress = (event: React.FormEvent<HTMLInputElement>) => {
        props.setAddress(event.currentTarget.value);
    }


    return <div className="input-group">
            <input type="text" name="name" placeholder="Name" value={props.name} onChange={OnChangeName} className="form-control form-control-clean" />
            <input type="text" name="address" placeholder="Wallet Address" value={props.address} onChange={OnChangeAddress} className="form-control form-control-clean" />
            <button onClick={() => props.OnRemoveContestant(props.id)} className="btn btn-default">X</button>
        </div>;
}

export default ContestantInput;