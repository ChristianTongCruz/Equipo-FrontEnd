import "./BtnAvanRetro.css";
import { useNavigate } from "react-router-dom";

export default function AvanzarSuma(props) {

  return (
    <button className="btnAvanRetro" type="submit" onClick={props.extras}>
      {props.text}
    </button>
  );
}
