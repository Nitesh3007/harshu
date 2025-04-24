import React from 'react';
import { Heart, Cake, Gift } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-gradient-to-b from-lavender-100 to-lavender-200">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <Gift className="w-5 h-5 text-lavender-600 mr-2" />
          <h3 className="font-playfair text-xl font-medium">
            Happy 21st Birthday Harshu!
          </h3>
          <Cake className="w-5 h-5 text-lavender-600 ml-2" />
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          April 26th, 2025
        </p>
        
        <p className="flex items-center justify-center text-gray-700">
          Made with 
          <Heart className="w-4 h-4 text-rose-500 mx-1" fill="#f44086" /> 
          for Harshuuuu!
        </p>
        
        <p className="text-xs text-gray-500 mt-4">
          &copy; {currentYear} - A special gift for a special person
        </p>
      </div>
    </footer>
  );
};

export default Footer;