import "./BtnAvanRetro.css";

export default function Retroceder(props) {

  const handleClick = () => {
    window.location.href = `/${props.page}`
  };
  return (
    <button className="btnAvanRetro" type="button" onClick={handleClick}>
      {props.text}
    </button>
  );
}
