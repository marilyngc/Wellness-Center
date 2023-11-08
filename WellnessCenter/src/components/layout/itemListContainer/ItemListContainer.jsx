import { CardPersonalized } from "../cardPersonalized/CardPersonalized"
import { FrontPage } from "../frontPage/FrontPage"


// Aqui visualizamos todo el contenido del body del Home
export const ItemListContainer = () =>  {
// Page HOME
    return(
        <main className=" container-fluid  " >
        {/* convertir a responsive */}
        <FrontPage/> 
        <CardPersonalized/>
        </main>
    )
}