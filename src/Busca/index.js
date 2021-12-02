import React,{Fragment, useEffect, useState} from "react";
import axios from 'axios';

//ver o nome do import dos produtos para alterar de acordo

import CardProdutos from "";


export default function Busca(props){

const [produtos, setProdutos] = useState([])
const urlAPI = "......?"+props.location.search +"&........"

useEffect(()=>{load()}, [props.location.search])

async function load(){
   try{
       const response = await axios.get(urlAPI)
       setProdutos(resposta.data.results)
       console.log(props.location)
   }catch(erro){
       console.log(erro)
   }
}
//essas tab eu vi que era para alterar de pagina, n sei se esta certo
return(
<Fragment>
    <div>
        <tab text="Busca" target="Busca"/>
        <tab text="" target=""/>
        <tab text="" target=""/>
    </div>
    <div>
        {produtos.map((produtos)=> <CardProdutos key={produtos.id} produtos={produtos}/>)}
    </div>
</Fragment>

);

}
