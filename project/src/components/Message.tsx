import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart } from 'lucide-react';

const Message: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      id="message" 
      className="py-20 relative overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-10 relative">
          <div 
            className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-rose-100 rounded-full opacity-70"
            style={{ zIndex: -1 }}
          ></div>
          <div 
            className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-lavender-100 rounded-full opacity-70"
            style={{ zIndex: -1 }}
          ></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              To @aspiring_soul_27 <Heart className="inline w-6 h-6 text-rose-500 align-text-bottom" fill="#f44086" />
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="prose prose-lg max-w-none text-gray-700"
          >
            <p className="mb-4 text-lg leading-relaxed">
              Heyloo Harshu,
            </p>
            <p className="mb-4 text-lg leading-relaxed">
             Happy Birthday to the poetic wanderer, chess queen, and future Ayurveda boss — @harsha__choudhary__!
            </p>
           
            <p className="mb-4 text-lg leading-relaxed">
             May your year be filled with epic travels, endless poems, and just enough studying to pass without crying.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
            Go slay both the exam and the year ahead — and don’t forget us little people when you discover a new herb that cures deadlines!
            </p>
           
            <p className="font-semibold text-lg">
              Nitesh hehe ;)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Message;