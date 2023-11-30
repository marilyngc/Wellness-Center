import CardServices from "../cardServices/CardServices"
import Slider from "react-slick";

import { servicesSpa } from "../../../data/MOCK_DATA";
import "./slick.css";
import "./slick-theme.css";

export const CardServiceSlick = () =>{
  
    return(
      <>
         <div className="cardsDetails">
         {servicesSpa.map((planName,index) => <CardServices   key={index}  {...planName}/>)}
        </div>

      </>
        





      
      
       

       
    )
}