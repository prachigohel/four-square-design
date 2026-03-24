import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, MessageCircle, Phone, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = {};
    if (!formData.name.trim()) errors.name = 'This field is required';
    if (!formData.email.trim()) errors.email = 'This field is required';
    if (!formData.message.trim()) errors.message = 'This field is required';

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors({});
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again later.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };



      return (
        <div className="py-20 lg:py-32 bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
          <div className="container mx-auto px-6 lg:px-12">
        
            <div className="max-w-3xl mb-16">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 transition-colors"
              >
                Let's Discuss Your <br/>
                <span className="text-amber-500">Next Project</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl transition-colors"
              >
                Whether you need a complete kitchen redesign, multi-family unit layouts, or technical drawing sets, our team in Ahmedabad is ready to collaborate with you.
              </motion.p>
            </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-fawn-50 dark:group-hover:bg-fawn-900/30 group-hover:text-amber-600 transition-colors shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-slate-800 dark:text-white mb-2">Office Location</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      E-601, Iscon Platinum, Bopal, S.P. Ring Road,<br/>
                      Ahmedabad-380058<br/>
                      <span className="text-sm text-slate-400 mt-1 block">Serving clients globally with US-Standard expertise.</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-fawn-50 dark:group-hover:bg-fawn-900/30 group-hover:text-amber-600 transition-colors shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-slate-800 dark:text-white mb-2">Email Address</h4>
                    <a href="mailto:foursquaredesigns.fsd@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 transition-colors text-lg">
                      foursquaredesigns.fsd@gmail.com
                    </a>
                    <p className="text-sm text-slate-400 mt-1">We aim to respond within 24 business hours.</p>
                  </div>
                </div>


          </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-slate-100 dark:border-slate-800 relative overflow-hidden"
              >
            {submitted ? (
               <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-8 z-10">
                 <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
                    <Send size={40} />
                 </div>
                 <h3 className="text-3xl font-display font-bold text-slate-800 mb-4">Message Sent!</h3>
                 <p className="text-slate-600 mb-8 max-w-sm">Thank you for reaching out. A member of our design team will contact you shortly.</p>
                 <button 
                  onClick={() => setSubmitted(false)}
                  className="text-amber-600 font-medium border-b border-amber-600 pb-1"
                 >
                   Send another message
                 </button>
               </div>
            ) : null}

                <h3 className="text-2xl font-display font-bold text-slate-800 dark:text-white mb-8">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={e => {
                        setFormData({...formData, name: e.target.value});
                        if (validationErrors.name) setValidationErrors({...validationErrors, name: null});
                      }}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-fawn-400 focus:bg-white dark:focus:bg-slate-800 dark:text-white transition-all" 
                      placeholder="Your Name" 
                    />
                    {validationErrors.name && <p className="text-red-500 text-xs mt-1">{validationErrors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={e => {
                        setFormData({...formData, email: e.target.value});
                        if (validationErrors.email) setValidationErrors({...validationErrors, email: null});
                      }}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-fawn-400 focus:bg-white dark:focus:bg-slate-800 dark:text-white transition-all" 
                      placeholder="your@email.com" 
                    />
                    {validationErrors.email && <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                    <textarea 
                      rows={5}
                      value={formData.message}
                      onChange={e => {
                        setFormData({...formData, message: e.target.value});
                        if (validationErrors.message) setValidationErrors({...validationErrors, message: null});
                      }}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-fawn-400 focus:bg-white dark:focus:bg-slate-800 dark:text-white transition-all resize-none" 
                      placeholder="How can we help with your design?" 
                    ></textarea>
                    {validationErrors.message && <p className="text-red-500 text-xs mt-1">{validationErrors.message}</p>}
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-100 dark:border-red-900/30">
                      {error}
                    </p>
                  )}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-900 px-8 py-4 rounded-xl font-medium hover:bg-slate-800 dark:hover:bg-fawn-400 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              </motion.div>
    
            </div>
          </div>
        </div>
  );
};

export default Contact;
