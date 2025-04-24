import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { ChevronDown } from 'lucide-react';

const chessPieces = [
  { symbol: '♔', style: { top: '10%', left: '10%', animationDelay: '0s' }},
  { symbol: '♕', style: { top: '20%', right: '15%', animationDelay: '1s' }},
  { symbol: '♘', style: { bottom: '15%', left: '20%', animationDelay: '2s' }},
  { symbol: '♗', style: { top: '40%', right: '25%', animationDelay: '3s' }},
  { symbol: '♖', style: { bottom: '30%', right: '10%', animationDelay: '4s' }},
  { symbol: '♙', style: { top: '60%', left: '15%', animationDelay: '5s' }}
];

const Hero: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const { width, height } = useWindowSize();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      {showConfetti && <Confetti width={width} height={height} recycle={false} />}
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-lavender-100 to-lavender-200 opacity-70"></div>
        {chessPieces.map((piece, index) => (
          <div
            key={index}
            className="chess-piece-bg"
            style={{
              ...piece.style,
              position: 'absolute',
              animationDelay: piece.style.animationDelay
            }}
          >
            {piece.symbol}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="inline-block text-sm md:text-base uppercase tracking-wider font-medium text-lavender-600 mb-2">
            April 26, 2025
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="block">Happy</span>
            <span className="text-gradient">21st Birthday</span>
            <span className="block mt-2">Harshu!</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10"
        >
          To the most amazing chess queen who always makes the right moves in life.
          Today we celebrate you!
        </motion.p>
      </div>

      <a href="#message" className="scroll-down">
        <ChevronDown className="w-8 h-8 text-lavender-600" />
      </a>
    </section>
  );
};

export default Hero;