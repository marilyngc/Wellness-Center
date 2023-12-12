import "./FrontPage.css";
import gymFront from "../../../assets/contents/gymPortada.jpg";
import spaFront from "../../../assets/contents/spaFront.png";
import subtitle from "../../../assets/contents/AlcanzaTuMaximo.png"

import title2 from "../../../assets/contents/wellnesLogo2.png"


export const FrontPage = () => {

    return(
<section >

<div className="col p-0   " id="sectionFront">
<div className="box-front ">
    
    <img src={gymFront} alt="Imagen de gimnasio" />
    <img src={spaFront} alt="Imagen de spa" />
    
</div>
 
<div className="frontTitle  d-flex flex-column justify-content-center align-items-center ">
    <div className=" py-2 d-flex justify-content-center  titleWellness">
       
        <img src={title2} alt="" />
    </div>
    
    <div className="subtitleAlcanza d-flex justify-content-center align-items-center mt-3">
    <img src={subtitle} alt="" />
    </div>
</div>
</div>
  

</section>
    )
}