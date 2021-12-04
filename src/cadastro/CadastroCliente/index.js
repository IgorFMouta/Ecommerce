import { useState } from "react"
import api from "../../service/api";
import {Div, Label, P, Input, Title} from "./styles";
import "./styles.css";
import {Button} from "../../StylesGlobal/styles";

function CadastroCliente() {
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
    async function cadastrarCliente(e) {
        e.preventDefault();
        var clientePost ={...cliente,dataNascimento:new Date(cliente.dataNascimento).toISOString().split('.')[0] + 'Z'}   
        try {
            await api.post(`cliente`, clientePost);
            alert('Cliente Cadastrado com Sucesso');

        } catch (error) {   
            alert('Erro ao Cadastrar Cliente');
        }
    }
    return (
        <div className="divC">
        <Div>
            <form onSubmit={cadastrarCliente} >
                <Title className="cadastroc">Cadastro de Cliente</Title><P/>
                    <Label id="nome">Nome</Label><P/>
                    <Input type="text" name="nome" onChange={(e) => { setCliente({ ...cliente, nome: e.target.value }) }} placeholder="Digite o seu nome" autoComplete="off" /><P/>
                    <Label id="usuario">Usuario</Label><P/>
                    <Input type="text" name="usuario" onChange={(e) => { setCliente({ ...cliente, usuario: e.target.value }) }} placeholder="Nome de usuário" autoComplete="off" /><P/>
                    <Label id="cpf">CPF</Label><P/>
                    <Input type="text" name="cpf" onChange={(e) => { setCliente({ ...cliente, cpf: e.target.value }) }} placeholder="Digite o seu CPF(somente números)" autoComplete="off" maxlength="11" /><P/>
                    <Label id="email">E-mail</Label><P/>
                    <Input type="text" name="email" onChange={(e) => { setCliente({ ...cliente, email: e.target.value }) }} placeholder="Digite o seu e-mail" autoComplete="off" /><P/>
                    <Label id="dataNascimento">Data de Nascimento</Label><P/>
                    <Input type="date" name="dataNascimento" onChange={(e) => { setCliente({ ...cliente, dataNascimento: e.target.value }) }} placeholder="Digite sua data de nascimento" autoComplete="off" /><P/>
                    <Label id="rua">Rua</Label><P/>
                    <Input type="text" name="rua" onChange={(e) => { setCliente({ ...cliente, endereco: { ...cliente.endereco, rua: e.target.value } }) }} placeholder="Digite a rua" autoComplete="off" /><P/>
                    <Label id="numero">Numero</Label><P/>
                    <Input type="text" name="numero" onChange={(e) => { setCliente({ ...cliente, endereco: { ...cliente.endereco, numero: e.target.value } }) }} placeholder="Digite o numero" autoComplete="off" /><P/>
                    <Label id="complemento">Complemento</Label><P/>
                    <Input type="text" name="complemento" onChange={(e) => { setCliente({ ...cliente, endereco: { ...cliente.endereco, complemento: e.target.value } }) }} placeholder="Digite o complemento" autoComplete="off" /><P/>
                    <Label id="bairro">Bairro</Label><P/>
                    <Input type="text" name="bairro" onChange={(e) => { setCliente({ ...cliente, endereco: { ...cliente.endereco, bairro: e.target.value } }) }} placeholder="Digite o bairro" autoComplete="off" /><P/>
                    <Label id="cidade">Cidade</Label><P/>
                    <Input type="text" name="cidade" onChange={(e) => { setCliente({ ...cliente, endereco: { ...cliente.endereco, cidade: e.target.value } }) }} placeholder="Digite a cidade" autoComplete="off" /><P/>
                    <Label id="estado">Estado</Label><P/>
                    <Input type="text" name="estado" onChange={(e) => { setCliente({ ...cliente, endereco: { ...cliente.endereco, estado: e.target.value } }) }} placeholder="Digite o Estado" autoComplete="off" /><P/>
                    <Label id="cep">CEP</Label><P/>
                    <Input type="text" name="cep" onChange={(e) => { setCliente({ ...cliente, endereco: { ...cliente.endereco, cep: e.target.value } }) }} placeholder="Digite o Cep" autoComplete="off" /><P/>

                    <Button type="submit">Novo Cadastro</Button>
                    </form>
            </Div>
            
        </div>
    )
}

export default CadastroCliente;