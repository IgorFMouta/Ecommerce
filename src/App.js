import React from 'react';
// import PrimaryButton from "./styles/index";
import GlobalStyle from "./styles/global"
import CadastroCliente from "./cadastro/CadastroCliente";
import Get from "./controller/ClienteController";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";


function App() {

  return (
    <><GlobalStyle/>
    <BrowserRouter>
    <Switch>
    <Route path="/get" component={Get} />
    <Route path="/" component={CadastroCliente}/>
    <Route path="/Login" component={Login}/>
    </Switch>
    </BrowserRouter>
    </>

  )

}
export default App;