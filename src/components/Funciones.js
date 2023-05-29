import axios from "axios";
import { ApiUrl } from "./apiLink";

export const getDatos = async (state) => {
  const linkAPI = ApiUrl;

  const peticion = await axios.get(linkAPI);
  state(Object.values(peticion.data));
};

export const activarRadio = (chk, id) => {
  const activar = document.getElementById(id);
  activar.disabled = chk.checked ? false : true;
  if (!activar.disabled) {
    activar.focus();
  }
};

export const desactivarRadio = (chk, id) => {
  const activar = document.getElementById(id);
  activar.disabled = chk.checked ? true : false;
  if (!activar.disabled) {
    activar.focus();
  }

  activar.value = "";
};

export const sumarStates = (a, b, c) => {
  a(b + c);
}

export const elegirRadioOtros = (a, b, m, n) => {
  if (a !== "ON") {
    m(a);
    n(undefined);
  } else {
    m(b);
  }
};

export const elegirRadioYesOrNot = (a, b, m, n) => {
  if (a === "NO") {
    m(a);
    n(undefined);
  } else {
    m(b);
  }
};

export const activarCheckbox = (chk) => {
  const activar = document.getElementById("HOLAMUNDO");
  activar.disabled = chk.checked ? false : true;
  if (!activar.disabled) {
    activar.focus();
  }else{
    activar.value = "";
  }
};
