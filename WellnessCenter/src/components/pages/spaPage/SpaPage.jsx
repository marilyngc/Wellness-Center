import { CardServiceSlick } from "../../common/cardServices-slick/CardServicesSlick"
import { SpaServices } from "../../common/spaServices/SpaServices"



export const SpaPage = () => {

    return(
      <main className="mt-lg-4">
              <CardServiceSlick/>
         
              <SpaServices/>
      </main>

  
    )
}