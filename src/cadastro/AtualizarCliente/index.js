import { useState, useEffect } from "react"
import api from "../../service/api";
import { Div, Label, P, Input, Title } from "./styles";
import "./styles.css";
import { Button } from "../../StylesGlobal/styles";
import { useParams } from "react-router-dom";

function AtualizarCliente() {
    const parametros = useParams();

    const [cliente, setCliente] = useState({
        nome: "",
        usuario: "".toLowerCase,
        cpf: "",
        email: "",
        dataNascimento: new Date().toISOString().split('.')[0] + 'Z',
        endereco: {
            rua: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            estado: "",
            cep: "",
        },
    })

    useEffect(() => {
        async function fetchData() {
            const response = await api.get(`cliente/${parametros.id}`);
            console.log(response.data)
            setCliente(response.data)
           
        }
        fetchData();
    }, [])

    async function atualizarCliente(e) {
        e.preventDefault();

        console.log(parametros.id)
        var params = { ...cliente, dataNascimento: new Date(cliente.dataNascimento).toISOString().split('.')[0] + 'Z' }

        await api.put(`cliente/${parametros.id}`, params).then((res) => {
            alert('Cliente Atualizado com Sucesso');
        }).catch((err) => {
            console.log(parametros.id);
            alert("Erro ao atualizar cliente!")
        })

    }
    return (
        <div className="divC">
            <Div>
                <form onSubmit={atualizarCliente} >
                    <Title className="cadastroc">Cadastro de Cliente</Title><P />
                    <Label value={cliente.nome} id="nome">Nome</Label><P />
                    <Input type="text" name="nome" onChange={(e) => { setCliente({ ...cliente, nome: e.target.value }) }} placeholder="Digite o seu nome" autoComplete="off" /><P />
                    <Label value={cliente.usuario} id="usuario">Usuario</Label><P />
                    <Input type="text" name="usuario" onChange={(e) => { setCliente({ ...cliente, usuario: e.target.value }) }} placeholder="Nome de usuário" autoComplete="off" /><P />
                    <Label value={cliente.cpf} id="cpf">CPF</Label><P />
                    <Input type="text" name="cpf" onChange={(e) => { setCliente({ ...cliente, cpf: e.target.value }) }} placeholder="Digite o seu CPF(somente números)" autoComplete="off" maxlength="11" /><P />
                    <Label value={cliente.email} id="email">E-mail</Label><P />
                    <Input type="text" name="email" onChange={(e) => { setCliente({ ...cliente, email: e.target.value }) }} placeholder="Digite o seu e-mail" autoComplete="off" /><P />
                    <Label value={cliente.dataNascimento} id="dataNascimento">Data de Nascimento</Label><P />
                    <Input type="date" name="dataNascimento" onChange={(e) => { setCliente({ ...cliente, dataNascimento: e.target.value }) }} placeholder="Digite sua data de nascimento" autoComplete="off" /><P />
                    <Label value={cliente.endereco.rua} id="rua">Rua</Label><P />
                    <Input type="text" name="rua" onChange={(e) => { setCliente({ ...cliente, endereco: { ...cliente.endereco, rua: e.target.value } }) }} placeholder="Digite a rua" autoComplete="off" /><P />
                    <Label value={cliente.endereco.numero} id="numero">Numero</Label><P />
                    <Input type="text" name="numero" onChange={(e) => { setCliente({ ...cliente, endereco: { ...cliente.endereco, numero: e.target.value } }) }} placeholder="Digite o numero" autoComplete="off" /><P />
                    <Label value={cliente.endereco.complemento} id="complemento">Complemento</Label><P />
                    <Input type="text" name="complemento" onChange={(e) => { setCliente({ ...cliente, endereco: { ...cliente.endereco, complemento: e.target.value } }) }} placeholder="Digite o complemento" autoComplete="off" /><P />
                    <Label value={cliente.endereco.bairro} id="bairro">Bairro</Label><P />
                    <Input type="text" name="bairro" onChange={(e) => { setCliente({ ...cliente, endereco: { ...cliente.endereco, bairro: e.target.value } }) }} placeholder="Digite o bairro" autoComplete="off" /><P />
                    <Label value={cliente.endereco.cidade} id="cidade">Cidade</Label><P />
                    <Input type="text" name="cidade" onChange={(e) => { setCliente({ ...cliente, endereco: { ...cliente.endereco, cidade: e.target.value } }) }} placeholder="Digite a cidade" autoComplete="off" /><P />
                    <Label value={cliente.endereco.estado} id="estado">Estado</Label><P />
                    <Input type="text" name="estado" onChange={(e) => { setCliente({ ...cliente, endereco: { ...cliente.endereco, estado: e.target.value } }) }} placeholder="Digite o Estado" autoComplete="off" /><P />
                    <Label value={cliente.endereco.cep} id="cep">CEP</Label><P />
                    <Input type="text" name="cep" onChange={(e) => { setCliente({ ...cliente, endereco: { ...cliente.endereco, cep: e.target.value } }) }} placeholder="Digite o Cep" autoComplete="off" /><P />

                    <Button type="submit">Atualizar</Button>
                </form>
            </Div>

        </div>
    )
}

export default AtualizarCliente;