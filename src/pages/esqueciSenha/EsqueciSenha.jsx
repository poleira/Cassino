import React, { Component } from "react";
import "./EsqueciSenha.css";
import { GrUserAdmin } from "react-icons/gr";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default class EsqueciSenha extends Component {
  render() {
    return (
      <div className="cadastroBackground">
        <div className="cadastroContainerrr">
          <div className="cadastroElements">
            <div className="logoContainerr">
              <div className="logo"></div>
            </div>
            <h3 className="titulo">
              Informe seu usuário para recuperar sua senha
            </h3>
            <form action="">
              <div className="inputContainerr">
                <GrUserAdmin
                  style={{
                    color: "#282828",
                    marginLeft: "10px",
                    fontSize: 20,
                  }}
                />
                <input
                  className="input"
                  type="text"
                  placeholder="Digite seu usuário"
                />
              </div>
              <NavLink to="/login" className={"esqueceuSenha"}>
                Voltar
              </NavLink>
              <div className="submitContainerr">
                <input type="submit" className="button" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
