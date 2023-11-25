import React from "react";
import "./reviewWellness.css";
import { Image } from "react-bootstrap";
import logoWellness from "../../../assets/logo/LogoWellness.png"
import bienestar from "../../../assets/contents/wellnessBienestar.png"


export const ReviewWellness = () => {

    return (
        <section className=" d-flex row  justify-content-center my-5 ">
            <div className="col-4 d-flex justify-content-center align-items-center">
                <div className="  border-circle  d-flex justify-content-center align-items-center">
                    <Image src={logoWellness}   className="p-2"/>
                </div>
            </div>
            <div className="col-6   pt-5 ">
                <Image className="ps-5 imgBienestar" alt="Titulo bienestar" src={bienestar}/>
                
                <div className="">
                    <h5 className="mt-3">Conocénos</h5>
                    <p className="p-secondary">Wellness Center es un estilo de vida positivo y multidimensional, que busca que el ser humano explote su máximo potencial con el fin de llegar a un estado óptimo.

                    </p>
                    <p className="p-secondary">
                        Somos un centro donde aprenderás a alcanzar tu bienestar físico, emocional y estético. De la mano de profesionales capacitados, que estarán guiándote en cada paso.

                    </p>
                </div>
            </div>
        </section>
    )
}

