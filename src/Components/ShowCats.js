import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCat, removeLastCat } from "../Redux/Slices/CatSlice";

export default function ShowCats() {
  const gatos = useSelector((state) => state.cats);
  const dispatch = useDispatch();

  function agregarGato() {
    dispatch(addCat({ name: "Bhumi", age: 7, type: "Callejero" }));
    console.log(gatos);
  }

  function removerGato() {
    dispatch(removeLastCat());
  }

  return (
    <div>
      <h1>ShowCats</h1>
      {gatos.map((gato) => (
        <h3>{gato.name}</h3>
      ))}
      <button onClick={agregarGato}>Agregar Gato</button>
      <button onClick={removerGato}>Remover Gato</button>
    </div>
  );
}
