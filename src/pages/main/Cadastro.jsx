import React, { Component } from "react";
import "./Cadastro.css";
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
        <div className="cadastroContainer">
          <div className="logoContainer">
            <div className="logo"></div>
          </div>
          <form action="">
            <div className="inputContainer">
              <FaRegUserCircle
                style={{
                  color: "#282828",
                  marginLeft: "10px",
                  fontSize: 20,
                }}
              />
              <input
                className="input"
                type="text"
                placeholder="Digite seu nome completo"
              />
            </div>
            <div className="inputContainer">
              <HiOutlineMail
                style={{
                  color: "#282828",
                  marginLeft: "10px",
                  fontSize: 20,
                }}
              />
              <input
                className="input"
                type="text"
                placeholder="Digite seu e-mail"
              />
            </div>
            <div className="inputContainer">
              <BsTelephone
                style={{
                  color: "#282828",
                  marginLeft: "10px",
                  fontSize: 20,
                }}
              />
              <input
                className="input"
                type="text"
                placeholder="Digite seu telefone completo"
              />
            </div>
            <div className="inputContainer">
              <GrUserAdmin
                style={{
                  color: "#282828",
                  marginLeft: "10px",
                  fontSize: 20,
                }}
              />
              <input className="input" type="text" placeholder="Usuário" />
            </div>
            <div className="inputContainer">
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
            <div className="inputContainer">
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
                placeholder="Repita sua senha"
              />
            </div>
            <div className="inputContainer">
              <FaRegMoneyBillAlt
                style={{
                  color: "#282828",
                  marginLeft: "10px",
                  fontSize: 20,
                }}
              />
              <input
                className="input"
                type="text"
                placeholder="Selecione o método de pagamento"
              />
            </div>
            <div className="submitContainer">
              <NavLink to="/login" className="button">
                cadastrar
              </NavLink>
              <NavLink to="/login" className={"loginButton"}>
                Login
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
