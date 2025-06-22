import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/api/placeholder/1920/1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-200 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up">
            <span className="block">Développeur</span>
            <span className="block text-blue-400">Web Créatif</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 animate-fade-in-up delay-300 max-w-3xl mx-auto leading-relaxed">
            Je crée des expériences web modernes et performantes avec une approche centrée sur l'utilisateur
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up delay-500">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg touch-manipulation"
            >
              Voir mes projets
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-base sm:text-lg font-medium rounded-full text-white hover:bg-white hover:text-gray-900 active:bg-gray-100 transition-all duration-300 hover:transform hover:scale-105 touch-manipulation"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default Hero;