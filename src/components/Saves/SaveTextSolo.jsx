import React, { useState, useEffect } from "react";
import "../../styles/saves.css";

import { getDatos } from "../funciones";

function SavetTextSolo(props) {
  //Llamando a la API
  const [check, setCheck] = useState([]);

  useEffect(() => {
    getDatos(setCheck).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    check.slice(props.start, props.end).map((x) => (
      <div className="cajaInputSave" key={x.id}>
        <div className="name">
          <li>{x.title}:</li>
        </div>
        <div className="inputText">
          <input
            id={x.id}
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
      </div>
    ))
  );
}

export default SavetTextSolo;
