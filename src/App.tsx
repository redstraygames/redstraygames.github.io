import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from './Components/Main'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/games" element={<div>Games Page</div>} />
          <Route path="/assets" element={<div>Assets Page</div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}


export default App
