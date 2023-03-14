import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getAeroporto, putAeroporto,} from "../services/aeroporto";

export function AeroportoAtualizar() {
  const [aeroporto, setaeroporto] = useState<any>();

  const params = useParams();

  if (!aeroporto) {
    getAeroporto(parseInt(params.id || "", 10)).then((res) =>
      setaeroporto(res.data)
    );
  }

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    putAeroporto({
      codigo: aeroporto.codigo,
      nome: data.nome.toString(),
      codigo_voo: parseInt(data.codigo_voo.toString()) 
    });
   };
  return (
    <div className="divPassVer">
      <form onSubmit={onSubmit}>
        <div>
          <span>Nome</span>
          <input type="text" name="nome" defaultValue={aeroporto?.nome} />
        </div>
        <div>
          <span>Código Voo</span>
          <input type="number" name="codigo_voo"/>
        </div>
        <input type="submit" value="Atualizar" />
      </form>
    </div>
  );
}