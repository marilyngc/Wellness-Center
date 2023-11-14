import CardServices from "../cardServices/CardServices"
import Slider from "react-slick";

import { servicesSpa } from "../../../data/MOCK_DATA";
import "./slick.css";
import "./slick-theme.css";

export const CardServiceSlick = () =>{
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3 ,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
      
       <div className="container-fluidr px-5">

       <Slider {...settings}>
{servicesSpa.map((planName,index) => <CardServices className="border " key={index}  {...planName}/>)}
</Slider>
       
       </div>
      
       

       
    )
}