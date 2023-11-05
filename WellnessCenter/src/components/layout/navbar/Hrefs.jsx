import React from "react";
import {Link} from "react-router-dom";

export const Hrefs = ({activeSec,setActiveSec,href}) =>{

    const handleClick = (e) =>{
        e.preventDefault();
        setActiveSec(href)
    }

    return <li className="nav-item">
<Link  to={`/${href}`} className={"nav-link " + (activeSec == href ? 'btnNavbar active' : 'btnNavbar')} onClick={(e)=>handleClick(e)}>{href}</Link>
    </li> 

}
