import React, { useState } from "react";
import { Hrefs } from "./Hrefs.jsx";
import { HrefsData } from "../../../data/MOCK_DATA.jsx";
import './Navbar.css';

import wellnessLogo from "../../../assets/logo/LogoWellness.png";
import logoSpaGym from "../../../assets/logo/LogoSpaGym.png";
import { BtnReserve } from "../../common/btnReserve/BtnReserve.jsx";
import { btnHrefs } from "../../../data/MOCK_DATA";
import{ Image} from 'react-bootstrap';
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [activeSec, setActiveSec] = useState("");

  console.log(activeSec);

  return (
    <>
    <nav className="navbar navbar-expand-lg d-flex align-items-center justify-content-between  shadow-sm fixed-top ">
  <div className="container-fluid">
  <Link to="/" className="d-flex justify-content-center align-items-center ">
              <Image alt="logoWellness" src={wellnessLogo}  />
              <Image alt="LogoWellness" src={logoSpaGym} className="d-none d-lg-block " />
            </Link>
           
    
    <div className=" btnsNavbar m-lg-auto d-flex align-items-center justify-content-between" id="navbarNavDropdown">
    
                {HrefsData.map((href, index) => (
                  <ul key={index} className="navbar-nav">
                    <Hrefs activeSec={activeSec} setActiveSec={setActiveSec} href={href.route} title={href.title} />
                  </ul>
                ))}
              </div>
              {Object.keys(btnHrefs).map((key) => (
                key === 'general' ? (
                  <BtnReserve 
                    key={key}
                    text={btnHrefs[key].title || ''}
                    phoneNumber={btnHrefs[key].phoneNumber || ''}
                  />
                ) : null
              ))}
   
    
  </div>
</nav>
      {/* {['sm', 'md', 'lg', 'xl', 'xxl'].map((expand, index) => (
        <Navbar key={expand} expand={expand}  className={`d-flex align-items-center justify-content-between navBar shadow-sm d-${expand === 'lg' ? 'block' : 'none'}`}>
          <Container fluid>
            <Link to="/" className="d-flex justify-content-center align-items-center">
              <Image alt="logoWellness" src={wellnessLogo}  />
              <Image alt="LogoWellness" src={logoSpaGym} className="d-none d-lg-block " />
            </Link>

            <Nav className={`align-items-center justify-content-${expand === 'lg' ? 'between' : 'start'} flex-grow-1 pe-lg-3`}>
              <div className={`btnsNavbar m-${expand === 'lg' ? 'auto' : null} d-flex align-items-center justify-content-${expand === 'lg' ? 'between' : 'start'}`}>
                {HrefsData.map((href, index) => (
                  <ul key={index}>
                    <Hrefs activeSec={activeSec} setActiveSec={setActiveSec} href={href.route} title={href.title} />
                  </ul>
                ))}
              </div>
              {Object.keys(btnHrefs).map((key) => (
                key === 'general' ? (
                  <BtnReserve
                    key={key}
                    text={btnHrefs[key].title || ''}
                    phoneNumber={btnHrefs[key].phoneNumber || ''}
                  />
                ) : null
              ))}
            </Nav>
          </Container>
        </Navbar>
      ))} */}
    </>
  );
};