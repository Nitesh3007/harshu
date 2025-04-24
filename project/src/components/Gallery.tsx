import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Import images from the attached photos
const images = [
  { url: '/src/assets/harshu1.jpg', alt: 'Harshu in a pink outfit' },
  { url: '/src/assets/harshu2.jpg', alt: 'Harshu with beautiful white outfit' },
  { url: '/src/assets/harshu3.jpg', alt: 'Harshu in a purple dress' },
  { url: '/src/assets/harshu4.jpg', alt: 'Harshu in a red dress' },
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(goToNext, 5000);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section 
      id="gallery" 
      className="py-20 bg-lavender-50"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Celebrating Beautiful Moments
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A glimpse into the life of our birthday star
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="photo-gallery"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="gallery-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="gallery-slide">
                <img src={image.url} alt={image.alt} />
              </div>
            ))}
          </div>

          <button 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 bg-white/70 rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors z-10"
            onClick={goToPrev}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 bg-white/70 rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors z-10"
            onClick={goToNext}
          >
            <ChevronRight size={24} />
          </button>

          <div className="gallery-nav">
            {images.map((_, index) => (
              <div 
                key={index} 
                className={`gallery-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;