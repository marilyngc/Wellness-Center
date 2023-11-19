import React from "react";

const SteticService = ({title,img}) =>{

    return <div className="steticService" style={{background:`url(${img})`, backgroundSize:'cover'}}>
        <h3>{title}</h3>
    </div>

}

export default SteticService;