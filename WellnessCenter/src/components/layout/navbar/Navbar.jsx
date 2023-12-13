import React, { useState } from "react";
import { Hrefs } from "./Hrefs.jsx";
import { HrefsData } from "../../../data/MOCK_DATA.jsx";
import './Navbar.css';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import wellnessLogo from "../../../assets/logo/LogoWellness.png";
import{ Image} from 'react-bootstrap';
import { Link } from "react-router-dom";


import { BtnReserveRoutes } from "../../common/btnReserveRoutes/BtnReserveRoutes.jsx";

export const NavBar = () => {
  const [activeSec, setActiveSec] = useState("");
  const [clicked,setClicked] = useState(false);

  const handleClick = (route) =>{
    setClicked(false);
    setActiveSec(route);
  }

  return <nav className=" shadow-sm ">
    <Link to="/">
      <img src={wellnessLogo}/>
    </Link>
    <div id="links" className={clicked ? '' : 'inactive'} >
      {HrefsData.map((href,index)=><Link className={activeSec == href.route ? 'active' : ''}  to={href.route} key={index} onClick={()=>handleClick(href.route)}>
        {href.title}
      </Link>)
      }
      {/*<BtnReserveRoutes isInNavBar={true} />*/}
    </div>

  
    <div className="mobile">
      <i onClick={()=>setClicked(!clicked)} className={clicked ? 'fas fa-times' : 'fas fa-bars'}>{clicked ? 
      <MoreHorizOutlinedIcon/> : <MoreVertOutlinedIcon/>}</i>
    </div>

  </nav>
  
};