
import imgTemporari from "../../../assets/contents/piscina.jpeg"
import {Card} from "react-bootstrap";
import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";

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
        }
    return(
        <section className=" container-fluid mt-3 d-flex flex-column justify-content-center align-items-center ">
            <div><h3>Conocé nuestros servicios destacados
</h3></div>
<div className=" container-fluid   ">
<Slider {...settings}>
{data.map((d,index) => (
   <Card key={index}  className="h-100 mx-5 shadow border-0  rounded-4">
   <Card.Img variant="top" src={d.img}  className="rounded-top h-75 "/>
   <Card.Body>

     <Card.Text className="text-center fw-medium">
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

const data = [
    {
        img: imgTemporari,
        review: "Lorem ipsum dolor sit amet."
    },
    {
        img: imgTemporari,
        review: "Lorem ipsum dolor sit amet."
    },
    {
        img: imgTemporari,
        review: "Lorem ipsum dolor sit amet."
    },
    {
        img: imgTemporari,
        review: "Lorem ipsum dolor sit amet."
    },
    {
        img: imgTemporari,
        review: "Lorem ipsum dolor sit amet."
    },
    
   
    
    
]