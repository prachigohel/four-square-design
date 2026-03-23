import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import PanoramaViewer from '../components/ui/PanoramaViewer';

const projects = [
  {
    id: 1,
    title: "Signature Culinary Suite",
    category: "Residential",
    image: "/image_1.jpeg",
    doorStyle: "Shaker Slab",
    finish: "Matte White & Natural Oak"
  },
  {
    id: 2,
    title: "Luxury Loft Kitchen",
    category: "Multi-Family",
    image: "/image_2.jpeg",
    doorStyle: "Flat Panel",
    finish: "High Gloss Fawn"
  },
  {
    id: 3,
    title: "Monochrome Wellness Bath",
    category: "Residential",
    image: "/image_3.jpeg",
    doorStyle: "Raised Panel",
    finish: "Slate Gray Painted"
  },
  {
    id: 4,
    title: "Urban Industrial Kitchen",
    category: "Multi-Family",
    image: "/image_4.jpeg",
    doorStyle: "Integrated Handle",
    finish: "Charcoal & Walnut"
  },
  {
    id: 5,
    title: "Designer Chef's Kitchen",
    category: "Residential",
    image: "/image_5.jpeg",
    doorStyle: "Classic Shaker",
    finish: "Antique White w/ Glaze"
  },
  {
    id: 6,
    title: "Boutique Hotel Layouts",
    category: "Multi-Family",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    doorStyle: "Slab Veneer",
    finish: "Rift Cut White Oak"
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedPano, setSelectedPano] = useState(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="py-24 lg:py-32 bg-fawn-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif italic text-slate-800 dark:text-white mb-6"
          >
            Our <span className="text-amber-500 not-italic uppercase font-bold text-4xl md:text-6xl align-middle">Portfolio</span>
          </motion.h1>
          <p className="text-lg text-charcoal-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-300 font-light">
            Explore our curated selection of Premium Residential and Multi-Family projects, designed to exact NKBA and ADA standards.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-20">
          {['All', 'Residential', 'Multi-Family'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-amber-500 text-slate-900 shadow-xl scale-110' 
                  : 'bg-white text-charcoal-500 border border-slate-100 hover:border-gold-300 dark:bg-white/5 dark:text-slate-400 dark:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-100 shadow-sm hover:shadow-2xl transition-all border border-slate-100 dark:border-white/5"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* 360 Panorama Button */}
                <button 
                  onClick={() => setSelectedPano(project)}
                  className="absolute top-6 right-6 z-20 bg-white dark:bg-slate-800 shadow-xl p-3 rounded-xl text-charcoal-800 dark:text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-amber-500 hover:text-white translate-y-2 group-hover:translate-y-0"
                  title="View 360° Panorama"
                >
                  <Maximize2 size={24} />
                </button>

                {/* Hover Details Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <span className="text-amber-500 text-[10px] font-black tracking-[0.3em] uppercase mb-4 block translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.category}</span>
                  <h3 className="text-3xl font-serif italic text-white mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.title}</h3>
                  
                  <div className="space-y-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-150">
                    <div className="flex justify-between items-center text-xs uppercase tracking-widest text-slate-400 border-b border-white/10 pb-2">
                      <span>Door Style</span>
                      <span className="text-white font-bold">{project.doorStyle}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs uppercase tracking-widest text-slate-400">
                      <span>Finish</span>
                      <span className="text-white font-bold">{project.finish}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* 360° Panorama Modal */}
      <AnimatePresence>
        {selectedPano && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-900/98 backdrop-blur-xl flex items-center justify-center p-4 lg:p-12"
          >
            <button 
              onClick={() => setSelectedPano(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white bg-white/5 p-4 rounded-2xl transition-all hover:rotate-90 z-10"
            >
              <X size={28} />
            </button>
            <div className="w-full h-full max-w-7xl rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(250,177,51,0.15)] bg-slate-800 border-amber-500/20">
              <PanoramaViewer 
                imageUrl={selectedPano.image} 
                title={selectedPano.title} 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
