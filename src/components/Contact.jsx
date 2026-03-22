import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, MapPin, Phone, Mail, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsError(false);
        setIsSuccess(false);

        const serviceId = "service_k2chtza";
        const templateId = "template_bgqlly7";
        const publicKey = "f3h3HH6aRYedUtC1A";

        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
            .then((result) => {
                setIsSubmitting(false);
                setIsSuccess(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setIsSuccess(false), 5000);
            }, (error) => {
                setIsSubmitting(false);
                setIsError(true);
                console.error(error.text);
                setTimeout(() => setIsError(false), 5000);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section id="contact" className="py-24 relative transition-colors duration-300 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors">Get In Touch</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-colors">Open for opportunities. Let's build something amazing together!</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">Let's connect</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg pb-4 border-b border-gray-100 dark:border-white/10 transition-colors">
                            I'm currently seeking new opportunities and open to freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: <Mail size={22} />, title: "Email", value: "salapuvijay.visit2006@gmail.com", href: "mailto:salapuvijay.visit2006@gmail.com" },
                                { icon: <Phone size={22} />, title: "Phone", value: "+91 7093830560", href: "tel:+917093830560" },
                                { icon: <MapPin size={22} />, title: "Location", value: "Lovely Professional University, Punjab, India", href: null }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white dark:group-hover:text-white transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1 transition-colors">{item.title}</h4>
                                        {item.href ? (
                                            <a href={item.href} className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{item.value}</a>
                                        ) : (
                                            <span className="text-lg font-medium text-gray-900 dark:text-white transition-colors">{item.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-[#0a0a0a] p-8 md:p-10 rounded-2xl border border-gray-100 dark:border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-colors duration-300"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="peer w-full px-0 py-3 border-b-2 border-gray-200 dark:border-white/10 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 placeholder-transparent transition-colors"
                                    placeholder="Name"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-0 -top-3.5 text-sm text-gray-500 dark:text-gray-400 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
                                >
                                    Your Name
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="peer w-full px-0 py-3 border-b-2 border-gray-200 dark:border-white/10 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 placeholder-transparent transition-colors"
                                    placeholder="Email"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-0 -top-3.5 text-sm text-gray-500 dark:text-gray-400 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
                                >
                                    Email Address
                                </label>
                            </div>

                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="peer w-full px-0 py-3 border-b-2 border-gray-200 dark:border-white/10 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 placeholder-transparent transition-colors resize-none"
                                    placeholder="Message"
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className="absolute left-0 -top-3.5 text-sm text-gray-500 dark:text-gray-400 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
                                >
                                    Message
                                </label>
                            </div>

                            <AnimatePresence>
                                {isSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                        className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-4 py-3 rounded-lg transition-colors border border-emerald-100 dark:border-emerald-800/30"
                                    >
                                        <CheckCircle2 size={20} />
                                        <span className="font-medium text-sm">Message sent successfully! I will get back to you soon.</span>
                                    </motion.div>
                                )}
                                {isError && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                        className="flex items-start gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-3 rounded-lg transition-colors border border-red-100 dark:border-red-800/30"
                                    >
                                        <AlertCircle size={20} className="mt-0.5 shrink-0" />
                                        <span className="font-medium text-sm">Failed to send message. Please try again later.</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full relative py-4 px-6 rounded-xl text-white font-bold text-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30 overflow-hidden transition-all disabled:opacity-80 disabled:cursor-not-allowed group"
                            >
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                                {isSubmitting ? (
                                    <div className="flex items-center justify-center gap-3">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center gap-2">
                                        Send Message
                                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </div>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
