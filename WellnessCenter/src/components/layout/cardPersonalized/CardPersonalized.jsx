import "./CardPersonalized.css"
import imgTemporari from "../../../assets/contents/Rectangle19.png"
import {Card} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const CardPersonalized = () => {
    
        let settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2.1,
          slidesToScroll: 1,
          initialSlide: 0,
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
        <section className=" container-fluid d-flex flex-column justify-content-center align-items-center">
            <div><h3>Conocé nuestros servicios destacados
</h3></div>
<div className="w-50">
<Slider {...settings}>
{data.map((d,index) => (
   <Card key={index} style={{ width: '18rem' }} className="mb-5">
   <Card.Img variant="top" src={d.img}  className="rounded"/>
   <Card.Body>

     <Card.Text>
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