import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import '../../../styles/pagesBody.css';

import { ApiUrl } from "../../apiLink";
import { getDatos, elegirRadioOtros } from "../../funciones";
import AvanzarSuma from "../../Botones/Avanzar";

import SaveRadioYBox from '../../Saves/SaveRadioYBox'
import SaveRadioOtros from '../../Saves/SaveRadioOtros'


export default function BodyP6() {
  
  //Variables para guardar selecciones
  const [actividad_predominante_generar_ingresos, setActividad_predominante_generar_ingresos] = useState();
 
  const [aporta_economicamente_familia, setAporta_economicamente_familia] = useState();
  const [opcion1_2, setOpcion1_2] = useState();
  const [opcion2_2, setOpcion2_2] = useState();

  const [margen_ingreso_mensual, setMargen_ingreso_mensual] = useState();
  const [hijos_escolar_trabajan, setHijos_escolar_trabajan] = useState();

  //Funcion que guarda selecciones
  const handleChangePregunta1 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setActividad_predominante_generar_ingresos(valor);
    }
  };

  //-Pregunta 2
  const handleChangeOpcion1_2 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setOpcion1_2(valor);
    }
  };

  const handleChangeOpcion2_2 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setOpcion2_2(valor);
  };
  //Pregunta 2-

  const handleChangePregunta3 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setMargen_ingreso_mensual(valor);
    }
  };

  const handleChangePregunta4 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setHijos_escolar_trabajan(valor);
    }
  };

  const extras = () => {
    //Sistema logico de la pregunta 2
    elegirRadioOtros(
      opcion1_2,
      opcion2_2,
      setAporta_economicamente_familia,
      setOpcion2_2
    );

  };

  //Variable que nos permite avanzar de página

  const alone = useNavigate();

  //Postear
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(ApiUrl, {
        actividad_predominante_generar_ingresos,
        aporta_economicamente_familia,
        margen_ingreso_mensual,
        hijos_escolar_trabajan,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    alone(`/page7`);
    {/* window.location.href = `/page7` */}
  };
  return (
    <div className="BodyPage">
      <div className="contBP">
        <div className="tituloBP">
          <h1>ACTIVIDADES ECONÓMICAS Y/O PRODUCTIVAS</h1>
        </div>
        <div className="contFormBP">
          <form className="formBP" onSubmit={handleSubmit}>
            {/* PREGUNTA 1 */}
            <SaveRadioYBox
              titulo="1. ¿Cual es la actividad predominante que realiza para generar ingresos económicos? "
              start={0}
              end={6}
              htmlFor = "pr1_P6"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta1}
            />

            {/* PREGUNTA 2 */}
            <SaveRadioOtros
              titulo="2. ¿Quién aporta económicamente a la canasta familiar?"
              htmlFor="pr2_P6"
              start={6}
              end={10}
              id="PR2_P6"
              minLength={1}
              maxLength={45}
              handle1={handleChangeOpcion1_2}
              handle2={handleChangeOpcion2_2}
            />

            {/* PREGUNTA 3 */}
            <SaveRadioYBox
              titulo="3. ¿En qué margen calcula el ingreso mensual a la canasta familiar? "
              start={10}
              end={14}
              htmlFor = "pr3_P6"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta3}
            />

            {/* PREGUNTA 4 */}
            <SaveRadioYBox
              titulo="4. ¿Tienes hijos en edad escolar que actualmente trabajan? "
              start={14}
              end={16}
              htmlFor = "pr4_P6"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta4}
            />

            <div className="botonBP">
              <AvanzarSuma text="Siguiente" extras = {extras}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export const ExportedCheck4 = () => {
  const [check, setCheck] = useState(null);

  useEffect(() => {
    getDatos(setCheck).catch((error) => {
      console.log(error);
    });
  }, []);

  return check;
};
