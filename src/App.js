import React from 'react';
// import PrimaryButton from "./styles/index";
import GlobalStyle from "./StylesGlobal/styles";
import CadastroCliente from "./cadastro/CadastroCliente";
import GetCliente from "./controller/ClienteController";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Busca from './Busca/index';
// import Pesquisa from './Pesquisa';
import Header from './StylesGlobal/Navbar-Footer';



function App() {

  return (
    <>
    <GlobalStyle/>
    <Header/>
    <BrowserRouter>
    {/* <Pesquisa/> */}
    <Switch>
    <Route path="/busca" exact component = {Busca}/>
    <Route path="/get" exact component={GetCliente} />
    <Route path="/" exact component={CadastroCliente}/>
    <Route path="/login" exact  component={Login}/>
    </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;