import React, { useState } from "react";
import './GimPage.css';

import CardServices from "../../common/cardServices/CardServices.jsx";
import {plansServices} from '../../../data/MOCK_DATA.jsx'
import {typePlan} from '../../../data/MOCK_DATA.jsx'

const GimPage = () =>{

    const array = []
    const [plan,setPlan] = useState("");
    console.log(plan);
    return <div className="gimPage">
        <div className="cardsDetails">
            {typePlan.map((planName,index) => <CardServices key={index} setPlan={setPlan} plan={plan} {...planName}/>)}
        </div>
        <hr/>
        <div className="infoService">
            <h1>Nuestros servicios</h1>
            {typePlan.map((typePlan) =>{
                if (typePlan.title == plan) return <div className="descriptionPlan">
                    <h2>{typePlan.title}</h2>
                    <span>{typePlan.description}</span>
                    </div>
            })}
            <div className="services">
                    
                {plansServices.filter((planI) => planI.plan == plan )
                .map((planI,index) => <CardServices key={index} {...planI}/>) }
            </div>
        </div>

    </div>

}

export default GimPage;