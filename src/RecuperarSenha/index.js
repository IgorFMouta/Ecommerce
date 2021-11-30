import { Link } from "react-router-dom";
import {Title, Div, Body} from "../Login/styles";

function RecuperarSenha(){
    return(
    <>
 <Body>
    <Div>
       <Title>Recuperação de senha</Title>
           <input type ="text" placeholder="E-mail, Nome de Usuario"></input>
           <input type ="text" placeholder="Ultima senha"></input>
           <input type ="text" placeholder="Nova senha"></input>
           <input type ="text" placeholder="Repetir senha"></input>
           <Link to="/">
               <p><button>Atualizar</button></p>
           </Link>
    </Div>
 </Body>
    </>
    )
}
export default RecuperarSenha;