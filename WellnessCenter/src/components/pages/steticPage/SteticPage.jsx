import React, { useEffect } from "react";
import { useLocation } from "react-router";
import './SteticPage.css';
import './SteticService.jsx';
import  { useState } from "react";
import { SteticServices } from '../../../data/MOCK_DATA.jsx';
import { CardServicesHorizontal } from "../../common/cardServicesHorizontal/CardServicesHorizontal.jsx";

 const SteticPage = () => {
      const location = useLocation();
      let redirectedTo;
      if(location.state) redirectedTo = location.state.redirectedTo;
      const [currentService, setCurrentService] = useState(redirectedTo ? redirectedTo : "Tratamientos Faciales");
      const handleImageClick = (serviceTitle) => {
        setCurrentService(serviceTitle); // se va actualizando con SteticServices
      }
      useEffect(()=>{
        let offsetTop  = document.getElementById(currentService).offsetTop;
        window.scrollTo({
            top: offsetTop-100, 
            behavior: "smooth"
        });
      },[currentService])

    return (
        <>
        <main>
        <section>
        <div className="steticPage">
        <div className="steticServices py-0 px-4 px-lg-5 ">
          {SteticServices.map((service, index) => (
           
            <div className="steticService" onClick={() => handleImageClick(service.title)}
             style={{ background: `url(${service.img})` }}
              key={index}>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
      </section>
         
      
      <section className="mt-1 container-fluid d-flex flex-column">
      {SteticServices.map((category, index) => {
      if (category.title === currentService) {
        return( 
        <>
          <h2 className="mt-lg-4 ms-lg-5  m-auto" id={currentService}>{currentService}</h2>
          {category.services.map((service, serviceIndex) =>(
     <CardServicesHorizontal key={serviceIndex} {...service} />
    ))}
    </>
    )};
    return null; // O simplemente no devolver nada 
  })}
 
</section>
        </main>
     

        </>
    
       
    );
  };
 
export default SteticPage