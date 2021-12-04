import { useState, useEffect } from "react";
import api from "../../service/api";
import "./styles.css";
import {Button} from "../../StylesGlobal/styles";
import {Link} from "react-router-dom";

function Get() {
    const [produtos, setProdutos] = useState([]);
  
    useEffect(() => {
      api.get("/produto/").then((response) => setProdutos(response.data)).catch((err) => {
        console.error("ops! Ocorreu um erro" + err);
      });
    }, []);


      async function deletarProduto(id) {
          await api.delete(`produto/${id}`);
          const produtosFiltrados = produtos.filter(produto => produto.id !== id)
          setProdutos(produtosFiltrados);
      }

  
    return ( 
      <>
      <div className="App">
        {produtos.map(produto => {
          console.log(produto?.fotoLink)
          return(
            <div className="container">
              <div className="Components">
                <img className="fotoLink" src={produto?.fotoLink} alt={produto?.descricao}/>
              </div>  
              <div className="texto">
                <p>Nome: {produto?.nome}</p>
                <p>Descrição: {produto?.descricao}</p>
                <p>Quantidade em Estoque: {produto?.qtdEstoque}</p>
                <p>Valor: {produto?.valor}</p>
                <p>Id da categoria: {produto?.idCategoria}</p>
                <p>Nome da categoria: {produto?.nomeCategoria}</p>
                <p>Id do Funcionario: {produto?.idFuncionario}</p>
                <p>Nome do Funcionario: {produto?.nomeFuncionario}</p>
                <p>Data de fabricação: {produto?.dataFabricacao}</p>
                <Button onClick={() => deletarProduto(produto.id)}>Deletar item</Button>
                <Link to={`/atualizarProduto/${produto.id}`}>
                  <Button>Atualizar item</Button>
                </Link>
              </div>

              </div>
          )
        })}
      </div>
      </>
    );
}

export default Get;