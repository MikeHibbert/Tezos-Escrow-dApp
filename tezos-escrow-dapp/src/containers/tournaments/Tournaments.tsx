import { PropsWithChildren, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TournamentListItem from '../../components/tournament/tournament';
import {Tournament} from '../../models/tournament';

interface TournamentsProps {
    tournaments: Tournament[],
    setPageTitle: (title:string) => void,
}

const TournamentsList: React.FC<PropsWithChildren<TournamentsProps>> = (props) => {
    useEffect(() => {
        props.setPageTitle('My Tournaments');
    }, []);
    
    
    return <>
            <div className="card mb-3">
                <div className="card-body">
                    <div className='row g2'>
                        <div className='col'>
                            <div className="dropdown">
                                
                                <a id="dropdownMenuFilter" href="#" className="text-dark js-stoppropag" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>All orders</span>
                                    <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </a>

                                <ul className="dropdown-menu shadow-lg rounded-xl" aria-labelledby="dropdownMenuFilter" >
                                    <li><a className="dropdown-item active" href="#">All orders</a></li>
                                    <li><a className="dropdown-item" href="#">Last 3 months</a></li>
                                    <li><a className="dropdown-item" href="#">Last 6 months</a></li>
                                    <li><a className="dropdown-item" href="#">Last 12 months</a></li>
                                </ul>
                                
                            </div>    
                        </div>
                        <div className='col text-end'>
                            <span className='flex-none'>
                                <Link to="/new-tournament" className="js-ajax-modal flex-none text-decoration-none border border-primary rounded px-2 py-1 small js-modalified" data-href="_ajax/modal_address.html" data-ajax-modal-size="modal-lg" data-ajax-modal-centered="true" data-ajax-modal-backdrop="static">+ Tournament</Link>
                            </span>
                        </div>
                    </div>        
                </div>
            </div>
        
            {props.tournaments.map((t: Tournament, index: number) => (
                <TournamentListItem key={t.id + index} tournament={t} />
            ))}

            <nav aria-label="pagination" className="mt-5">
                <ul className="pagination pagination-pill justify-content-end justify-content-center justify-content-md-end">

                    <li className="page-item disabled">
                        <a className="page-link" href="#">Previous</a>
                    </li>
                    
                    <li className="page-item active">
                        <a className="page-link" href="#">1 <span className="visually-hidden">(current)</span></a>
                    </li>
                    
                    <li className="page-item" aria-current="page">
                        <a className="page-link" href="#">2</a>
                    </li>
                    
                    <li className="page-item">
                        <a className="page-link" href="#">3</a>
                    </li>
                    
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>

                </ul>
            </nav>
        
    </>;
}

export default TournamentsList;