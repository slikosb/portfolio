import { useEffect, useState } from "react";
import { FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        isMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".burger-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Expériences", href: "#experiences" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
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
            Portfolio
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`hover:text-indigo-600 transition-colors font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button & Dark Mode Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className={`burger-button p-3 rounded-lg transition-colors flex items-center justify-center ${
                darkMode
                  ? "text-white hover:bg-gray-800"
                  : "text-gray-900 hover:bg-gray-100"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 md:hidden transition-transform duration-300 ease-out ${
          darkMode ? "bg-gray-900" : "bg-white"
        } shadow-2xl ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div
            className={`flex items-center justify-between p-6 border-b ${
              darkMode ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <h2
              className={`text-xl font-bold ${
                darkMode ? "text-white" : "text-indigo-600"
              }`}
            >
              Menu
            </h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode
                  ? "text-white hover:bg-gray-800"
                  : "text-gray-900 hover:bg-gray-100"
              }`}
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-2 px-4">
              {menuItems.map((item, index) => (
                <li
                  key={item.name}
                  style={{
                    animation: isMenuOpen
                      ? `slideIn 0.3s ease-out ${index * 0.05}s both`
                      : "none",
                  }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(item.href);
                    }}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                        : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu Footer */}
          <div
            className={`p-6 border-t ${
              darkMode ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div
              className={`text-center text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <p className="mb-2">Clément Le Batard</p>
              <p>Développeur Front-End</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
