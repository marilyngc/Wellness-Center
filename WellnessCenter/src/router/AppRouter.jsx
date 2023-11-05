import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/layout/navbar/Navbar";
import { useState } from 'react'
import { ItemListContainer } from "../components/layout/itemListContainer/ItemListContainer";

export const AppRouter = () => {
    const [count, setCount] = useState(0)
    return(
     <BrowserRouter>
     <Routes>
     <Route path="/" element = {<Navbar /> }/>
     <Route path="*" element={<Navbar />} />
    
     </Routes>
     <Routes>
  {/* body de la primera pagina */}
  <Route path="/" element={<ItemListContainer/> }/>
     </Routes>
     
     </BrowserRouter>
    )
}