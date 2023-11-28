import React from "react";
import {Link} from "react-router-dom";

export const Hrefs = ({activeSec,setActiveSec,href,title}) =>{

    const handleClick = (e) =>{
        //e.preventDefault();
        setActiveSec(href)
    }

    return <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
        <Link to={`/${href}`} className={"nav-link dropdown-toggle   " + (activeSec == href ? 'btnNavbar active' : 'btnNavbar')} onClick={(e)=>handleClick(e)}>{title} </Link>
    </li> 

}
