import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Languages",
        gradient: "from-blue-500/20 to-cyan-500/20",
        skills: ["Python", "Java", "C++", "C"]
    },
    {
        category: "Web Development",
        gradient: "from-blue-500/20 to-cyan-500/20",
        skills: ["HTML", "CSS", "JavaScript", "Django", "React", "Tailwind CSS"]
    },
    {
        category: "Data Science & ML",
        gradient: "from-blue-500/20 to-cyan-500/20",
        skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"]
    },
    {
        category: "Tools & Platforms",
        gradient: "from-blue-500/20 to-cyan-500/20",
        skills: ["GitHub", "SQL Server", "Power BI", "Excel", "VS Code"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const TiltCard = ({ group }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const box = card.getBoundingClientRect();
        const x = e.clientX - box.left;
        const y = e.clientY - box.top;
        const centerX = box.width / 2;
        const centerY = box.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -15; // 15 degree max tilt
        const rotateYValue = ((x - centerX) / centerX) * 15;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            style={{ perspective: 1000 }}
            variants={itemVariants}
            className="h-full"
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{ rotateX, rotateY, scale: rotateX !== 0 ? 1.02 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative h-full p-5 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)] transition-shadow duration-300 group overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Interactive gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                {/* Lifts content in 3D */}
                <div style={{ transform: "translateZ(40px)" }} className="relative z-10 flex flex-col h-full pointer-events-auto">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {group.category}
                    </h3>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {group.skills.map((skill, sIndex) => (
                            <span
                                key={sIndex}
                                className="px-3 py-1.5 bg-gray-50/90 dark:bg-white/5 backdrop-blur-[2px] border border-gray-200/50 dark:border-white/10 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-lg group-hover:border-gray-300/50 dark:group-hover:border-white/30 group-hover:-translate-y-0.5 transition-all shadow-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors">Technical Skills</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skillsData.map((group, index) => (
                        <TiltCard key={index} group={group} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
