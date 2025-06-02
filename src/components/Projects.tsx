import { ExternalLink } from "lucide-react";

// Projects Section Component
export const Projects = () => {
  const projects = [
    {
      title: 'Roomo - Personal Focus Space',
      description: 'A productivity-driven workspace inspired by Jira, featuring task management with customizable workflows, immersive backgrounds, and built-in timers.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AWS Lambda', 'DynamoDB'],
      role: 'Full Stack Developer',
      features: ['Task Management', 'Custom Workflows', 'Background Videos & Audio', 'Progress Tracking'],
      link: 'https://www.roomo.me'
    },
    {
      title: 'Q-Vibez',
      description: 'An admin panel for a music application that allows users to organize and personalize music events with Spotify API integration.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Spotify API'],
      role: 'Frontend Lead',
      features: ['Spotify Integration', 'Event Management', 'Real-time Updates', 'User Authentication'],
      link: 'https://q-vibez.tanbitz.com'
    },
    {
      title: 'FMS - Fuel Management System',
      description: 'A comprehensive software solution for the petroleum industry to digitally transform operations and improve efficiency.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Elixir'],
      role: 'Lead Frontend Developer',
      features: ['Digital Transformation', 'Industry Solutions', 'Operational Efficiency', 'Data Management'],
      link: 'https://fuel-management.rentech.com.pk'
    }
  ];

  const handleProjectClick = (link) => {
    if (link && link !== '#') {
      // Add https:// if not present
      const url = link.startsWith('http') ? link : `https://${link}`;
      window.open(url, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {project.role}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && project.link !== '#' && (
                    <button
                      onClick={() => handleProjectClick(project.link)}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mt-4 group"
                    >
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm font-medium">View Project</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
