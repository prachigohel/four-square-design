import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner, New York",
    content: "The attention to detail in our kitchen design was astounding. They balanced NKBA standards with our personal style perfectly.",
    rating: 5
  },
  {
    name: "Michael Rossi",
    role: "Developer, LX Group",
    content: "Seamless coordination for our multi-family project. The 2020 Design renderings helped us sell 80% of units before completion.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Interior Designer",
    content: "A reliable partner for technical documentation. Their floor plans and elevations are always precise and easy to follow.",
    rating: 5
  }
];

const TestimonialsCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-6 py-12">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-amber-500 opacity-20">
        <Quote size={80} fill="currentColor" />
      </div>
      
      <div className="relative z-10 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[index].rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl font-serif italic text-slate-800 dark:text-slate-200 mb-8 leading-relaxed">
              "{testimonials[index].content}"
            </p>
            
            <h4 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1">
              {testimonials[index].name}
            </h4>
            <span className="text-sm text-amber-600 font-medium">
              {testimonials[index].role}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-10">
        <button 
          onClick={prev}
          className="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all transition-colors duration-300"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={next}
          className="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all transition-colors duration-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <div 
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === index ? 'bg-amber-500 w-4' : 'bg-slate-300 dark:bg-slate-700'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
