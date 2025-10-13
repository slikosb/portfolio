import { useState } from "react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "Développeur full-stack",
    company: "Agirc-Arrco",
    location: "Gradignan",
    period: "Juillet 2023 – Juillet 2025",
    description: [
      "L'Agirc-Arrco est une caisse de retraite complémentaire du secteur privé.",
      "Durant deux ans, j'ai intégré l'équipe RNGD (Référentiel National de Gestion des Droits), chargée de la gestion des droits Agirc-Arrco tout au long du cycle de vie d'un individu.",
      "Membre d'une équipe de huit développeurs, j'ai d'abord travaillé sur la partie back-end avant d'évoluer vers un rôle full-stack après quatre mois, sur le projet RGCU (Référentiel Général de la Carrière Unique).",
      "Mes principales missions consistaient à :",
      "• Développer et maintenir les batchs de migration de données.",
      "• Analyse des besoins et propositions de solutions techniques. ",
      "• Conception, développement et maintenance des applications. ",
      "• Gestion de la qualité avec tests unitaires et tests d'intégration à 80% de couverture de code. ",
      "",
      "Durant la mission j’ai approfondi mes connaissances ou appris : ",
      "• JavaScript, CSS, HTML, Node, Java, Angular.",
      "• TU/TI (Tests Unitaires et d’Intégration). ",
      "• Git, GitHub, SVN. ",
      "• Connaissance des logiciels Jira et Confluence. ",
      "• Spring Batch. ",
      "• Protocoles SOAP et API REST. ",
      "• PostgreSQL. ",
    ],
  },
  {
    title: "Développeur full-stack (Stage)",
    company: "Ausy",
    location: "Mérignac",
    period: "Mars 2023 - Juillet 2023",
    description: [
      "Stage de 4 mois axé sur le développement full-stack avec React et Tailwind CSS en front puis Java en back.",
      "J'ai participé au lancement de la digitalisation d'un jeu de société.",
      "Mes principales missions consistaient à :",
      "Conception, développement et maintenance de l'application.",
      "• Gestion de la qualité avec tests unitaires et tests d'intégration à 80% de couverture de code. ",
      "Durant ce stage j’ai approfondi mes connaissances ou appris : ",
      "• JavaScript, CSS, HTML, Node.",
      "• Java, React. ",
      "• TU/TI (Tests Unitaires et d’Intégration). ",
      "• Git, GitLab. ",
      "• Connaissance des logiciels Jira et Confluence. ",
      "• API REST. ",
    ],
  },
];

const ExperienceCard = ({
  exp,
  darkMode,
  index,
}: {
  exp: Experience;
  darkMode: boolean;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-h-80 flex flex-col ${
        darkMode ? "bg-gray-700 shadow-xl" : "bg-white shadow-lg"
      }`}
      style={{
        animation: `slideIn 0.5s ease-out ${index * 0.2}s both`,
      }}
    >
      <h3
        className={`font-bold text-2xl mb-1 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        {exp.title} — {exp.company} ({exp.location})
      </h3>
      <p
        className={`text-sm mb-3 ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {exp.period}
      </p>

      <div
        className={`flex-grow ${darkMode ? "text-gray-300" : "text-gray-700"}`}
      >
        {isExpanded
          ? exp.description.map((line, i) => (
              <p key={i} className="mb-2">
                {line}
              </p>
            ))
          : exp.description.slice(0, 2).map((line, i) => (
              <p key={i} className="mb-2">
                {line}
              </p>
            ))}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-3 text-indigo-600 font-medium hover:underline self-start transition-colors"
      >
        {isExpanded ? "Voir moins ▲" : "Voir plus ▼"}
      </button>
    </div>
  );
};

interface ExperiencesProps {
  darkMode: boolean;
}

const Experiences = ({ darkMode }: ExperiencesProps) => {
  return (
    <section
      id="experiences"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-4xl font-extrabold mb-12 text-center ${
            darkMode ? "text-white" : "text-indigo-600"
          }`}
        >
          Expériences professionnelles
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              exp={exp}
              darkMode={darkMode}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
