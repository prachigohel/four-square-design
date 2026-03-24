import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';

const FloatingAction = () => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-end gap-3 md:gap-4">
      {/* WhatsApp bubble was removed here */}

      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 dark:bg-slate-700 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-amber-500 transition-colors"
      >
        <Send className="w-4 h-4 md:w-5 md:h-5 -rotate-90" />
      </motion.button>
    </div>
  );
};

export default FloatingAction;
