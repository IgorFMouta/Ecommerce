import { Link } from "react-router-dom";
import {Title, Div, Body, A} from "./styles";

    return(
    <>
 <Body>
    <Div>
       <Title>Login</Title>
           <input type ="text" placeholder="E-mail, Nome de Usuario"></input>
           <input type ="text" placeholder="Senha cadastrada"></input>
           <Link to="/">
               <p><button>Logar</button></p>
           </Link>
     <p><A href="#">Criar conta</A></p>
        <Link to="/login/recuperar">Esqueceu  senha?</Link>
    </Div>
 </Body>
    </>
    )
}

export default login;