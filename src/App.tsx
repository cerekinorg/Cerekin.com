import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useThemeStore } from './store/themeStore';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/EnhancedProducts';
import Contact from './pages/Contact';
import Docs from './pages/Docs';
import Community from './pages/Community';
import Blonde from './pages/Blonde';
import Caramel from './pages/Caramel';
import CremeOS from './pages/CremeOS';
import { Navbar } from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { ScrollProgress, BackToTop } from './components/ui';

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('light', 'dark');
    html.classList.add(theme);
  }, [theme]);

  return (
    <Router>
      <ScrollProgress />
      <BackToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blonde" element={<Blonde />} />
            <Route path="/caramel" element={<Caramel />} />
            <Route path="/cremeos" element={<CremeOS />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;