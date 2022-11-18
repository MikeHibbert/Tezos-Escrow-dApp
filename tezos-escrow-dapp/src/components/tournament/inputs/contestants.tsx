import { Contestant } from "../../../models/tournament";
import ContestantInput from "./contestant";

interface ContestantsFormElementProps {
    setContestants: (contestants: Contestant[]) => void;
    contestants: Contestant[];
}

const ContestanstFormElement: React.FC<ContestantsFormElementProps> = (props) => {
    const setName = (id: string, name: string) => {
        let contestants = [...props.contestants];
        let contestantToUpdate: Contestant | undefined = contestants.find(c => c.id === id);
        if(contestantToUpdate) {
            contestantToUpdate.name = name;
            props.setContestants(contestants);
        }
    };

    const setAddress = (id: string, address: string) => {
        let contestants = [...props.contestants];
        let contestantToUpdate: Contestant | undefined = props.contestants.find(c => c.id === id);
        if(contestantToUpdate) {
            contestantToUpdate.address = address;
            props.setContestants(contestants);
        }
    }

    const OnAddNewContestant = () => {
        const newContestants = [...props.contestants, new Contestant("", "")];
        props.setContestants(newContestants);
    }

    const OnRemoveContestant = (id: string) => {
        let newContestants = props.contestants.filter(c => c.id !== id);
        if(newContestants.length == 0) {
            newContestants = [new Contestant("", "")];
        }
        props.setContestants(newContestants);
    }

    return <>
        <div className="mb-4">
            <a onClick={OnAddNewContestant} className="btn btn-sm btn-primary float-end">
                <i className="fi fi-plus"></i> Add Participant
            </a>
            <h1 className="h4 mb-1 fw-bold">Participants ({props.contestants.length})</h1>
        </div>
        {props.contestants.map(c => {
            return <ContestantInput 
                        key={c.id}
                        id={c.id}
                        name={c.name} 
                        address={c.address}
                        setName={(name: string) => setName(c.id, name)}
                        setAddress={(address: string) => setAddress(c.id, address)}
                        OnRemoveContestant={OnRemoveContestant}
                    />
        })}
    </>;
}

export default ContestanstFormElement;