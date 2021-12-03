import React from 'react';
// import PrimaryButton from "./styles/index";
import GlobalStyle from "./StylesGlobal/styles";
import CadastroCliente from "./cadastro/CadastroCliente";
import GetCliente from "./controller/ClienteController";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Busca from './Busca/index';
import Pesquisa from './Pesquisa';
import Navbar from './StylesGlobal/Navbar-Footer/Navbar';
import Footer from './StylesGlobal/Navbar-Footer/Footer';


function App() {

  return (
    <>
    <GlobalStyle/>
    <Navbar/>
    <BrowserRouter>
    <Pesquisa/>
    <Switch>
    <Route path="/busca" exact component = {Busca}/>
    <Route path="/get" exact component={GetCliente} />
    <Route path="/" exact component={CadastroCliente}/>
    <Route path="/login" exact  component={Login}/>
    </Switch>
    </BrowserRouter>
    <Footer/>
    </>

  )

}
export default App;