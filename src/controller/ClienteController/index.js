import React, { useEffect, useState } from "react";
import api from "../../service/api";


function Get() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    api.get("/cliente/").then((Response) => setClientes(Response.data)).catch((err) => {
      console.error("Erro" + err);
    });
  }, [])

  return (
    <>

      <div className="App">
        {clientes.map(cliente => {
          return(
            
            <div>
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
            </div>
          )
        })}
      </div>

    </>
 )

}
export default Get;