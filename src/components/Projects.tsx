interface ProjectsProps {
  darkMode: boolean;
}

const Projects = ({ darkMode }: ProjectsProps) => {
  const projects = [
    {
      title: "Project 1",
      description: "Description rapide du projet.",
    },
    {
      title: "Project 2",
      description: "Description rapide du projet.",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-4xl font-extrabold mb-12 text-center ${
            darkMode ? "text-white" : "text-indigo-600"
          }`}
        >
          Projets
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                darkMode ? "bg-gray-700 shadow-xl" : "bg-gray-50 shadow-lg"
              }`}
            >
              <h3
                className={`font-bold text-xl mb-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {project.title}
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
