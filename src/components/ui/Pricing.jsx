import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: "KITCHEN",
      subtitle: "Plan for Single Kitchen Design",
      price: "25",
      unit: "PER DESIGN",
      buttonText: "GET STARTED",
      features: [
        "Kitchen Design",
        "3 Iteration",
        "Includes 2020 .KIT File",
        "Full 3D Render Presentation",
        "Blueprints & Floorplans",
        "Cabinet List and Quotations"
      ],
      recommended: false,
    },
    {
      name: "Full Home",
      subtitle: "Includes Kitchen + 3 Areas",
      price: "45",
      unit: "PER DESIGN",
      buttonText: "GET STARTED",
      features: [
        'All in Kitchen Plus "any 3 areas"',
        "Bathrooms x 3",
        "Laundry Room",
        "Mudroom",
        "Bar",
        "Entertainment Area",
        "Kitchenette",
        "Pantry"
      ],
      recommended: true,
    },
    {
      name: "Full Home+",
      subtitle: "Includes Kitchen + 5 Areas",
      price: "65",
      unit: "PER DESIGN",
      buttonText: "GET STARTED",
      features: [
        'All in Kitchen Plus "any 5 areas"',
        "Bathrooms x 4",
        "Laundry Room",
        "Mudroom",
        "Bar",
        "Entertainment Area",
        "Kitchenette",
        "Pantry"
      ],
      recommended: false,
    }
  ];

  return (
    <section className="py-32 relative bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Abstract Background Flairs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-64 w-[600px] h-[600px] bg-slate-400/20 dark:bg-slate-800/50 blur-[150px] rounded-full mix-blend-multiply dark:mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-slate-900 dark:text-white mb-6">
            Invest in <span className="text-amber-500 not-italic font-sans font-black tracking-tight">Excellence</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg md:text-xl font-light">
            Select the perfect design package tailored to the scale of your project. High-end design, delivered with precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`group relative flex flex-col rounded-[2.5rem] overflow-hidden backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 h-full ${plan.recommended
                  ? 'bg-slate-900 dark:bg-slate-900 border border-slate-700 shadow-[0_20px_50px_rgba(245,158,11,0.2)] md:-mt-8 md:mb-8 z-20'
                  : 'bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-10'
                }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-slate-900 text-[10px] font-black uppercase tracking-[0.4em] py-2.5 text-center shadow-md">
                  Most Popular
                </div>
              )}

              <div className={`px-8 lg:px-10 flex flex-col items-center text-center ${!plan.recommended ? 'pt-16' : 'pt-20'} pb-12 relative z-0`}>
                {plan.recommended && (
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent -z-10 pointer-events-none"></div>
                )}

                <h3 className={`text-3xl md:text-4xl font-serif mb-3 ${plan.recommended ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-10 ${plan.recommended ? 'text-amber-200/80' : 'text-slate-500 dark:text-slate-400'}`}>
                  {plan.subtitle}
                </p>

                <div className="flex items-end justify-center mb-2">
                  <span className={`text-6xl md:text-7xl font-serif font-light tracking-tighter ${plan.recommended ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-3xl font-serif italic mb-4 ml-1 ${plan.recommended ? 'text-amber-400' : 'text-slate-400 dark:text-slate-500'}`}>$</span>
                </div>
                <p className={`text-[9px] font-black uppercase tracking-[0.4em] mb-10 ${plan.recommended ? 'text-amber-500' : 'text-slate-400 dark:text-slate-500'}`}>
                  {plan.unit}
                </p>

                <Link
                  to="/request"
                  className={`inline-flex items-center justify-center gap-3 w-full py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] transition-all duration-500 ${plan.recommended
                      ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 shadow-[0_10px_30px_rgba(245,158,11,0.4)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.6)] group-hover:scale-105'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-amber-500 dark:hover:text-slate-900 group-hover:shadow-lg'
                    }`}
                >
                  {plan.buttonText}
                  <ArrowRight size={16} className={`transition-transform duration-500 group-hover:translate-x-2 ${plan.recommended ? 'text-slate-900' : 'text-amber-600 dark:group-hover:text-slate-900'}`} />
                </Link>
              </div>

              <div className={`px-8 lg:px-10 pb-12 pt-10 border-t flex-grow ${plan.recommended
                  ? 'border-white/10 bg-slate-800/30'
                  : 'border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-transparent'
                }`}>
                <p className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-8 ${plan.recommended ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {index === 0 ? 'Everything Included:' : 'Package Features:'}
                </p>
                <ul className="space-y-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${plan.recommended
                          ? 'bg-amber-500/20 text-amber-500 group-hover/item:bg-amber-500 group-hover/item:text-slate-900 group-hover/item:scale-110'
                          : 'bg-amber-500/10 text-amber-600 dark:text-amber-500 group-hover/item:bg-amber-500 group-hover/item:text-white group-hover/item:scale-110'
                        }`}>
                        <Check size={12} className="stroke-[3px]" />
                      </div>
                      <span className={`text-sm leading-relaxed font-medium transition-colors ${plan.recommended
                          ? 'text-slate-300 group-hover/item:text-white'
                          : 'text-slate-600 dark:text-slate-400 group-hover/item:text-slate-900 dark:group-hover/item:text-white'
                        }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
