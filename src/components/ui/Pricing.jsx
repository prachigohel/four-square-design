import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: "Kitchen",
      subtitle: "Plan for Single Kitchen Design",
      price: "34.99",
      unit: "PER DESIGN",
      buttonText: "GET STARTED",
      features: [
        "Only Kitchen Design",
        "2 Free iterations (Additional revisions will be charged the same as a new request)",
        "2D & 3D Standard Design Packet (PDF)",
        "2020 Software File Included",
        ".CSV File for Cabinet List",
        "Quotation in PDF Format"
      ],
      recommended: false,
    },
    {
      name: "Full House",
      subtitle: "Get your Full House Designed",
      price: "69.99",
      unit: "PER DESIGN",
      buttonText: "GET STARTED",
      features: [
        "Kitchen + 3 Small Areas (Bathroom, Laundry, Mudroom, or Pantry)",
        "2 Free iterations (Additional revisions will be charged the same as a new request)",
        "2D & 3D Standard Design Packet (PDF)",
        "2020 Software File Included",
        ".CSV File for Cabinet List",
        "Quotation in PDF Format"
      ],
      recommended: false,
    },
    {
      name: "Retainer",
      subtitle: "Enjoy kitchen designs as low as $23 per design",
      price: "1400",
      unit: "PER MONTH",
      buttonText: "GET STARTED",
      features: [
        "Dedicated Designer",
        "60 Designs a Month",
        "24 Hours TAT",
        "Live Design Support",
        "Quote Creation",
        "Customized Design Packets"
      ],
      recommended: true,
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
            PLANS & PRICING
            <span className="block w-10 h-0.5 bg-amber-500 mx-auto mt-2"></span>
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-[#121212] dark:text-white mb-4">
            The Right Plan to Match Your Design Needs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col bg-white dark:bg-slate-800 rounded-lg shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700 h-full`}
            >
              {plan.recommended && (
                <div className="bg-[#e55a4f] text-white text-[11px] font-bold uppercase tracking-[0.2em] py-3.5 text-center">
                  RECOMMENDED
                </div>
              )}
              
              <div className={`px-8 flex flex-col items-center ${!plan.recommended ? 'pt-20' : 'pt-12'}`}>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1">{plan.name}</h3>
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wide mb-8">{plan.subtitle}</p>
                
                <div className="flex items-start justify-center mb-0">
                  <span className="text-2xl font-bold mt-2 mr-1 text-slate-900 dark:text-white">$</span>
                  <span className="text-7xl font-black text-slate-900 dark:text-white tracking-tighter">
                    {plan.price}
                  </span>
                </div>
                <p className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-10 mt-2">
                  {plan.unit}
                </p>
                
                <Link
                  to="/request"
                  className="inline-flex items-center justify-center gap-2 px-10 py-3.5 rounded border-2 border-[#e55a4f] text-[#e55a4f] font-black text-[11px] tracking-widest transition-all hover:bg-[#e55a4f] hover:text-white uppercase mb-12"
                >
                  {plan.buttonText}
                  <ArrowRight size={14} className="stroke-[3px]" />
                </Link>
              </div>

              <div className="px-8 pb-12 pt-10 border-t border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 flex-grow">
                <p className="text-[12px] font-black text-slate-900 dark:text-white uppercase tracking-widest mb-8">
                  {index === 0 ? 'Inclusions' : index === 1 ? 'All in Kitchen Plan plus' : 'All in Full House Plan plus'}
                </p>
                <ul className="space-y-5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <Check size={18} className="text-[#e55a4f] mt-0.5 shrink-0 stroke-[3px]" />
                      <span className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
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
