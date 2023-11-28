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


<div class="navigation-wrap  start-header start-style bg-light fixed-top">
		<div class="container ">
			<div class="row ">
				<div class="col-12">
					<nav class="navbar  navbar-expand-md bg-light ">
					
          <Link to="/" classNameName="navbar-brand ">
              <Image alt="logoWellness" src={wellnessLogo}  />
              <Image alt="LogoWellness" src={logoSpaGym} classNameName="d-none d-lg-block " />
            </Link>
						
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
            <div className="ms-lg-5 ms-0  collapse navbar-collapse " id="navbarSupportedContent">
    
    {HrefsData.map((href, index) => (
      <ul key={index} className="navbar-nav ml-auto py-4 px-5 px-md-0 mx-5 py-md-0">
        <Hrefs activeSec={activeSec} setActiveSec={setActiveSec} href={href.route} title={href.title} />
      </ul>
    ))}
    <div className=" ms-lg-5 ms-0">
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
   
  </div>
						{/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav ml-auto py-4 py-md-0">
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
									<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
									
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link" href="#">Portfolio</a>
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link" href="#">Agency</a>
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
									
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link" href="#">Journal</a>
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link" href="#">Contact</a>
								</li>
							</ul>
						</div> */}
          
					</nav>		
				</div>
			</div>
		</div>
	</div>

      
    </>
  );
};