import React from "react";
import './Footer.css'
import { FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import { BtnReserveRoutes } from "../../common/btnReserveRoutes/BtnReserveRoutes";
import networks from "../../../assets/contents/logoSpa.jpg"
import networksGym from "../../../assets/contents/imageGym.png"

const Footer  = () => {
    return <footer className="">
        <div className="container d-flex  row pt-5  m-auto">
        <div className="col  px-5   py-1">
        <h4 className="text-light  ">¿Dónde estamos?</h4>
        <div className="d-flex mt-5">
        <FaMapMarkerAlt  className="fs-1 text-light"/>
        <a target="_blank" href="https://www.google.com/maps/place/Paso+de+los+Andes+1658,+M5502+Capital,+Mendoza/@-32.8808557,-68.8578459,15z/data=!4m16!1m9!3m8!1s0x967e08ff646ab6a1:0x39c194559b53b7fe!2sPaso+de+los+Andes+1658,+M5502+Capital,+Mendoza!3b1!8m2!3d-32.8808629!4d-68.8581815!10e5!16s%2Fg%2F11d_9f9hpp!3m5!1s0x967e08ff646ab6a1:0x39c194559b53b7fe!8m2!3d-32.8808629!4d-68.8581815!16s%2Fg%2F11d_9f9hpp?entry=ttu" className="text-light   w-75 ms-3"> Paso de los Andes 1658,
Mendoza, Argentina 5500.</a>
     
        </div>
    
        <div className="  d-flex flex-column  mt-lg-5 justify-content-between  mb-4">
            <h3 className="pb-lg-2 pt-lg-0 pt-4 pb-2  ps-3 fs-5 text-light">
            ¿Tenés alguna duda?
            </h3>
          
     <BtnReserveRoutes/>



          </div>
        </div>
        <div className="col-lg-7 col mx-lg-5 pb-5">
                <div className="d-flex flex-column  text-light  ">
                <div className="d-flex w-50 m-auto ps-lg-5 ps-4 ">

        <h4  >   Seguínos</h4>
        < FaInstagram className=" fs-1  ms-3 text-light"/>
        </div>
           
             
             
               
                <div className="  row   container-networks mt-lg-5 mt-3 ">
                <div className="col-6 ">
                        <a  target="_blank" href="https://www.instagram.com/wellnesscenter.spa/?hl=es-la" className="m-lg-4 p-lg-1 ps-2 "> @wellnesscenter.spa</a>
               
                <div className=" ms-5 mt-4 container-img ">
                        <img src={networks} alt="" />
                        </div>
                </div>
                <div className="col-6">
                        <a target="_blank" href="https://www.instagram.com/wellnesselectrogym/?hl=es-la" className="m-lg-4 p-lg-1 ps-2 ">  @wellnesselectrogym</a>
              
                <div className="ms-5 mt-4 container-img  ">
                <img src={networksGym} alt=""  />
                       </div>
                </div>
                </div>
              
                </div>
      
       

        </div>

        </div>
 
            <h6 className="px-4 pb-3 p-secondary">Desarrollado por Camila Minoldo, Marilyn Celis, Karina Paz y Luis Taliercio</h6>
        </footer>
}

export default Footer;