import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Grundreinigung from './pages/Grundreinigung'
import Unterhaltsreinigung from './pages/Unterhaltsreinigung'
import Bauendreinigung from './pages/Bauendreinigung'
import Hauswirtschaft from './pages/Hauswirtschaft'
import Fensterreinigung from './pages/Fensterreinigung'
import Winterdienst from './pages/Winterdienst'
import FAQ from './pages/FAQ'
import Karriere from './pages/Karriere'
import Datenschutz from './pages/Datenschutz'
import Impressum from './pages/Impressum'

function App() {
  return (
    <Router basename="/atclean_website">
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grundreinigung" element={<Grundreinigung />} />
          <Route path="/unterhaltsreinigung" element={<Unterhaltsreinigung />} />
          <Route path="/bauendreinigung" element={<Bauendreinigung />} />
          <Route path="/hauswirtschaft" element={<Hauswirtschaft />} />
          <Route path="/fensterreinigung" element={<Fensterreinigung />} />
          <Route path="/winterdienst" element={<Winterdienst />} />
          <Route path="/karriere" element={<Karriere />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
