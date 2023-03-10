import './App.css'
import { Home } from './pages/home'
import { Aeroportos } from './pages/aeroporto'
import { Header } from './pages/header'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { AeroportoVer } from './pages/verAero'
import { AeroportoNovo } from './pages/AeroportoNovo'

function App() {
  return (
    <div className="App">
      <div>    
        <Router>
          <Header/>
           <Routes>
             <Route path='/home' element={<Home />} />
             <Route path='/aeroporto' element={<Aeroportos />} />
             <Route path='/aeroporto/:id' element={<AeroportoVer/>}/>
             <Route path='/aeroporto-criar' element={<AeroportoNovo />} />
           </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App