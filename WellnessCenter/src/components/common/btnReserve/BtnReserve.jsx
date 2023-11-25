import React from "react";
// Sitio de iconos para react
import { BsWhatsapp } from 'react-icons/bs';


export const BtnReserve = ({phoneNumber,text}) => {
    const handleButtonClick =() => {

        // formateamo el numero de teléfono eliminadno cualquier carácter no numerico
        const formattedPhoneNumber = phoneNumber.replace(/\D/g," ");

        // creamos la URL de Whatsapp con el numero de telefono
        const whatsappURL = `https://wa.me/${formattedPhoneNumber}`;

        //Abrimos la URL en una nueva ventana o pestaña
        window.open(whatsappURL, "_blank");
    }

    return (
        <div >
<button className="btn-reserve" onClick={handleButtonClick}> <BsWhatsapp size={27} /><label>{text}</label></button>

</div>
    )
}