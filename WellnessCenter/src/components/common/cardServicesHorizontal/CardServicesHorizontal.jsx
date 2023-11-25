import { Button, Card, CardText } from "react-bootstrap";
import "./cardServicesHorizontal.css"
import { BtnReserve } from "../btnReserve/BtnReserve";
import { btnHrefs } from "../../../data/MOCK_DATA";

export const CardServicesHorizontal = ({ title, img, duration, items,review }) => {
  return (
    

      <div className="d-flex row align-items-center mx-5 my-3  border shadow rounded cardContent">
        <div className=" col-5 h-100  contentImage rounded-start">
          <Card.Img src={img} />
        </div>

        <div className=" col  d-flex flex-column cardBody ">

          <div className="px-5 pt-5 col ">
          <Card.Title className="fs-3 mb-2 h1-secondary">{title}</Card.Title>
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
            <h3 className="pb-3 h1-secondary">
              ¿Querés saber más?
            </h3>

            {Object.keys(btnHrefs).map((key) => (
  key === 'spa' ? (
    <BtnReserve
      key={key}
      text={btnHrefs[key].title || ''}
      phoneNumber={btnHrefs[key].phoneNumber || ''}
    />
  ) : null
))}

          </div>
        </div>


      </div>




   
    
  )
}