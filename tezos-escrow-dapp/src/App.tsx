import {useState} from 'react';
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom';
import TournamentsList from './containers/tournaments/Tournaments';
import { Contestant, Tournament } from './models/tournament';
import TournamentDetail from './components/tournament/detail';


function App() {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [pageTitle, setPageTitle] = useState<string>('TournaBond');
  const location = useLocation(); 

  const [Tezos, setTezos] = useState<TezosToolkit>(
    new TezosToolkit("https://ghostnet.ecadinfra.com")
  );

  const wallet = new BeaconWallet({ name: "Beacon Wallet for TournaBond" });


  Tezos.setWalletProvider(wallet);

  const OnSetCollapsedHandler = (collapsed: boolean) => {
    setCollapsed(collapsed);
  }

  const OnConnectWallet = () => {
      alert("OnConnectWallet: Not implemented!")  
  }

  const contestants = [
    new Contestant("Timmy McBriffle", "0x100000000000000000000000000"),
    new Contestant("Jammy Piffle", "0x200000000000000000000000000"),
    new Contestant("Whosda Molly", "0x300000000000000000000000000"),
    new Contestant("Gimma Chalkstick", "0x400000000000000000000000000")
  ];

  const tournaments = [
    new Tournament("Tournament 1", contestants),
    new Tournament("Tournament 2", contestants),
    new Tournament("Tournament 3", contestants),
    new Tournament("Tournament 4", contestants)
  ]

  const routes =  <Routes>
    <Route path='/' element={<TournamentsList tournaments={tournaments} setPageTitle={setPageTitle} />} />
    <Route path='/tournament' element={<TournamentDetail tournaments={tournaments} setPageTitle={setPageTitle} />} />
  </Routes>;

  return (
    <Layout 
      collapsed={collapsed} 
      setCollapsed={OnSetCollapsedHandler} 
      pageTitle={pageTitle} 
      location={location}
      OnConnectWallet={OnConnectWallet}>
        {routes}
      </Layout>
  );
}

export default App;
