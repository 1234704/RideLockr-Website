import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';


const About = lazy(() => import('./components/AboutPage'));
const Features = lazy(() => import('./components/Features'));
const AnalyticsGrid = lazy(() => import('./components/AnalyticsGrid'));
const Footer = lazy(() => import('./components/Footer'));


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const SectionLoader = () => (
  <div className="py-20 flex items-center justify-center bg-[#050505]">
    <div className="w-6 h-6 border-2 border-[#39FF14]/20 border-t-[#39FF14] rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      
      <ScrollToTop />
      
      <main className="bg-[#050505] min-h-screen text-white overflow-x-hidden antialiased selection:bg-[#39FF14] selection:text-black">
        
        <Navbar /> 

        <Suspense fallback={<SectionLoader />}>
          <Routes>
            
            <Route exact path="/" element={
              <div className="w-full" key="homepage">
                <Hero />
                <Features />
                <AnalyticsGrid />
                <Footer />
              </div>
            } />

            
            <Route path="/about" element={
              <div className="w-full pt-20" key="aboutpage">
                <About />
                <Footer />
              </div>
            } />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;