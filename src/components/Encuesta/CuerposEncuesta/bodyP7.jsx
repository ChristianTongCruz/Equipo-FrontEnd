import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import '../../../styles/pagesBody.css';

import { ApiUrl } from "../../apiLink";
import { getDatos } from "../../funciones";
import Avanzar from "../../Botones/Avanzar";

import SaveRadioYBox from '../../Saves/SaveRadioYBox'
import SaveText from '../../Saves/SaveText'

export default function BodyP7() {
  
  //Variables para guardar selecciones
  const [localidad_cuenta_instituciones_salud_bienestar, setLocalidad_cuenta_instituciones_salud_bienestar] = useState([]);
  const [organizacion_social_localidad, setOrganizacion_social_localidad] = useState([]);
  const [conoce_funciones_alcalde_ccpp_las_palmas, setConoce_funciones_alcalde_ccpp_las_palmas] = useState();
  const [problemas_localidad, setProblemas_localidad] = useState();
  const [manera_solucionar_problemas, setManera_solucionar_problemas] = useState();
  const [comunidad_cinco_anos, setComunidad_cinco_anos] = useState();
  const [pertenece_orgranizacion_social_comuna_deporte_religiosa, setPertenece_orgranizacion_social_comuna_deporte_religiosa] = useState();
  const [organizacion_social_comunal_cumple_plan_trabajo, setOrganizacion_social_comunal_cumple_plan_trabajo] = useState();
  const [asistieron_faena_comunal, setAsistieron_faena_comunal] = useState();

  //Funcion que guarda selecciones
  const handleChangePregunta1 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setLocalidad_cuenta_instituciones_salud_bienestar([...localidad_cuenta_instituciones_salud_bienestar, valor]);
    } else {
      setLocalidad_cuenta_instituciones_salud_bienestar(localidad_cuenta_instituciones_salud_bienestar.filter((o) => o !== valor));
    }
  };

  const handleChangePregunta2 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setOrganizacion_social_localidad([...organizacion_social_localidad, valor]);
    } else {
      setOrganizacion_social_localidad(organizacion_social_localidad.filter((o) => o !== valor));
    }
  };

  const handleChangePregunta3 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setConoce_funciones_alcalde_ccpp_las_palmas(valor);
    }
  };

  const handleChangePregunta4 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setProblemas_localidad(valor);
  };
  
  const handleChangePregunta5 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setManera_solucionar_problemas(valor);
  };

  const handleChangePregunta6 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setComunidad_cinco_anos(valor);
  };

  const handleChangePregunta7 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setPertenece_orgranizacion_social_comuna_deporte_religiosa(valor);
    }
  };

  const handleChangePregunta8 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setOrganizacion_social_comunal_cumple_plan_trabajo(valor);
    }
  };

  const handleChangePregunta9 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setAsistieron_faena_comunal(valor);
    }
  };

  //Variable que nos permite avanzar de página

  const alone = useNavigate();

  //Postear
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(ApiUrl, {
        localidad_cuenta_instituciones_salud_bienestar,
        organizacion_social_localidad,
        conoce_funciones_alcalde_ccpp_las_palmas,
        problemas_localidad,
        manera_solucionar_problemas,
        comunidad_cinco_anos,
        pertenece_orgranizacion_social_comuna_deporte_religiosa,
        organizacion_social_comunal_cumple_plan_trabajo,
        asistieron_faena_comunal
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    alone(`/page8`);
    {/* window.location.href = `/page8` */}
  };

  return (
    <div className="BodyPage">
      <div className="contBP">
        <div className="tituloBP">
          <h1>DESARROLLO SOCIAL Y DERECHOS</h1>
        </div>
        <div className="contFormBP">
          <form className="formBP" onSubmit={handleSubmit}>
            {/* PREGUNTA 1 */}
            <SaveRadioYBox
              titulo="1. ¿Conoce si su localidad cuenta con instituciones que velan por su salud y bienestar? (Puede marcar mas de una opción)"
              htmlFor="p1_P7"
              start={0}
              end={6}
              className="inputCheckbox"
              type="checkbox"
              handle={handleChangePregunta1}
            />

            {/* PREGUNTA 2 */}
            <SaveRadioYBox
              titulo="2. ¿Qué organizaciones sociales existen en su localidad? (Puede marcar mas de una opción)"
              htmlFor="p2_P7"
              start={7}
              end={17}
              className="inputCheckbox"
              type="checkbox"
              handle={handleChangePregunta2}
            />

            {/* PREGUNTA 3 */}
            <SaveRadioYBox
              titulo="3. ¿Conoce usted las funciones que realiza el alcalde del CC.PP Las Palmas? "
              start={0}
              end={2}
              htmlFor = "pr3_P7"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta3}
            />

            {/* PREGUNTA 4 */}
            <SaveText
              titulo="4. Identifique problemas que tiene su comunidad."
              htmlFor="pr4_P7"
              start={3}
              end={4}
              id="PR4_P7"
              type="text"
              minLength={1}
              maxLength={45}
              handle={handleChangePregunta4}
            />

            {/* PREGUNTA 5 */}
            <SaveText
              titulo="5. ¿De que manera cree que se solucionarían esos problemas?"
              htmlFor="pr5_P7"
              start={3}
              end={4}
              id="PR5_P7"
              type="text"
              minLength={1}
              maxLength={45}
              handle={handleChangePregunta5}
            />

            {/* PREGUNTA 6 */}
            <SaveText
              titulo="6. ¿Como le gustaría ver a su comunidad en 5 años?"
              htmlFor="pr6_P7"
              start={3}
              end={4}
              id="PR6_P7"
              type="text"
              minLength={1}
              maxLength={45}
              handle={handleChangePregunta6}
            />

            {/* PREGUNTA 7 */}
            <SaveRadioYBox
              titulo="7. ¿Pertenece a alguna organización social, comunal, deportiva o religiosa?"
              start={0}
              end={2}
              htmlFor = "pr7_P7"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta7}
            />

            {/* PREGUNTA 8 */}
            <SaveRadioYBox
              titulo="8. ¿Conoce si en la organización social o comunal se cumplen las actividades del plan de trabajo?"
              start={0}
              end={3}
              htmlFor = "pr8_P7"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta8}
            />

            {/* PREGUNTA 9 */}
            <SaveRadioYBox
              titulo="9. ¿Cuando fue la última vez que usted o los miembros del hogar asistieron a una faena comunal?"
              start={4}
              end={8}
              htmlFor = "pr9_P7"
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta9}
            />

            <div className="botonBP">
              <Avanzar text="Siguiente" />
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
