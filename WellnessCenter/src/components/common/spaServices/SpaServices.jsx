import { CardServicesHorizontal } from "../cardServicesHorizontal/CardServicesHorizontal.jsx"
import { servicesSpa } from "../../../data/MOCK_DATA"
import "./spaServices.css";

export const SpaServices = () => {
    return(
        <section className="  my-5 pt-5 container-fluid d-flex flex-column" >
           <div className="px-5 ">
           <h1 >Planes Spa</h1>
                <p className="p-subtitle">Ofrecemos entrenamiento personalizado, con una pauta de creada especialmente para ti. Nos enfocamos en tus necesidades y metas. Te guiaremos en todo el proceso, además nuestros entrenadores podrán monitorear tu rendimiento, asegurándonos que cumplas tus objetivos.  </p>
           </div>
              
            
           
                {servicesSpa.map((service,index) =>     <CardServicesHorizontal key={index}  {...service}/>)}
            
            
        </section>
    )
}