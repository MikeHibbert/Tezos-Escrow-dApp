import { Contestant } from "../../models/tournament";

interface ContestantListItemProps {
    contestant: Contestant;
}

const ContestantItem: React.FC<ContestantListItemProps> = (props) => {
    return <h1>{props.contestant.name}</h1>;
}

export default ContestantItem;