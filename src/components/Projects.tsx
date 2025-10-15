import { useState } from "react";
import { FaFigma, FaGithub } from "react-icons/fa";
import {
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import figmaHobbyLibrary from "../assets/hobbyLibraryFigma.png";
import portfolioPicture from "../assets/portfolio.png";

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  technologies: {
    name: string;
    icon: React.ComponentType<{
      size?: number;
      style?: React.CSSProperties;
      className?: string;
    }>;
    color: string;
  }[];
  github?: string;
  figma?: string;
  image?: string;
  category: "frontend" | "fullstack" | "design";
}

const projects: Project[] = [
  {
    title: "Portfolio Interactif",
    description: "Portfolio interactif avec React et Tailwind CSS.",
    longDescription:
      "Développement d'un portfolio personnel avec animations fluides, mode sombre/clair, menu burger responsive et design moderne. Utilisation de React hooks pour la gestion d'état et d'animations CSS personnalisées.",
    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    github: "https://github.com/slikosb/portfolio",
    category: "frontend",
    image: portfolioPicture,
  },
  {
    title: "Catalogue personnel de films, musiques, livres (développement)",
    description:
      "Application full-stack type letterboxd avec authentification.",
    longDescription:
      "Création d'un application type letterboxd en ajoutant le catalogue personnel de livres et de musiques/vinyles. L'application est actuellement en création.\nElle permet: \n• L'authentification\n• L'ajout, la supression et la modification de la bibliothèque personnelle\n• la recherche de film/musique/livre\n• La notation de films\n• Création et modification d'une watchlist",
    technologies: [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    github: "https://github.com/slikosb/HobbyLibrary",
    category: "fullstack",
    image: figmaHobbyLibrary,
  },
  {
    title: "Catalogue personnel de films, musiques, livres (maquette)",
    description: "Conception des interfaces",
    longDescription:
      "Maquettage de mes écrans pour mon application type letterboxd. Création des écrans ainsi que les composants réutilisables.\nLes écrans :\n• Welcome page\n• Login\n• Sign-up\n• Home\n• Search\n• Search result\n• Library - already seen\n• Library - watchlist\n• Library - favorites\n• Film details\n\n* Prototypage d'une bonne partie de l'application.",
    technologies: [{ name: "Figma", icon: FaFigma, color: "#F24E1E" }],
    figma:
      "https://www.figma.com/design/kbykcGk2HOVcH3IF2yZGmx/Hobbies-Library?node-id=2-3&t=35N1jktvCv29aGcr-0",
    category: "design",
    image: figmaHobbyLibrary,
  },
];

const Projects = ({ darkMode }: ProjectsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "Tous" },
    { id: "frontend", label: "Front-end" },
    { id: "fullstack", label: "Full-stack" },
    { id: "design", label: "Design" },
  ];

  const formatTextWithLineBreaks = (text: string) => {
    return text.replace(/\n/g, "<br />");
  };

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-4xl font-extrabold mb-4 text-center ${
            darkMode ? "text-white" : "text-indigo-600"
          }`}
        >
          Mes Projets
        </h2>
        <p
          className={`text-center mb-12 text-lg ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Découvrez quelques projets sur lesquels j'ai travaillé
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? "bg-indigo-600 text-white shadow-lg"
                  : darkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                darkMode ? "bg-gray-700 shadow-xl" : "bg-gray-50 shadow-lg"
              }`}
              style={{
                animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Project Image/Banner */}
              <div
                className={`h-48 relative overflow-hidden ${
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                }`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {(() => {
                        const IconComponent = project.technologies[0]?.icon;
                        return IconComponent ? <IconComponent /> : null;
                      })()}
                    </div>
                  </div>
                )}
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.category === "frontend"
                        ? "bg-blue-500 text-white"
                        : project.category === "fullstack"
                        ? "bg-purple-500 text-white"
                        : "bg-pink-500 text-white"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3
                  className={`font-bold text-2xl mb-3 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html:
                      expandedProject === index
                        ? formatTextWithLineBreaks(
                            project.longDescription || project.description
                          )
                        : project.description,
                  }}
                />

                {/* Show more/less button */}
                {project.longDescription && (
                  <button
                    onClick={() =>
                      setExpandedProject(
                        expandedProject === index ? null : index
                      )
                    }
                    className="text-indigo-600 hover:text-indigo-700 text-sm font-medium mb-4"
                  >
                    {expandedProject === index
                      ? "Voir moins ▲"
                      : "En savoir plus ▼"}
                  </button>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
                        darkMode ? "bg-gray-800" : "bg-white"
                      }`}
                      title={tech.name}
                    >
                      <tech.icon style={{ color: tech.color }} size={18} />
                      <span
                        className={`text-sm font-medium ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                        darkMode
                          ? "bg-gray-800 text-white hover:bg-gray-900"
                          : "bg-gray-800 text-white hover:bg-gray-900"
                      }`}
                    >
                      <FaGithub size={18} />
                      GitHub
                    </a>
                  )}
                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 bg-purple-600 text-white hover:bg-purple-700"
                    >
                      <FaFigma size={18} />
                      Figma
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p
              className={`text-lg ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Aucun projet dans cette catégorie pour le moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
