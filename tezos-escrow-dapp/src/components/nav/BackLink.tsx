import { useEffect } from "react";
import { Link } from "react-router-dom";

interface BackLinkProps {
    useBackLink: boolean,
    setUseBackLink: (useBackLink: boolean) => any,
    backLinkTitle: string,
    setBackLinkTitle: (backLinkTitle: string) => any,
}

const BackLink: React.FC<BackLinkProps> = (props) => {
    useEffect(() => {
        if(props.useBackLink) {
            props.setBackLinkTitle(props.backLinkTitle);
        }
    }, [props.useBackLink]);

    

    var backLink = null;
    if(props.useBackLink) {
        backLink = <ul className="list-inline small text-muted m-0">
                        <li className="list-inline-item">
                            <Link to="/" className="d-flex align-items-center link-muted">
                                <svg width="18px" height="18px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                    <path fillRule="evenodd" 
                                        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"></path>
                                </svg>
                                <span className="text-muted px-1">{props.backLinkTitle}</span>
                            </Link>
                        </li>
                    </ul>;
    }
    return backLink;
}

export default BackLink;