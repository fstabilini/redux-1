import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addDog } from "../Redux/Slices/DogSlice";

export default function ShowDogs() {
  const perros = useSelector((state) => state.dogs);
  const dispatch = useDispatch();

  function agregarPerro() {
    dispatch(addDog({ name: "Homero", age: 8, breed: "cocker" }));
  }
  return (
    <div>
      <h1>ShowDogs</h1>
      {perros.map((perro) => (
        <h3>{perro.name}</h3>
      ))}
      <button onClick={agregarPerro}>Agregar Perro</button>
    </div>
  );
}
