import "./BtnAvanRetro.css";
import { useNavigate } from "react-router-dom";

export default function Retroceder(props) {
  //Navegacion
  const alone = useNavigate();

  const handleClick = () => {
    alone(`/${props.page}`);
  };
  return (
    <button className="btnAvanRetro" type="button" onClick={handleClick}>
      {props.text}
    </button>
  );
}
