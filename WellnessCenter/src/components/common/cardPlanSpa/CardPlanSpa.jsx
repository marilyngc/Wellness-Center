import {Button,Card, CardText} from "react-bootstrap";

export const CardPlanSpa = ({title,imgSrc,duration,items}) => {
    return(
        <Card style={{ width: '50rem' }}>
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
      </Card>
    )
}