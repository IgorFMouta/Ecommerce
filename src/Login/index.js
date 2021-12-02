import { Link } from "react-router-dom";
import {Title, Div, A} from "./styles";
import {Button} from "../styles/styles";
function Login (){
    return(
    <>
 {/* <Body> */}
    <Div>
       <Title>Login</Title>
       <p/><input type ="text" placeholder="E-mail, Nome de Usuario"></input>
           <p/><input type ="text" placeholder="Senha cadastrada"></input>
           <Link to="/">
               <p><Button>Logar</Button></p>
           </Link>
     <p><A href="#">Criar conta</A></p>
        <Link to="/login/recuperar">Esqueceu  senha?</Link>
    </Div>
 {/* </Body> */}
    </>
    )
}

export default Login;