import React from 'react';
import { MapPin, Plane, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2">My Story</span>
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <div className="w-16 h-1 bg-primary mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Global Citizen */}
          <div className="bg-dark p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-colors group">
            <div className="w-14 h-14 bg-darker rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <Globe className="text-primary group-hover:text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Global Citizen</h3>
            <p className="text-graytext leading-relaxed">
              Born in Argentina. Experienced life in the USA, Canada, and UAE. A true citizen of the world with a diverse cultural perspective.
            </p>
          </div>

          {/* Current Location */}
          <div className="bg-dark p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-colors group">
            <div className="w-14 h-14 bg-darker rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <MapPin className="text-primary group-hover:text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Costa Rica</h3>
            <p className="text-graytext leading-relaxed">
              Currently enjoying the "Pura Vida" lifestyle in San Jose, Costa Rica. Building businesses and memories in paradise.
            </p>
          </div>

          {/* Pilot */}
          <div className="bg-dark p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-colors group">
            <div className="w-14 h-14 bg-darker rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <Plane className="text-primary group-hover:text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Pilot</h3>
            <p className="text-graytext leading-relaxed">
              Aviation enthusiast and pilot. Seeing the world from above gives me a unique perspective on life and business.
            </p>
          </div>

          {/* Family Man */}
          <div className="bg-dark p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-colors group">
            <div className="w-14 h-14 bg-darker rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <Heart className="text-primary group-hover:text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Family First</h3>
            <p className="text-graytext leading-relaxed">
              Happily married to an amazing woman and proud father of two wonderful kids. They are my greatest investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
