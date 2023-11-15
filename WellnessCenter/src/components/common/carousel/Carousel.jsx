import React from "react"
import imgTemporari from "../../../assets/contents/piscina.jpeg"
import './Carousel.css';

export const Carousel = () =>{
    
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

    return <div className="divCarousel">
        <div className="carouselItems">
            {data.map((img) => <img className="itemCarousel" src={img.img}/>)}
        </div>
    </div>
}