import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import PanoramaViewer from '../components/ui/PanoramaViewer';

const projects = [
  {
    id: 1,
    title: "Gourmet Living Kitchen",
    category: "Residential",
    image: "/image_1.png",
    doorStyle: "Inset Slim Shaker",
    finish: "Warm-Off White & Deep Navy"
  },
  {
    id: 2,
    title: "Modern Luxe Bathroom",
    category: "Residential",
    image: "/image_2.png",
    doorStyle: "Brooklyn",
    finish: "White"
  },
  {
    id: 3,
    title: "Monochrome Wellness Bath",
    category: "Residential",
    image: "/image_3.png",
    doorStyle: "Raised Panel",
    finish: "Slate Gray Painted"
  },
  {
    id: 4,
    title: "Modern Library Corner",
    category: "Residential",
    image: "/image_4.jpeg",
    doorStyle: "Classic Slim Shaker",
    finish: "Midnight Blue"
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
    category: "Residential",
    image: "/image_6.jpeg",
    doorStyle: "Classic Slim Shaker",
    finish: "Midnight Blue"
  }
];

const Portfolio = () => {
  const [selectedPano, setSelectedPano] = useState(null);

  return (
    <div className="py-24 lg:py-32 bg-slate-950 min-h-screen transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif italic text-white mb-6 uppercase tracking-tight"
          >
            Our <span className="text-amber-500 not-italic font-sans font-black">Portfolio</span>
          </motion.h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto transition-colors duration-300 font-light leading-relaxed">
            Explore our curated selection of Premium Residential and Multi-Family projects, designed to exact NKBA and ADA standards.
          </p>
        </div>

        {/* Square Grid - Universal Sizing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence>
            {projects.map(project => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl border border-white/5 aspect-square"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  loading="lazy"
                />

                {/* 360 Panorama Button */}
                <button
                  onClick={() => setSelectedPano(project)}
                  className="absolute top-8 right-8 z-20 bg-slate-950/80 backdrop-blur-md shadow-xl p-4 rounded-2xl text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-amber-500 hover:scale-110 translate-y-2 group-hover:translate-y-0"
                  title="View 360° Panorama"
                >
                  <Maximize2 size={24} />
                </button>

                {/* Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
                  <span className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase mb-4 block translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.category}</span>
                  <h3 className="text-3xl font-serif italic text-white mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.title}</h3>

                  <div className="space-y-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-150">
                    <div className="flex flex-col gap-1 border-t border-white/10 pt-6">
                      <span className="text-[9px] uppercase tracking-widest text-slate-500">Door Style</span>
                      <span className="text-white text-sm font-bold uppercase tracking-wider">{project.doorStyle}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] uppercase tracking-widest text-slate-500">Finish</span>
                      <span className="text-white text-sm font-bold uppercase tracking-wider">{project.finish}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

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
