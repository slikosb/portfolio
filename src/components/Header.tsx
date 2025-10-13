import { useEffect, useState } from "react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
            : "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1
          className={`text-2xl font-bold transition-colors ${
            darkMode ? "text-white" : "text-indigo-600"
          }`}
        >
          Mon Portfolio
        </h1>
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className={`hover:text-indigo-600 transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            About
          </a>
          <a
            href="#skills"
            className={`hover:text-indigo-600 transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Compétences
          </a>
          <a
            href="#experiences"
            className={`hover:text-indigo-600 transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Expériences
          </a>
          <a
            href="#projects"
            className={`hover:text-indigo-600 transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Projets
          </a>
          <a
            href="#contact"
            className={`hover:text-indigo-600 transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Contact
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
