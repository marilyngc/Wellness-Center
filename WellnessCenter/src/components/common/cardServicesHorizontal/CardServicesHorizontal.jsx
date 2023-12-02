import {Card } from "react-bootstrap";
import "./cardServicesHorizontal.css"
import { BtnReserveRoutes } from "../btnReserveRoutes/BtnReserveRoutes.jsx";



export const CardServicesHorizontal = ({ title, img, duration, items,review }) => {
 
  return (
    

      <div className="d-flex row align-items-center mx-lg-5 mx-2 my-3  border shadow rounded cardContent">
        <div className=" col-lg-5 col-12 h-100  contentImage rounded-start">
          <Card.Img src={img} />
        </div>

        <div className=" col  d-flex flex-column cardBody ">

          <div className="px-lg-5 px-1 pt-lg-5 pt-4 col ">
            <h3 className="fs-4 mb-2 ">{title} </h3>
         {items ? (
          <>
           <p >{duration}</p>
          <ul>
            {items.map((item, index) => <li key={index}>{item}</li>)}
          </ul> 
          </>
         ):(
           <p className="me-lg-5 pe-lg-5"> {review}</p>
         )
        
        }
          
          </div>
          
          <div className="  d-flex flex-column align-items-center justify-content-between  mb-5">
            <h3 className="pb-lg-2 pt-lg-0 pt-4 pb-2 fs-5 ">
              ¿Querés saber más?
            </h3>
          
     <BtnReserveRoutes/>



          </div>
        </div>


      </div>




   
    
  )
}