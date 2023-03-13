import { postAeroporto } from "../services/aeroporto"; 
import './criarAero.css'

export function AeroportoNovo() {
  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    postAeroporto({
      nome: data.nome.toString(),
    });
  }

  return (
    <div className="criar">
        <form onSubmit={onSubmit}>
      <div className="criarBox">
        <span>Nome</span>
        <input type="text" name="nome" />
      </div>
      <div className="salvar">
        <input type="submit" value="Salvar" />
      </div>    
    </form>
    </div>
  )
}