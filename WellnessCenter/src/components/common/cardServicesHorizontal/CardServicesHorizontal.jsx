import { Button, Card, CardText } from "react-bootstrap";
import "./cardServicesHorizontal.css"
import { BtnReserve } from "../btnReserve/BtnReserve";
import { btnHrefs } from "../../../data/MOCK_DATA";

export const CardServicesHorizontal = ({ title, imgSrc, duration, items,review }) => {
  return (
    

      <div class="d-flex align-items-center m-5  border shadow rounded ">
        <div class="flex-shrink-0 contentImage rounded-start">
          <Card.Img src={imgSrc} />
        </div>

        <div class="flex-grow-1 ms-lg-5 ps-lg-3 pt-lg-5  cardBody ">
          <Card.Title className="fs-3">{title}</Card.Title>
         {items ? (
          <>
           <p >{duration}</p>
          <ul>
            {items.map((item, index) => <li key={index}>{item}</li>)}
          </ul> 
          </>
         ):(
           <div> {review}</div>
         )
        
        }
          
          <div className="  d-flex flex-column align-items-center justify-content-between  mt-5 py-3">
            <h3 className="pb-3">
              ¿Quieres saber más?
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