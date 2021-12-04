import { useState, useEffect } from "react"
import api from "../../service/api";
import "./styles.css"
import { Div, Label, Title, P, Input } from "./styles"
import {Button} from "../../StylesGlobal/styles"
import { useParams } from "react-router-dom";

function AtualizarProduto() {

    const [novoProduto, setNovoProduto] = useState();
    const [novaDescricao, setNovaDescricao] = useState();
    const [novoQtdEstoque, setNovoQtdEstoque] = useState();
    const [novoValor, setNovoValor] = useState();
    const [novaIdCategoria, setNovaIdCategoria] = useState();
    const [novoNomeCategoria, setNovoNomeCategoria] = useState();
    const [novoIdFuncionario, setNovoIdFuncionario] = useState();
    const [novaImagemProduto, setNovaImagemProduto] = useState();
    const [novaDataFabricacao, setNovaDataFabricacao] = useState();

    const parametros = useParams();
    console.log(parametros)

    useEffect(() => {
        async function fetchData(){
            const response = await api.get(`produto/${parametros.id}`);
            console.log(response.data)
            setNovoProduto(response.data.nome)
            setNovaDescricao(response.data.descricao)
            setNovoQtdEstoque(response.data.qtdEstoque)
            setNovoValor(response.data.valor)
            setNovaIdCategoria(response.data.idCategoria)
            setNovoNomeCategoria(response.data.nomeCategoria)
            setNovoIdFuncionario(response.data.idFuncionario)
            setNovaImagemProduto(response.data.fotoLink)
            setNovaDataFabricacao(response.data.dataFabricacao)
        }
        fetchData();
    }, [])

    async function atualizarProduto(e) {
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
            console.log(parametros.id)

            await api.put(`produto/${parametros.id}`, params).then((res) => {
                alert('Produto Atualizado com Sucesso');
            }).catch((err) => {
                console.log(parametros.id);
                alert("Erro ao atualizar produto!")
            })
       
    }
    return (
        <>
        <div className="divC">
            <Div>
                <form onSubmit={atualizarProduto} >
                <Title className="cadastro">Atualização de Produto</Title><P/>
                    <Label id="nome">Nome</Label>
                    <Input type="text" id="nome" value={novoProduto} onChange={e => setNovoProduto(e.target.value)} placeholder="Digite nome do produto" autoComplete="off" />
                    <Label id="descricao">Descricao</Label>
                    <Input type="text" id="descricao" value={novaDescricao} onChange={e => setNovaDescricao(e.target.value)} placeholder="Descrição" autoComplete="off" />
                    <Label id="qtdEstoque">Quantidade em Estoque</Label>
                    <Input type="number" id="qtd_estoque" value={novoQtdEstoque} onChange={e => setNovoQtdEstoque(e.target.value)} placeholder="Quantidade em estoque" autoComplete="off" maxlength="11" />
                    <Label id="valor">Valor</Label>
                    <Input type="number" id="valor" value={novoValor} onChange={e => setNovoValor(e.target.value)} placeholder="Digite o valor" autoComplete="off" />
                    <Label id="idCategoria">Id Categoria</Label>
                    <Input type="number" id="IdCategoria" value={novaIdCategoria} onChange={e => setNovaIdCategoria(e.target.value)} placeholder="Digite o Id da categoria" autoComplete="off" />
                    <Label id="nomeCategoria">Nome Categoria</Label>
                    <Input type="text" id="rua" value={novoNomeCategoria} onChange={e => setNovoNomeCategoria(e.target.value)} placeholder="Digite o nome da categoria" autoComplete="off" />
                    <Label id="idFuncionario">Id Funcionario</Label>
                    <Input type="number" id="idFuncionario" value={novoIdFuncionario} onChange={e => setNovoIdFuncionario(e.target.value)} placeholder="Digite o id funcionario" autoComplete="off" />
                    <Label id="dataFabricacao">Data de fabricação</Label>
                    <Input type="date" id="dataFabricacao" value={novaDataFabricacao} onChange={e => setNovaDataFabricacao(e.target.value)} placeholder="Digite o id funcionario" autoComplete="off" />
                    <Label id="fotoLink">Imagem do Produto</Label>
                    <Input type="text" id="fotoLink" value={novaImagemProduto} onChange={e => setNovaImagemProduto(e.target.value)} placeholder="Digite o link da imagem" autoComplete="off" />

                    <Button type="submit">Atualizar</Button>
                </form>
            </Div>
            </div>
        </>
    )
}

export default AtualizarProduto;