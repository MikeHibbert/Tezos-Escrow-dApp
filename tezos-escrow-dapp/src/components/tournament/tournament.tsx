import Tournament from "../../models/tournament";

interface TournamentProps {
    tournament: Tournament
}


const TournamentListItem: React.FC<TournamentProps> = (props) => {
    return <a href="account-order-detail.html" className="card mb-3 link-normal">
                <div className="card-body p-lg-4">
                <div className="row">

                    <div className="col">
                    <h5 className="fw-bold">Order no. 20211199</h5>
                    <p className="mb-0 text-dark small">Date: 27 Nov 2022, 01:24 | Total: $365.00</p>
                    </div>
                    
                    <div className="col-12 border-top border-light my-2 d-lg-none"></div>

                    <div className="col-lg-4 text-lg-end text-dark">
                        <span className="d-block fw-medium text-info">Pending</span>
                    <span className="d-block small">credit card</span>
                    </div>

                </div>
                </div>
            </a>;
}

export default TournamentListItem;