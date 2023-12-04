import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar/Navbar.jsx";
import Footer from "./footer/Footer.jsx";

const Layout = ({}) =>{
    return <>
        <NavBar/>
        
        <Outlet/> 

        
        <Footer/>
    </>
}

export default Layout;