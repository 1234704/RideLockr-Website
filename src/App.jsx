import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import AnalyticsGrid from './components/AnalyticsGrid'; // Naya component import
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-[#050505] min-h-screen text-white overflow-x-hidden">
      
      <Navbar /> 
      
    
      <Hero />
      
      
      <section id="about">
        <About />
      </section>
      
      
      <Features />

     
      <AnalyticsGrid />
      
      
      <Footer />
    </main>
  );
}

export default App;