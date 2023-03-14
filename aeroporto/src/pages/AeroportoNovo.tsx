import { postAeroporto } from "../services/aeroporto";  
import './criarAero.css'

export function AeroportoNovo() {

  const onSubmit = (evt: any) => {
    console.log('OIIIIIIIIIIIIII')

    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    postAeroporto({
      nome: data.nome.toString(),
      codigo_voo: parseInt(data.codigo_voo.toString())
    });
  }


  return (
    <div className="criar">
        <form onSubmit={onSubmit}>
      <div className="criarBox">
        <span>Nome</span>
        <input type="text" name="nome" />
      </div>
      <div className="cod">
          <span>Código Voo</span>
          <input type="number" name="codigo_voo"/>
      </div>
      <div className="salvar">
        <input type="submit" value="Salvar" />
      </div>    
    </form>
    </div>
  )
}