import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { upDateUser2 } from "../Redux/Slices/UserSlice2";

export default function Profile2() {
  const usuario2 = useSelector((state) => state.user2);
  const dispatch = useDispatch();

  console.log(usuario2);

  function actualizarUsuario2() {
    dispatch(upDateUser2({ age: "45", gender: "female" }));
  }

  return (
    <div>
      <h2>Nombre: {usuario2.name}</h2>
      <h2>Dirección: {usuario2.address}</h2>
      <button onClick={actualizarUsuario2}>Actualizar estado</button>
    </div>
  );
}
