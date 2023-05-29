import React, { useState, useEffect } from "react";
import "../../styles/saves.css";

import { getDatos } from "../funciones";

function Desplegable(props) {
  //Llamando a la API
  const [check, setCheck] = useState([]);

  useEffect(() => {
    getDatos(setCheck).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="saveDesplegable">
      <h1>{props.titulo}</h1>
      <select onChange={props.handle} className="selectSave" defaultValue="default">
        <option value="default" disabled="disabled" >Seleccionar</option>
        {check.slice(props.start, props.end).map((x) => (
            <option key={x.id} value={x.title}>
              {x.title}
            </option>
        ))}
      </select>
    </div>
  );
}

export default Desplegable;
