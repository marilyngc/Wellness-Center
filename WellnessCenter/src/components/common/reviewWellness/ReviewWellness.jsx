import React from "react";
import "./reviewWellness.css";
import { Image } from "react-bootstrap";
import logoWellness from "../../../assets/logo/LogoWellness.png"
import bienestar from "../../../assets/contents/wellnessBienestar.png"


export const ReviewWellness = () => {

    return (
        <section >
            <div className=" d-flex row  justify-content-center my-lg-5 ">
            <div className="col-lg-4   d-flex justify-content-center align-items-center">
                <div className="  border-circle  d-flex justify-content-center align-items-center">
                    <Image src={logoWellness}   className="p-2"/>
                </div>
            </div>
            <div className="col-lg-6 col-12  pt-lg-3 ">
                <Image className="ps-lg-5 ms-lg-5 pb-lg-3  pb-4 imgBienestar " alt="Titulo bienestar" src={bienestar}/>
                
                <div className="pt-lg-0 pt-3">
                    <h5 className="mt-3">Conocénos</h5>
                    <p className="p-secondary ">Bienvenidos al único centro integral ubicado en el corazón de la Ciudad de Mendoza (Paso de los Andes 1658) donde nos enfocamos en trabajar con los tres pilares más importante para el ser humano: cuerpo, mente y espíritu.

                    </p>
                    <p className="p-secondary">
                    Wellness Center es un estilo de vida positivo y multidimensional, que busca que el ser humano explote su máximo potencial con el fin de llegar a un estado óptimo.

                    </p>
                    <p className="p-secondary">
                    Somos un centro donde aprenderás a alcanzar tu bienestar físico, emocional y estético. De la mano de profesionales capacitados, que estarán guiándote en cada paso.
                    </p>
                </div>
            </div>
            </div>
        
        </section>
    )
}

