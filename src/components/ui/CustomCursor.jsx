import React, { useEffect, useState } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for a fluid "trailing" effect
  const springConfig = { stiffness: 150, damping: 25, restDelta: 0.001 };
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  useEffect(() => {
    // Hidden on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      springX.set(clientX);
      springY.set(clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleHoverState = (e) => {
      // Find the nearest interactive ancestor
      const target = e.target.closest('a, button, select, input, textarea, [role="button"], label, .interactive-item');
      setIsHovering(!!target);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleHoverState);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Inject global cursor concealment for desktop for a pure experience
    const style = document.createElement('style');
    style.id = 'designer-cursor-conceal';
    style.innerHTML = `
      @media (min-width: 1024px) {
        *, *::before, *::after {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleHoverState);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      const styleEl = document.getElementById('designer-cursor-conceal');
      if (styleEl) styleEl.remove();
    };
  }, [isVisible, springX, springY]);

  // Don't render on mobile or if not initialized
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none">
      {/* Precision Core Dot */}
      <motion.div
        className="fixed w-1.5 h-1.5 bg-amber-500 rounded-full z-[10000]"
        style={{
          left: mousePosition.x - 3,
          top: mousePosition.y - 3,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Fluid Outer Designer Ring */}
      <motion.div
        className="fixed rounded-full flex items-center justify-center border-amber-500"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 70 : 36,
          height: isHovering ? 70 : 36,
          backgroundColor: isHovering ? "rgba(245, 158, 11, 0.15)" : "rgba(245, 158, 11, 0.05)",
          borderWidth: isHovering ? "1px" : "1px",
          borderColor: isHovering ? "rgba(245, 158, 11, 1)" : "rgba(245, 158, 11, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Drafting / Designer Crosshair Details */}
              <div className="absolute w-[1px] h-4 bg-amber-500/60" />
              <div className="absolute w-4 h-[1px] bg-amber-500/60" />
              <motion.div 
                className="absolute text-[8px] font-black uppercase text-amber-500 tracking-[0.2em] -bottom-6"
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                View
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CustomCursor;
