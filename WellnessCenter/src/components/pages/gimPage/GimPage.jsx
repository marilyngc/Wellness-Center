import React from "react";
import './GimPage.css';

import CardServices from "../../common/cardServices/CardServices.jsx";

const GimPage = () =>{

    const array = [1,2,3]

    return <div className="gimPage">
        <div className="cardsDetails">
            {array.map((nro) => <CardServices/>)}
        </div>
    </div>

}

export default GimPage;