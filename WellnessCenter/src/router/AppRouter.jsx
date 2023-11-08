import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import { ItemListContainer } from "../components/layout/itemListContainer/ItemListContainer";
import ErrorPage from "../components/pages/errorPage/ErrorPage.jsx";
import GimPage from '../components/pages/gimPage/GimPage.jsx';

export const AppRouter = () => {
    const [count, setCount] = useState(0)
    return(
     <BrowserRouter>
     <Routes>
        <Route element={<Layout/>}>
          {/* body de la primera pagina */}
          <Route path="/" element={<ItemListContainer/> }/>
          <Route path="/gimnasio" element={<GimPage/> }/>

          <Route path="*" element={<ErrorPage/> }/>
        </Route>
     </Routes>
     <Routes>
     </Routes>
     
     </BrowserRouter>
    )
}