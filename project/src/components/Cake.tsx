import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cake as CakeIcon, Gift } from 'lucide-react';
import gsap from 'gsap';

const Cake: React.FC = () => {
  const [isLit, setIsLit] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const flameRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const lightCandle = () => {
    setIsLit(true);
    
    if (flameRef.current) {
      gsap.to(flameRef.current, {
        duration: 0.3,
        opacity: 1,
        y: 0,
        ease: "power1.in"
      });
    }
  };

  const blowCandle = () => {
    if (isLit) {
      if (flameRef.current) {
        gsap.to(flameRef.current, {
          duration: 0.2,
          opacity: 0,
          y: -10,
          ease: "power1.out",
          onComplete: () => {
            setIsLit(false);
            setShowWish(true);
          }
        });
      }
    }
  };

  return (
    <section 
      id="cake" 
      className="py-20 relative overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-4 space-x-2">
            <CakeIcon className="w-6 h-6 text-rose-500" />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold">
              Make a Wish!
            </h2>
            <CakeIcon className="w-6 h-6 text-rose-500" />
          </div>
        
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-10"
        >
          <div className="cake-container" onClick={isLit ? blowCandle : lightCandle}>
            <div className="cake">
              <div className="candle">
                <div ref={flameRef} className={`flame ${isLit ? 'lit' : ''}`}></div>
              </div>
            </div>
            <div className="plate"></div>
          </div>

          {showWish && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mt-10"
            >
              <div className="inline-block p-4 bg-lavender-100 rounded-lg">
                <div className="flex items-center justify-center text-lavender-700 mb-2">
                  <Gift className="w-5 h-5 mr-2" />
                  <h3 className="font-playfair text-xl font-medium">Your wish has been made!</h3>
                </div>
                <p className="text-gray-700">
                  May all your dreams and wishes come true this year
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="absolute -bottom-10 left-0 w-40 h-40 bg-rose-100 rounded-full opacity-50"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-lavender-200 rounded-full opacity-60"></div>
    </section>
  );
};

export default Cake;