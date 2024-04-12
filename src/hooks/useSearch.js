import { useState } from "react";
import { useFetch } from "./useFetch";

export const useSearch = () => {
  const [contador, setContador] = useState(1);
  const [inputValue, setinputValue] = useState("");

  const { myEstado } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${contador} `
  );

  const searchByNumber = (e) => {
    e.preventDefault();
    setContador(inputValue);
    setinputValue("");
  };

  const modifyInputNumber = (e) => {
    setinputValue(e.target.value);
  };

  const aumentar = () => {
    if (typeof contador === "number") {
      setContador(contador + 1);
    } else {
      setContador(myEstado.id + 1);
    }
  };

  const restar = () => {
    if (typeof contador === "number") {
      setContador(contador - 1);
    } else {
      setContador(myEstado.id - 1);
    }
  };

  return {
    contador,
    inputValue,
    searchByNumber,
    modifyInputNumber,
    aumentar,
    restar,
  };
};
