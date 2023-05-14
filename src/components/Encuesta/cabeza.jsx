import React from "react";
import "../../styles/cabeza.css";
import Escudo from "../../img/Escudo.png";
import Texto from "../../img/UniversidadTexto.png";

export default function Header() {
  return (
    <header>
      <div className="escudoCabeza">
        <a href="https://unsm.edu.pe/" target="_blank">
          <img src={Escudo} alt="escudo" />
        </a>
      </div>
      <div className="texto">
        <a href="https://unsm.edu.pe/" target="_blank">
          <img src={Texto} alt="texto" />
        </a>
      </div>
    </header>
  );
}
