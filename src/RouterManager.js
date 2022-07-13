import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import React from "react";
import Cadastro from "./pages/main/Cadastro";
import Login from "./pages/login/Login";
import EsqueciSenha from "./pages/esqueciSenha/EsqueciSenha";

export default function RouteManager() {
  return (
    <Routes>
      <Route
        path="/home"
        element={<Cadastro name="My home goes here" id={1} bio={"Cassino"} />}
      />
      <Route path="login" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="esqueciSenha" element={<EsqueciSenha />} />
      <Route path="*" element={() => <Navigate to="/home" />} />
    </Routes>
  );
}
