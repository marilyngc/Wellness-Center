import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar/Navbar.jsx";
import Footer from "./footer/Footer.jsx";

const Layout = ({}) =>{
    return <>
        <NavBar/>
        
        <Outlet/> 

        
 {/* lo quito por el momento porque me molestaba a la vista, luego lo acomodamos  */}
        {/* <Footer/> */}
    </>
}

export default Layout;