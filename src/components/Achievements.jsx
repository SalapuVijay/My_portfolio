import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, Award, BookOpen } from 'lucide-react';

const Achievements = () => {
    // Generate dummy commit data for heatmap
    const generateHeatmapData = () => {
        const days = [];
        for (let i = 0; i < 7; i++) { // 7 days/rows
            const week = [];
            for (let j = 0; j < 30; j++) { // approx 30 cols
                // Randomly assign a commit density class
                const density = Math.random();
                let bgClass = "bg-gray-100 dark:bg-white/5";
                if (density > 0.8) bgClass = "bg-blue-600 dark:bg-blue-500";
                else if (density > 0.5) bgClass = "bg-blue-400 dark:bg-blue-600";
                else if (density > 0.2) bgClass = "bg-blue-200 dark:bg-blue-900";

                week.push(<div key={`${i}-${j}`} className={`w-3 h-3 rounded-[2px] ${bgClass} transition-all duration-300 hover:scale-125 hover:ring-2 ring-blue-300 dark:ring-blue-500/50`}></div>);
            }
            days.push(week);
        }
        return days;
    };

    return (
        <section id="achievements" className="py-24 border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors">Developer Metrics</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-colors">Performance dashboard and consistent activity tracking.</p>
                </motion.div>

                {/* Top Metrics Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {[
                        { label: "Models Trained", value: 5, suffix: "+", icon: <Code2 size={20} />, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
                        { label: "Certifications", value: 4, prefix: "", icon: <Trophy size={20} />, color: "text-yellow-600 dark:text-yellow-400", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
                        { label: "Major Projects", value: 3, suffix: "+", icon: <BookOpen size={20} />, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-900/20" },
                        { label: "Technologies", value: 15, suffix: "+", icon: <Award size={20} />, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white dark:bg-[#0a0a0a] rounded-xl p-6 border border-gray-100 dark:border-white/10 shadow-sm flex flex-col items-center justify-center relative overflow-hidden group transition-colors duration-300"
                        >
                            <div className={`absolute -right-4 -top-4 w-16 h-16 rounded-full ${stat.bg} opacity-50 dark:opacity-20 group-hover:scale-150 transition-transform duration-500`}></div>
                            <div className={`p-3 rounded-full ${stat.bg} ${stat.color} mb-3 relative z-10 transition-colors`}>
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1 relative z-10 flex items-baseline transition-colors">
                                {stat.prefix}
                                {stat.value}
                                {stat.suffix}
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide relative z-10 text-center transition-colors">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white dark:bg-[#0a0a0a] rounded-xl p-6 border border-gray-100 dark:border-white/10 shadow-sm hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-500/50 transition-all flex flex-col justify-center duration-300"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center transition-colors">
                                <Award size={20} />
                            </div>
                            <span className="text-xs font-bold text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-white/5 px-2 py-1 rounded transition-colors">2025</span>
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors">Data Science Hands-On (LPU)</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">Designed a rainfall prediction model applying data cleaning, EDA, and statistical techniques on weather datasets using Python.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white dark:bg-[#0a0a0a] rounded-xl p-6 border border-gray-100 dark:border-white/10 shadow-sm hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-500/50 transition-all flex flex-col justify-center duration-300"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center transition-colors">
                                <Trophy size={20} />
                            </div>
                            <span className="text-xs font-bold text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-white/5 px-2 py-1 rounded transition-colors">2024</span>
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors">Data Analytics Implementations</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">Analyzed statistical data and integrated advanced algorithms to evaluate and extract targeted performance metrics.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
