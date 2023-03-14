import axios from "axios";
import './aeroportos.css'
import { useState, useEffect } from "react";
import { Voo } from "../model/voo";
import { getVoo } from "../services/voo";

export function Voos() {
  const [ voos, setVoos ] = useState<Voo[]>();

  const loadData = async () => {
    const voos: Voo[] = await getVoo();
    setVoos(voos);
  }



  return (
    <div className="aero">
      <span>Voos</span>
      <table className="tabela">
        <thead>
          <td>Código</td>
          <td>Destino</td>
        </thead>
        <tbody>
          {
            voos?.map(voo => {
              return (
                <tr>
                  <td>{voo.codigo}</td>
                  <td>{voo.destino}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}