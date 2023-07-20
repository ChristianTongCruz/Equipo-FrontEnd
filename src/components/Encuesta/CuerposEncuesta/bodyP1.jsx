import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../styles/pagesBody.css";

import { ApiUrl } from "../../apiLink";
import { getDatos } from "../../funciones";
import Avanzar from "../../Botones/Avanzar";

import SaveText from "../../Saves/SaveText";
import SaveRadioYBox from "../../Saves/SaveRadioYBox";

export default function BodyP1() {
  //Variables para guardar selecciones

  const [lugar_nacimiento, setLugar_nacimiento] = useState();
  const [sexo, setSexo] = useState();
  const [edad, setEdad] = useState();
  const [estado_civil, setEstado_civil] = useState();
  const [residencia_permanente_vivienda, setResidencia_permanente_vivienda] =
    useState();
  const [numero_piso_vivienda, setNumero_piso_vivienda] = useState();

  const handleChangePregunta1 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setLugar_nacimiento(valor);
  };

  //Funcion que guarda selecciones

  const handleChangePregunta2 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setSexo(valor);
    }
  };

  const handleChangePregunta3 = (e) => {
    const { value } = e.target;
    const valor = parseInt(value, 10);
    setEdad(valor);
  };

  const handleChangePregunta4 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setEstado_civil(valor);
    }
  };

  const handleChangePregunta5 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setResidencia_permanente_vivienda(valor);
    }
  };

  const handleChangePregunta6 = (e) => {
    const { value } = e.target;
    const valor = parseInt(value, 10);
    setNumero_piso_vivienda(valor);
  };

  //Variable que nos permite avanzar de página

  const alone = useNavigate();

  //Funcion que envia las selecciones a la API

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(ApiUrl, {
        lugar_nacimiento,
        sexo,
        edad,
        estado_civil,
        residencia_permanente_vivienda,
        numero_piso_vivienda,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    alone(`/page2`);
    {/* window.location.href = `/page2` */}
  };
  return (
    <div className="BodyPage">
      <div className="contBP">
        <div className="tituloBP">
          <h1>Educación</h1>
        </div>
        <div className="contFormBP">
          <form className="formBP" onSubmit={handleSubmit}>
            {/* PREGUNTA 1s */}
            <SaveText
              titulo="1. Lugar de nacimiento: "
              htmlFor="pr1_P1"
              start={0}
              end={1}
              id="PR1_P1"
              type="text"
              minLength={1}
              maxLength={45}
              handle={handleChangePregunta1}
            />

            {/* PREGUNTA 2 */}
            <SaveRadioYBox
              titulo="2. Sexo:"
              start={1}
              end={3}
              htmlFor="pr2_P1"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta2}
            />

            {/* PREGUNTA 3 */}
            <SaveText
              titulo="3. Edad:"
              htmlFor="pr3_P1"
              start={3}
              end={4}
              id="PR3_P1"
              type="number"
              min={1}
              max={100}
              handle={handleChangePregunta3}
            />

            {/* PREGUNTA 4 */}
            <SaveRadioYBox
              titulo="4. Estado civil de la persona entrevistada:"
              start={4}
              end={9}
              htmlFor="pr4_P1"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta4}
            />

            {/* PREGUNTA 5 */}
            <SaveRadioYBox
              titulo="5. ¿Reside usted permanentemente en esta vivienda?"
              start={9}
              end={11}
              htmlFor="pr5_P1"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta5}
            />

            {/* PREGUNTA 6 */}
            <SaveText
              titulo="6. Numero de pisos o niveles de la vivienda:"
              htmlFor="pr6_P1"
              start={11}
              end={12}
              id="PR6_P1"
              type="number"
              min={1}
              max={10}
              handle={handleChangePregunta6}
            />

            <div className="botonBP">
              <Avanzar text="Siguiente" page="page2" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export const ExportedCheck1 = () => {
  const [check, setCheck] = useState(null);

  useEffect(() => {
    getDatos(setCheck).catch((error) => {
      console.log(error);
    });
  }, []);

  return check;
};
