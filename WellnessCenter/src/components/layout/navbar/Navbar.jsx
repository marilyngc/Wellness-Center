import React, { useState } from "react";
import { Hrefs } from "./Hrefs.jsx";
import { HrefsData } from "../../../data/MOCK_DATA.jsx";
import './Navbar.css'
import wellnessLogo from "../../../assets/logo/logoWellness.png"
import logoSpaGym from "../../../assets/logo/logoSpaGym.png"
import { BtnReserve } from "../../common/btnReserve/BtnReserve.jsx";
import { btnHrefs } from "../../../data/MOCK_DATA";
import{ Container,Nav,Navbar ,NavDropdown,Image,Offcanvas} from 'react-bootstrap';
import { Link } from "react-router-dom";

export const NavBar = () =>{

    const [activeSec,setActiveSec] = useState("");
  

    console.log(activeSec);

    return ( 
    <> 
    
    {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand,index) => (
        <Navbar key={expand} expand={expand} fixed="top" className={` d-flex align-items-center  justify-content-between navBar shadow-sm   d-${expand === 'lg' ? 'block' : 'none'}`}>
          <Container fluid>
            <Link to="/">
               <Image alt="logoWellness" src={wellnessLogo} className="ps-5"/>
               <Image alt="LogoWellness" src={logoSpaGym}/>
            </Link>
          
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              <Link to="/"  id={`offcanvasNavbarLabel-expand-${expand}`}> <Image alt="logoWellness" src={wellnessLogo}/></Link>
                
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="align-items-center  justify-content-between flex-grow-1 pe-3">
              <div className="btnsNavbar m-auto d-flex align-items-center  justify-content-between">
            <ul>
              
            </ul>
              {HrefsData.map((href, index) => 
                <ul  key={index}>
                  <Hrefs activeSec={activeSec} setActiveSec={setActiveSec} href={href.route} title={href.title}/> 
                </ul>
              )}  
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
        
              </Offcanvas.Body>
            </Navbar.Offcanvas>
         
          </Container>
        </Navbar>
      ))}
    
    {/* <nav >
    <img alt="logoWellness" src={wellnessLogo}/>
    <div className="btnsNavbar">
    {hrefs.map((href, index) => 
              <ul>
                 <Hrefs key={index} to={href.hrefs} activeSec={activeSec} setActiveSec={setActiveSec} href={href}/> 
              </ul>
             
            
              )}
        
        
    </div>
    <BtnReserve/> 
   
</nav> */}
    </>
   );

}