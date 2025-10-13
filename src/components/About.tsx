import profilPicture from "../assets/profilPicture.jpg";

interface AboutProps {
  darkMode: boolean;
}

const About = ({ darkMode }: AboutProps) => {
  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className={`text-4xl font-extrabold mb-12 text-center ${
            darkMode ? "text-white" : "text-indigo-600"
          }`}
        >
          À propos de moi
        </h2>

        {/* Image + Texte côte à côte dès md (responsive) */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
          {/* PHOTO */}
          <img
            src={profilPicture}
            alt="Photo de profil"
            className="w-40 h-40 rounded-full object-cover shadow-md"
          />

          {/* TEXTE */}
          <div className="space-y-6 text-lg flex-1">
            <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
              Salut ! Je m'appelle{" "}
              <span className="font-bold text-indigo-600">Clément</span> et je
              suis un <span className="font-bold">développeur fullstack</span>{" "}
              passionné de front-end. J'aime concevoir des interfaces modernes,
              minimalistes et accessibles, où chaque détail compte.
            </p>

            <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
              Après avoir exploré différentes technologies du web, je me suis
              spécialisé dans le développement d'applications réactives, rapides
              et bien structurées. Mon objectif est de créer des expériences
              fluides et intuitives qui donnent vie aux idées.
            </p>

            <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
              En dehors du code, j'aime apprendre de nouvelles choses, relever
              des défis créatifs et collaborer sur des projets où le design et
              la technique se complètent. Je suis toujours à la recherche
              d'opportunités pour grandir et partager mes compétences.
            </p>

            <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
              En parallèle, je m'inspire beaucoup de mes passions : le skate, le
              surf et l'escalade apportent équilibre et énergie, tandis que la
              musique, le cinéma et les romans graphiques nourrissent ma
              créativité et mon regard sur le design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
