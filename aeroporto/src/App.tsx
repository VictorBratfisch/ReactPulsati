import './App.css'
import { Aeroportos } from './pages/aeroporto'
import { Header } from './pages/header'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { AeroportoVer } from './pages/verAero'
import { AeroportoNovo } from './pages/AeroportoNovo'
import { AeroportoAtualizar } from './pages/atualizarAeroporto'
import { Voos } from './pages/voos'

function App() {
  return (
    <div className="App">
      <div>    
        <Router>
          <Header/>
           <Routes>
             <Route path='/' element={<Aeroportos />} />
             <Route path='/aeroporto/:id' element={<AeroportoVer/>}/>
             <Route path='/aeroporto-criar' element={<AeroportoNovo />} />
             <Route path='/passageiros-atualizar/:id' element={<AeroportoAtualizar />}/>
             <Route path='/voos' element={<Voos/>}/>
           </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App