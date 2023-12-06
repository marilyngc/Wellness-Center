
import {React,useState} from "react"
import { useNavigate } from "react-router";
import {Card} from "react-bootstrap";
import { carouselServices } from "../../../data/MOCK_DATA.jsx";
import Slider from "react-slick";
import "./slick-card.css"; 
import "./slick-theme-card.css";

export const CardPersonalized = () => {
  const navigate = useNavigate();
 
  const handleClick = (linkTo,idDirected) =>{
    console.log(idDirected);
    navigate(linkTo, {state: {redirectedTo:idDirected}})
  }

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
      <section >
        <div className="mt-5 mt-lg-0  justify-content-center align-items-center ">
        <div className="text-center px-3 px-lg-0 my-lg-3">
          <h1 className="h1-secondary" >Conocé nuestros servicios destacados</h1>
        </div>
        <div className=" container-fluid mt-5 mt-lg-0 pt-3 pt-lg-0  ">
          <Slider {...settings} className="card-personalized-slider w-lg-100 p-lg-5 m-lg-5  p-0 m-0 card-personalized-list card-personalized-slick-dots">
            {carouselServices.map((d,index) => (
              <Card key={index}  className=" card-personalized-slide     shadow border-0  rounded-4" onClick={()=>handleClick(d.linkTo,d.idDirected)}>
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
  
        </div>
      
      </section>
  )
}

