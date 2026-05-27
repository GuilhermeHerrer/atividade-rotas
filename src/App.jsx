import { BrowserRouter, Routes, Route } from 'react-router'
import Menu from './assets/components/Menu/Menu'
import Info from './assets/pages/Info/Info'
import Mapa from './assets/pages/Mapa/Mapa'
import Footer from './assets/components/Footer/Footer'
import Lendarios from './assets/pages/Lendarios/Lendarios'
import './App.css'

const App = () => {
  return(
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Info/>}/>
        <Route path='/mapa' element={<Mapa/>}/>
        <Route path='/lendarios' element={<Lendarios/>}/>
        <Route path='*' element={<div>ERRO 404 - Página não encontrada!</div>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App