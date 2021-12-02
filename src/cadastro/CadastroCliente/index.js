import { useState } from "react"
import api from "../../service/api";
import {Div, Label, P, Input, Title} from "./styles";
import "./styles.css";
import {Button} from "../../styles/styles";

function CadastroCliente() {

    const [novoNomeCliente, setNovoNomeCliente] = useState();
    const [novoUsuario, setNovoUsuario] = useState();
    const [novoCpf, setNovoCpf] = useState();
    const [novoEmail, setNovoEmail] = useState();
    const [novaDataNascimento, setNovaDataNascimento] = useState();
    const [novaRua, setNovaRua] = useState();
    const [novoNumero, setNovoNumero] = useState();
    const [novoComplemeto, setNovoComplemeto] = useState();
    const [novoBairro, setNovoBairro] = useState();
    const [novaCidade, setNovaCidade] = useState();
    const [novoEstado, setNovoEstado] = useState();
    const [novoCep, setNovoCep] = useState();


    async function cadastrarCliente(e) {
        e.preventDefault();
        const params = {
            nome: novoNomeCliente,
            usuario: novoUsuario.toLowerCase(),
            cpf: novoCpf,
            email: novoEmail,
            dataNascimento: new Date(novaDataNascimento).toISOString().split('.')[0] + 'Z',
            endereco: {
                rua: novaRua,
                numero: novoNumero,
                complemento: novoComplemeto,
                bairro: novoBairro,
                cidade: novaCidade,
                estado: novoEstado,
                cep: novoCep,
            },

        }
        try {
            await api.post(`cliente`, params);
            alert('Cliente Cadastrado com Sucesso');

        }  catch (error) {
            console.log(params);
        }
    }
    return (
         <div>
            <Div>
                <form onSubmit={cadastrarCliente} >
                    <Title className="cadastroc">Cadastro de Cliente</Title><P/>
                    <Label id="nome">Nome:</Label><P/>
                    <Input type="text" id="nome" value={novoNomeCliente} onChange={e => setNovoNomeCliente(e.target.value)} placeholder="Digite o seu nome" autoComplete="off" /><P/>
                    <Label id="usuario">Usuario:</Label><P/>
                    <Input type="text" id="usuario" value={novoUsuario} onChange={e => setNovoUsuario(e.target.value)} placeholder="Nome de usuário" autoComplete="off" /><P/>
                    <Label id="cpf">CPF:</Label><P/>
                    <Input type="text" id="cpf" value={novoCpf} onChange={e => setNovoCpf(e.target.value)} placeholder="Digite o seu CPF(somente números)" autoComplete="off" maxlength="11" /><P/>
                    <Label id="email">E-mail:</Label><P/>
                    <Input type="text" id="email" value={novoEmail} onChange={e => setNovoEmail(e.target.value)} placeholder="Digite o seu e-mail" autoComplete="off" /><P/>
                    <Label id="dataNascimento">Data de Nascimento</Label>
                    <Input type="date" id="dataNascimento" value={novaDataNascimento} onChange={e => setNovaDataNascimento(e.target.value)} placeholder="Digite sua data de nascimento" autoComplete="off" />
                    <Label id="rua">Rua:</Label><P/>
                    <Input type="text" id="rua" value={novaRua} onChange={e => setNovaRua(e.target.value)} placeholder="Digite a rua" autoComplete="off" /><P/>
                    <Label id="numero">Numero:</Label><P/>
                    <Input type="text" id="numero" value={novoNumero} onChange={e => setNovoNumero(e.target.value)} placeholder="Digite o numero" autoComplete="off" /><P/>
                    <Label id="complemento">Complemento:</Label><P/>
                    <Input type="text" id="complemento" value={novoComplemeto} onChange={e => setNovoComplemeto(e.target.value)} placeholder="Digite o complemento" autoComplete="off" /><P/>
                    <Label id="bairro">Bairro:</Label><P/>
                    <Input type="text" id="bairro" value={novoBairro} onChange={e => setNovoBairro(e.target.value)} placeholder="Digite o bairro" autoComplete="off" /><P/>
                    <Label id="cidade">Cidade:</Label><P/>
                    <Input type="text" id="cidade" value={novaCidade} onChange={e => setNovaCidade(e.target.value)} placeholder="Digite a cidade" autoComplete="off" /><P/>
                    <Label id="estado">Estado:</Label><P/>
                    <Input type="text" id="estado" value={novoEstado} onChange={e => setNovoEstado(e.target.value)} placeholder="Digite o Estado" autoComplete="off" /><P/>
                    <Label id="cep">CEP:</Label><P/>
                    <Input type="text" id="cep" value={novoCep} onChange={e => setNovoCep(e.target.value)} placeholder="Digite o Cep" autoComplete="off" /><p/>
                    <Button type="submit">Novo Cadastro</Button>
                </form>
            </Div>
        </div>
    )
}

export default CadastroCliente;