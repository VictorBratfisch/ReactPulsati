import axios from "axios";
import './aeroportos.css'
import { useState, useEffect } from "react";
import { Aeroporto } from "../model/aeroporto";
import { getAllAeroporto, deleteAeroporto } from "../services/aeroporto"

export function Aeroportos() {
  const [ aeroportos, setAeroporto ] = useState<Aeroporto[]>();

  const loadData = async () => {
    const aeroportos: Aeroporto[] = await getAllAeroporto();
    setAeroporto(aeroportos);
  }

  useEffect(() => {
    loadData();
  }, []);

  const onClickDeleteAeroporto = (id: number) => {
    deleteAeroporto(id).then(() => loadData());
  }


  return (
    <div className="aero">
      <span>Aeroportos</span>
      <table className="tabela">
        <thead>
          <td>Código</td>
          <td>Nome</td>
          <td>Ver</td>
          <td>Alterar</td>
          <td>Deletar</td>
        </thead>
        <tbody>
          {
            aeroportos?.map(aeroporto => {
              return (
                <tr>
                  <td>{aeroporto.codigo}</td>
                  <td>{aeroporto.nome}</td>
                  <td>
                    <a href={`/aeroporto/${aeroporto.codigo}`}>Ver</a>
                  </td>  
                  <td>
                  <a href={`/passageiros-atualizar/${aeroporto.codigo}`}>
                    Atualizar
                  </a>
                </td>
                  <td><button onClick={() => onClickDeleteAeroporto(aeroporto.codigo)}>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}