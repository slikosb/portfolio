import { useEffect, useState } from "react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermeture automatique du menu au clic sur un lien
  const handleLinkClick = () => {
    setIsOpen(false);
  };

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

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#about"
            onClick={handleLinkClick}
            className={`hover:text-indigo-600 transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            About
          </a>
          <a
            href="#skills"
            onClick={handleLinkClick}
            className={`hover:text-indigo-600 transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Compétences
          </a>
          <a
            href="#experiences"
            onClick={handleLinkClick}
            className={`hover:text-indigo-600 transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Expériences
          </a>
          <a
            href="#projects"
            onClick={handleLinkClick}
            className={`hover:text-indigo-600 transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Projets
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className={`hover:text-indigo-600 transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Contact
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Burger menu (mobile) */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 gap-1"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block h-0.5 w-full bg-current transition-transform ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-transform ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menu déroulant mobile */}
      {isOpen && (
        <div
          className={`md:hidden bg-white dark:bg-gray-900 shadow-lg backdrop-blur-sm px-4 py-6 space-y-6 flex flex-col items-center text-lg z-40`}
        >
          <a
            href="#about"
            onClick={handleLinkClick}
            className={`hover:text-indigo-600 transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            About
          </a>
          <a
            href="#skills"
            onClick={handleLinkClick}
            className={`hover:text-indigo-600 transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Compétences
          </a>
          <a
            href="#experiences"
            onClick={handleLinkClick}
            className={`hover:text-indigo-600 transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Expériences
          </a>
          <a
            href="#projects"
            onClick={handleLinkClick}
            className={`hover:text-indigo-600 transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Projets
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className={`hover:text-indigo-600 transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
