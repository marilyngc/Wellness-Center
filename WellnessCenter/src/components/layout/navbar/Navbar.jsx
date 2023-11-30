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

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';



export const NavBar = () => {
  const [activeSec, setActiveSec] = useState("");

  console.log(activeSec);

  return (
    <>
    {/* <Navbar  expand="lg" className="navbar px-lg-5   shadow-sm" fixed="top">
          <Container fluid>
          
              <Link to="/" classNameName="">
              <Image alt="logoWellness" src={wellnessLogo}  />

            </Link>
           
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <Link to="/" classNameName="">
              <Image alt="logoWellness" src={wellnessLogo}  />

            </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className=" ">
                <Nav className="justify-content-center  m-lg-auto">
                {HrefsData.map((href, index) => (
      <ul key={index} className="navbar-nav ml-auto py-4 px-5 px-md-0 mx-5 py-md-0">
        <Hrefs activeSec={activeSec} setActiveSec={setActiveSec} href={href.route} title={href.title} />
      </ul>
    ))}
             
                </Nav>
                <Form className="d-flex">
                
                     {Object.keys(btnHrefs).map((key) => (
                key === 'general' ? (
                  <BtnReserve 
                    key={key}
                    text={btnHrefs[key].title || ''}
                    phoneNumber={btnHrefs[key].phoneNumber || ''}
                  />
                ) : null
              ))}
                  
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
     */}


    <header>
      <nav className="d-flex row  p-lg-4 py-2 bg-light justify-content-around align-items-center   fixed-top shadow-sm">
        <div className="d-flex col-12 col-lg-4 align-items-center justify-content-center   ">
        <Link to="/" classNameName="">
              <Image alt="logoWellness" src={wellnessLogo}  />

            </Link>
        </div>
        <div className="col-12 col-lg-4 m-lg-auto py-2 py-lg-0 d-flex align-items-center justify-content-around ">

       
                {HrefsData.map((href, index) => (
      <ul key={index} className="navbar-nav pb-2  px-lg-0 py-lg-2 px-md-0 mx-lg-5 mx-md-5 py-md-0">
        <Hrefs activeSec={activeSec} setActiveSec={setActiveSec} href={href.route} title={href.title} />
      </ul>
    ))}
             
                
        </div>
        <div className="d-flex col-12 col-lg-4 container-btn align-items-center justify-content-center ">
          
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
    </header>
    {/* <nav classNameName=" navbar navbar-expand-lg d-flex align-items-center justify-content-between  shadow-sm fixed-top ">
  
  <Link to="/" classNameName="d-flex justify-content-center align-items-center ">
              <Image alt="logoWellness" src={wellnessLogo}  />
              <Image alt="LogoWellness" src={logoSpaGym} classNameName="d-none d-lg-block " />
            </Link>
           
    
    <div classNameName="bg-dark btnsNavbar m-lg-auto  d-flex align-items-center justify-content-between" id="navbarNavDropdown">
    
                {HrefsData.map((href, index) => (
                  <ul key={index} classNameName="navbar-nav">
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
   
    
 
</nav> */}


      
    </>
  );
};