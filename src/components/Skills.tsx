import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  icon: string;
  color: string;
  category: string;
  img: boolean;
}

const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    icon: "devicon-reactnative-original colored",
    color: "#61DAFB",
    category: "Frontend",
    img: false,
  },
  {
    name: "React Native",
    icon: "devicon-reactnative-original colored",
    color: "#61DAFB",
    category: "Frontend",
    img: false,
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain colored",
    color: "#3178C6",
    category: "Frontend",
    img: false,
  },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain colored",
    color: "#F7DF1E",
    category: "Frontend",
    img: false,
  },
  {
    name: "HTML5",
    icon: "devicon-html5-plain-wordmark colored",
    color: "#E34F26",
    category: "Frontend",
    img: false,
  },
  {
    name: "CSS/SCSS",
    icon: "devicon-css3-plain-wordmark colored",
    color: "#1572B6",
    category: "Frontend",
    img: false,
  },
  {
    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-original colored",
    color: "#06B6D4",
    category: "Frontend",
    img: false,
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
    color: "#F24E1E",
    category: "Frontend",
    img: true,
  },
  {
    name: "Jest",
    icon: "devicon-jest-plain colored",
    color: "#F24E1E",
    category: "Frontend",
    img: false,
  },

  // Backend
  {
    name: "Java",
    icon: "devicon-java-plain-wordmark colored",
    color: "#F05032",
    category: "Backend",
    img: false,
  },
  {
    name: "Spring/Spring Boot",
    icon: "devicon-spring-original-wordmark colored",
    color: "#6DB33F",
    category: "Backend",
    img: false,
  },
  {
    name: "Node.js",
    icon: "devicon-nodejs-plain-wordmark colored",
    color: "#339933",
    category: "Backend",
    img: false,
  },
  {
    name: "PostgreSQL",
    icon: "devicon-postgresql-plain-wordmark colored",
    color: "#4479A1",
    category: "Backend",
    img: false,
  },

  // Outils
  {
    name: "Git",
    icon: "devicon-git-plain-wordmark colored",
    color: "#F05032",
    category: "Outils",
    img: false,
  },
  {
    name: "VS Code",
    icon: "devicon-vscode-plain colored",
    color: "#007ACC",
    category: "Outils",
    img: false,
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    color: "#A259FF",
    category: "Outils",
    img: true,
  },
  {
    name: "Eclipse",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg",
    color: "#007ACC",
    category: "Outils",
    img: true,
  },
  {
    name: "Jenkins",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    color: "#F24E1E",
    category: "Outils",
    img: true,
  },
  {
    name: "IntelliJ",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
    color: "#F78021",
    category: "Outils",
    img: true,
  },
];

interface SkillsProps {
  darkMode: boolean;
}

const Skills = ({ darkMode }: SkillsProps) => {
  const [visibleSkills, setVisibleSkills] = useState<Set<number>>(new Set());
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = skillRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSkills((prev) => new Set(prev).add(index));
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && skillRefs.current[index]) {
          observer.unobserve(skillRefs.current[index]!);
        }
      });
    };
  }, []);

  // Grouper les compétences par catégorie
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section
      id="skills"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-4xl font-extrabold mb-4 text-center ${
            darkMode ? "text-white" : "text-indigo-600"
          }`}
        >
          Compétences
        </h2>
        <p
          className={`text-center mb-12 text-lg ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Technologies et outils que j'utilise au quotidien
        </p>

        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="mb-12">
            <h3
              className={`text-2xl font-bold mb-6 ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {categorySkills.map((skill) => {
                const globalIndex = skills.indexOf(skill);
                const isVisible = visibleSkills.has(globalIndex);

                return (
                  <div
                    key={skill.name}
                    ref={(el) => {
                      skillRefs.current[globalIndex] = el;
                    }}
                    className={`group relative ${
                      darkMode ? "bg-gray-700" : "bg-gray-50"
                    } rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-2xl cursor-pointer ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{
                      transitionDelay: `${(globalIndex % 5) * 0.1}s`,
                    }}
                  >
                    {/* Glow effect on hover */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                      style={{ backgroundColor: skill.color }}
                    ></div>

                    {/* Icon */}
                    <div
                      className="text-5xl mb-3 transform group-hover:scale-125 transition-transform duration-300"
                      style={{
                        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
                      }}
                    >
                      {skill.img ? (
                        <img
                          src={skill.icon}
                          alt="tech icon"
                          className="w-12 h-12"
                        />
                      ) : (
                        <i className={skill.icon}></i>
                      )}
                    </div>

                    {/* Name */}
                    <h4
                      className={`text-sm font-semibold text-center ${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {skill.name}
                    </h4>

                    {/* Animated border on hover */}
                    <div
                      className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ borderColor: skill.color }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Optional: Progress bars version */}
        <div className="mt-16">
          <h3
            className={`text-2xl font-bold mb-6 text-center ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Niveau de maîtrise
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { name: "React & TypeScript", level: 90 },
              { name: "HTML/CSS & Tailwind", level: 90 },
              { name: "JavaScript", level: 85 },
              { name: "Java & Spring Boot", level: 80 },
              { name: "UI/UX Design", level: 70 },
            ].map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span
                    className={`font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {skill.name}
                  </span>
                  <span
                    className={`font-medium ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  className={`h-3 rounded-full overflow-hidden ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: visibleSkills.size > 0 ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
