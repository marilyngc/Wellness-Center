import React from "react";
import {BtnReserveRoutes} from "../btnReserveRoutes/BtnReserveRoutes.jsx"
 import './CardServices.css'

const CardServices = ({plan,setPlan,title,description,img,className,tipo}) =>{
    if(tipo == 'servicio'){
        return <div className={className  } onClick={()=>(setPlan && setPlan(title))} >
        <div className="label">
            <label className="pt-lg-3">{title}</label>
            <span>{description}</span>
            <div className="  d-flex flex-column align-items-center justify-content-between  mb-4">
            <h3 className="pb-lg-2 pt-lg-0 pt-4 pb-2 fs-5 ">
              ¿Querés saber más?
            </h3>
          
     <BtnReserveRoutes/>



          </div>
        </div>
        <div className="containerImg">
        <img src={img}/>
        </div>
        
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