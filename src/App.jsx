import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer'; // Aapki files mein ye maujood hai

function App() {
  return (
    <main className="bg-[#050505] min-h-screen text-white overflow-x-hidden">
      {/* 1. Header/Navigation */}
      <Navbar /> 
      
      {/* 2. Intro Section */}
      <Hero />
      
      {/* 3. Company Vision & Mission (Scroll Target) */}
      <section id="about">
        <About />
      </section>
      
      {/* 4. Product Features */}
      <Features />
      
      {/* 5. Footer Section */}
      <Footer />
    </main>
  );
}

export default App;