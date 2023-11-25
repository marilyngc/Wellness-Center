import React from "react";
import { BtnReserve } from "../btnReserve/BtnReserve.jsx";
import './CardServices.css'

const CardServices = ({plan,setPlan,title,description,img,className,tipo}) =>{
    console.log(img);
    if(tipo == 'servicio'){
        return <div className={className  } onClick={()=>(setPlan && setPlan(title))} >
        <div className="label">
            <label>{title}</label>
            <span>{description}</span>
            <label>¿Quieres saber más?</label>
            <BtnReserve text={'Contactános'} phoneNumber={1138326832}/>
        </div>
        <img src={img}/>
    </div>
    }else{
        return <div className={className + " shadow-sm"} onClick={()=>(setPlan && setPlan(title))} style={{backgroundImage:`url('${img}')`}}>
        <div className="label">
            <label>{title}</label>
        </div>
    </div>
    }

    
}

export default CardServices;