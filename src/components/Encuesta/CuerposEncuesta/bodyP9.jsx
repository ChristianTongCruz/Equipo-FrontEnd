import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import '../../../styles/pagesBody.css';

import { ApiUrl } from "../../apiLink";
import { getDatos } from "../../funciones";
import Avanzar from "../../Botones/Avanzar";

import SaveRadioYBox from '../../Saves/SaveRadioYBox'
import SaveText from '../../Saves/SaveText'
import SaveTextSolo from '../../Saves/SaveTextSolo'

export default function BodyP9() {
  
  //Variables para guardar selecciones
  const [tipo_vegetacion_localidad, setTipo_vegetacion_localidad] = useState();

  const [tipo_fauna_mamiferos, setTipo_fauna_mamiferos] = useState();
  const [tipo_fauna_aves, setTipo_fauna_aves] = useState();
  const [tipo_fauna_peces, setTipo_fauna_peces] = useState();
  const [tipo_fauna_reptiles, setTipo_fauna_reptiles] = useState();

  const [riachuelos_quebradas_localidad, setRiachuelos_quebradas_localidad] = useState();
  const [naciente_agua_localidad, setNaciente_agua_localidad] = useState();
  const [caza_furtiva_localidad, setCaza_furtiva_localidad] = useState();
  const [municipalidad_conservacion_medio_ambiente, setMunicipalidad_conservacion_medio_ambiente] = useState();
  const [zonas_depredadas_deforestadas_localidad, setZonas_depredadas_deforestadas_localidad] = useState();
  const [sabe_areas_bosque_protegidas_nacionales_internacionales, setSabe_areas_bosque_protegidas_nacionales_internacionales] = useState();
  const [instituciones_localidad_contribuye_cuidado_medio_ambiente, setInstituciones_localidad_contribuye_cuidado_medio_ambiente] = useState();


  //Funcion que guarda selecciones
  const handleChangePregunta1 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setTipo_vegetacion_localidad(valor);
  };

  const handleChangePregunta2 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setTipo_fauna_mamiferos(valor);
  };

  const handleChangePregunta2_2 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setTipo_fauna_aves(valor);
  };

  const handleChangePregunta2_3 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setTipo_fauna_peces(valor);
  };

  const handleChangePregunta2_4 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setTipo_fauna_reptiles(valor);
  };

  const handleChangePregunta3 = (e) => {
    const { value } = e.target;
    const valor = parseInt(value, 10);
    setRiachuelos_quebradas_localidad(valor);
  };

  const handleChangePregunta4 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setNaciente_agua_localidad(valor);
    }
  };

  const handleChangePregunta5 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setCaza_furtiva_localidad(valor);
    }
  };

  const handleChangePregunta6 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setMunicipalidad_conservacion_medio_ambiente(valor);
  };

  const handleChangePregunta7 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setZonas_depredadas_deforestadas_localidad(valor);
  };

  const handleChangePregunta8 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setSabe_areas_bosque_protegidas_nacionales_internacionales(valor);
    }
  };

  const handleChangePregunta9 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setInstituciones_localidad_contribuye_cuidado_medio_ambiente(valor);
    }
  };

  //Variable que nos permite avanzar de página

  const alone = useNavigate();

  //Postear
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(ApiUrl, {
        tipo_vegetacion_localidad,
        tipo_fauna_mamiferos,
        tipo_fauna_aves,
        tipo_fauna_peces,
        tipo_fauna_reptiles,
        riachuelos_quebradas_localidad,
        naciente_agua_localidad,
        caza_furtiva_localidad,
        municipalidad_conservacion_medio_ambiente,
        zonas_depredadas_deforestadas_localidad,
        sabe_areas_bosque_protegidas_nacionales_internacionales,
        instituciones_localidad_contribuye_cuidado_medio_ambiente
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    alone(`/page10`);
    {/* window.location.href = `/page10` */}
  };
  return (
    <div className="BodyPage">
      <div className="contBP">
        <div className="tituloBP">
          <h1>Ecología y medio ambiente</h1>
        </div>
        <div className="contFormBP">
          <form className="formBP" onSubmit={handleSubmit}>

            {/* PREGUNTA 1 */}
            <SaveText
              titulo="1. ¿Qué tipo de vegetación existe en su localidad?"
              htmlFor="pr1_P9"
              start={0}
              end={1}
              id="PR1_P9"
              type="text"
              minLength={1}
              maxLength={45}
              handle={handleChangePregunta1}
            />

             {/* PREGUNTA 2 */}
            <div className="cajaSave">
              <div className="tituloSave">
                <h1>
                  2. ¿Que tipo de fauna (animales silvestres) puede presenciarse en los alrededores de su localidad?
                </h1>
              </div>
              <div className="cajaOpcionesSave">
                <div className="opcionesSave">
                  <label
                    htmlFor="pr2_P2"
                    // id={x.id}
                  >
                    <SaveTextSolo
                      htmlFor="pr2_1_P9"
                      start={1}
                      end={2}
                      type="text"
                      min={1}
                      max={10}
                      handle={handleChangePregunta2}
                    />
                    <SaveTextSolo
                      htmlFor="pr2_2_P9"
                      start={1}
                      end={2}
                      type="text"
                      min={1}
                      max={10}
                      handle={handleChangePregunta2_2}
                    />
                    <SaveTextSolo
                      htmlFor="pr2_3_P9"
                      start={1}
                      end={2}
                      type="text"
                      min={1}
                      max={10}
                      handle={handleChangePregunta2_3}
                    />
                    <SaveTextSolo
                      htmlFor="pr2_4_P9"
                      start={1}
                      end={2}
                      type="text"
                      min={1}
                      max={10}
                      handle={handleChangePregunta2_4}
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* PREGUNTA 3 */}
            <SaveText
              titulo="3. ¿Cuántos riachuelos o quebradas existen en su localidad"
              htmlFor="pr3_P9"
              start={3}
              end={4}
              id="PR3_P9"
              type="number"
              min={1}
              max={100}
              handle={handleChangePregunta3}
            />

            {/* PREGUNTA 4 */}
            <SaveRadioYBox
              titulo="4. ¿Existe alguna naciente en de agua en su localidad? "
              start={9}
              end={11}
              htmlFor = "pr4_P9"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta4}
            />

            {/* PREGUNTA 5 */}
            <SaveRadioYBox
              titulo="5. ¿Se realiza caza furtiva (Animal silvestre) en su localidad? "
              start={9}
              end={11}
              htmlFor = "pr5_P9"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta5}
            />

            {/* PREGUNTA 6 */}
            <SaveText
              titulo="6. ¿Qué está haciendo la municipalidad por la conservación del medio ambiente? (Del centro poblado)"
              htmlFor="pr6_P9"
              start={0}
              end={1}
              id="PR6_P9"
              type="text"
              minLength={1}
              maxLength={45}
              handle={handleChangePregunta6}
            />

            {/* PREGUNTA 7 */}
            <SaveText
              titulo="7. ¿Existen zonas depredadas y deforestadas en su localidad?"
              htmlFor="pr7_P9"
              start={0}
              end={1}
              id="PR7_P9"
              type="text"
              minLength={1}
              maxLength={45}
              handle={handleChangePregunta7}
            />

            {/* PREGUNTA 8 */}
            <SaveRadioYBox
              titulo="8. ¿Sabe usted si existen áreas de bosque protegidas por organismos nacionales o internacionales? "
              start={9}
              end={11}
              htmlFor = "pr8_P9"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta8}
            />

            {/* PREGUNTA 9 */}
            <SaveRadioYBox
              titulo="9. ¿Existen instituciones en su localidad que contribuyen al cuidado del medio ambiente? "
              start={9}
              end={11}
              htmlFor = "pr9_P9"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta9}
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
