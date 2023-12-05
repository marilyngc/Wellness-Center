import React, { useState } from "react";
import { Hrefs } from "./Hrefs.jsx";
import { HrefsData } from "../../../data/MOCK_DATA.jsx";
import './Navbar.css';

import wellnessLogo from "../../../assets/logo/LogoWellness.png";
import{ Image} from 'react-bootstrap';
import { Link } from "react-router-dom";


import { BtnReserveRoutes } from "../../common/btnReserveRoutes/BtnReserveRoutes.jsx";



export const NavBar = () => {
  const [activeSec, setActiveSec] = useState("");

  console.log(activeSec);
  return <nav>
    <Link to="/">
      <img src={wellnessLogo}/>
    </Link>
    <div className="links">
      {HrefsData.map((href,index)=><Link to={href.route} key={index}>
        {href.title}
      </Link>)}
    </div>

    <BtnReserveRoutes isInNavBar={true} />
  </nav>
  return (
    <>
    


    <header>
      <nav className="d-flex row  p-lg-4 py-3 bg-light justify-content-around align-items-center   fixed-top shadow-sm">
        <div className="d-flex col-12 col-lg-4 align-items-center justify-content-center   ">
        <Link to="/" classNameName="">
              <Image alt="logoWellness" src={wellnessLogo}  />

            </Link>
        </div>
        <div className="col-12 col-lg-4 m-lg-auto py-2 py-lg-0 d-flex align-items-center justify-content-around ">

       
                {HrefsData.map((href, index) => (
      <ul key={index} className="navbar-nav  px-lg-0 py-lg-2 px-md-0 mx-lg-5 mx-md-5 py-md-0">
        <Hrefs activeSec={activeSec} setActiveSec={setActiveSec} href={href.route} title={href.title} />
      </ul>
    ))}
             
                
        </div>
        <div className="d-flex col-12 col-lg-4 container-btn align-items-center justify-content-center ">
        
        <BtnReserveRoutes isInNavBar={true} />
       
        </div>
      </nav>
    </header>
   


      
    </>
  );
};