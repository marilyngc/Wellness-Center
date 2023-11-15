import { Button, Card, CardText } from "react-bootstrap";
import "./cardPlanSpa.css"
import { BtnReserve } from "../btnReserve/BtnReserve";
import { btnHrefs } from "../../../data/MOCK_DATA";

export const CardPlanSpa = ({ title, imgSrc, duration, items }) => {
  return (
    <>

      <div class="d-flex align-items-center m-4  shadow-lg rounded ">
        <div class="flex-shrink-0 contentImage rounded-start">
          <Card.Img src={imgSrc} />
        </div>

        <div class="flex-grow-1 ms-lg-5 ps-lg-5 pt-lg-5  cardBody ">
          <Card.Title className="fs-3">{title}</Card.Title>
          <p >{duration}</p>
          <ul>
            {items.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
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




      {/* <Card className="d-flex" style={{ width: '17rem' }}>
        <Card.Img  src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           <h2>{duration}</h2>
           <ul>
            {items.map((item,index) => <li key={index}>{item}</li>)}
           </ul>
          </Card.Text>
          <CardText>
          ¿Quieres saber más?
          </CardText>
          <Button variant="primary">Aqui vamos a crear un componente Button</Button>
        </Card.Body>
      </Card> */}
    </>
  )
}