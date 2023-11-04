import React from "react";

export const Hrefs = ({activeSec,setActiveSec,href}) =>{

    const handleClick = (e) =>{
        e.preventDefault();
        setActiveSec(href)
    }

    return <a href="" className={(activeSec == href ? 'btnNavbar active' : 'btnNavbar')} onClick={(e)=>handleClick(e)}>{href}</a>

}
