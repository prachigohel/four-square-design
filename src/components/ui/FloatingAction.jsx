import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';

const FloatingAction = () => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-end gap-3 md:gap-4">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="group relative"
      >
        <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
          <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-xl shadow-xl border border-amber-100 dark:border-slate-700 whitespace-nowrap">
            <p className="text-sm font-medium text-slate-900 dark:text-white">Have a question? Chat with us!</p>
          </div>
          <div className="w-3 h-3 bg-white dark:bg-slate-800 border-r border-b border-amber-100 dark:border-slate-700 rotate-45 absolute -bottom-1.5 right-6"></div>
        </div>
        
        <motion.a
          href="https://wa.me/917600134301"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 transition-all hover:shadow-green-500/40"
        >
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" />
        </motion.a>
      </motion.div>

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
