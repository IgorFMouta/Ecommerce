import { useState } from "react"
import api from "../../service/api";

function CadastroCliente() {

    const [novoNomeCliente, setNovoNomeCliente] = useState();
    const [novoUsuario, setNovoUsuario] = useState();
    const [novoCpf, setNovoCpf] = useState();
    const [novoEmail, setNovoEmail] = useState();
    // const [novaDataNascimento, setNovaDataNascimento] = useState();
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
            dataNascimento: "1992-02-01T00:00:00Z",
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
        <>
            <div>
                <form onSubmit={cadastrarCliente} >
                    <label id="nome">Nome</label>
                    <input type="text" id="nome" value={novoNomeCliente} onChange={e => setNovoNomeCliente(e.target.value)} placeholder="Digite o seu nome" autoComplete="off" />
                    <label id="usuario">Usuario</label>
                    <input type="text" id="usuario" value={novoUsuario} onChange={e => setNovoUsuario(e.target.value)} placeholder="Nome de usuário" autoComplete="off" />
                    <label id="cpf">CPF</label>
                    <input type="text" id="cpf" value={novoCpf} onChange={e => setNovoCpf(e.target.value)} placeholder="Digite o seu CPF(somente números)" autoComplete="off" maxlength="11" />
                    <label id="email">E-mail</label>
                    <input type="text" id="email" value={novoEmail} onChange={e => setNovoEmail(e.target.value)} placeholder="Digite o seu e-mail" autoComplete="off" />
                    {/* <label id="dataNascimento">Data de Nascimento</label>
                    <input type="date" id="dataNascimento" value={novaDataNascimento} onChange={e => setNovaDataNascimento(e.target.value)} placeholder="Digite sua data de nascimento" autoComplete="off" /> */}
                    <label id="rua">Rua</label>
                    <input type="text" id="rua" value={novaRua} onChange={e => setNovaRua(e.target.value)} placeholder="Digite a rua" autoComplete="off" />
                    <label id="numero">Numero</label>
                    <input type="text" id="numero" value={novoNumero} onChange={e => setNovoNumero(e.target.value)} placeholder="Digite o numero" autoComplete="off" />
                    <label id="complemento">Complemento</label>
                    <input type="text" id="complemento" value={novoComplemeto} onChange={e => setNovoComplemeto(e.target.value)} placeholder="Digite o complemento" autoComplete="off" />
                    <label id="bairro">Bairro</label>
                    <input type="text" id="bairro" value={novoBairro} onChange={e => setNovoBairro(e.target.value)} placeholder="Digite o bairro" autoComplete="off" />
                    <label id="cidade">Cidade</label>
                    <input type="text" id="cidade" value={novaCidade} onChange={e => setNovaCidade(e.target.value)} placeholder="Digite a cidade" autoComplete="off" />
                    <label id="estado">Estado</label>
                    <input type="text" id="estado" value={novoEstado} onChange={e => setNovoEstado(e.target.value)} placeholder="Digite o Estado" autoComplete="off" />
                    <label id="cep">CEP</label>
                    <input type="text" id="cep" value={novoCep} onChange={e => setNovoCep(e.target.value)} placeholder="Digite o Cep" autoComplete="off" />

                    <button type="submit">Novo Cadastro</button>
                </form>
            </div>
        </>
    )
}

export default CadastroCliente;