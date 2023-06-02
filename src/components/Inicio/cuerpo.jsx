import React, { useState } from "react";
import axios from "axios";
import { ApiUrl } from '../apiLink'
import "../../styles/inicioCuerpo.css";
import Escudo from "../../img/Escudo.png";
import TextoDos from "../../img/UniversidadTexto_2.png";
import { useNavigate } from "react-router-dom";

export default function Cuerpo() {
  //Variables para guardar selecciones
  const [correo, setCorreo] = useState();
  const [fecha, setFecha] = useState();

  //Funcion que guarda selecciones
  const handleChangePregunta1 = (e) => {
    const { value } = e.target;
    setCorreo(value);
  };

  const handleChangePregunta2 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setFecha(valor);
  };

  //Navegacion
  const alone = useNavigate();

  //Funcion que envia las selecciones a la API
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(ApiUrl, {
        correo,
        fecha
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

      alone(`/page1`);
      // window.location.href = `/page1`
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
            <form className="input" onSubmit={handleSubmit}>
              <div className="ingreseDatos">
                <h1>Ingrese sus datos</h1>
              </div>
              <div className="inputDatos">
                <div className="Correo">
                  <label htmlFor="correo">Correo electronico:</label>
                  <input id="correoInp" name="correo" type="email" autoComplete="off" onChange={handleChangePregunta1} />
                </div>
                <div className="Fecha">
                  <label htmlFor="fecha">Fecha actual:</label>
                  <input id="fechaInp" name="fecha" type="date" autoComplete="off" onChange={handleChangePregunta2} />
                </div>
              </div>
              <div className="boton">
                <button type="submit">
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
