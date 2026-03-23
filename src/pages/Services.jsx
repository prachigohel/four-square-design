import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Monitor, ShieldCheck, Settings, PenTool, Columns } from 'lucide-react';
import Pricing from '../components/ui/Pricing';

const services = [
  {
    icon: <Monitor size={32} />,
    title: "Bespoke 3D Visualization",
    description: "Industry-leading 2020 Design renderings. We transform your vision into immersive, high-fidelity 3D environments, allowing you to experience the textures and flow of your kitchen before it's built."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "NKBA & ADA Standards",
    description: "Meticulous adherence to the National Kitchen & Bath Association guidelines and Americans with Disabilities Act requirements. We prioritize safety, clearance zones, and ergonomic usability."
  },
  {
    icon: <Settings size={32} />,
    title: "Appliance Coordination",
    description: "Seamless integration of high-end appliances (Sub-Zero, Wolf, Miele). We ensure precise cutouts, dedicated electrical planning, and appropriate ventilation systems in our layouts."
  },
  {
    icon: <Ruler size={32} />,
    title: "Custom Cabinetry & Millwork",
    description: "Elegant detailing for bespoke cabinetry. Covering frameless, inset, and furniture-style layouts with a focus on sophisticated cornice, molding, and finish specifications."
  },
  {
    icon: <Columns size={32} />,
    title: "Multi-Family Planning",
    description: "Scalable, design-driven solutions for large-scale developments—combining refined unit layouts with precise cabinetry estimations to ensure accurate bidding and seamless execution."
  },
  {
    icon: <PenTool size={32} />,
    title: "Material & Finish Curation",
    description: "Expert selection of premium countertops, backsplashes, and hardware. We curate palettes that balance modern trends with timeless interior elegance."
  }
];

const Services = () => {
  return (
    <div className="py-20 lg:py-32 bg-white dark:bg-slate-900 transition-colors duration-300 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6"
          >
            Bespoke Interiors & <br />
            <span className="text-amber-500">Specialized Kitchen Design</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            We don't just plan kitchens; we curate heart-of-the-home experiences. With over 8 years of specialized expertise in interior standards, we deliver comprehensive design packages tailored for your unique lifestyle.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="w-16 h-16 bg-fawn-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-fawn-600 dark:text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-800 dark:text-white mb-4">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed border-l-2 border-slate-100 dark:border-slate-800 pl-4">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technical Process Workflow */}
        <div className="mt-32 p-10 lg:p-16 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-800 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3 z-0"></div>

          <div className="relative z-10 max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-10">Our Design Workflow</h2>

            <div className="space-y-8">
              {[
                { step: "01", title: "Technical Schematics", desc: "Drafting floor plans, elevations, and mechanical/electrical callouts." },
                { step: "02", title: "2020 Design Rendering", desc: "Producing photorealistic 3D visuals with exact vendor materials." },
                { step: "03", title: "Final Drawing Package", desc: "Delivering fully dimensioned, contractor-ready technical documents." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start pb-8 border-b border-slate-800 last:border-0 last:pb-0">
                  <span className="text-amber-300 font-display font-bold text-xl">{item.step}</span>
                  <div>
                    <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      
      {/* Pricing Section */}
      <Pricing />
    </div>
  );
};

export default Services;
