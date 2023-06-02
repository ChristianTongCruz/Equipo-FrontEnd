import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import '../../../styles/pagesBody.css';

import { ApiUrl } from "../../apiLink";
import { getDatos } from "../../funciones";
import Avanzar from "../../Botones/Avanzar";

import SaveRadioYBox from '../../Saves/SaveRadioYBox'

export default function BodyP4() {
  
  //Variables para guardar selecciones
  const [comunicacion_permanente_familia, setComunicacion_permanente_familia] = useState();
  const [comunicacion_trato_pareja_familia, setComunicacion_trato_pareja_familia] = useState();
  const [comunicacion_padres_hijo, setComunicacion_padres_hijo] = useState();
  const [comunicacion_hermanos, setComunicacion_hermanos] = useState();

  //Funcion que guarda selecciones
  const handleChangePregunta1 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setComunicacion_permanente_familia(valor);
    }
  };

  const handleChangePregunta2 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setComunicacion_trato_pareja_familia(valor);
    }
  };

  const handleChangePregunta3 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setComunicacion_padres_hijo(valor);
    }
  };

  const handleChangePregunta4 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setComunicacion_hermanos(valor);
    }
  };

   //Variable que nos permite avanzar de página

   const alone = useNavigate();

  //Postear
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(ApiUrl, {
        comunicacion_permanente_familia,
        comunicacion_trato_pareja_familia,
        comunicacion_padres_hijo,
        comunicacion_hermanos,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    alone(`/page5`);
    {/* window.location.href = `/page5` */}
  };
  return (
    <div className="BodyPage">
      <div className="contBP">
        <div className="tituloBP">
          <h1>Educación</h1>
        </div>
        <div className="contFormBP">
          <form className="formBP" onSubmit={handleSubmit}>
            {/* PREGUNTA 1 */}
            <SaveRadioYBox
              titulo="1. ¿Existe comunicación permanente entre los miembros de la famlia? "
              start={0}
              end={3}
              htmlFor = "pr1_P4"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta1}
            />

            {/* PREGUNTA 2 */}
            <SaveRadioYBox
              titulo="2. ¿Cómo es la comunicación o trato con su pareja o entre la pareja de la familia? "
              start={3}
              end={6}
              htmlFor = "pr2_P4"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta2}
            />

            {/* PREGUNTA 3 */}
            <SaveRadioYBox
              titulo="3. ¿Cómo es la comunicación de los padres con los hijos? "
              start={6}
              end={9}
              htmlFor = "pr3_P4"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta3}
            />

            {/* PREGUNTA 4 */}
            <SaveRadioYBox
              titulo="4. ¿Cómo es la comunicación entre hermanos? "
              start={9}
              end={12}
              htmlFor = "pr4_P4"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta4}
            />

            <div className="botonBP">
              <Avanzar text="Siguiente" page="page5" />
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
