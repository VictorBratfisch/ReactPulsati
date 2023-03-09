import'./header.css'
export function Header() {
  return (
    <div>
      <header>
        <nav>
            <img src="./src/assets/img/logo.png" alt="" />
            <div className="links">
              <a href="/home">Home</a>
              <a href="/sobre">Sobre</a>
            </div>          
        </nav>
        <div className="right">
            <button className="login">Login</button>
            <button className="registre">Registre-se</button>
        </div>   
      </header>
    </div>
  );
}

