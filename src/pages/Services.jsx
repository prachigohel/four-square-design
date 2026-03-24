import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Monitor, ShieldCheck, Settings, PenTool, Columns } from 'lucide-react';
import Pricing from '../components/ui/Pricing';

const services = [
  {
    icon: <Monitor size={40} />,
    title: "Bespoke 3D Visualization",
    number: "01",
    description: "Industry-leading 2020 Design renderings. We transform your vision into immersive, high-fidelity 3D environments, allowing you to experience the textures and flow of your kitchen before it's built."
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "NKBA & ADA Standards",
    number: "02",
    description: "Meticulous adherence to the National Kitchen & Bath Association guidelines and Americans with Disabilities Act requirements. We prioritize safety, clearance zones, and ergonomic usability."
  },
  {
    icon: <Settings size={40} />,
    title: "Appliance Coordination",
    number: "03",
    description: "Seamless integration of high-end appliances (Sub-Zero, Wolf, Miele). We ensure precise cutouts, dedicated electrical planning, and appropriate ventilation systems in our layouts."
  },
  {
    icon: <Ruler size={40} />,
    title: "Custom Cabinetry & Millwork",
    number: "04",
    description: "Elegant detailing for bespoke cabinetry. Covering frameless, inset, and furniture-style layouts with a focus on sophisticated cornice, molding, and finish specifications."
  },
  {
    icon: <Columns size={40} />,
    title: "Multi-Family Planning",
    number: "05",
    description: "Scalable, design-driven solutions for large-scale developments—combining refined unit layouts with precise cabinetry estimations to ensure accurate bidding and seamless execution."
  },
  {
    icon: <PenTool size={40} />,
    title: "Material & Finish Curation",
    number: "06",
    description: "Expert selection of premium countertops, backsplashes, and hardware. We curate palettes that balance modern trends with timeless interior elegance."
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-500 min-h-screen overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/5 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-500/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Editorial Hero Header */}
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
          <div className="container mx-auto">
            <div className="max-w-5xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-[1px] w-12 bg-amber-500"></div>
                <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px]">Exceptional Standards</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-6xl md:text-8xl font-serif italic text-slate-900 dark:text-white mb-10 leading-[0.9]"
              >
                Bespoke <span className="text-amber-500 not-italic font-sans font-black tracking-tighter">Interiors</span> & Technical Artistry
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-2xl text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed"
              >
                We curate high-end spatial experiences through meticulous 2020 Design precision and NKBA-compliant architectural planning.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Improved Services Grid */}
        <section className="py-20 bg-slate-50/50 dark:bg-transparent transition-colors duration-500">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white dark:bg-slate-900/40 p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:border-amber-500/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-8 right-10 text-8xl font-sans font-black text-slate-100 dark:text-white/5 pointer-events-none group-hover:text-amber-500/10 transition-colors duration-500">
                    {service.number}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-3xl flex items-center justify-center text-slate-800 dark:text-amber-500 mb-8 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-amber-500/30">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-serif italic mb-6 text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Dynamic Workflow Path */}
        <section className="py-32 relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-24">
              <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Proven Methodology</span>
              <h2 className="text-4xl md:text-5xl font-serif italic text-slate-900 dark:text-white">Our Design <span className="text-amber-500 not-italic font-sans font-black tracking-tight">Workflow</span></h2>
            </div>

            <div className="max-w-5xl mx-auto relative px-4">
              {/* Connecting Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-amber-500/0 via-amber-500/40 to-amber-500/0 hidden md:block"></div>

              <div className="space-y-24">
                {[
                  { step: "01", title: "Technical Schematics", desc: "Drafting intricate floor plans, elevations, and meticulous mechanical callouts using established US standards." },
                  { step: "02", title: "2020 Design Rendering", desc: "Producing photorealistic 4K visuals with exact vendor materials to eliminate guesswork and ensure design fidelity." },
                  { step: "03", title: "Final Drawing Package", desc: "Delivering fully dimensioned, contractor-ready technical documents that bridge the gap from concept to build." },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    className={`flex flex-col md:flex-row items-center gap-10 md:gap-0 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="w-full md:w-1/2 flex justify-center md:px-12">
                      <div className={`text-center ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <h4 className="text-2xl font-serif italic text-slate-900 dark:text-white mb-4">{item.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-sm mx-auto md:mx-0">{item.desc}</p>
                      </div>
                    </div>
                    
                    {/* Step Bubble */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 flex items-center justify-center font-black text-xl shadow-2xl border-4 border-white dark:border-slate-950 ring-8 ring-amber-500/5">
                      {item.step}
                    </div>
                    
                    <div className="w-full md:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Integration */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900/40 -z-10 skew-y-3 origin-right scale-110"></div>
          <Pricing />
        </section>
      </div>
    </div>
  );
};

export default Services;
