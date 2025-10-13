import { useState } from "react";
import {
  FaCheck,
  FaCopy,
  FaEnvelope,
  FaFileDownload,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

interface ContactProps {
  darkMode: boolean;
}

const Contact = ({ darkMode }: ContactProps) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("clement.lebatard1@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "clement.lebatard1@gmail.com",
      link: "mailto:clement.lebatard1@gmail.com",
      copyable: true,
      color: "#EA4335",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "Clément Le Batard",
      link: "https://www.linkedin.com/in/clementlebatard",
      external: true,
      color: "#0A66C2",
    },
    {
      icon: FaPhone,
      title: "Téléphone",
      value: "+33 6 76 34 48 17",
      link: "tel:+33676344817",
      copyable: false,
      color: "#34B7F1",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Localisation",
      value: "Bordeaux, France",
      link: "#",
      copyable: false,
      color: "#E74C3C",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-4xl font-extrabold mb-4 text-center ${
            darkMode ? "text-white" : "text-indigo-600"
          }`}
        >
          Me contacter
        </h2>
        <p
          className={`text-center mb-12 text-lg ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          N'hésitez pas à me contacter pour discuter de vos projets ou
          opportunités !
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-50"
                  }`}
                  style={{
                    animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Gradient border effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ backgroundColor: info.color }}
                  ></div>

                  <div className="relative flex items-start gap-4">
                    <div
                      className="text-4xl transform group-hover:scale-110 transition-transform duration-300 p-3 rounded-xl"
                      style={{
                        backgroundColor: darkMode
                          ? "rgba(255,255,255,0.1)"
                          : "rgba(0,0,0,0.05)",
                      }}
                    >
                      <IconComponent style={{ color: info.color }} />
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`font-semibold mb-2 ${
                          darkMode ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {info.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        {info.external ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-sm hover:text-indigo-600 transition-colors flex items-center gap-1 ${
                              darkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {info.value}
                            <span className="text-xs">↗</span>
                          </a>
                        ) : (
                          <a
                            href={info.link}
                            className={`text-sm hover:text-indigo-600 transition-colors ${
                              darkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {info.value}
                          </a>
                        )}
                        {info.copyable && (
                          <button
                            onClick={handleCopyEmail}
                            className={`ml-auto px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 flex items-center gap-1 ${
                              copiedEmail
                                ? "bg-green-500 text-white"
                                : darkMode
                                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                          >
                            {copiedEmail ? (
                              <>
                                <FaCheck /> Copié
                              </>
                            ) : (
                              <>
                                <FaCopy /> Copier
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div
            className={`text-center p-8 rounded-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Prêt à collaborer ?
            </h3>
            <p
              className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Je suis ouvert aux opportunités en CDI, freelance ou collaboration
              sur des projets innovants.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/cv/CV.pdf"
                className={`px-8 py-3 rounded-full border-2 transform hover:scale-105 transition-all duration-300 font-semibold flex items-center gap-2 ${
                  darkMode
                    ? "border-white text-white hover:bg-white hover:text-gray-900"
                    : "border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
                }`}
              >
                <FaFileDownload /> Télécharger mon CV
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-12 text-center">
            <h4
              className={`text-lg font-semibold mb-6 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Retrouvez-moi sur
            </h4>
            <div className="flex gap-4 justify-center">
              {[
                {
                  name: "LinkedIn",
                  Icon: FaLinkedin,
                  link: "https://linkedin.com/in/clement-dupont",
                  color: "#0A66C2",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg group ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-50"
                  }`}
                  title={social.name}
                >
                  <social.Icon
                    style={{
                      color: social.color,
                      transition: "transform 0.3s ease",
                    }}
                    className="group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
