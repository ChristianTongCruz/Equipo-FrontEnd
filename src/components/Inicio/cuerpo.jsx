import React, { useState } from "react";
import "../../styles/inicioCuerpo.css";
import Escudo from "../../img/Escudo.png";
import TextoDos from "../../img/UniversidadTexto_2.png";
import { useNavigate } from "react-router-dom";

export default function Cuerpo() {
  //Navegacion
  const alone = useNavigate();

  const handleClick = () => {
    alone(`/page1`);
  };

  return (
    //Cuerpo del Inicio de Encuesta
    <>
      <div className="contenedorCuerpo">
        <div className="Escudo">
          <a href="https://unsm.edu.pe/" target="_blank">
            <img src={Escudo} alt="escudo" />
          </a>
        </div>
        <div className="Texto">
          <a href="https://unsm.edu.pe/" target="_blank">
            <img src={TextoDos} alt="texto" />
          </a>
        </div>
        <div className="Linea">
          <hr />
        </div>
        <div className="encuestaText">
          <h1>Encuesta poblacional</h1>
        </div>
        <div className="cajaEncuesta">
          <div className="formularioInicio">
            <div className="titulo">
              <h1>¡Bienvenido!</h1>
            </div>
            <form className="input">
              <div className="ingreseDatos">
                <h1>Ingrese sus datos</h1>
              </div>
              <div className="inputDatos">
                <div className="Correo">
                  <label htmlFor="correo">Correo electronico:</label>
                  <input
                    id="correoInp"
                    name="correo"
                    type="text"
                  />
                </div>
                <div className="Edad">
                  <label htmlFor="edad">Edad:</label>
                  <input
                    id="edadInp"
                    name="edad"
                    type="number"
                  />
                </div>
                <div className="Fecha">
                  <label htmlFor="fecha">Fecha actual:</label>
                  <input
                    id="fechaInp"
                    name="fecha"
                    type="date"
                  />
                </div>
              </div>
              <div className="boton">
                <button type="button" onClick={handleClick}>
                  Siguiente
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
