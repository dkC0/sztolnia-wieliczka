import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import GrainOverlay from './components/GrainOverlay';
import Loader from './components/Loader';
import ScrollToHash from './components/ScrollToHash';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Distillery from './pages/Distillery';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const [loading, setLoading] = useState(() => !sessionStorage.getItem('sztolnia_loaded'));
  const location = useLocation();

  const handleDone = () => {
    sessionStorage.setItem('sztolnia_loaded', '1');
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader onDone={handleDone} />}
      <a href="#main" className="skip-link">Przejdź do treści</a>
      <ScrollToHash />
      <GrainOverlay />
      <Nav key={location.pathname} />
      <main id="main" key={location.pathname} className="page-fade">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/destylarnia" element={<Distillery />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
