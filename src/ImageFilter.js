import React from "react";
import alimentacion from "./assets/images/alimentacion.svg";
import otros from "./assets/images/otros.svg";
import salud from "./assets/images/salud.svg";
import transporte from "./assets/images/transporte.svg";    
import utilidades from "./assets/images/utilidades.svg";
import {Icono} from "./Components/UI"

export default (type) => {
    const Images = {
        Restaurante: <Icono src={alimentacion} alt="alimentacion"/>,
        Salud: <Icono src={salud} alt="salud"/>,
        Transporte: <Icono src={transporte} alt="transporte"/>,
        Utilidades: <Icono src={utilidades} alt="utilidades"/>,
        default: <Icono src={otros} alt="otros"/>,
    };
    return Images[type] || Images["default"]
}