import React from 'react';
import { Play } from 'lucide-react';
import { SOCIAL_LINKS, ROLES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <h1 className="text-[15vw] font-bold watermark opacity-20 whitespace-nowrap">
          @sebicas
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Content */}
        <div className="max-w-4xl space-y-8 animate-in slide-in-from-bottom duration-700">
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={link.platform}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>

          <div className="space-y-6">
            <h2 className="text-5xl md:text-8xl font-bold leading-tight">
              I am <span className="text-white">@sebicas</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-2 text-primary font-semibold uppercase tracking-wider text-sm md:text-base">
              {ROLES.map((role, index) => (
                <span key={role.title}>
                  {role.title} {index < ROLES.length - 1 && <span className="text-gray-600 mx-2">/</span>}
                </span>
              ))}
            </div>

            <p className="text-graytext text-lg max-w-2xl mx-auto leading-relaxed">
              I am a serial internet entrepreneur, married to an amazing woman and have 2 beautifull kids. 
              Currently living in <span className="text-white font-medium">Costa Rica</span>. 
              Originally Argentinean, but lived in USA, Canada, and UAE for many years.
            </p>
          </div>

          <div className="flex justify-center items-center space-x-6 pt-4">
            {/* Play Button */}
            <a 
              href="https://www.linkedin.com/in/sebicas/" 
              target="_blank"
              rel="noreferrer"
              className="flex items-center group cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                <Play fill="white" size={20} className="ml-1" />
              </div>
              <span className="ml-4 font-semibold text-white group-hover:text-primary transition-colors">
                Learn More
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
