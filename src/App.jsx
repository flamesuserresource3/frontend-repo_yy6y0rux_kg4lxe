import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Search from './components/Search.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [scrollTarget, setScrollTarget] = useState(null);

  const handleExplore = () => {
    const el = document.getElementById('search');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setScrollTarget('search');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white text-gray-900">
      <Navbar onNavigate={(id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setScrollTarget(id);
      }} />
      <main className="flex-1">
        <Hero onExplore={handleExplore} />
        <Search />
      </main>
      <Footer />
    </div>
  );
}

export default App;
