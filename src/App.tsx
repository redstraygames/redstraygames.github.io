import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from './Components/Main'
import { Navbar } from './Components/Navbar'

function App() {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Routes>
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/games" element={<div>Games Page</div>} />
          <Route path="/assets" element={<div>Assets Page</div>} />
      </Routes>
      <Main />
    </div>
  )
}

export default App
