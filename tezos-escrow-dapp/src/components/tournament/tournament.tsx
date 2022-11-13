import { Tournament } from "../../models/tournament";
import { Link, useNavigate } from "react-router-dom";

interface TournamentProps {
    tournament: Tournament
}

const TournamentListItem: React.FC<TournamentProps> = (props) => {
    const detail_url = `/tournament?id=${props.tournament.id}`;

    return <>
        <Link to={detail_url} className="card mb-3 link-normal">
            <div className="card-body p-lg-4">
            <div className="row">

                <div className="col">
                <h5 className="fw-bold">{props.tournament.title}</h5>
                <p className="mb-0 text-dark small">{props.tournament.start.toDateString()} | Total: $365.00</p>
                </div>
                
                <div className="col-12 border-top border-light my-2 d-lg-none"></div>

                <div className="col-lg-4 text-lg-end text-dark">
                    <span className="d-block fw-medium text-info">Pending</span>
                <span className="d-block small">credit card</span>
                </div>

            </div>
            </div>
        </Link>
    </>;
}

export default TournamentListItem;