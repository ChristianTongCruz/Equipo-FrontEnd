import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import '../../../styles/pagesBody.css';

import { ApiUrl } from "../../apiLink";
import { getDatos } from "../../funciones";
import Avanzar from "../../Botones/Avanzar";

import SaveRadioYBox from '../../Saves/SaveRadioYBox'

export default function BodyP10() {
  
  //Variables para guardar selecciones
  const [hogar_tiene, setHogar_tiene] = useState([]);
  const [localidad_cuenta, setLocalidad_cuenta] = useState([]);
  const [utiliza_servicio_internet, setUtiliza_servicio_internet] = useState();
  const [tipo_informacion_internet, setTipo_informacion_internet] = useState([]);
  const [calidad_servicio_internet, setCalidad_servicio_internet] = useState();

  //Funcion que guarda selecciones
  const handleChangePregunta1 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setHogar_tiene([...hogar_tiene, valor]);
    } else {
      setHogar_tiene(hogar_tiene.filter((o) => o !== valor));
    }
  };

  const handleChangePregunta2 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setLocalidad_cuenta([...localidad_cuenta, valor]);
    } else {
      setLocalidad_cuenta(localidad_cuenta.filter((o) => o !== valor));
    }
  };

  const handleChangePregunta3 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setUtiliza_servicio_internet(valor);
    }
  };

  const handleChangePregunta4 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setTipo_informacion_internet([...tipo_informacion_internet, valor]);
    } else {
      setTipo_informacion_internet(tipo_informacion_internet.filter((o) => o !== valor));
    }
  };

  const handleChangePregunta5 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setCalidad_servicio_internet(valor);
    }
  };

  //Variable que nos permite avanzar de página

  const alone = useNavigate();

  //Postear
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(ApiUrl, {
        hogar_tiene,
        localidad_cuenta,
        utiliza_servicio_internet,
        tipo_informacion_internet,
        calidad_servicio_internet
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
          <h1>Aspectos de tecnologias de la información y comunicación</h1>
        </div>
        <div className="contFormBP">
          <form className="formBP" onSubmit={handleSubmit}>

            {/* PREGUNTA 1 */}
            <SaveRadioYBox
              titulo="1. Su hogar tiene: (Puede marcar más de una alternativa)"
              htmlFor="p1_P10"
              start={0}
              end={14}
              className="inputCheckbox"
              type="checkbox"
              handle={handleChangePregunta1}
            />

            {/* PREGUNTA 2 */}
            <SaveRadioYBox
              titulo="2. En su localidad cuenta con los servicios que a continuación se menciona: (Puede marcar más de una alternativa)"
              htmlFor="p2_P10"
              start={15}
              end={19}
              className="inputCheckbox"
              type="checkbox"
              handle={handleChangePregunta2}
            />

            {/* PREGUNTA 3 */}
            <SaveRadioYBox
              titulo="3. ¿Utiliza el servicio de internet?"
              start={9}
              end={11}
              htmlFor = "pr3_P10"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta3}
            />

            {/* PREGUNTA 4 */}
            <SaveRadioYBox
              titulo="4. ¿Que tipo de información busca en internet? (Puede marcar más de una alternativa)"
              htmlFor="p4_P10"
              start={12}
              end={19}
              className="inputCheckbox"
              type="checkbox"
              handle={handleChangePregunta4}
            />

            {/* PREGUNTA 5 */}
            <SaveRadioYBox
              titulo="5. ¿Como considera el servicio de internet?"
              start={20}
              end={23}
              htmlFor = "pr5_P10"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta5}
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
