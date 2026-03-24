import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubscribe = () => {
    if (!email.trim()) {
      setError('This field is required');
      return;
    }
    setError(null);
    setEmail('');
    // Optionally alert or toast success here
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-20 lg:py-24 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 text-center md:text-left">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center justify-center md:justify-start gap-3 mb-8 group">
            <div className="w-10 h-10 bg-amber-500 rounded-sm flex items-center justify-center transition-all group-hover:scale-105">
              <span className="text-slate-900 text-lg font-black tracking-tighter">FS</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white text-xl md:text-2xl font-serif italic font-bold leading-tight">
                Four Square
              </span>
              <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.4em] -mt-0.5">
                Designs
              </span>
            </div>
          </Link>
          <p className="font-serif italic text-base text-slate-400 leading-relaxed mb-8 max-w-sm">
            Curating bespoke interior artistry with a focus on high-end kitchen and bath design. Bringing US-standard elegance to the heart of your home.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            {/* Social Icons Placeholder */}
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-slate-900 transition-all cursor-pointer text-amber-500">
                <span className="text-xs font-black uppercase tracking-tighter">fs</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-serif italic text-lg mb-6 flex items-center gap-2">
            <span className="w-8 h-[px] bg-gold-500"></span> Navigation
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/portfolio" className="hover:text-amber-400 transition-colors uppercase tracking-widest text-xs font-bold">Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-amber-400 transition-colors uppercase tracking-widest text-xs font-bold">Services</Link></li>
            <li><Link to="/request" className="hover:text-amber-400 transition-colors uppercase tracking-widest text-xs font-bold">Start a Project</Link></li>
            <li><Link to="/contact" className="hover:text-amber-400 transition-colors uppercase tracking-widest text-xs font-bold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif italic text-lg mb-6 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-gold-500"></span> Inquiries
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-slate-400 font-sans">
            <li className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-gold-600 font-bold mb-1">Office</span>
              E-601, Iscon Platinum, Bopal, Ahmedabad-380058
            </li>
            <li className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-gold-600 font-bold mb-1">Email</span>
              foursquaredesigns.fsd@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif italic text-lg mb-6 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-gold-500"></span> Newsletter
          </h4>
          <p className="text-sm text-slate-400 mb-6 font-sans">Stay updated with our latest designs and trends.</p>
          <div className="flex flex-col gap-3 font-sans">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Your Email"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors"
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            <button 
              onClick={handleSubscribe}
              className="bg-gold-500 text-charcoal-900 font-bold uppercase tracking-widest text-xs py-3 rounded-lg hover:bg-amber-400 transition-colors"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-12 mt-20 pt-8 border-t border-white/5 text-[10px] text-slate-500 uppercase tracking-[0.2em] flex flex-col md:flex-row justify-between items-center font-bold font-sans">
        <p>&copy; {new Date().getFullYear()} Four Square Designs. Ahmedabad, India.</p>
        <p className="mt-4 md:mt-0 flex gap-6">
          <span>NKBA Compliant</span>
          <span>ADA Standards</span>
          <span>US Expertise</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
