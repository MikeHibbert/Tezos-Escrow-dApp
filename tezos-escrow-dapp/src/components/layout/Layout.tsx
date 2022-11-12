import { PropsWithChildren } from 'react';
import {SideNav, TopNav} from "../nav/Nav";

type LayoutProps = {
    collapsed: boolean,
    pageTitle: string,
    setCollapsed: (collapsed: boolean) => any
}


const Layout: React.FC<PropsWithChildren<LayoutProps>> = (props) => {
    return <>
        <header id="header" className="shadow-xs">	
            <div className="container position-relative">
                <TopNav />
            </div>
        </header>
        <div className="container py-5">
            <h1 className="h2 fw-bold">{props.pageTitle}</h1>
        </div>
        <div className="container pb-6">
            <div className="row g-4">
                <SideNav collapsed={props.collapsed} setCollapsed={props.setCollapsed} />
                <div className="col-12 col-lg-9">
                    {props.children}
                </div>
            </div>

        </div>
    </>;
}

export default Layout;