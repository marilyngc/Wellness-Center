import { CardPersonalized } from "../../common/cardPersonalized/CardPersonalized.jsx"
import { FrontPage } from "../../pages/frontPage/FrontPage.jsx"
import ReviewWellness from "../../common/reviewWellness/reviewWellness.jsx"

// Aqui visualizamos todo el contenido del body del Home
export const ItemListContainer = () =>  {
// Page HOME
    return(
        <main className=" container-fluid  " >
            {/* convertir a responsive */}
            <FrontPage/> 
            <CardPersonalized/>
            <ReviewWellness/>
        </main>
    )
}