
import './App.css'
import { Sobre } from './pages/sobre'
import { Header } from './pages/header'
import { Home } from './pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/sobre'  element={<Sobre/>}/>
          <Route path='/home'  element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App