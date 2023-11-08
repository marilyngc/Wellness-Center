import { CardPersonalized } from "../cardPersonalized/CardPersonalized"
import { Footer } from "../footer/Footer"
import { FrontPage } from "../frontPage/FrontPage"
import { ReviewWellness } from "../reviewWellness/reviewWellness"


// Aqui visualizamos todo el contenido del body del Home
export const ItemListContainer = () =>  {
// Page HOME
    return(
        <main className=" container-fluid  " >
        {/* convertir a responsive */}
        <FrontPage/> 
        <CardPersonalized/>
        <ReviewWellness/>
        <Footer/>
        </main>
    )
}