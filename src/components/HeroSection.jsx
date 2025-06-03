import { Download, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";

// Hero Section Component
const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "React.js Developer",
    "Frontend Engineer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // const handleDownloadCV = () => {
  //   try {
  //     const link = document.createElement('a');
  //     link.href = '/Samar-cv.pdf';
  //     link.download = 'Samar-cv.pdf';
  //     link.target = '_blank'; // Open in new tab if download fails
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } catch (error) {
  //     console.error('Error downloading CV:', error);
  //     // Fallback: Open in new tab
  //     window.open('/Samar-cv.pdf', '_blank');
  //   }
  // };



   const handleDownloadCV = async () => {
    try {
      const response = await fetch('/portfolio/Samar-cv.pdf');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Samar-cv.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Error downloading CV:', error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fadeInUp">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6 animate-pulse">
              SS
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Samar
              </span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 h-12 flex items-center justify-center">
              <span className="animate-typewriter">{roles[currentRole]}</span>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Passionate React.js developer with 2+ years of experience crafting
              beautiful, responsive web applications. I love turning ideas into
              interactive digital experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleDownloadCV}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Download size={20} />
              <span>Download CV</span>
            </button>
            <a
              href="#contact"
              className="flex items-center space-x-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mt-12">
            <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
              <Phone size={20} />
              <span>+92-3029160095</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
              <Mail size={20} />
              <span>samar.sadeeq7550@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
              <MapPin size={20} />
              <span>Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
