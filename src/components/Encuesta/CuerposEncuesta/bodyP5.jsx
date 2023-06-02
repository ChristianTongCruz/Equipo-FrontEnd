import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../../styles/pagesBody.css';

import { ApiUrl } from "../../apiLink";
import { getDatos } from "../../funciones";
import Retroceder from "../../Botones/Retroceder";
import Avanzar from "../../Botones/Avanzar";

import SaveRadioYBox from '../../Saves/SaveRadioYBox'

export default function BodyP5() {

  //Variables para guardar selecciones
  const [medios_comunicacion_acceso_familia, setMedios_comunicacion_acceso_familia] = useState([]);
  const [medio_transporte_utiliza_localidad, setMedio_transporte_utiliza_localidad] = useState([]);
  const [via_predominante_localidad, setVia_predominante_localidad] = useState();
  const [buen_estado_via, setBuen_estado_via] = useState();

  //Funcion que guarda selecciones
  const handleChangePregunta1 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setMedios_comunicacion_acceso_familia([...medios_comunicacion_acceso_familia, valor]);
    } else {
      setMedios_comunicacion_acceso_familia(medios_comunicacion_acceso_familia.filter((o) => o !== valor));
    }
  };

  const handleChangePregunta2 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setMedio_transporte_utiliza_localidad([...medio_transporte_utiliza_localidad, valor]);
    } else {
      setMedio_transporte_utiliza_localidad(medio_transporte_utiliza_localidad.filter((o) => o !== valor));
    }
  };

  const handleChangePregunta3 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setVia_predominante_localidad(valor);
    }
  };

  const handleChangePregunta4 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setBuen_estado_via(valor);
    }
  };

  //Funcion que envia las selecciones a la API
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(ApiUrl, {
        medios_comunicacion_acceso_familia,
        medio_transporte_utiliza_localidad,
        via_predominante_localidad,
        buen_estado_via,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="BodyPage">
      <div className="contBP">
        <div className="tituloBP">
          <h1>COMUNICACIÓN INTRAFAMILIAR</h1>
        </div>
        <div className="contFormBP">
          <form className="formBP" onSubmit={handleSubmit}>

            {/* PREGUNTA 1 */}
            <SaveRadioYBox
              titulo="1. ¿A qué medios de comunicación tiene acceso la familia? (Puede marcar más de una opción)"
              htmlFor = "pr1_P5"
              start={0}
              end={7}
              className="inputCheckbox"
              type="checkbox"
              handle={handleChangePregunta1}
            />

            {/* PREGUNTA 2 */}
            <SaveRadioYBox
              titulo="2. ¿Qué medio de transporte utiliza para ir a otra localidad más cercana? (Puede marcar más de una opción)"
              htmlFor = "pr2_P5"
              start={7}
              end={13}
              className="inputCheckbox"
              type="checkbox"
              handle={handleChangePregunta2}
            />

            {/* PREGUNTA 3 */}
            <SaveRadioYBox
              titulo="3. ¿Cuál es la vía predominante para arribar a su localidad?"
              htmlFor = "pr3_P5"
              start={13}
              end={19}
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta3}
            />

            {/* PREGUNTA 4 */}
            <SaveRadioYBox
              titulo="4. ¿Se encuentra en buen estado dicha vía?"
              htmlFor = "pr4_P5"
              start={19}
              end={21}
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta4}
            />

            <div className="botonBP">
              <Avanzar text="Siguiente" page=""/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export const ExportedCheck5 = () => {
  const [check, setCheck] = useState(null);

  useEffect(() => {
    getDatos(setCheck).catch((error) => {
      console.log(error);
    });
  }, []);

  return check;
};
