import { useState, useEffect } from "react"
import api from "../../service/api"
import "./styles.css"

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

      async function atualizarProduto(id){
        const article = { title: 'React PUT Request'};
        await api.put(`produto/${id}`, article).then(response => setProdutos({ 
          updateAt: response.data.updateAt }));
      }

  
    return ( 
      <>
      <div className="App">
        {produtos.map(produto => {
          console.log(produto?.fotoLink)
          return(
            <div className="container">
              <div className="Components">
                <img src={produto?.fotoLink} alt={produto?.descricao}/>
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
                <button onClick={() => deletarProduto(produto.id)}>Deletar item</button>
                <button onClick={() => atualizarProduto(produto.id)}>Atualizar item</button>
              </div>
              </div>
          )
        })}
      </div>
      </>
    );
}

export default Get;