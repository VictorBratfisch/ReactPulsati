import'./home.css'
export function Home(){
    return(
        <div>
        <body>
    <div id="menu" className="menu effect hide-nav hide-menu">
      <nav>
        <ul>
          <div className="top-menu">
            <img src="assets/img/logo.png" alt="" />
          </div>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
        </ul>
      </nav>
    </div>
    <section className="flex-section">
      <div>
        <div>
          <h1>Encontre O Melhor Centro De Cuidados Para Seu Pet</h1>
        </div>
            <div>
          <p>
            Combinando nossa dedicação e amor pelos animais com um atendimento
            excepcional
          </p>
        </div>
        <div>
          <label className="secondary-lbl">
            <button className="secondary-btn">Consulta Online</button>
          </label>
          <label className="primary-lbl">
            <button className="primary-btn">Explorar produtos</button>
          </label>
        </div>
        </div>  
    </section>
    <div className="flex-section text-middle">
      <div>
        <div>
          <h1>Nossos serviços</h1>
        </div>
        <div>
          <p>
            Oferecemos serviços de banho e passeio para pets, realizados por
            profissionais treinados, ideais para donos ocupados que desejam
            manter seus animais de estimação limpos, saudáveis e felizes. Agende
            uma consulta e deixe-nos ajudá-lo a cuidar do seu pet da melhor
            maneira possível.
          </p>
        </div>
      </div>
    </div>
    </body>
        </div>
    )
}