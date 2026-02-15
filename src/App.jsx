import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Grundreinigung from './pages/Grundreinigung'
import Unterhaltsreinigung from './pages/Unterhaltsreinigung'
import Bauendreinigung from './pages/Bauendreinigung'

function App() {
  return (
    <Router basename="/atclean_website">
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grundreinigung" element={<Grundreinigung />} />
          <Route path="/unterhaltsreinigung" element={<Unterhaltsreinigung />} />
          <Route path="/bauendreinigung" element={<Bauendreinigung />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
