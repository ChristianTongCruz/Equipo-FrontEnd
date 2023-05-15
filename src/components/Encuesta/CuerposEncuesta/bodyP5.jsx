import React from "react";
import "../../../styles/bodyP5.css";

export default function BodyP5() {
  return (
    <div className="bP5">
      <div className="contBP5">
        <div className="tituloBP5">
          <h1>COMUNICACIÓN INTRAFAMILIAR</h1>
        </div>
        <div className="contForBP5">
          <form action="">
            <div className="cajaPregunta">
              <label htmlFor="UnoP5">
                1. ¿A que medios de comunicación tiene acceso su familia? (Puede
                marcar mas de una opción)
              </label>
              <div className="inputsP5">
                <div className="opcionesUnoP5">
                  <h1>a. Radio</h1>
                  <h1>b. Televisión</h1>
                  <h1>c. Periodicos</h1>
                  <h1>d. Alto parlante</h1>
                  <h1>e. Internet</h1>
                  <h1>Otro (Especifique)</h1>
                </div>
                <div className="casillasUnoP5">
                  <input type="checkbox" name="UnoP5" id="radioP5" />

                  <br />
                  <input type="checkbox" name="UnoP5" id="televisionP5" />

                  <br />
                  <input type="checkbox" name="UnoP5" id="periodicosP5" />

                  <br />
                  <input type="checkbox" name="UnoP5" id="altoParlanteP5" />

                  <br />
                  <input type="checkbox" name="UnoP5" id="internetP5" />

                  <br />
                  <input type="text" name="UnoP5" id="otroUnoP5" />
                </div>
              </div>
            </div>
            <div className="cajaPregunta">
              <label htmlFor="DosP5">
                2. ¿Que medio de transporte utiliza para ir a otra localidad más
                cercana? (Puede marcar mas de una opción)
              </label>
              <div className="inputsP5">
                <div className="opcionesDosP5">
                  <h1>a. Moto / Mototaxi</h1>
                  <h1>b. Bicicleta</h1>
                  <h1>c. Carro</h1>
                  <h1>d. Furgón / Furgoneta</h1>
                  <h1>e. Otro (Especifique)</h1>
                </div>
                <div className="casillasDosP5">
                  <input type="checkbox" name="DosP5" id="motoP5" />

                  <br />
                  <input type="checkbox" name="DosP5" id="bicicletaP5" />

                  <br />
                  <input type="checkbox" name="DosP5" id="carroP5" />

                  <br />
                  <input type="checkbox" name="DosP5" id="furgonP5" />

                  <br />
                  <input type="text" name="DosP5" id="otroDosP5" />
                </div>
              </div>
            </div>
            <div className="cajaPregunta">
              <label htmlFor="TresP5">
                3. ¿Cual es la vía predominante para arribar a su localidad? (Solamente puede marcar una opción)
              </label>
              <div className="inputsP5">
                <div className="opcionesTresP5">
                  <h1>a. Carretera asfaltada</h1>
                  <h1>b. Carretera afirmada</h1>
                  <h1>c. Trocha carrozable</h1>
                  <h1>d. Camino de herradura</h1>
                  <h1>e. Rio / Canal</h1>
                  <h1>f. Otro (Especifique)</h1>
                </div>
                <div className="casillasTresP5">
                  <input type="radio" name="TresP5" id="carreAsfalP5" />

                  <br />
                  <input type="radio" name="TresP5" id="carreAfirP5" />

                  <br />
                  <input type="radio" name="TresP5" id="trochaCarroP5" />

                  <br />
                  <input type="radio" name="TresP5" id="camHerraP5" />

                  <br />
                  <input type="radio" name="TresP5" id="rioCanalP5" />

                  <br />
                  <input type="text" name="TresP5" id="otroTresP5" />
                </div>
              </div>
            </div>
            <div className="cajaPregunta">
              <label htmlFor="CuatroP5">
              4. ¿Se encuentra en buen estado dicha vía? (Solamente puede marcar una opción)
              </label>
              <div className="inputsP5">
                <div className="opcionesCuatroP5">
                  <h1>a. Si</h1>
                  <h1>b. No</h1>
                </div>
                <div className="casillasCuatroP5">
                  <input type="radio" name="CuatroP5" id="siP5" />

                  <br />
                  <input type="radio" name="CuatroP5" id="noP5" />
                </div>
              </div>
            </div>
            <div className="botonP5">
              <button>Enviar respuestas</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
