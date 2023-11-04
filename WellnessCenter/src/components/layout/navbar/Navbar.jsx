import React, { useState } from "react";
import { Hrefs } from "./Hrefs.jsx";
import './Navbar.css'

export const Navbar = () =>{

    const [activeSec,setActiveSec] = useState("")
    const hrefs = ["Gim","Spa","Personalizado"];

    console.log(activeSec);

    return <nav>
        <img alt="logoWellness"/>
        <div className="btnsNavbar">
            {hrefs.map((href, index) => <Hrefs key={index} activeSec={activeSec} setActiveSec={setActiveSec} href={href}/>)}
        </div>
        <button className="reservarBtn"><img alt="logoWhatsApp"/><label>Reservar</label></button>
    </nav>

}