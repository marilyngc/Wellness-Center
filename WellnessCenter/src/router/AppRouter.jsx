import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import { HomePage } from '../components/pages/homePage/HomePage.jsx';
import ErrorPage from "../components/pages/errorPage/ErrorPage.jsx";
import GimPage from '../components/pages/gimPage/GimPage.jsx';
import { SpaPage } from '../components/pages/spaPage/SpaPage.jsx';
import SteticPage from '../components/pages/steticPage/SteticPage.jsx';

export const AppRouter = () => {
    const [count, setCount] = useState(0)
    return(
     <BrowserRouter>
     <Routes>
        <Route element={<Layout/>}>
          {/* body de la primera pagina */}
          <Route path="/" element={<HomePage/> }/>
          <Route path="/gimnasio" element={<GimPage/> }/>
          <Route path="/spa" element={<SpaPage/>}/>
          <Route path="/estética" element={<SteticPage/>}/>
          <Route path="*" element={<ErrorPage/> }/>
        </Route>
     </Routes>
     <Routes>
     </Routes>
     
     </BrowserRouter>
    )
}