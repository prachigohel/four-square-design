import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const ProjectRequest = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'residential',
    newConstruction: 'remodel',
    cabinetry: {
      brand: '',
      doorStyle: '',
      finish: '',
      ceilingHeight: '',
      wallCabinetHeight: ''
    },
    appliances: {
      refrigerator: '',
      range: '',
      ventilation: '',
      dishwasher: ''
    },
    files: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCabinetryChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      cabinetry: { ...prev.cabinetry, [name]: value }
    }));
  };

  const handleApplianceChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      appliances: { ...prev.appliances, [name]: value }
    }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFormData(prev => ({ ...prev, files: [...prev.files, ...selectedFiles] }));
  };

  const removeFile = (index) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const data = new FormData();
    data.append('fullName', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('projectType', formData.projectType);
    data.append('scope', formData.newConstruction);
    
    data.append('cabinetryBrand', formData.cabinetry.brand);
    data.append('doorStyleFinish', formData.cabinetry.doorStyle);
    data.append('ceilingHeight', formData.cabinetry.ceilingHeight);
    data.append('wallCabinetHeight', formData.cabinetry.wallCabinetHeight);
    
    data.append('refrigerator', formData.appliances.refrigerator);
    data.append('rangeCooktop', formData.appliances.range);
    data.append('ventilationHood', formData.appliances.ventilation);
    data.append('dishwasher', formData.appliances.dishwasher);
    
    formData.files.forEach(file => {
      data.append('files', file);
    });

    try {
      const response = await fetch('http://localhost:5000/api/project-request', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Submission failed. Please check your data and try again.');
      }

      // Reset form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'residential',
        newConstruction: 'remodel',
        cabinetry: {
          brand: '',
          doorStyle: '',
          finish: '',
          ceilingHeight: '',
          wallCabinetHeight: ''
        },
        appliances: {
          refrigerator: '',
          range: '',
          ventilation: '',
          dishwasher: ''
        },
        files: []
      });

      setStep(5); // Success step
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 transition-colors">Start Your Project</h1>
          <p className="text-slate-600 dark:text-slate-400 transition-colors">Provide us with the details of your vision, and our design team will begin crafting your architectural layout.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 relative">
          <div className="absolute left-0 top-1/2 w-full h-1 bg-slate-200 -z-10 -translate-y-1/2 rounded-full"></div>
          <motion.div
            className="absolute left-0 top-1/2 h-1 bg-amber-500 -z-10 -translate-y-1/2 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${((step - 1) / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
          ></motion.div>

          {[1, 2, 3, 4].map(num => (
            <div
              key={num}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${step >= num ? 'bg-amber-500 text-white' : 'bg-white dark:bg-slate-900 text-slate-400 border-2 border-slate-200 dark:border-slate-800'
                }`}
            >
              {step > num ? <CheckCircle size={18} /> : num}
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 transition-colors duration-300">
          <AnimatePresence mode="wait">
            {/* Step 1: Basic Details */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-display font-bold text-slate-800 dark:text-white mb-6 transition-colors">Client & Project Details</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-fawn-400 focus:border-transparent transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-fawn-400 focus:border-transparent transition-all" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-fawn-400 focus:border-transparent transition-all" placeholder="(555) 123-4567" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Project Type</label>
                    <select name="projectType" value={formData.projectType} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-fawn-400 focus:border-transparent appearance-none bg-white dark:bg-slate-800 dark:text-white transition-colors">
                      <option value="kitchen-bath">Kitchen and Bath</option>
                      <option value="full-house">Full House</option>
                      <option value="full-house-plus">Full house +</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Scope</label>
                    <select name="newConstruction" value={formData.newConstruction} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-fawn-400 focus:border-transparent appearance-none bg-white dark:bg-slate-800 dark:text-white transition-colors">
                      <option value="remodel">Remodel / Renovation</option>
                      <option value="new">New Construction</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6 flex justify-end">
                  <button onClick={nextStep} className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors flex items-center gap-2">
                    Next Step <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Cabinetry Details */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-display font-bold text-slate-800 dark:text-white mb-6 transition-colors font-serif italic">Cabinetry & Design Specifications</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 transition-colors">Please provide initial cabinetry details to help us refine your technical layout.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Cabinetry Brand</label>
                    <input type="text" name="brand" value={formData.cabinetry.brand} onChange={handleCabinetryChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors" placeholder="e.g. KraftMaid, Omega" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Door Style & Finish</label>
                    <input type="text" name="doorStyle" value={formData.cabinetry.doorStyle} onChange={handleCabinetryChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors" placeholder="e.g. Shaker White / Inset Navy" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Ceiling Height</label>
                    <input type="text" name="ceilingHeight" value={formData.cabinetry.ceilingHeight} onChange={handleCabinetryChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors" placeholder="e.g. 8', 9', 10'" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Wall Cabinet Height</label>
                    <input type="text" name="wallCabinetHeight" value={formData.cabinetry.wallCabinetHeight} onChange={handleCabinetryChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors" placeholder="e.g. 30'', 36'', 42'' / Double Stack" />
                  </div>
                </div>

                <div className="pt-6 flex justify-between">
                  <button onClick={prevStep} className="text-slate-500 px-6 py-3 rounded-full font-medium hover:text-slate-800 transition-colors flex items-center gap-2">
                    <ArrowLeft size={18} /> Back
                  </button>
                  <button onClick={nextStep} className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors flex items-center gap-2">
                    Next Step <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Appliances */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-display font-bold text-slate-800 dark:text-white mb-6 transition-colors font-serif italic">Appliance Specifications</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 transition-colors">Please specify appliance sizes or models so we can accurately coordinate cabinet cutouts and electrical/plumbing requirements.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Refrigerator (Size/Type)</label>
                    <input type="text" name="refrigerator" value={formData.appliances.refrigerator} onChange={handleApplianceChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-fawn-400 transition-colors" placeholder="e.g. 36'' French Door Sub-Zero" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Range / Cooktop</label>
                    <input type="text" name="range" value={formData.appliances.range} onChange={handleApplianceChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-fawn-400 transition-colors" placeholder="e.g. 48'' Dual Fuel Wolf Range" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Ventilation / Hood</label>
                    <input type="text" name="ventilation" value={formData.appliances.ventilation} onChange={handleApplianceChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-fawn-400 transition-colors" placeholder="e.g. 48'' Pro Wall Hood" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Dishwasher</label>
                    <input type="text" name="dishwasher" value={formData.appliances.dishwasher} onChange={handleApplianceChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-fawn-400 transition-colors" placeholder="e.g. 24'' Panel Ready Miele" />
                  </div>
                </div>

                <div className="pt-6 flex justify-between">
                  <button onClick={prevStep} className="text-slate-500 px-6 py-3 rounded-full font-medium hover:text-slate-800 transition-colors flex items-center gap-2">
                    <ArrowLeft size={18} /> Back
                  </button>
                  <button onClick={nextStep} className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors flex items-center gap-2">
                    Next Step <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Floor plans */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-display font-bold text-slate-800 dark:text-white mb-6 transition-colors font-serif italic">Upload Floor Plans & PDF Exports</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 transition-colors">Upload your 2020 Design initial layouts, architectural blueprints, or hand-drawn measurements.</p>

                <label 
                  htmlFor="file-upload"
                  className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-12 flex flex-col items-center justify-center text-center bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <UploadCloud className="text-amber-600 dark:text-amber-400" size={32} />
                  </div>
                  <h4 className="text-lg font-medium text-slate-800 dark:text-white mb-2 transition-colors">Click to upload or drag and drop</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors">Any file format allowed (PDF, JPG, PNG, DWG, etc. up to 50MB)</p>
                  <input 
                    id="file-upload"
                    type="file" 
                    className="hidden" 
                    multiple 
                    onChange={handleFileChange}
                    accept="*" 
                  />
                </label>

                {formData.files.length > 0 && (
                  <div className="space-y-2 mt-4">
                    {formData.files.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-sm transition-colors">
                        <span className="truncate max-w-[200px] text-slate-600 dark:text-slate-300">{file.name}</span>
                        <button onClick={() => removeFile(idx)} className="text-red-500 hover:text-red-700 transition-colors">Remove</button>
                      </div>
                    ))}
                  </div>
                )}

                {error && (
                  <p className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-100 dark:border-red-900/30">
                    {error}
                  </p>
                )}

                <div className="pt-6 flex justify-between">
                  <button onClick={prevStep} className="text-slate-500 px-6 py-3 rounded-full font-medium hover:text-slate-800 transition-colors flex items-center gap-2">
                    <ArrowLeft size={18} /> Back
                  </button>
                  <button 
                    onClick={handleSubmit} 
                    disabled={isSubmitting}
                    className="bg-amber-600 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-700 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    {!isSubmitting && <CheckCircle size={18} />}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-3xl font-display font-bold text-slate-800 dark:text-white mb-4 transition-colors">Request Received!</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-sm mx-auto mb-8 transition-colors">
                  Thank you, {formData.name || 'Client'}. We've received your project details and our design team will contact you within 24 hours.
                </p>
                <button onClick={() => setStep(1)} className="text-fawn-600 font-medium hover:text-fawn-800 underline underline-offset-4">
                  Submit another project
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default ProjectRequest;
