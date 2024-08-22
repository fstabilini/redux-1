import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../Redux/Slices/UserSlice";

export default function Profile() {
  const usuario = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(usuario);

  function actualizarUsuario() {
    dispatch(updateUser({ age: "36", gender: "male" }));
    console.log(usuario);
  }

  return (
    <div>
      <h1>Nombre: {usuario.name} </h1>
      <h1>Dirección: {usuario.address}</h1>
      <button onClick={actualizarUsuario}>Actualizar estado</button>
    </div>
  );
}
