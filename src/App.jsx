import { BrowserRouter, Routes, Route } from 'react-router'
import Menu from './assets/components/Menu/Menu'
import Info from './assets/pages/Info/Info'
import Localizacoes from './assets/pages/Localizacoes/Localizacoes'
import Lendarios from './assets/pages/Lendarios/Lendarios'
import './App.css'

const App = () => {
  return(
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Info/>}/>
        <Route path='/localizacoes' element={<Localizacoes/>}/>
        <Route path='/lendarios' element={<Lendarios/>}/>
        <Route path='*' element={<div>ERRO 404 - Página não encontrada!</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App