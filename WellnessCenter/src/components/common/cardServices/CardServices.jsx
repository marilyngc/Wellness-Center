import React from "react";
import './CardServices.css'

const CardServices = ({plan,setPlan,title,description,imgSrc,className}) =>{

    return <div className={className} onClick={()=>(setPlan && setPlan(title))} style={{backgroundImage:`url('${imgSrc}')`}}>
        <div className="label">
            <label>{title}</label>
            <span>{description}</span>
        </div>
    </div>

}

export default CardServices;