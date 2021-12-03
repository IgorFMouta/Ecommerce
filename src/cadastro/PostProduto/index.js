import { useState } from "react"
import api from "../../service/api";
import "./styles.css"

function CadastroProduto() {

    const [novoProduto, setNovoProduto] = useState();
    const [novaDescricao, setNovaDescricao] = useState();
    const [novoQtdEstoque, setNovoQtdEstoque] = useState();
    const [novoValor, setNovoValor] = useState();
    const [novaIdCategoria, setNovaIdCategoria] = useState();
    const [novoNomeCategoria, setNovoNomeCategoria] = useState();
    const [novoIdFuncionario, setNovoIdFuncionario] = useState();
    const [novaImagemProduto, setNovaImagemProduto] = useState();
    const [novaDataFabricacao, setNovaDataFabricacao] = useState();


    async function cadastrarProduto(e) {
        e.preventDefault();
        const params = {
            nome: novoProduto,
            descricao: novaDescricao,
            qtdEstoque: novoQtdEstoque,
            valor: novoValor,
            idCategoria: novaIdCategoria,
            nomeCategoria: novoNomeCategoria,
            idFuncionario: novoIdFuncionario,
            dataFabricacao: new Date(novaDataFabricacao).toISOString().split('.')[0] + 'Z',
            fotoLink: novaImagemProduto
            };

        try {
            await api.post(`produto`, params);
           alert('Produto Cadastrado com Sucesso');
        } catch (error) {
            console.log(params);
            alert("Erro ao cadastrar produto!", error)
        }
    }
    return (
        <>
            <div>
                <form onSubmit={cadastrarProduto} >
                    <label id="nome">Nome</label>
                    <input type="text" id="nome" value={novoProduto} onChange={e => setNovoProduto(e.target.value)} placeholder="Digite nome do produto" autoComplete="off" />
                    <label id="descricao">Descricao</label>
                    <input type="text" id="descricao" value={novaDescricao} onChange={e => setNovaDescricao(e.target.value)} placeholder="Descrição" autoComplete="off" />
                    <label id="qtdEstoque">Quantidade em Estoque</label>
                    <input type="number" id="qtd_estoque" value={novoQtdEstoque} onChange={e => setNovoQtdEstoque(e.target.value)} placeholder="Quantidade em estoque" autoComplete="off" maxlength="11" />
                    <label id="valor">Valor</label>
                    <input type="number" id="valor" value={novoValor} onChange={e => setNovoValor(e.target.value)} placeholder="Digite o valor" autoComplete="off" />
                    <label id="idCategoria">Id Categoria</label>
                    <input type="number" id="IdCategoria" value={novaIdCategoria} onChange={e => setNovaIdCategoria(e.target.value)} placeholder="Digite o Id da categoria" autoComplete="off" />
                    <label id="nomeCategoria">Nome Categoria</label>
                    <input type="text" id="rua" value={novoNomeCategoria} onChange={e => setNovoNomeCategoria(e.target.value)} placeholder="Digite o nome da categoria" autoComplete="off" />
                    <label id="idFuncionario">Id Funcionario</label>
                    <input type="number" id="idFuncionario" value={novoIdFuncionario} onChange={e => setNovoIdFuncionario(e.target.value)} placeholder="Digite o id funcionario" autoComplete="off" />
                    <label id="dataFabricacao">Data de fabricação</label>
                    <input type="date" id="dataFabricacao" value={novaDataFabricacao} onChange={e => setNovaDataFabricacao(e.target.value)} placeholder="Digite o id funcionario" autoComplete="off" />
                    <label id="fotoLink">Imagem do Produto</label>
                    <input type="text" id="fotoLink" value={novaImagemProduto} onChange={e => setNovaImagemProduto(e.target.value)} placeholder="Digite o link da imagem" autoComplete="off" />

                    <button type="submit">Novo Cadastro</button>
                </form>
            </div>
        </>
    )
}

export default CadastroProduto;