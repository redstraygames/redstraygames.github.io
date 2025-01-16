import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from './Components/Main'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { About } from './Components/About'
import { Games } from './Components/Games'

function App() {
  return (
    <div className="flex flex-col min-h-screen gap-4">
      <Navbar />
      <div className="flex-grow flex justify-center">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
          <Route path="/assets" element={<div>Assets Page</div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}


export default App
