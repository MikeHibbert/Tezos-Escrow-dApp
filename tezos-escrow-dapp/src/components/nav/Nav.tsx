import { useEffect } from 'react';
import NavItem from './NavItem';

interface SideNavProps {
    collapsed: boolean, 
    setCollapsed: (collapsed: boolean) => void,
    location: { pathname: string },
    setUseBackLink: (useBackLink: boolean) => any,
    showConnectWallet: boolean,
    OnDisconnectWallet: () => any
}


export const SideNav: React.FC<SideNavProps> = (props) => {
    useEffect(() => {
        props.setCollapsed(true);
        props.setUseBackLink(false);
    }, [props.location.pathname]);

    let disconnectWalletLink = null;
    if(!props.showConnectWallet) {
        disconnectWalletLink = <>
            <li className="nav-item border-top my-3"></li> 
            <li className="nav-item">
                <a className="nav-link px-0 d-flex align-items-center" onClick={props.OnDisconnectWallet}>
                    <i className="fi fi-power float-start"></i>
                    <span>Disconnect Wallet</span>
                </a>
            </li>
        </>;
    }

    return <>
        <div className="col-12 col-lg-3">
            <nav className="sticky-kit nav-deep nav-deep-light js-ajaxified js-stickified">

                <div className="card">
                    <div className="card-body p-0 p-md-4">
                        <button className={props.collapsed ? "clearfix btn btn-toggle btn-sm w-100 text-align-left shadow-md border rounded d-block d-lg-none js-togglified" : "clearfix btn btn-toggle btn-sm w-100 text-align-left shadow-md border rounded d-block d-lg-none js-togglified active"} 
                                onClick={() => props.setCollapsed(!props.collapsed)}
                                data-bs-target="#nav_responsive" data-toggle-container-class="d-none d-sm-block bg-white shadow-md border animate-fadein rounded p-3" >
                            <span className="group-icon px-2 py-2 float-start">
                                <i className="fi fi-bars-2"></i>
                                <i className="fi fi-close"></i>
                            </span>

                            <span className="h5 py-2 m-0 float-start">
                                Account Menu
                            </span>
                        </button>

                        <ul id="nav_responsive" className={props.collapsed ? "nav flex-column d-none d-lg-block mt-1 mt-lg-0" : "nav flex-column d-lg-block mt-1 mt-lg-0 d-sm-block bg-white shadow-md border animate-fadein rounded p-3"}>
                            <NavItem to='/' title="My Tournaments" pathname={props.location.pathname} >
                                    <svg className="text-gray-600 float-start" width="18px" height="18px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                    <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"></path>
                                    <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"></path>
                                    </svg>
                            </NavItem>
                            <NavItem to='/tournaments' title="Past Tournaments" pathname={props.location.pathname} >
                                    <svg className="text-gray-600 float-start" width="18px" height="18px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
                                    <path fillRule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
                                    </svg>
                            </NavItem>

                            {disconnectWalletLink}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>;
}

interface TopNavProps {
    OnConnectWallet: () => any,
    showConnectWallet: boolean,
    userBalance: string
}

export const TopNav: React.FC<TopNavProps> = (props) => {
    
    let balanceOrConnect = <a onClick={props.OnConnectWallet} aria-label="Account Options" id="dropdownAccountOptions" className="btn btn-sm btn-primary js-stoppropag" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
        <span className="group-icon float-start">
            <i className="fi fi-user-male"></i>
            <i className="fi fi-close"></i>
        </span>
        <span>Connect Wallet</span>
    </a>;

    if(!props.showConnectWallet) {
        balanceOrConnect = <span className="group-icon float-start">{props.userBalance} XTZ</span>;
    }

    return <>
        <nav className="navbar navbar-expand-lg navbar-light justify-content-lg-between justify-content-md-inherit">
            <div className="align-items-start">
                <a className="navbar-brand" href="/">
                    <img src="/images/logo/logo_dark.svg" height="50"  />
                </a>
                <div className="collapse navbar-collapse navbar-animate-fadein" id="navbarMainNav">
                    <div className="navbar-xs d-none">
                        <a className="navbar-brand" href="/">
                            <img src="/images/logo/logo_dark.svg" height="50"  />
                        </a>
                    </div>
                </div>
            </div>
            <ul className="list-inline list-unstyled mb-0 d-flex align-items-end">

                <li className="list-inline-item mx-1 dropdown">
                    {balanceOrConnect}
                </li>
            </ul>
        </nav>
    </>;
}
