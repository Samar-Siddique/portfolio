// Experience Section Component
export const Experience = () => {
  const experiences = [
    {
      company: 'TechEsthete',
      position: 'Full Stack Developer',
      duration: 'March 2025 - Present',
      description: 'Leading frontend development with a focus on creating modular, maintainable React applications. Implementing modern UI/UX designs and establishing best practices for code organization and component architecture.',
      achievements: [
        'Developed and maintained a component library using React and Tailwind CSS, reducing development time by 40% across multiple projects',
        'Implemented responsive designs and animations that improved user engagement metrics by 35% and reduced bounce rates by 25%',
        'Established coding standards and architecture patterns that improved code reusability by 50% and simplified maintenance',
        'Created custom hooks and utilities that streamlined state management and reduced boilerplate code by 60%',
        'Led the migration from class components to functional components with hooks, improving code readability and reducing bundle size by 30%'
      ]
    },
    {
      company: 'Tanbits',
      position: 'React Js Developer',
      duration: 'April 2023 - March 2025',
      description: 'Leading frontend development for multiple high-impact projects including Q-vibez, Chaymberdeck, and ISN admin panels.',
      achievements: [
        'Developed Q-vibez project with Spotify API integration and Firebase backend',
        'Built responsive admin panels using React.js, TypeScript, and Tailwind CSS',
        'Implemented complex event scheduling functionalities',
        'Collaborated with cross-functional teams to deliver scalable solutions'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.position}</h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                </div>
                <div className="text-gray-500 dark:text-gray-400 font-medium mt-2 md:mt-0">{exp.duration}</div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};