import React, { useState } from "react";
import axios from 'axios'
import "../../../styles/pagesBody.css";
import '../../../styles/saves.css'

import Retroceder from '../../Botones/Retroceder'
import Avanzar from '../../Botones/Avanzar'

import { ApiUrl } from "../../apiLink";
import SaveText from '../../Saves/SaveText'
import SaveRadioYBox from "../../Saves/SaveRadioYBox";
import Desplegable from "../../Saves/Desplegable";

export default function BodyP3() {
  //Variables para guardar selecciones
  const [lenguaje_aprendio_ninez, setLenguaje_aprendio_ninez] = useState();
  const [leer_escribir, setLeer_escribir] = useState();
  const [nivel_estudio_papa, setNivel_estudio_papa] = useState();
  const [nivel_estudio_mama, setNivel_estudio_mama] = useState();
  const [nivel_estudio_hijo1, setNivel_estudio_hijo1] = useState();
  const [nivel_estudio_hijo2, setNivel_estudio_hijo2] = useState();
  const [hijos_escolar_no_asisten, setHijos_escolar_no_asisten] = useState();
  const [localidad_cuenta, setLocalidad_cuenta] = useState([]);
  const [medio_movilizarse, setMedio_movilizarse] = useState([]);
  const [ie_ccpp_las_palmas_computadoras, setIe_ccpp_las_palmas_computadoras] =
    useState();
  const [ie_ccpp_las_palmas_biblioteca, setIe_ccpp_las_palmas_biblioteca] =
    useState();
  const [
    ie_ccpp_las_palmas_servicios_basicos,
    setIe_ccpp_las_palmas_servicios_basicos,
  ] = useState([]);

  //Funciones que guarda selecciones
  const handleChangePregunta1 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setLenguaje_aprendio_ninez(valor);
  };

  const handleChangePregunta2 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setLeer_escribir(valor);
    }
  };

  //-Pregunta 3
  const handleChangeDesplegable1_3 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setNivel_estudio_papa(valor);
  };

  const handleChangeDesplegable2_3 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setNivel_estudio_mama(valor);
  };

  const handleChangeDesplegable3_3 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setNivel_estudio_hijo1(valor);
  };

  const handleChangeDesplegable4_3 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setNivel_estudio_hijo2(valor);
  };
  //Pregunta 3-

  const handleChangePregunta4 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setHijos_escolar_no_asisten(valor);
    }
  };

  const handleChangePregunta5 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setLocalidad_cuenta([...localidad_cuenta, valor]);
    } else {
      setLocalidad_cuenta(localidad_cuenta.filter((o) => o !== valor));
    }
  };

  const handleChangePregunta6 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setMedio_movilizarse([...medio_movilizarse, valor]);
    } else {
      setMedio_movilizarse(medio_movilizarse.filter((o) => o !== valor));
    }
  };

  const handleChangePregunta7 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setIe_ccpp_las_palmas_computadoras(valor);
    }
  };

  const handleChangePregunta8 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setIe_ccpp_las_palmas_biblioteca(valor);
    }
  };

  const handleChangePregunta9 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setIe_ccpp_las_palmas_servicios_basicos([...ie_ccpp_las_palmas_servicios_basicos, valor]);
    } else {
      setIe_ccpp_las_palmas_servicios_basicos(ie_ccpp_las_palmas_servicios_basicos.filter((o) => o !== valor));
    }
  };

  //Postear
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(ApiUrl, {
        lenguaje_aprendio_ninez,
        leer_escribir,
        nivel_estudio_papa,
        nivel_estudio_mama,
        nivel_estudio_hijo1,
        nivel_estudio_hijo2,
        hijos_escolar_no_asisten,
        localidad_cuenta,
        medio_movilizarse,
        ie_ccpp_las_palmas_computadoras,
        ie_ccpp_las_palmas_biblioteca,
        ie_ccpp_las_palmas_servicios_basicos,
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
          <h1>Educación</h1>
        </div>
        <div className="contFormBP">
          <form className="formBP" onSubmit={handleSubmit}>
            {/* PREGUNTA 1 */}
            <SaveText
              titulo="1. ¿Cuál es el idioma o lengua con la que aprendió a hablar en su niñez? "
              htmlFor="pr1_P3"
              start={0}
              end={1}
              type="text"
              id="PR1_P3"
              minLength={1}
              maxLength={45}
              handle={handleChangePregunta1}
            />

            {/* PREGUNTA 2 */}
            <SaveRadioYBox
              titulo="2. ¿Sabe leer y escribir?"
              htmlFor="p2_P3"
              start={1}
              end={3}
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta2}
            />

            {/* PREGUNTA 3 */}
            <div className="cajaSave">
              <div className="tituloSave">
                <h1>3. Nivel de estudios de los miembros de su familia:</h1>
              </div>
              <div className="cajaOpcionesSave">
                <div className="opcionesSave">
                  <Desplegable
                    titulo="Papá:"
                    start={3}
                    end={5}
                    handle={handleChangeDesplegable1_3}
                  />
                  <Desplegable
                    titulo="Mamá:"
                    start={3}
                    end={5}
                    handle={handleChangeDesplegable2_3}
                  />
                  <Desplegable
                    titulo="Hijo:"
                    start={3}
                    end={5}
                    handle={handleChangeDesplegable3_3}
                  />
                  <Desplegable
                    titulo="Hija:"
                    start={3}
                    end={5}
                    handle={handleChangeDesplegable4_3}
                  />
                </div>
              </div>
            </div>

            {/* PREGUNTA 4 */}
            <SaveRadioYBox
              titulo="4. ¿Tienes hijos en edad escolar que no asisten al colegio?"
              htmlFor="p4_P3"
              start={7}
              end={9}
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta4}
            />

            {/* PREGUNTA 5 */}
            <SaveRadioYBox
              titulo="5. Su localidad cuenta con (Puede marcar mas de una opción):"
              htmlFor="p5_P3"
              start={9}
              end={14}
              className="inputCheckbox"
              type="checkbox"
              handle={handleChangePregunta5}
            />

            {/* PREGUNTA 6 */}
            <SaveRadioYBox
              titulo="6. ¿Que medio utilizan para movilizarse a las I.E.?"
              htmlFor="p6_P3"
              start={14}
              end={19}
              className="inputCheckbox"
              type="checkbox"
              handle={handleChangePregunta6}
            />

            {/* PREGUNTA 7 */}
            <SaveRadioYBox
              titulo="7. ¿La I.E. del CC.PP. Las Palmas cuenta con computadoras?"
              htmlFor="p7_P3"
              start={19}
              end={21}
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta7}
            />

            {/* PREGUNTA 8 */}
            <SaveRadioYBox
              titulo="8. ¿La I.E. del CC.PP. Las Palmas cuenta con biblioteca?"
              htmlFor="p8_P3"
              start={21}
              end={23}
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta8}
            />

            {/* PREGUNTA 9 */}
            <SaveRadioYBox
              titulo="9. ¿Con que servicios básicos cuenta la Instituación educativa del CC.PP. Las Palmas?"
              htmlFor="p9_P3"
              start={0}
              end={5}
              className="inputCheckbox"
              type="checkbox"
              handle={handleChangePregunta9}
            />

            <div className="botonBP">
              <Retroceder text="Retroceder" page="page2" />
              <Avanzar text="Siguiente" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
