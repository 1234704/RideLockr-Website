import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import AnalyticsGrid from './components/AnalyticsGrid'; // Naya component import
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-[#050505] min-h-screen text-white overflow-x-hidden">
      {/* 1. Header */}
      <Navbar /> 
      
      {/* 2. Welcome Section */}
      <Hero />
      
      {/* 3. Mission Section */}
      <section id="about">
        <About />
      </section>
      
      {/* 4. Core Capabilities */}
      <Features />

      {/* 5. Live System Analytics (The Grid) */}
      <AnalyticsGrid />
      
      {/* 6. Footer */}
      <Footer />
    </main>
  );
}

export default App;