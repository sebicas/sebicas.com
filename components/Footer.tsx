import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darker py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">
          sebicas<span className="text-primary">.com</span>
        </h2>
        
        <div className="flex justify-center space-x-6 mb-8">
           {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <link.icon size={24} />
              </a>
            ))}
        </div>

        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Sebastian Castro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;