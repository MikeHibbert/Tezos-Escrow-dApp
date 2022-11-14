import { PropsWithChildren, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Tournament, Contestant } from '../../models/tournament';

interface TournamentDetailProps {
    tournaments: Tournament[],
    setPageTitle: (title:string) => void,
    useBackLink: boolean,
    setUseBackLink: (useBackLink: boolean) => any,
    backLinkTitle: string,
    setBackLinkTitle: (backLinkTitle: string) => any,
}

const TournamentDetail: React.FC<PropsWithChildren<TournamentDetailProps>> = (props) => {
    const query = new URLSearchParams(useLocation().search);
    const tournamentId = query.get('id');
    
    const tournament: Tournament | undefined  = props.tournaments.find(tmt => tmt.id === tournamentId );

    const awardContestantHandler = (event: React.MouseEvent<HTMLElement>) => {
        alert("Not implemented");
    }

    useEffect(() => {
        props.setPageTitle(`${tournament?.title} Details`);
        props.setBackLinkTitle(props.backLinkTitle);
        props.setUseBackLink(true);
    },[]);    

    

    return <>
        <div className="card mb-4">
            <div className="card-body p-lg-4">
                <div className="row g-3">
                    <div className="col">
                    <h4 className="h5 mb-0">{tournament?.title}</h4>
                    <ul className="list-unstyled p-0 m-0">
                        <li className="list-item">
                            <span className="text-muted small">Starts: {tournament?.start.toDateString()}</span>
                        </li>
                        <li className="list-item">
                            <span className="text-muted small">Ends: {tournament?.end.toDateString()}</span>
                        </li>
                        <li className="list-item pt-2">
                            <span className="badge bg-success-soft rounded-pill">
                                <span className="bull bull-lg animate-pulse-success bg-success me-2"></span>
                                <span className="text-dark">{tournament?.status}</span>
                            </span>
                        </li>
                    </ul>
                    </div>
                    <div className="col-md-6 text-md-end">
                    <span className="d-block">Prize: {tournament?.prize} XTZ</span>
                    </div>
                </div>

                <h4 className="mb-0">
                    
                </h4>
                <ul className="list-unstyled m-0 p-0">
                
                    <li className="list-item">
                        <span className="text-muted small"></span>
                    </li>
                    <li className="list-item">
                        <span className="text-muted small"></span>
                    </li>

                    <li className="list-item pt-2">
                    
                    </li>
                </ul>
            </div>
        </div>

        <div className="card mt-2">

            <div className="card-body pt-4">

                <div className="table-responsive-md">

                <table className="table mb-0">
                    <thead>
                    <tr>
                        <th className="small text-muted pt-0">NAME.</th>
                        <th className="small text-muted pt-0" style={{"width":"100px"}}>WALLET ADDRESS</th>
                        <th className="small text-muted pt-0 text-end" style={{"width":"120px"}}>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody id="checkall-list">
                        {tournament?.contestants.map((contestant: Contestant) => (
                            <tr key={contestant.address}>                        
                                <td>{contestant.name}</td>
                                <td>{contestant.address}</td>
                                <td className="text-end">
                                    <span className="text-success fw-medium">actions go here</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                </div>

            </div>

            
            <div className="card-footer bg-gray-200 border-0 p-lg-4">

                <p className="small mb-0 text-primary fw-bold">
                <span id="rewardPointsSelectedSum">{tournament?.contestants.length}</span> contestants
                </p>

                <p className="fw-medium">
                Declare a winner!
                </p>

                <button onClick={awardContestantHandler} id="rewardBtnConvert" type="submit" className="btn btn-sm btn-primary px-3 py-2">
                Release prize from escrow
                </button>

            </div>
            
            
            </div>
    </>
}

export default TournamentDetail;