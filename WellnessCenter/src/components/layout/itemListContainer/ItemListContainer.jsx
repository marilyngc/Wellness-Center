import { CardPersonalized } from "../cardPersonalized/CardPersonalized"
import { FrontPage } from "../frontPage/FrontPage"


// Aqui visualizamos todo el contenido del body de la primera pagina
export const ItemListContainer = () =>  {

    return(
        <main className=" container-fluid  " >
        {/* convertir a responsive */}
        <FrontPage/> 
        <CardPersonalized/>
        </main>
    )
}