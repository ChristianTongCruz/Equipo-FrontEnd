import React from "react";
import "../../styles/pie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="textAnonimato">
        <h1>
          Todos los datos ingresados son totalmente anonimos - Universidad
          Nacional de San Martin
        </h1>
      </div>
      <div className="logosRedes">
        <a href="https://www.facebook.com/unsmperu" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="icon" icon={faFacebook} size="2xl" />
        </a>
        <a href="https://unsm.edu.pe/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faGlobe} size="2xl" /></a>
        <a href="https://www.instagram.com/unsmperu/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faInstagram} size="2xl" /></a>
      </div>
    </footer>
  );
}
