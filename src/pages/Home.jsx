import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import TestimonialsCarousel from '../components/ui/TestimonialsCarousel';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 text-shadow-xl">
          <img
            src="/assets/kitchen-hero.png"
            alt="Luxury modern kitchen design"
            className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"
            loading="eager"
          />
          {/* Strengthened overlay for better readability */}
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 mx-auto px-6 lg:px-12 pt-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-5xl"
          >
            <motion.span
              initial={{ opacity: 0, tracking: "0.5em" }}
              animate={{ opacity: 1, tracking: "0.2em" }}
              transition={{ duration: 1.5 }}
              className="text-amber-400 text-xs md:text-sm font-black uppercase mb-6 block drop-shadow-md"
            >
              Specialized Kitchen & Interior Design
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-white leading-[1.1] mb-8 drop-shadow-2xl">
              Bespoke Kitchen & <span className="text-amber-500 not-italic font-bold tracking-tight">Bath Artistry</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg">
              Curating high-end interior experiences with 2020 Design precision. From meticulous planning to 4K visualizations, we craft the heart of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/portfolio"
                className="group bg-amber-500 text-slate-800 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(250,177,51,0.4)] flex items-center gap-3"
              >
                Explore Portfolio
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/request"
                className="bg-transparent text-white border border-white/20 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:bg-white/10 flex items-center gap-3 backdrop-blur-md"
              >
                Inquire Project
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/50"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Discover More</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-amber-500 to-transparent"
          ></motion.div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-900 py-16 border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-center text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-12">Elevating Professionals Through Exclusive Cabinetry Brand Catalogs</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            <div className="h-12 md:h-14 flex items-center justify-center transition-transform hover:scale-105">
              <img src="/Kraftmaid-Logo-Vector.svg-.png" alt="KraftMaid" className="h-full w-auto object-contain" />
            </div>
            <div className="h-12 md:h-14 flex items-center justify-center transition-transform hover:scale-105">
              <img src="/MD_Logo_CMYK_LG.png" alt="Medallion" className="h-full w-auto object-contain" />
            </div>
            <div className="h-12 md:h-14 flex items-center justify-center transition-transform hover:scale-105">
              <img src="/Merillat_Logo.svg" alt="Merillat" className="h-full w-auto object-contain" />
            </div>
            <div className="h-12 md:h-14 flex items-center justify-center transition-transform hover:scale-105">
              <img src="/cnc_logo.png" alt="CNC Cabinetry" className="h-full w-auto object-contain" />
            </div>
            <div className="h-12 md:h-14 flex items-center justify-center transition-transform hover:scale-105">
              <img src="/Bellmont-Logo.png" alt="Bellmont" className="h-full w-auto object-contain" />
            </div>
            <div className="h-12 md:h-14 flex items-center justify-center transition-transform hover:scale-105">
              <img src="/2016_smartLogo-500x198_slider.png" alt="smart cabinate" className="h-full w-auto object-contain" />
            </div>
            <div className="h-12 md:h-14 flex items-center justify-center transition-transform hover:scale-105">
              <img src="/yorktowne-cabinetry-logo.png" alt="yorktowne cabinetry" className="h-full w-auto object-contain" />
            </div>
            <div className="h-12 md:h-14 flex items-center justify-center transition-transform hover:scale-105">
              <img src="/nmwLargeLogo.png" alt="febuwood" className="h-full w-auto object-contain" />
            </div>
            <div className="h-12 md:h-14 flex items-center justify-center transition-transform hover:scale-105">
              <img src="/plain_fency.svg" alt="plain fency" className="h-full w-auto object-contain" />
            </div>
           
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-fawn-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif italic text-slate-800 dark:text-white mb-10">
              Artistry in <span className="text-amber-500 not-italic">Interior</span> Planning
            </h2>
            <div className="space-y-8 text-charcoal-700 dark:text-slate-300 text-lg md:text-xl font-light leading-relaxed">
              <p>
                We specialize in Kitchen & Bath design, delivering precise, build-ready layouts using industry-standard 2020 Design. With over 8 years of experience, we focus on creating functional, detail-driven spaces that seamlessly translate from concept to execution.
              </p>
              <p>
                Working alongside professionals who use leading cabinetry brands, we provide accurate cabinet layouts, NKBA-compliant planning, and high-quality 4K visualizations—ensuring every design is both technically sound and visually compelling.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skill Set Section */}
      <section className="py-24 bg-white dark:bg-slate-800 border-y border-charcoal-100 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-sans font-bold text-slate-800 dark:text-white text-center mb-16 lg:mb-24 uppercase tracking-[0.2em]">
            Our <span className="text-amber-500">Expertise</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:divide-x divide-slate-200 dark:divide-white/10">
            {[
              {
                title: "SOFTWARES",
                items: ["2020 Design (Expert)", "AutoCAD", "SketchUp", "Cohoom", "Microsoft Office"]
              },
              {
                title: "SPATIAL PLANNING",
                items: ["US-Standard K&B Planning", "NKBA & ADA Standards", "Residential & Multi-Family", "Estimation"]
              },
              {
                title: "VISUALIZATION",
                items: ["High-Quality 3D Rendering", "Panorama 360° Views", "Elevations & Perspective"]
              },
              {
                title: "COMMUNICATION",
                items: ["Project Coordination", "Quick Turnaround", "Developer Support", "Meticulous Documentation"]
              }
            ].map((skillCol, idx) => (

              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: 0.1 * idx }}
                className="px-4 lg:px-8 border-b border-slate-100 dark:border-white/5 md:border-0 pb-12 md:pb-0 last:border-0"
              >
                <h4 className="text-center font-bold text-slate-900 dark:text-white tracking-[0.2em] mb-6 md:mb-8 uppercase text-xs h-auto md:h-12 flex items-center justify-center">
                  {skillCol.title}
                </h4>
                <ul className="space-y-4 text-charcoal-600 dark:text-slate-400 font-sans text-sm">
                  {skillCol.items.map((item, idxi) => (
                    <li key={idxi} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* transformation Section (Before/After) */}
      <section className="py-24 lg:py-32 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-[0.3em] mb-4 block">The Design Process</span>
              <h2 className="text-4xl md:text-6xl font-serif italic text-slate-800 dark:text-white mb-8 border-l-4 border-amber-500 pl-8">
                From Concept to <span className="not-italic text-amber-500">Reality</span>
              </h2>
              <p className="text-lg text-charcoal-600 dark:text-slate-400 mb-10 leading-relaxed font-light">
                Our team-based workflow bridges the gap between technical architectural plans and stunning photorealistic visualizations. We don't just design kitchens; we engineer experiences using industry-leading 2020 Design software.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Award className="text-amber-500" />, title: "US Technical Standards", desc: "NKBA & ADA compliant spatial planning." },
                  { icon: <Zap className="text-amber-500" />, title: "Accelerated Turnaround", desc: "Team-based delivery for large developments." },
                  { icon: <Users className="text-amber-500" />, title: "Developer Support", desc: "Reliable coordination for multi-family units." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    {...fadeInUp}
                    transition={{ delay: 0.1 * i }}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-gold-100 dark:hover:border-white/10"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white uppercase tracking-wider text-sm mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <BeforeAfterSlider
                beforeImage="/before.png"
                afterImage="/after.png"
                beforeLabel="📐 2D Draft"
                afterLabel="✨ 4K Render"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-500/5 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6">Client <span className="not-italic text-amber-500 underline decoration-1 underline-offset-8">Perspectives</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">Trusted by homeowners, remodelers, and developers across the US and India for over 8 years.</p>
          </motion.div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-serif italic text-slate-900 mb-10">Ready to Elevate Your Next Project?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request"
                className="bg-slate-900 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-charcoal-800 transition-all shadow-2xl"
              >
                Start Your Design
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


export default Home;
