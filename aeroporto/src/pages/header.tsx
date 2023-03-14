import'./header.css'
export function Header() {
  return (
    <div>
      <header>
        <nav>
          <div className='opcao'>
            <img src="./src/assets/img/logo.png" alt="" />
            <a href='/'>Aeroportos</a>
            <a href='/aeroporto-criar'>Criar Aeroporto</a>
            <a href='/voos'>Voos</a>
          </div>
        </nav>
      </header>
    </div>  
  );
}

