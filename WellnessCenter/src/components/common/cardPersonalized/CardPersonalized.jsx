

import {Card} from "react-bootstrap";
import { carouselServices } from "../../../data/MOCK_DATA.jsx";
import Slider from "react-slick";
import "./slick-card.css"; 
import "./slick-theme-card.css";

export const CardPersonalized = () => {
    
        let settings = {
          dots: true,
          infinite: true,
          speed: 700,
          slidesToShow: 3.8,
          slidesToScroll: 1,
          initialSlide: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
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
        }
  return(
      <section className="mt-4 mt-lg-0 d-flex flex-column justify-content-center align-items-center ">
        <div className="text-center">
          <h1 className="h1-secondary" >Conocé nuestros servicios destacados</h1>
        </div>
        <div className=" container-fluid   ">
          <Slider {...settings} className="card-personalized-slider card-personalized-list card-personalized-slick-dots">
            {carouselServices.map((d,index) => (
              <Card key={index}  className=" card-personalized-slide   mx-5  shadow border-0  rounded-4">
              <Card.Img variant="top"  src={d.img} />
              <Card.Body >
                <Card.Text className="text-center  ">
                  {d.review}
                </Card.Text>
              
              </Card.Body>
            </Card>
            )
            )}
          </Slider>
        </div>
      </section>
  )
}

