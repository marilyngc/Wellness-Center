import { CardServicesHorizontal } from "../cardServicesHorizontal/CardServicesHorizontal.jsx"
import { servicesSpa } from "../../../data/MOCK_DATA"
import "./spaServices.css";

export const SpaServices = () => {
    return(
        <section  >
           
           <div className="  my-5 pt-5 d-flex flex-column">
           <div className="px-5 row">
           <h1 >Planes Spa</h1>
                <p className="p-subtitle">Ofrecemos entrenamiento personalizado, con una pauta de creada especialmente para ti. Nos enfocamos en tus necesidades y metas. Te guiaremos en todo el proceso, además nuestros entrenadores podrán monitorear tu rendimiento, asegurándonos que cumplas tus objetivos.  </p>
           </div>
              
           <div className=" mx-4 mx-lg-0">
           {servicesSpa.map((service,index) =>    
            
            <CardServicesHorizontal key={index}  {...service}/>
           
            )}
           </div>
       
         
         

           

    
           
              
           </div>
         
            
            
        </section>
    )
}