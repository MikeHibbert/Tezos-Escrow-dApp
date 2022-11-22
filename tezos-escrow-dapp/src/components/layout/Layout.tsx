import { BeaconWallet } from '@taquito/beacon-wallet';
import { PropsWithChildren } from 'react';
import BackLink from '../nav/BackLink';
import {SideNav, TopNav} from "../nav/Nav";

type LayoutProps = {
    collapsed: boolean,
    pageTitle: string,
    setCollapsed: (collapsed: boolean) => any,
    OnConnectWallet: () => any,
    OnDisconnectWallet: () => any,
    location: {pathname: string},
    useBackLink: boolean,
    setUseBackLink: (useBackLink: boolean) => any,
    backLinkTitle: string,
    setBackLinkTitle: (backLinkTitle: string) => any,
    userBalance: string,
    userAddress: string,
    showConnectWallet: boolean
}


const Layout: React.FC<PropsWithChildren<LayoutProps>> = (props) => {
    return <>
        <header id="header" className="shadow-xs">	
            <div className="container position-relative">
                <TopNav OnConnectWallet={props.OnConnectWallet} showConnectWallet={props.showConnectWallet} userBalance={props.userBalance}/>
            </div>
        </header>
        <div className="container py-5">
            <h1 className="h2 fw-bold">{props.pageTitle}</h1>
            <BackLink 
                useBackLink={props.useBackLink} 
                backLinkTitle={props.backLinkTitle} 
                setBackLinkTitle={props.setBackLinkTitle}
                setUseBackLink={props.setUseBackLink}
                />
        </div>
        <div className="container pb-6">
            <div className="row g-4">
                <SideNav 
                    collapsed={props.collapsed} 
                    setCollapsed={props.setCollapsed} 
                    location={props.location}
                    setUseBackLink={props.setUseBackLink}
                    showConnectWallet={props.showConnectWallet}
                    OnDisconnectWallet={props.OnDisconnectWallet}                    
                />
                <div className="col-12 col-lg-9">
                    {props.children}
                </div>
            </div>

        </div>
    </>;
}

export default Layout;