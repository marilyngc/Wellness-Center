import React from "react";
import "./reviewWellness.css";
import { Image } from "react-bootstrap";
import logoWellness from "../../../assets/logo/WellnessLogo.svg"

const ReviewWellness = () => {

    return (
        <section className=" d-flex row  justify-content-center my-5 ">
            <div className="col-4 d-flex justify-content-center align-items-center">
                <div className="  border-circle  d-flex justify-content-center">
                    <Image src={logoWellness} className="p-4 w-100"  />
                </div>
            </div>
            <div className="col-6 m-lg-5  pt-5 ">
                <h4 className="ps-5">Wellness = bienestar</h4>
                <div className="">
                    <h5 className="mt-1">Conocénos</h5>
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

export default ReviewWellness;