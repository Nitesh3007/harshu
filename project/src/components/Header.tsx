import React, { useState, useEffect } from 'react';
import { Cake, Gift, Heart, Camera } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Cake className="w-6 h-6 text-lavender-600 mr-2" />
          <span className="font-playfair text-lg font-medium">Harshu's 21st</span>
        </div>
        
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink href="#home" icon={<Heart className="w-4 h-4 mr-1" />}>Home</NavLink>
          <NavLink href="#message" icon={<Gift className="w-4 h-4 mr-1" />}>Message</NavLink>
          <NavLink href="#gallery" icon={<Camera className="w-4 h-4 mr-1" />}>Gallery</NavLink>
        </nav>

        <div className="font-playfair text-sm md:text-base">
          <span className="text-lavender-700">April 26, 2025</span>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, icon }) => {
  return (
    <a 
      href={href} 
      className="flex items-center text-gray-700 hover:text-lavender-600 transition-colors duration-200"
    >
      {icon}
      {children}
    </a>
  );
};

export default Header;