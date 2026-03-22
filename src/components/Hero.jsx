import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import vijayImg from '../assets/vijay.png';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 transition-colors duration-300">

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
                {/* Profile Image with Glowing Border */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                    className="relative w-40 h-40 md:w-52 md:h-52 mb-8 group"
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
                    <div className="absolute inset-1 bg-white dark:bg-[#050505] rounded-full z-10 p-1">
                        <img
                            src={vijayImg}
                            alt="Salapu Lakshmi Venkata Vijay"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </motion.div>

                {/* Name and Title */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 transition-colors">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Salapu Vijay</span>
                    </h1>

                    <div className="h-10 md:h-12 flex justify-center items-center">
                        <h2 className="text-xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 transition-colors">
                            <Typewriter
                                words={['Data Scientist', 'Data Analyst', 'Machine Learning Enthusiast']}
                                loop={true}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </h2>
                    </div>

                    <p className="max-w-xl mx-auto mt-6 text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed transition-colors">
                        I craft modern, scalable, and highly interactive web applications with beautifully designed user experiences.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-5 mt-10 justify-center w-full max-w-md md:max-w-none"
                >
                    <a href="#contact" className="group relative px-8 py-3.5 bg-blue-600 text-white font-medium rounded-full overflow-hidden shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                        Contact Me
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a href="resume.pdf" download="Salapu_Vijay_Resume.pdf" target="_blank" rel="noreferrer" className="group px-8 py-3.5 bg-white dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10 font-medium rounded-full shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                        Download Resume
                        <Download size={18} className="group-hover:text-blue-500 transition-colors" />
                    </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex gap-6 mt-12 mb-16"
                >
                    {[
                        { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/slvvijay03/" },
                        { icon: <Github size={22} />, href: "https://github.com/SalapuVijay" },
                        { icon: <Mail size={22} />, href: "mailto:salapuvijay.visit2006@gmail.com" }
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-2 hover:scale-110 transition-all duration-300 p-3 bg-white/80 dark:bg-[#0a0a0acc] backdrop-blur-sm rounded-full shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-md hover:shadow-blue-500/10"
                        >
                            {social.icon}
                        </a>
                    ))}
                </motion.div>

                {/* Interactive Modern Scroll Indicator */}
                <motion.a
                    href="#projects"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="flex flex-col items-center group cursor-pointer z-20 mb-8"
                >
                    <div className="w-8 h-14 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center p-1.5 group-hover:border-blue-600 dark:group-hover:border-blue-400 transition-colors duration-300 bg-white/50 dark:bg-black/20 backdrop-blur-sm shadow-sm group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <motion.div
                            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                            className="w-1.5 h-3.5 bg-blue-600 dark:bg-blue-400 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)] dark:shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                        />
                    </div>
                    {/* Reveal Text on Hover */}
                    <div className="mt-2 text-center h-8 flex flex-col items-center justify-start opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 -translate-y-2">
                        <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] relative ml-1">
                            Explore
                        </span>
                        <motion.div animate={{ y: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
                            <ArrowRight size={12} className="rotate-90 mt-0.5 text-blue-600 dark:text-blue-400" />
                        </motion.div>
                    </div>
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;
