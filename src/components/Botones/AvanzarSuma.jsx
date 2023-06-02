import "./BtnAvanRetro.css";

export default function AvanzarSuma(props) {

  return (
    <button className="btnAvanRetro" type="submit" onClick={props.extras}>
      {props.text}
    </button>
  );
}
