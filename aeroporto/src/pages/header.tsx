import'./header.css'
export function Header() {
  return (
    <div>
      <header>
        <nav>
          <div className='opcao'>
            <img src="./src/assets/img/logo.png" alt="" />
            <a href='/home'>Home</a>
            <a href='/aeroporto'>Aeroportos</a>
            <a href='/aeroporto-criar'>Criar Aeroporto</a>
          </div>
        </nav>
      </header>
    </div>  
  );
}

