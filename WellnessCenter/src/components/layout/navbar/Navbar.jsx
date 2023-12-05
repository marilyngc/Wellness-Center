import React, { useState } from "react";
import { Hrefs } from "./Hrefs.jsx";
import { HrefsData } from "../../../data/MOCK_DATA.jsx";
import './Navbar.css';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import wellnessLogo from "../../../assets/logo/LogoWellness.png";
import{ Image} from 'react-bootstrap';
import { Link } from "react-router-dom";


import { BtnReserveRoutes } from "../../common/btnReserveRoutes/BtnReserveRoutes.jsx";



export const NavBar = () => {
  const [activeSec, setActiveSec] = useState("");
  const [clicked,setClicked] = useState(true);

  return <nav>
    <Link to="/">
      <img src={wellnessLogo}/>
    </Link>
    <div id="links" className={clicked ? '' : 'inactive'} >
      {HrefsData.map((href,index)=><Link to={href.route} key={index} onClick={()=>setClicked(false)}>
        {href.title}
      </Link>)
      }
      <BtnReserveRoutes isInNavBar={true} />
    </div>

  
    <div className="mobile">
      <i onClick={()=>setClicked(!clicked)} className={clicked ? 'fas fa-times' : 'fas fa-bars'}><MoreVertOutlinedIcon/></i>
    </div>

  </nav>
  
};