import { PropsWithChildren, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Tournament } from '../../models/tournament';

interface TournamentDetailProps {
    tournaments: Tournament[],
    setPageTitle: (title:string) => void,
}

const TournamentDetail: React.FC<PropsWithChildren<TournamentDetailProps>> = (props) => {
    const query = new URLSearchParams(useLocation().search);
    const tournamentId = query.get('id');
    
    const tournament: Tournament | undefined  = props.tournaments.find(t => t.id === tournamentId);

    useEffect(() => {
        props.setPageTitle(`${tournament?.title}`);
    },[]);    

    

    return <>
        <h1>{tournament?.title}</h1>
    </>
}

export default TournamentDetail;