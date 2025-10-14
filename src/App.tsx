import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""} overflow-x-hidden`}>
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <HeroSection darkMode={darkMode} />

      <main className={`${darkMode ? "bg-gray-900" : "bg-white"}`}>
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Experiences darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

// Hero Section Component
const HeroSection = ({ darkMode }: { darkMode: boolean }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-indigo-50 to-purple-50"
      }`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"
          style={{ transform: `translateY(${-scrollY * 0.5}px)` }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1
          className={`text-6xl md:text-7xl font-extrabold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Clément Le Batard
        </h1>
        <p
          className={`text-2xl md:text-3xl mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Développeur Front-End
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#about"
            className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Découvrir mon profil
          </a>
          <a
            href="#contact"
            className={`px-8 py-3 rounded-full border-2 transform hover:scale-105 transition-all duration-300 ${
              darkMode
                ? "border-white text-white hover:bg-white hover:text-gray-900"
                : "border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
            }`}
          >
            Me contacter
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div
          className={`w-6 h-10 border-2 rounded-full ${
            darkMode ? "border-white" : "border-gray-900"
          }`}
        >
          <div
            className={`w-1.5 h-1.5 ${
              darkMode ? "bg-white" : "bg-gray-900"
            } rounded-full mx-auto mt-2`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default App;
