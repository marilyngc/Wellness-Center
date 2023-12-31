import { CardServicesHorizontal } from "../cardServicesHorizontal/CardServicesHorizontal.jsx"
import { servicesSpa } from "../../../data/MOCK_DATA"
import "./spaServices.css";

export const SpaServices = () => {
    return(
        <section  >
           
           <div className="  my-5 pt-lg-5 pt-1 d-flex flex-column">
           <div className="px-5 row">
           <h2 >Planes Spa</h2>
                <p className="p-subtitle">Ofrecemos entrenamiento personalizado, con una pauta de creada especialmente para ti. Nos enfocamos en tus necesidades y metas. Te guiaremos en todo el proceso, además nuestros entrenadores podrán monitorear tu rendimiento, asegurándonos que cumplas tus objetivos.  </p>
           </div>
              
           <div className=" mx-2 mx-lg-0">
           {servicesSpa.map((service,index) =>    
                <CardServicesHorizontal key={index}  {...service}/>
            )}
           </div>
           </div>
        </section>
    )
}