import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Customers from "./components/Customers";
import RideLockr from "./components/Pricing";
import AppShowcase from "./components/AppShowcase";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/AboutPage"));
const Features = lazy(() => import("./components/Features"));
const AnalyticsGrid = lazy(() => import("./components/AnalyticsGrid"));
const Hero2 = lazy(() => import("./components/Hero2"));

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
            <Route
              exact
              path="/"
              element={
                <div className="w-full" key="homepage">
                  <Hero />
                  <Features />
                  <AnalyticsGrid />
                  <Hero2 />
                  <Footer />
                </div>
              }
            />

            <Route
              path="/about"
              element={
                <div className="w-full pt-5" key="aboutpage">
                  <About />
                  <Hero2 />
                  <Footer />
                </div>
              }
            />

            <Route
              path="/features"
              element={
                <div className="w-full pt-5" key="featurespage">
                  <Features />
                  <Footer />
                </div>
              }
            />

            <Route
              path="/how-it-works"
              element={
                <div className="w-full pt-10" key="howitworks">
                  <HowItWorks />
                  <Footer />
                </div>
              }
            />

            <Route
              path="/customers"
              element={
                <div className="w-full" key="customers">
                  <Customers />
                  <Footer />
                </div>
              }
            />

            <Route
              path="/app"
              element={
                <div className="w-full pt-20" key="app">
                  <AppShowcase />
                  <Footer />
                </div>
              }
            />

            <Route
              path="/pricing"
              element={
                <div className="w-full" key="pricing">
                  <RideLockr />
                  <Footer />
                </div>
              }
            />

            <Route
              path="/testimonials"
              element={
                <div className="w-full pt-20" key="testimonials">
                  <Testimonials />
                  <Footer />
                </div>
              }
            />

            <Route
              path="/contact"
              element={
                <div className="w-full pt-20" key="contact">
                  <Contact />
                  <Footer />
                </div>
              }
            />

          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
