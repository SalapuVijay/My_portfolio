import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import oracleAiImg from "../assets/certs/oracle-ai.png";
import oracleDataImg from "../assets/certs/oracle-data.png";
import nptelImg from "../assets/certs/nptel.png";
import ieltsImg from "../assets/certs/ielts.png";

const certData = [
    {
        title: "Oracle Cloud Infrastructure 2025 AI Foundations",
        issuer: "Oracle",
        date: "Mar 2026",
        link: "#",
        imageId: null,
        imageSrc: oracleAiImg
    },
    {
        title: "Privacy and Security in Online Social Media",
        issuer: "NPTEL",
        date: "Oct 2025",
        link: "#",
        imageId: null,
        imageSrc: nptelImg
    },
    {
        title: "Oracle Data Platform 2025 Foundations",
        issuer: "Oracle",
        date: "Oct 2025",
        link: "#",
        imageId: null,
        imageSrc: oracleDataImg
    },
    {
        title: "IELTS Pro",
        issuer: "Udemy",
        date: "Oct 2024",
        link: "#",
        imageId: null,
        imageSrc: ieltsImg
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 border-t border-gray-100 dark:border-white/5 overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors">Certifications</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certData.map((cert, index) => (
                        <motion.a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                            whileHover="hover"
                            className="group relative h-[320px] rounded-[24px] overflow-hidden block shadow-md hover:shadow-[0_30px_60px_-15px_rgba(59,130,246,0.3)] transition-all duration-300 bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-white/10 origin-bottom transform hover:-translate-y-4"
                        >
                            {/* Base Card Context */}
                            <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center z-10 bg-white dark:bg-[#0a0a0a] group-hover:bg-transparent dark:group-hover:bg-transparent transition-colors duration-500 delay-100">
                                <motion.div
                                    variants={{ hover: { opacity: 0, scale: 0.8, y: -20, transition: { duration: 0.3 } } }}
                                    className="w-20 h-20 bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-purple-50 dark:to-purple-900/20 rounded-2xl rotate-3 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 shadow-sm transition-transform group-hover:rotate-0"
                                >
                                    <Award size={36} strokeWidth={1.5} />
                                </motion.div>
                                <motion.h3 variants={{ hover: { opacity: 0, transition: { duration: 0.3 } } }} className="font-extrabold text-gray-900 dark:text-white mb-2 leading-snug text-xl px-2 transition-colors">{cert.title}</motion.h3>
                                <motion.p variants={{ hover: { opacity: 0, transition: { duration: 0.3 } } }} className="text-sm font-semibold text-gray-500 dark:text-gray-400 transition-colors">{cert.issuer}</motion.p>
                                <motion.div variants={{ hover: { opacity: 0, transition: { duration: 0.3 } } }} className="mt-5 px-4 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider transition-colors">
                                    {cert.date}
                                </motion.div>
                            </div>

                            {/* Image Reveal on Hover */}
                            <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                <img
                                    src={cert.imageSrc || `https://drive.google.com/uc?export=view&id=${cert.imageId}`}
                                    onError={(e) => {
                                        // Fallback to thumbnail if direct export fails
                                        if (cert.imageId) {
                                            e.target.onerror = null;
                                            e.target.src = `https://drive.google.com/thumbnail?id=${cert.imageId}&sz=w800`;
                                        }
                                    }}
                                    alt={cert.title}
                                    className="absolute inset-0 w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] origin-center brightness-110"
                                />

                                {/* Gradient for button visibility only at the bottom, very light at top */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />

                                <div className="absolute inset-0 z-30 flex flex-col items-center justify-end p-6 pb-8">
                                    <motion.div
                                        variants={{
                                            hover: { y: 0, opacity: 1, scale: 1, transition: { delay: 0.15, duration: 0.5, type: "spring", stiffness: 400, damping: 25 } },
                                            initial: { y: 40, opacity: 0, scale: 0.9 }
                                        }}
                                        initial="initial"
                                        className="w-full"
                                    >
                                        <div className="bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/40 w-full py-4 rounded-xl flex items-center justify-center gap-2 transition-all font-bold text-sm uppercase tracking-wider transform active:scale-95 border border-blue-400/50 backdrop-blur-sm">
                                            <span>View Certificate</span>
                                            <ExternalLink size={18} strokeWidth={2.5} />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
