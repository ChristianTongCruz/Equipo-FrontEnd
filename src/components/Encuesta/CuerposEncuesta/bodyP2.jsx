import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import "../../../styles/pagesBody.css";
import "../../../styles/saves.css";

import { ApiUrl } from "../../apiLink";
import {
  sumarStates,
  elegirRadioOtros,
  elegirRadioYesOrNot,
  getDatos,
} from "../../funciones";

import AvanzarSuma from "../../Botones/AvanzarSuma";

import SaveRadioYBox from "../../Saves/SaveRadioYBox";
import SaveTextSolo from "../../Saves/SaveTextSolo";
import SaveText from "../../Saves/SaveText";
import SaveRadioYesOrNot from "../../Saves/SaveRadioYesOrNot";
import SaveRadioOtros from "../../Saves/SaveRadioOtros";
import Desplegable from "../../Saves/Desplegable";

export default function BodyP2() {
  //FAMILIA Y HOGAR

  //Variables para guardar selecciones
  const [familias_viven_vivienda, setFamilias_viven_vivienda] = useState();
  const [
    personas_viven_permanentemente_hombres,
    setPersonas_viven_permanentemente_hombres,
  ] = useState();
  const [
    personas_viven_permanentemente_mujeres,
    setPersonas_viven_permanentemente_mujeres,
  ] = useState();
  const [
    personas_viven_permanentemente_total,
    setPersonas_viven_permanentemente_total,
  ] = useState();
  const [anos_reside_vivienda, setAnos_reside_vivienda] = useState();
  const [mujer_gestacion, setMujer_gestacion] = useState();
  const [miembro_habilidades_diferentes, setMiembro_habilidades_diferentes] =
    useState();
  ////Estado de la pregunta 6, agregamos nuevos estados ya que esta pregunta tiene un input activable
  const [toma_decisiones_familia, setToma_decisiones_familia] = useState();
  const [opcion1_6, setOpcion1_6] = useState();
  const [opcion2_6, setOpcion2_6] = useState();
  //Estado de la pregunta 7, agregamos nuevos estados ya que esta pregunta tiene un input activable
  const [posee_tipo_seguro, setPosee_tipo_seguro] = useState();
  const [opcion1_7, setOpcion1_7] = useState();
  const [opcion2_7, setOpcion2_7] = useState();

  //Funciones que guarda selecciones
  const handleChangePregunta1 = (e) => {
    const { value } = e.target;
    const valor = parseInt(value, 10);
    setFamilias_viven_vivienda(valor);
  };

  const handleChangePregunta2 = (e) => {
    const { value } = e.target;
    const valor = parseInt(value, 10);
    setPersonas_viven_permanentemente_hombres(valor);
  };

  const handleChangePregunta2_2 = (e) => {
    const { value } = e.target;
    const valor = parseInt(value, 10);
    setPersonas_viven_permanentemente_mujeres(valor);
  };

  const handleChangePregunta3 = (e) => {
    const { value } = e.target;
    const valor = parseInt(value, 10);
    setAnos_reside_vivienda(valor);
  };

  const handleChangePregunta4 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setMujer_gestacion(valor);
    }
  };

  const handleChangePregunta5 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setMiembro_habilidades_diferentes(valor);
    }
  };

  //-Pregunta 6
  const handleChangeOpcion1_6 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setOpcion1_6(valor);
    }
  };

  const handleChangeOpcion2_6 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setOpcion2_6(valor);
  };
  //Pregunta 6-

  //-Pregunta 7
  const handleChangeOpcion1_7 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setOpcion1_7(valor);
    }
  };

  const handleChangeOpcion2_7 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setOpcion2_7(valor);
  };
  //Pregunta 7-

  //VIVIENDA

  //Variables para guardar selecciones

  //Estado de la pregunta 1, agregamos nuevos estados ya que esta pregunta tiene un input activable
  const [tipo_vivienda, setTipo_vivienda] = useState();
  const [opcion1_1_2, setOpcion1_1_2] = useState();
  const [opcion2_1_2, setOpcion2_1_2] = useState();

  //Estado de la pregunta 2, agregamos nuevos estados ya que esta pregunta tiene un input activable
  const [estado_registral_vivienda, setEstado_registral_vivienda] = useState();
  const [opcion1_2_2, setOpcion1_2_2] = useState();
  const [opcion2_2_2, setOpcion2_2_2] = useState();

  const [titulo_propiedad, setTitulo_propiedad] = useState();
  const [ambientes_habitaciones_vivienda, setAmbientes_habitaciones_vivienda] =
    useState();
  const [dormitorios_vivienda, setDormitorios_vivienda] = useState();
  const [material_predominante_piso, setMaterial_predominante_piso] =
    useState();
  const [material_predominante_pared, setMaterial_predominante_pared] =
    useState();
  const [material_predominante_techo, setMaterial_predominante_techo] =
    useState();
  const [
    disposicion_agua_publica_domicilio,
    setDisposicion_agua_publica_domicilio,
  ] = useState();
  const [tanque_agua, setTanque_agua] = useState();
  const [servicio_higienico_conecta, setServicio_higienico_conecta] =
    useState();

  //Estado de la pregunta 10, agregamos nuevos estados ya que esta pregunta tiene un input activable
  const [tipo_alumbrado, setTipo_alumbrado] = useState();
  const [opcion1_10_2, setOpcion1_10_2] = useState();
  const [opcion2_10_2, setOpcion2_10_2] = useState();

  //Estado de la pregunta 11, agregamos nuevos estados ya que esta pregunta tiene un input activable
  const [combustible_cocinar, setCombustible_cocinar] = useState();
  const [opcion1_11_2, setOpcion1_11_2] = useState();
  const [opcion2_11_2, setOpcion2_11_2] = useState();

  //Estado de la pregunta 12, agregamos nuevos estados ya que esta pregunta tiene un input activable
  const [basura_hogar, setBasura_hogar] = useState();
  const [opcion1_12_2, setOpcion1_12_2] = useState();
  const [opcion2_12_2, setOpcion2_12_2] = useState();

  //Funciones que guarda selecciones
  //-Pregunta 1
  const handleChangeOpcion1_1_2 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setOpcion1_1_2(valor);
    }
  };

  const handleChangeOpcion2_1_2 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setOpcion2_1_2(valor);
  };
  //Pregunta 1-

  //-Pregunta 2
  const handleChangeOpcion1_2_2 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setOpcion1_2_2(valor);
    }
  };

  const handleChangeOpcion2_2_2 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setOpcion2_2_2(valor);
  };
  //Pregunta 2-

  const handleChangePregunta3_2 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setTitulo_propiedad(valor);
  };

  const handleChangePregunta4_2 = (e) => {
    const { value } = e.target;
    const valor = parseInt(value, 10);
    setAmbientes_habitaciones_vivienda(valor);
  };

  const handleChangePregunta5_2 = (e) => {
    const { value } = e.target;
    const valor = parseInt(value, 10);
    setDormitorios_vivienda(valor);
  };

  //-Pregunta 6
  const handleChangeDesplegable1_6_2 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setMaterial_predominante_piso(valor);
  };

  const handleChangeDesplegable2_6_2 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setMaterial_predominante_pared(valor);
  };

  const handleChangeDesplegable3_6_2 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setMaterial_predominante_techo(valor);
  };
  //Pregunta 6-

  const handleChangePregunta7_2 = (e) => {
    const { value } = e.target;
    const valor = parseInt(value, 10);
    setDisposicion_agua_publica_domicilio(valor);
  };

  const handleChangePregunta8_2 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setTanque_agua(valor);
    }
  };

  const handleChangePregunta9_2 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setServicio_higienico_conecta(valor);
    }
  };

  //-Pregunta 10
  const handleChangeOpcion1_10_2 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setOpcion1_10_2(valor);
    }
  };

  const handleChangeOpcion2_10_2 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setOpcion2_10_2(valor);
  };
  //Pregunta 10-

  //-Pregunta 11
  const handleChangeOpcion1_11_2 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setOpcion1_11_2(valor);
    }
  };

  const handleChangeOpcion2_11_2 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setOpcion2_11_2(valor);
  };
  //Pregunta 11-
  
  //-Pregunta 12
  const handleChangeOpcion1_12_2 = (e) => {
    const { value, checked } = e.target;
    const valor = value.toUpperCase();
    if (checked) {
      setOpcion1_12_2(valor);
    }
  };

  const handleChangeOpcion2_12_2 = (e) => {
    const { value } = e.target;
    const valor = value.toUpperCase();
    setOpcion2_12_2(valor);
  };
  //Pregunta 12-

  //Funciones extras
  const extras = () => {
    //Estamos sumando los inputs de la pregunta 2 - FAMILIA Y HOGAR
    sumarStates(
      setPersonas_viven_permanentemente_total,
      personas_viven_permanentemente_hombres,
      personas_viven_permanentemente_mujeres
    );

    //Sistema logico de la pregunta 6 - FAMILIA Y HOGAR
    elegirRadioOtros(
      opcion1_6,
      opcion2_6,
      setToma_decisiones_familia,
      setOpcion2_6
    );

    //Sistema logico de la pregunta 7 - FAMILIA Y HOGAR
    elegirRadioYesOrNot(
      opcion1_7,
      opcion2_7,
      setPosee_tipo_seguro,
      setOpcion2_7
    );

    //Sistema logico de la pregunta 1 - VIVIENDA
    elegirRadioOtros(
      opcion1_1_2,
      opcion2_1_2,
      setTipo_vivienda,
      setOpcion2_1_2
    );

    //Sistema logico de la pregunta 2 - VIVIENDA
    elegirRadioOtros(
      opcion1_2_2,
      opcion2_2_2,
      setEstado_registral_vivienda,
      setOpcion2_2_2
    );

    //Sistema logico de la pregunta 10 - VIVIENDA
    elegirRadioOtros(
      opcion1_10_2,
      opcion2_10_2,
      setTipo_alumbrado,
      setOpcion2_10_2
    );

    //Sistema logico de la pregunta 11 - VIVIENDA
    elegirRadioOtros(
      opcion1_11_2,
      opcion2_11_2,
      setCombustible_cocinar,
      setOpcion2_11_2
    );

    //Sistema logico de la pregunta 12 - VIVIENDA
    elegirRadioOtros(
      opcion1_12_2,
      opcion2_12_2,
      setBasura_hogar,
      setOpcion2_12_2
    );
  };

  //Variable que nos permite avanzar de página

  const alone = useNavigate();

  //Postear
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(ApiUrl, {
        familias_viven_vivienda,
        personas_viven_permanentemente_hombres,
        personas_viven_permanentemente_mujeres,
        personas_viven_permanentemente_total,
        anos_reside_vivienda,
        mujer_gestacion,
        miembro_habilidades_diferentes,
        toma_decisiones_familia,
        posee_tipo_seguro,
        tipo_vivienda,
        estado_registral_vivienda,
        titulo_propiedad,
        ambientes_habitaciones_vivienda,
        dormitorios_vivienda,
        material_predominante_piso,
        material_predominante_pared,
        material_predominante_techo,
        disposicion_agua_publica_domicilio,
        tanque_agua,
        servicio_higienico_conecta,
        tipo_alumbrado,
        combustible_cocinar,
        basura_hogar,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    alone(`/page3`);
    {/* window.location.href = `/page3` */}
  };

  return (
    <div className="BodyPage">
      <div className="contBP">
        <div className="tituloBP">
          <h1>FAMILIA Y VIVIENDA</h1>
        </div>
        <div className="contFormBP">
          <form className="formBP" onSubmit={handleSubmit}>
            {/* FAMILIA Y HOGAR */}
            <div className="SubTituloBP">
              <h1>FAMILIA Y HOGAR</h1>
            </div>

            {/* PREGUNTA 1 */}
            <SaveText
              titulo="1. ¿Cuántas familias viven en esta vivienda? "
              htmlFor="pr1_P2"
              start={0}
              end={1}
              type="number"
              id="PR1_P2"
              min={1}
              max={10}
              handle={handleChangePregunta1}
            />

            {/* PREGUNTA 2 */}
            <div className="cajaSave">
              <div className="tituloSave">
                <h1>
                  2. ¿Cuántas personas viven permanentemente en esta vida?
                </h1>
              </div>
              <div className="cajaOpcionesSave">
                <div className="opcionesSave">
                  <label
                    htmlFor="pr2_P2"
                    // id={x.id}
                  >
                    <SaveTextSolo
                      htmlFor="pr2_1_P2"
                      start={1}
                      end={2}
                      type="number"
                      min={1}
                      max={10}
                      handle={handleChangePregunta2}
                    />
                    <SaveTextSolo
                      htmlFor="pr2_2_P2"
                      start={1}
                      end={2}
                      type="number"
                      min={1}
                      max={10}
                      handle={handleChangePregunta2_2}
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* PREGUNTA 3 */}
            <SaveText
              titulo="3. ¿Cuántos años reside en esta vivienda?"
              htmlFor="pr3_P2"
              start={0}
              end={1}
              type="number"
              id="PR3_P2"
              min={1}
              max={50}
              handle={handleChangePregunta3}
            />

            {/* PREGUNTA 4 */}
            <SaveRadioYBox
              titulo="4. ¿Hay alguna mujer en estado de gestación?"
              htmlFor="pr4_P2"
              start={1}
              end={3}
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta4}
            />

            {/* PREGUNTA 5 */}
            <SaveRadioYBox
              titulo="5. ¿Hay algún miembro de la familia con habilidades diferentes?"
              htmlFor="pr5_P2"
              start={3}
              end={5}
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta5}
            />

            {/* PREGUNTA 6 */}
            <SaveRadioOtros
              titulo="6. ¿Quién toma las decisiones en la familia?"
              htmlFor="pr6_P2"
              start={3}
              end={6}
              id="PR6_P2"
              minLength={1}
              maxLength={45}
              handle1={handleChangeOpcion1_6}
              handle2={handleChangeOpcion2_6}
            />

            {/* PREGUNTA 7 */}
            <SaveRadioYesOrNot
              titulo="7. ¿Posee algún tipo de seguro de salud de vida?"
              htmlFor="pr7_P2"
              texto1="Si"
              texto2="No"
              id="PR7_P2"
              minLength={1}
              maxLength={45}
              handle1={handleChangeOpcion1_7}
              handle2={handleChangeOpcion2_7}
            />

            {/* VIVIENDA */}

            <div className="SubTituloBP">
              <h1>VIVIENDA</h1>
            </div>

            {/* PREGUNTA 1 */}
            <SaveRadioOtros
              titulo="1. Tipo de vivienda"
              htmlFor="pr1_P2_2"
              start={0}
              end={3}
              id="PR1_P2_2"
              minLength={1}
              maxLength={45}
              handle1={handleChangeOpcion1_1_2}
              handle2={handleChangeOpcion2_1_2}
            />

            {/* PREGUNTA 2 */}
            <SaveRadioOtros
              titulo="2. Estado registral de la vivienda:"
              htmlFor="pr2_P2_2"
              start={3}
              end={8}
              id="PR2_P2_2"
              minLength={1}
              maxLength={45}
              handle1={handleChangeOpcion1_2_2}
              handle2={handleChangeOpcion2_2_2}
            />

            {/* PREGUNTA 3 */}
            <SaveRadioYBox
              titulo="3. ¿Posee titulo de propiedad?"
              htmlFor="pr3_P2_2"
              start={3}
              end={5}
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta3_2}
            />

            {/* PREGUNTA 4 */}
            <SaveText
              titulo="4. ¿Cuántos ambientes/habitaciones tiene la vivienda? "
              htmlFor="pr4_P2_2"
              start={0}
              end={1}
              type="number"
              id="PR4_P2_2"
              min={1}
              max={20}
              handle={handleChangePregunta4_2}
            />

            {/* PREGUNTA 5 */}
            <SaveText
              titulo="5. ¿Cuántos dormitorios tiene su vivienda? "
              htmlFor="pr5_P2_2"
              start={0}
              end={1}
              type="number"
              id="PR5_P2_2"
              min={1}
              max={20}
              handle={handleChangePregunta5_2}
            />

            {/* PREGUNTA 6 */}
            <div className="cajaSave">
              <div className="tituloSave">
                <h1>6. El material predominante de su vivienda es:</h1>
              </div>
              <div className="cajaOpcionesSave">
                <div className="opcionesSave">
                  <Desplegable
                    titulo="Piso:"
                    start={3}
                    end={5}
                    handle={handleChangeDesplegable1_6_2}
                  />
                  <Desplegable
                    titulo="Pared:"
                    start={3}
                    end={5}
                    handle={handleChangeDesplegable2_6_2}
                  />
                  <Desplegable
                    titulo="Techo:"
                    start={3}
                    end={5}
                    handle={handleChangeDesplegable3_6_2}
                  />
                </div>
              </div>
            </div>

            {/* PREGUNTA 7 */}
            <SaveText
              titulo="7. ¿Cuántas horas dispone de agua en su domicilio? "
              htmlFor="pr7_P2_2"
              start={0}
              end={1}
              type="number"
              id="PR7_P2_2"
              min={1}
              max={24}
              handle={handleChangePregunta7_2}
            />

            {/* PREGUNTA 8 */}
            <SaveRadioYBox
              titulo="8. ¿Cuenta con un tanque de agua para almacenamiento?"
              htmlFor="pr8_P2"
              start={3}
              end={5}
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta8_2}
            />

            {/* PREGUNTA 9 */}
            <SaveRadioYBox
              titulo="9. El servicio higiénico que tiene en su vivienda se conecta a:"
              htmlFor="pr9_P2"
              start={3}
              end={8}
              className="inputRadio"
              type="radio"
              handle={handleChangePregunta9_2}
            />

            {/* PREGUNTA 10 */}
            <SaveRadioOtros
              titulo="10. ¿Cuál es el tipo de alumbrado que tiene su vivienda?"
              htmlFor="pr10_P2_2"
              start={8}
              end={11}
              id="PR10_P2_2"
              minLength={1}
              maxLength={45}
              handle1={handleChangeOpcion1_10_2}
              handle2={handleChangeOpcion2_10_2}
            />

            {/* PREGUNTA 11 */}
            <SaveRadioOtros
              titulo="11. ¿Cuál es el combustible que mas utiliza para cocinar?"
              htmlFor="pr11_P2_2"
              start={11}
              end={15}
              id="PR11_P2_2"
              minLength={1}
              maxLength={45}
              handle1={handleChangeOpcion1_11_2}
              handle2={handleChangeOpcion2_11_2}
            />

            {/* PREGUNTA 12 */}
            <SaveRadioOtros
              titulo="12. ¿Qué hace con la basura que genera en su hogar?"
              htmlFor="pr12_P2_2"
              start={15}
              end={19}
              id="PR12_P2_2"
              minLength={1}
              maxLength={45}
              handle1={handleChangeOpcion1_12_2}
              handle2={handleChangeOpcion2_12_2}
            />

            <div className="botonBP">
              <AvanzarSuma text="Siguiente" extras={extras} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export const ExportedCheck2 = () => {
  const [check, setCheck] = useState(null);

  useEffect(() => {
    getDatos(setCheck).catch((error) => {
      console.log(error);
    });
  }, []);

  return check;
};
