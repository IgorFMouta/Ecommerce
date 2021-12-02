import React from 'react';
// import PrimaryButton from "./styles/index";
import GlobalStyle from "./styles/global"
import CadastroCliente from "./cadastro/CadastroCliente";
import Get from "./controller/ClienteController";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Busca from './Busca/index';
import Pesquisa from './Pesquisa';


function App() {

  return (
    <><GlobalStyle/>
    <BrowserRouter>
//essa pesquisa e por nome
    <Pesquisa/>
    <Switch>
    <Route path="/busca" component = {Busca}/>
    <Route path="/get" component={Get} />
    <Route path="/" exact component={CadastroCliente}/>
    <Route path="/login"  component={Login}/>
    </Switch>
    </BrowserRouter>
    </>

  )

}
export default App;