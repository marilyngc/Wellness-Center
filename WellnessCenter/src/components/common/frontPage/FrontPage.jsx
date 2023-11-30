import "./FrontPage.css";
import gymFront from "../../../assets/contents/Rectangle19.png";
import spaFront from "../../../assets/contents/Rectangle18.png";
import subtitle from "../../../assets/contents/AlcanzaTuMaximo.png"
import title from "../../../assets/contents/WELLNESS.png"


export const FrontPage = () => {

    return(
<section >

<div className="col p-0 row  " id="sectionFront">
<div className="box-front ">
    
    <img src={gymFront} alt="Imagen de gimnasio" />
    <img src={spaFront} alt="Imagen de spa" />
    
</div>
 
<div className="frontTitle  d-flex flex-column justify-content-center align-items-center ">
    <div className=" py-2 d-flex justify-content-center  titleWellness">
        <img src={title} alt="" />
    </div>
    
    <div className="d-flex justify-content-center align-items-center mt-3">
    <img src={subtitle} alt="" />
    </div>
</div>
</div>
  

</section>
    )
}