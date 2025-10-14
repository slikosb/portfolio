interface FooterProps {
  darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
  return (
    <footer
      className={`py-8 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-700"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>© 2025 Le Batard Clément - Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
