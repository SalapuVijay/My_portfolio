import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2 } from 'lucide-react';

const eduData = [
    {
        degree: "B.Tech – Computer Science and Engineering",
        institution: "Lovely Professional University",
        score: "CGPA: 7.20",
        duration: "Aug 2023 – Present",
        status: "Current"
    },
    {
        degree: "Intermediate",
        institution: "Sri Chaitanya College",
        score: "Score: 86%",
        duration: "Mar 2021 – Apr 2023",
        status: "Completed"
    },
    {
        degree: "Matriculation",
        institution: "Sri Chaitanya Techno School",
        score: "Score: 100%",
        duration: "Apr 2020 – Mar 2021",
        status: "Completed"
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors">Education</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Step Indicator (Desktop Only) */}
                <div className="hidden md:flex justify-between items-center mb-12 relative">
                    <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-100 dark:bg-gray-800 -translate-y-1/2 -z-10 transition-colors"></div>
                    {["School", "Intermediate", "University"].map((step, i) => (
                        <div key={i} className="flex flex-col items-center bg-white dark:bg-[#050505] px-4 transition-colors">
                            <div className={`w-4 h-4 rounded-full mb-2 border-[3px] transition-colors ${i === 2 ? 'border-blue-600 dark:border-blue-400 bg-white dark:bg-[#050505] ring-4 ring-blue-50 dark:ring-blue-900/30' : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-[#050505]'}`}></div>
                            <span className={`text-xs font-semibold uppercase tracking-wider transition-colors ${i === 2 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}`}>{step}</span>
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    {eduData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ scale: 1.01 }}
                            className="relative bg-white dark:bg-[#0a0a0a] rounded-xl p-8 border border-gray-100 dark:border-white/10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_15px_-3px_rgba(255,255,255,0.02)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.05)] transition-all duration-300 overflow-hidden flex flex-col md:flex-row gap-6 md:items-center justify-between"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400 shrink-0 mt-1 object-contain transition-colors">
                                    {index === 0 ? <GraduationCap size={24} /> : <Building2 size={24} />}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors">{edu.degree}</h3>
                                    <div className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2 transition-colors">{edu.institution}</div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-md transition-colors">{edu.score}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center shrink-0 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-50 dark:border-white/5 transition-colors">
                                <div className="text-gray-500 dark:text-gray-400 font-medium mb-0 md:mb-2 transition-colors">{edu.duration}</div>
                                <div className={`px-3 py-1 text-xs font-bold rounded-full tracking-wide transition-colors ${edu.status === 'Current' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400'}`}>
                                    {edu.status}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
