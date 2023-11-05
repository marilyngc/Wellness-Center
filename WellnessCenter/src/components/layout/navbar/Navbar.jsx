import React, { useState } from "react";
import { Hrefs } from "./Hrefs.jsx";
import './Navbar.css'
import wellnessLogo from "../../../assets/logo/wellnessLogo.svg"
import { BtnReserve } from "./BtnReserve.jsx";


export const Navbar = () =>{

    const [activeSec,setActiveSec] = useState("")
    const hrefs = ["Gimnasio","Planes Spa","Estética"];

    console.log(activeSec);

    return <nav>
        <img alt="logoWellness" src={wellnessLogo}/>
        <div className="btnsNavbar">
        {hrefs.map((href, index) => 
                  <ul>
                     <Hrefs key={index} to={href.hrefs} activeSec={activeSec} setActiveSec={setActiveSec} href={href}/> 
                  </ul>
                 
                
                  )}
            
            
        </div>
        <BtnReserve/> 
       
    </nav>

}