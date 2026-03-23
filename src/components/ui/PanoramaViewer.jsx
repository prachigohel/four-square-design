import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Move, Maximize2 } from 'lucide-react';

const PanoramaViewer = ({ imageUrl, title }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - position.x);
    setStartY(e.clientY - position.y);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX - startX;
    const y = e.clientY - startY;
    
    // Smoothly wrap around X-axis for a "fake" 360 feel
    setPosition({ x, y: Math.max(-20, Math.min(20, y)) });
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full bg-charcoal-950 overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      <motion.div 
        className="absolute inset-0 w-[400%] h-full flex"
        animate={{ x: position.x }}
        transition={{ type: "spring", damping: 30, stiffness: 100, mass: 0.5 }}
      >
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-1/4 h-full object-cover select-none"
        />
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-1/4 h-full object-cover select-none"
        />
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-1/4 h-full object-cover select-none"
        />
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-1/4 h-full object-cover select-none"
        />
      </motion.div>

      {/* Overlay Instructions */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
          className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 text-white border border-white/20"
        >
          <Move size={20} className="animate-pulse" />
          <span className="text-sm font-medium uppercase tracking-widest">Drag to explore 360° view</span>
        </motion.div>
      </div>

      {/* Title Bar */}
      <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <h3 className="text-white font-serif text-2xl">{title}</h3>
        <p className="text-slate-400 text-sm">Interactive 3D Simulation</p>
      </div>

      {/* Controls Overlay */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3">
        <div className="bg-gold-500 px-4 py-2 rounded-lg flex items-center gap-2 text-white shadow-lg">
          <Maximize2 size={16} />
          <span className="text-xs font-bold uppercase tracking-tighter">HD Rendering</span>
        </div>
      </div>
    </div>
  );
};

export default PanoramaViewer;
