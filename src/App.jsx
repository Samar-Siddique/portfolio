import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
// import { Contact } from "lucide-react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Contact } from "./components/Contact";
import { ThemeProvider } from "./context/ThemeContext";

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes skillBar {
            from { width: 0%; }
            to { width: 100%; }
          }

          .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
          .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
          .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out; }
          .animate-fadeInRight { animation: fadeInRight 0.8s ease-out; }
          .animate-skillBar { animation: skillBar 2s ease-out forwards; }
          .animate-typewriter { animation: typewriter 3s infinite; }

          @keyframes typewriter {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }

          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          html {
            scroll-behavior: smooth;
          }

          section {
            scroll-margin-top: 80px;
            min-height: calc(100vh - 80px);
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          #home {
            min-height: 100vh;
          }

          /* Dark mode transitions */
          .dark body {
            background-color: #111827;
            color: #fff;
          }

          * {
            transition-property: background-color, border-color, color, fill, stroke;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 300ms;
          }
          `
        }} />

        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <main className="pt-20">
          <section id="home">
            <HeroSection />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};
export default App;