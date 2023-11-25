import { CardPersonalized } from "../../common/cardPersonalized/CardPersonalized.jsx"
import { FrontPage } from "../../common/frontPage/FrontPage.jsx"
import {ReviewWellness} from "../../common/reviewWellness/ReviewWellness.jsx"

// Aqui visualizamos todo el contenido del body del Home
export const HomePage = () =>  {
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