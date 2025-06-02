import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Samar Siddique
          </div>
          <p className="text-gray-400 dark:text-gray-500 mb-6">
            React.js Developer & Frontend Engineer
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="www.linkedin.com/in/samar-siddique-40651b180" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:samar.sadeeq7550@gmail.com" 
              className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="border-t border-gray-800 dark:border-gray-900 pt-8">
            <p className="text-gray-400 dark:text-gray-500">
              © 2024 Samar Siddique. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};