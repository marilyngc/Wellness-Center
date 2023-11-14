import { CardPlanSpa } from "../cardPlanSpa/CardPlanSpa"
import { servicesSpa } from "../../../data/MOCK_DATA"

export const SpaServices = () => {
    return(
        <section>
            <div>
                <h1>Nuestros servicios</h1>
                <p>Ofrecemos entrenamiento personalizado, con una pauta de creada especialmente para ti. Nos enfocamos en tus necesidades y metas. Te guiaremos en todo el proceso, además nuestros entrenadores podrán monitorear tu rendimiento, asegurándonos que cumplas tus objetivos.  </p>
            </div>
            <div>
                {servicesSpa.map((service,index) =>     <CardPlanSpa key={index}  {...service}/>)}
            
            </div>
        </section>
    )
}