import React, { useState, useEffect } from "react";
import "../../styles/saves.css"

import { getDatos } from "../funciones";

function SaveRadioYBox(props) {
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
                  <div className={props.className}>
                    <input
                      id={x.id}
                      type={props.type}
                      name={props.htmlFor}
                      value={x.title}
                      onChange={props.handle}
                    />
                  </div>
                </div>
              ))}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SaveRadioYBox;