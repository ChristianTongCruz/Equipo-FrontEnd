import React from "react";
import Header from "../components/Encuesta/cabeza";
import BodyP9 from "../components/Encuesta/CuerposEncuesta/bodyP9";
import Footer from "../components/Encuesta/pie";
import "../styles/pages.css"

export default function Page9() {
  return (
    <div className='contenedorPrincipal'>
      <Header />
      <BodyP9 />
      <Footer />
    </div>
  );
}