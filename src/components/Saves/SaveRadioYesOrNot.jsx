import React  from "react";
import "../../styles/saves.css"

import { activarRadio, desactivarRadio } from "../funciones";

function SaveRadioYesOrNot(props) {


  const handleClickActivar = (e) => {
    activarRadio(e.target, props.id);
  };

  const handleClickDesactivar = (e) => {
    desactivarRadio(e.target, props.id);
  };

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
                <div className="cajaInputSave">
                  <div className="name">
                    <li>{props.texto1}</li>
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
                      id={props.htmlFor}
                      type="radio"
                      name={props.htmlFor}
                      value={props.texto1}
                      onChange={props.handle1}
                      onClick={handleClickActivar}
                    />
                  </div>
                </div>
                <div className="cajaInputSave">
                  <div className="name">
                    <li>{props.texto2}</li>
                  </div>
                  <div className="inputRadio">
                    <input
                      id={props.html}
                      type="radio"
                      name={props.htmlFor}
                      value={props.texto2}
                      onChange={props.handle1}
                      onClick={handleClickDesactivar}
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

export default SaveRadioYesOrNot;
