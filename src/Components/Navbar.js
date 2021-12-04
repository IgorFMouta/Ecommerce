import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
      <div>
        <img className="logoUmbreon" src="https://github.com/RBaltar/Ecommerce/blob/main/src/StylesGlobal/img/logo.png?raw=true" alt="logo umbreon" />
      </div>  
        <div className="nav-container">
            <p className="nomeNave"> Umbreon Gestor </p>
            <i className="fas fa-code"></i>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to={`/getClientes`}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Listar Clientes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to={`/getProduto`}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                 Listar Produtos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to={`/cadastrarCliente`}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Cadastrar Cliente
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to={`/cadastrarProduto`}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Cadastrar Produto
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}> <img className="iconPoke" src="https://cf.shopee.com.br/file/c1eb4f5906aa0c51875bd3065c1043e5" />  </i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
