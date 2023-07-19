import React from "react";
import Header from "../components/Encuesta/cabeza";
import BodyP7 from "../components/Encuesta/CuerposEncuesta/bodyP7";
import Footer from "../components/Encuesta/pie";
import "../styles/pages.css"

export default function Page7() {
  return (
    <div className='contenedorPrincipal'>
      <Header />
      <BodyP7 />
      <Footer />
    </div>
  );
}