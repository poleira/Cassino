import React, { Component } from "react";
import "./Login.css";
import { FaRegUserCircle, FaRegMoneyBillAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default class Cadastro extends Component {
  render() {
    return (
      <div className="cadastroBackground">
        <div className="cadastroContainerr">
          <div className="cadastroElements">
            <div className="logoContainerr">
              <div className="logo"></div>
            </div>
            <h3 className="titulo">Entrar na minha conta</h3>
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
              <div className="inputContainerr">
                <RiLockPasswordLine
                  style={{
                    color: "#282828",
                    marginLeft: "10px",
                    fontSize: 20,
                  }}
                />
                <input
                  className="input"
                  type="text"
                  placeholder="Digite sua senha"
                />
              </div>
              <NavLink to="/esqueciSenha" className={"esqueceuSenha"}>
                Esqueci minha senha
              </NavLink>
              <div className="submitContainerr">
                <input type="submit" className="button" />
                <h1 className={"ou"}>ou</h1>
                <input type="submit" className="button" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
