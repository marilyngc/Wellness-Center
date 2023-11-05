import "./FrontPage.css";
import gymFront from "../../../assets/contents/Rectangle19.png";
import spaFront from "../../../assets/contents/Rectangle18.png";




export const FrontPage = () => {

    return(
<section className="d-flex  row  ">

 <div className="box-front  ">
 
       <img src={gymFront} alt="Imagen de gimnasio" />
       <img src={spaFront} alt="Imagen de spa" />
       
    
        
 </div>
     
       
       
      <div className="frontTitle  d-flex flex-column justify-content-center align-items-center">
            <h1>Wellness Center</h1>
                <h2 className="d-flex justify-content-center align-items-center">Alcanzá tu máximo potencial</h2>
            </div>
      
</section>
      
     
    )
}