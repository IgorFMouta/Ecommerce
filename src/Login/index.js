import React from "react";
import { useState } from "react/cjs/react.development";
import LoginForm from "./LoginForm";
import './estilo.css';


function Login (){

    
    /*Email e senha permitido*/
    const adminUser = {
        email: "grupo5@admin.com",
        password: "admin"
    }
    
    /*Estádos de autenticação */
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");
    
    const Login = details => {
        console.log(details);
        if (details.email == adminUser.email && details.password == adminUser.password){
            console.log("Logged in");
            setUser({
                name:details.name,
                email: details.email
            });
        } else {
            console.log("Details do not match!")
            setError(<p className="TextoErro">Opa! Tem coisa errada ai em...</p>)
        }

    }

    const Logout = () => {
        setUser({name: "", email: ""});
    }



    return(
        <div className="AppLogin">
            {(user.email != "") ? (
            <div className="welcome">                          
                <h2>Bem vindo, <span>{user.name}!</span></h2>                     
                <button onClick={Logout}>LOGOUT</button>
                <button>CONTINUAR</button>
            </div>
        ) : (
            <LoginForm Login={Login} error={error} />
        )} 
        </div>
    );

}

export default Login;