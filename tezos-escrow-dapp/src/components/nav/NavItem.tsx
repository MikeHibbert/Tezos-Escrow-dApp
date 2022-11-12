import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
    to: string, title:string, 
    pathname: string
}

const NavItem: React.FC<PropsWithChildren<NavItemProps>> = (props) => {

    return <li className={props.pathname === props.to ? "nav-item active" : "nav-item"}>
                <Link className="nav-link px-0 d-flex align-items-center" to={props.to}>
                    {props.children}
                    <span>{props.title}</span>
                </Link>
            </li>;
}

export default NavItem;