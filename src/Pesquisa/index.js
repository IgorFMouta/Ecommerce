// import React,{useState} from "react";
// import { withRouter } from "react-router";

// //barra de pesquisa

// function Pesquisa(props){
  
//   const [search, setSearch] = useState("");
  
// function buscar(e){
//     e.preventDeafut()
//     props.history.push("/busca?query=" +search)
// }

//     return(
//         <div>
//             <div>
//                 <form onSubmit={buscar}>
//                 <input type="text" name="query" id="query" onChange={(e) => setSearch (e.target.value)}/>
//                 <button type="submit">Procurar</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default withRouter(Pesquisa)