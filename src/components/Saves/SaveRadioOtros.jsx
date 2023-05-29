import React, { useState, useEffect } from "react";
import "../../styles/saves.css";

import { getDatos, activarRadio, desactivarRadio } from "../funciones";

function SaveRadioOtros(props) {

  const handleClickActivar = (e) => {
    activarRadio(e.target, props.id);
  };
  
  const handleClickDesactivar = (e) => {
    desactivarRadio(e.target, props.id);
  };
  //Llamando a la API
  const [check, setCheck] = useState([]);

  useEffect(() => {
    getDatos(setCheck).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="cajaSave">
      <div className="tituloSave">
        <h1>{props.titulo}</h1>
      </div>
      <div className="cajaOpcionesSave">
        <div className="opcionesSave">
          <label
            htmlFor={props.htmlFor}
            // key={x.id}
            // id={x.id}  /* MODIFICAR --ID-- DESPUES */
          >
            <div className="labelSave">
              {check.slice(props.start, props.end).map((x) => (
                <div className="cajaInputSave" key={x.id}>
                  <div className="name">
                    <li>{x.title}</li>
                  </div>
                  <div className="inputRadio">
                    <input
                      id={x.id}
                      type="radio"
                      name={props.htmlFor}
                      value={x.title}
                      onChange={props.handle1}
                      onClick={handleClickDesactivar}
                    />
                  </div>
                </div>
              ))}
              <div className="cajaInputSave">
                <div className="name">
                  <li>Otros</li>
                </div>
                <div className="inputText">
                  <input
                    id={props.id}
                    type="text"
                    autoComplete="off"
                    name={props.htmlFor}
                    minLength={props.minLength}
                    maxLength={props.maxLength}
                    onChange={props.handle2}
                    disabled="disabled"
                  />
                </div>
                <div className="inputRadio">
                  <input
                    id="otrosRadio"
                    type="radio"
                    name={props.htmlFor}
                    onClick={handleClickActivar}
                    onChange={props.handle1}
                  />
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SaveRadioOtros;
