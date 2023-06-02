import "./BtnAvanRetro.css";

export default function Avanzar(props) {

  return (
    <button className="btnAvanRetro" type="submit">
      {props.text}
    </button>
  );
}
