import "./BtnAvanRetro.css";
import { useNavigate } from "react-router-dom";

export default function Avanzar(props) {

  return (
    <button className="btnAvanRetro" type="submit">
      {props.text}
    </button>
  );
}
