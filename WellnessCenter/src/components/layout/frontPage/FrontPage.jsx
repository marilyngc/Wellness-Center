import "./FrontPage.css";
import gymFront from "../../../assets/gymFront.png";
import spaFront from "../../../assets/spaFront.png";
import {Container, Row,Col } from "react-bootstrap"


export const FrontPage = () => {

    return(
<section className="d-flex row">

     
        <div className="col-6">
        <img src={gymFront}alt=""  />
        </div>
        <div className="col-6">
        <img src={spaFront}alt=""  />
        </div>
        
        <Container className="">
      <Row>
      <div className="frontTitle">
            <h1>Wellness Center</h1>
                <h2>Alcanzá tu máximo potencial</h2>
            </div>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
</section>
      
      
    )
}