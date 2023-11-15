import React from "react";
import { BtnReserve } from "../btnReserve/BtnReserve.jsx";
import './CardServices.css'

const CardServices = ({plan,setPlan,title,description,imgSrc,className,tipo}) =>{

    if(tipo == 'servicio'){
        return <div className={className} onClick={()=>(setPlan && setPlan(title))} style={{backgroundImage:`url('${imgSrc}')`}}>
        <div className="label">
            <label>{title}</label>
            <span>{description}</span>
            <label>¿Quieres saber más?</label>
            <BtnReserve text={'Contactános'} phoneNumber={1138326832}/>
        </div>
    </div>
    }else{
        return <div className={className} onClick={()=>(setPlan && setPlan(title))} style={{backgroundImage:`url('${imgSrc}')`}}>
        <div className="label">
            <label>{title}</label>
            <span>{description}</span>
        </div>
    </div>
    }

    
}

export default CardServices;