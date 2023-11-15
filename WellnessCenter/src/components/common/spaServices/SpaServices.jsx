import { CardPlanSpa } from "../cardPlanSpa/CardPlanSpa"
import { servicesSpa } from "../../../data/MOCK_DATA"

export const SpaServices = () => {
    return(
        <section className="  my-5 pt-5 container-fluid d-flex flex-column" >
           
                <h1 className="text-center">Nuestros servicios</h1>
                <p className="px-5 mt-5">Ofrecemos entrenamiento personalizado, con una pauta de creada especialmente para ti. Nos enfocamos en tus necesidades y metas. Te guiaremos en todo el proceso, además nuestros entrenadores podrán monitorear tu rendimiento, asegurándonos que cumplas tus objetivos.  </p>
            
           
                {servicesSpa.map((service,index) =>     <CardPlanSpa key={index}  {...service}/>)}
            
            
        </section>
    )
}