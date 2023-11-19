import React from "react";
import './SteticPage.css';
import './SteticService.jsx';
import {SteticServices} from '../../../data/MOCK_DATA.jsx';

const SteticPage = () =>{

    return <div className="steticPage">
        <div className="steticServices">
            {/*SteticServices.map((service, index) => <SteticPage key={index} {...service}/>)*/}
            {SteticServices.map((service,index) => <div className="steticService" style={{background:`url(${service.img})`}}><h3>{service.title}</h3></div>)}
        </div>
    </div>
    
}

export default SteticPage;