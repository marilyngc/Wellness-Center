import React from "react";
import {Link} from "react-router-dom";

export const Hrefs = ({activeSec,setActiveSec,href,title}) =>{

    const handleClick = (e) =>{
        //e.preventDefault();
        setActiveSec(href)
    }

    return <li className="nav-item px-4 ">
        <Link to={`/${href}`} className={"nav-link py-lg-5  " + (activeSec == href ? 'btnNavbar active' : 'btnNavbar')} onClick={(e)=>handleClick(e)}>{title} </Link>
    </li> 

}
