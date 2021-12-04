import React, { useEffect, useState } from "react";
import api from "../../service/api";
import "./style.css"
import {Button} from "../../StylesGlobal/styles"


  function GetCliente() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
      api.get("/cliente/").then((Response) => setClientes(Response.data)).catch((err) => {
        console.error("Erro" + err);
      });
    }, [])

      async function deletarCliente(id) {
      await api.delete(`cliente/${id}`);
      const clientesFiltrados = clientes.filter(cliente => cliente.id !== id)
      setClientes(clientesFiltrados);
  }

    return (
      <>
        <div className="App">
          {clientes.map(cliente => {
            return (

              <div className="container">
                <p>ID: {cliente?.id}</p>
                <p>Nome: {cliente?.nome}</p>
                <p>Usuario: {cliente?.usuario}</p>
                <p>Cpf: {cliente?.cpf}</p>
                <p>Email: {cliente?.email}</p>
                <p>Data de Nascimento: {cliente?.dataNascimento}</p>
                <p>Rua: {cliente?.endereco.rua}</p>
                <p>Número: {cliente?.endereco.numero}</p>
                <p>Complemento: {cliente?.endereco.complemeto}</p>
                <p>Bairro: {cliente?.endereco.bairro}</p>
                <p>Cidade: {cliente?.endereco.cidade}</p>
                <p>Estado: {cliente?.endereco.estado}</p>
                <p>Cep: {cliente?.endereco.cep}</p>
                <Button onClick={()=> deletarCliente(cliente.id)}>Deletar item</Button>
              </div>
            )
          })}
        </div>
      </>
    )

  }

export default GetCliente;