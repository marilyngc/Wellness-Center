import React from "react";
import './SteticPage.css';
import './SteticService.jsx';
import  { useState } from "react";
import { SteticServices } from '../../../data/MOCK_DATA.jsx';
import { CardServicesHorizontal } from "../../common/cardServicesHorizontal/CardServicesHorizontal.jsx";

 const SteticPage = () => {
  
        const [currentService, setCurrentService] = useState("Tratamientos Faciales");
      
       const handleImageClick = (serviceTitle) => {
        setCurrentService(serviceTitle); // se va actualizando con SteticServices
       }
    return (
        <>
          <div className="steticPage">
        <div className="steticServices">
          {SteticServices.map((service, index) => (
           
            <div className="steticService" onClick={() => handleImageClick(service.title)}
             style={{ background: `url(${service.img})` }}
              key={index}>
              <h3>{service.title}</h3>
            </div>
          ))}


         
        </div>
      
      </div>
      
      <section className="mt-4 container-fluid d-flex flex-column">

        
  {SteticServices.map((category, index) => {
    

    
    if (category.title === currentService) {
       
      return( 
        <>
        
        <h1 className="mt-4 ms-5">{currentService}</h1>
        {category.services.map((service, serviceIndex) =>(
     
   
       
     <CardServicesHorizontal key={serviceIndex} {...service} />
    
   ))}

        </>
    )};
       
  
    return null; // O simplemente no devolver nada 
  })}
 
</section>

        </>
    
       
    );
  };
 
export default SteticPage