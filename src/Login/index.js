// // import { Link } from "react-router-dom";
// // import {Title, Div, A} from "./styles";
// // import {Button} from "../StylesGlobal/styles";
// // function Login (){
// //     return(
// //     <>
// //  {/* <Body> */}
// //     <Div>
// //        <Title>Login</Title>
// //        <p/><input type ="text" placeholder="E-mail, Nome de Usuario"></input>
// //            <p/><input type ="text" placeholder="Senha cadastrada"></input>
// //            <Link to="/">
// //                <p><Button>Logar</Button></p>
// //            </Link>
// //      <p><A href="#">Criar conta</A></p>
// //         <Link to="/login/recuperar">Esqueceu  senha?</Link>
// //     </Div>
// //  {/* </Body> */}
// //     </>
// //     )
// // }

// // export default Login;


// import { Link,} from "react-router-dom";
//  import {Title, Div, A} from "./styles";

//  import React,{useState} from "react";


// function login(){

//   const [nome, setNome] = useState('');
//  const [senha, setSenha]= useState('');

// function validade(e){
//     if(senha == "admin" && nome == "admin"){
//     }else {
//         <span>Login incorreto</span>
//     }
// }

// return(
//     <>

//          <Div>
//             <Title>Login</Title>
//                 <input
//                  value={nome}
//                  onChange={(e)=>setNome(e.target.value)} 
//                  type ="text"
//                  placeholder="Nome de Usuario">
//                 </input>
//                 <input 
//                  value={senha}
//                  onChange={(e)=>setSenha(e.target.value)}
//                  type ="text"
//                  placeholder="Senha cadastrada">
//                 </input>
//                 <Link to = "/">
//                   <button onClick={validade()}>Logar</button>
//                 </Link>
//               <p><A href="#">Criar conta</A></p>
//              <Link to="/login/recuperar">Esqueceu  senha?</Link>
//          </Div>

//     </>
// )
// }
//  export default login;