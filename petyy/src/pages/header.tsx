export function Header() {
  return (
    <div>
      <header>
        <nav>
            <img src="./src/assets/img/logo.png" alt="" />
            <div className="links">
              <a href="#">Home</a>
              <a href="Sobre()">Sobre</a>
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
