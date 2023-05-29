import React, { useState, useEffect } from "react";
import "../../styles/saves.css";

import { getDatos } from "../funciones";

function SavetText(props) {
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
            // id={x.id}
            className="p4_BP5" /* MODIFICAR --ID-- DESPUES */
          >
            {check.slice(props.start, props.end).map((x) => (
              <div className="inputText" key={x.id}>
                <input
                  id={props.id}
                  type={props.type}
                  name={x.name}
                  autoComplete="off"
                  min={props.min}
                  max={props.max}
                  minLength={props.minLength}
                  maxLength={props.maxLength}
                  onChange={props.handle}
                />
              </div>
            ))}
          </label>
        </div>
      </div>
    </div>
  );
}

export default SavetText;
