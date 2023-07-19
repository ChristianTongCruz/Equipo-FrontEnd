import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import '../../../styles/pagesBody.css';

import { ApiUrl } from "../../apiLink";
import { getDatos } from "../../funciones";
import Avanzar from "../../Botones/Avanzar";

import SaveRadioYBox from '../../Saves/SaveRadioYBox'
import SaveText from '../../Saves/SaveText'

export default function BodyP8() {
  
  //Variables para guardar selecciones
  const [lugares_turisticos_comunidad, setLugares_turisticos_comunidad] = useState();
  const [vias_acceso_turisticos_condiciones_adecuadas, setVias_acceso_turisticos_condiciones_adecuadas] = useState();
  const [fiestas_tradicionales_comunidad, setFiestas_tradicionales_comunidad] = useState();
  const [necesita_capacitarse_actividades_turisticas, setNecesita_capacitarse_actividades_turisticas] = useState([]);
  const [procede_turistas_visitan, setProcede_turistas_visitan] = useState();
  const [servicio_localidad_recibir_turistas, setServicio_localidad_recibir_turistas] = useState([]);
  const [meses_ano_afluencia_ccpp_las_palmas, setMeses_ano_afluencia_ccpp_las_palmas] = useState();

  //Funcion que guarda selecciones
  const handleChangePregunta1 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setLugares_turisticos_comunidad(valor);
  };

  const handleChangePregunta2 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setVias_acceso_turisticos_condiciones_adecuadas(valor);
    }
  };

  const handleChangePregunta3 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setFiestas_tradicionales_comunidad(valor);
  };

  const handleChangePregunta4 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setNecesita_capacitarse_actividades_turisticas([...necesita_capacitarse_actividades_turisticas, valor]);
    } else {
      setNecesita_capacitarse_actividades_turisticas(necesita_capacitarse_actividades_turisticas.filter((o) => o !== valor));
    }
  };

  const handleChangePregunta5 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setProcede_turistas_visitan(valor);
    }
  };

  const handleChangePregunta6 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setServicio_localidad_recibir_turistas([...servicio_localidad_recibir_turistas, valor]);
    } else {
      setServicio_localidad_recibir_turistas(servicio_localidad_recibir_turistas.filter((o) => o !== valor));
    }
  };

  const handleChangePregunta7 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setMeses_ano_afluencia_ccpp_las_palmas(valor);
  };

  //Variable que nos permite avanzar de página

  const alone = useNavigate();

  //Postear
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(ApiUrl, {
        lugares_turisticos_comunidad,
        vias_acceso_turisticos_condiciones_adecuadas,
        fiestas_tradicionales_comunidad,
        necesita_capacitarse_actividades_turisticas,
        procede_turistas_visitan,
        servicio_localidad_recibir_turistas,
        meses_ano_afluencia_ccpp_las_palmas
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    alone(`/page9`);
    {/* window.location.href = `/page9` */}
  };
  return (
    <div className="BodyPage">
      <div className="contBP">
        <div className="tituloBP">
          <h1>Información turística y cultural</h1>
        </div>
        <div className="contFormBP">
          <form className="formBP" onSubmit={handleSubmit}>
            {/* PREGUNTA 1 */}
            <SaveText
              titulo="1. ¿Qué lugares turísticos tiene su comunidad? (Mencione lo que sabe)"
              htmlFor="pr1_P8"
              start={0}
              end={1}
              id="PR1_P8"
              type="text"
              minLength={1}
              maxLength={45}
              handle={handleChangePregunta1}
            />

            {/* PREGUNTA 2 */}
            <SaveRadioYBox
              titulo="2. ¿Las vías de acceso a los lugares turísticos ofrecen condiciones adecuadas? "
              start={2}
              end={4}
              htmlFor = "pr2_P8"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta2}
            />

            {/* PREGUNTA 3 */}
            <SaveText
              titulo="3. ¿Cuales son las fiestas tradicionales de su comunidad? (Mencione los que conoce)"
              htmlFor="pr3_P8"
              start={0}
              end={1}
              id="PR3_P8"
              type="text"
              minLength={1}
              maxLength={45}
              handle={handleChangePregunta3}
            />

            {/* PREGUNTA 4 */}
            <SaveRadioYBox
              titulo="4. ¿En qué aspectos cree usted que necesita capacitarse para realizar actividades turísticas? (Puede marcar mas de una opción)"
              htmlFor="p4_P8"
              start={0}
              end={6}
              className="inputCheckbox"
              type="checkbox"
              handle={handleChangePregunta4}
            />

            {/* PREGUNTA 5 */}
            <SaveRadioYBox
              titulo="5. ¿De dónde proceden, mayormente, los turistas que los visitan?"
              start={7}
              end={11}
              htmlFor = "pr5_P8"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta5}
            />

            {/* PREGUNTA 6 */}
            <SaveRadioYBox
              titulo="6. ¿Con qué servicios cuenta su localidad para recibir turistas? (Puede marcar más de una opción)"
              htmlFor="p6_P8"
              start={0}
              end={6}
              className="inputCheckbox"
              type="checkbox"
              handle={handleChangePregunta6}
            />

            {/* PREGUNTA 7 */}
            <SaveText
              titulo="7. ¿En qué meses del año se presente mayor afluencia de turistas en el CC.PP. Las Palmas?"
              htmlFor="pr7_P8"
              start={0}
              end={1}
              id="PR7_P8"
              type="text"
              minLength={1}
              maxLength={45}
              handle={handleChangePregunta7}
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
