import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { ExternalLink, Github } from 'lucide-react';
import project1Img from "../assets/projects/project_1.png";
import project2Img from "../assets/projects/project_2.png";
import project3Img from "../assets/projects/project_3.png";

const projectsData = [
    {
        title: "University Management System",
        description: "Built a role-based system enabling management of courses, attendance, CGPA, and messaging for students and faculty. Delivered an interactive dashboard for academic data visualization.",
        image: project1Img,
        tech: ["Python", "Django", "HTML", "CSS", "SQLite"],
        github: "https://github.com/SalapuVijay"
    },
    {
        title: "Aspiro - AI Driven Student Guide",
        description: "A full-stack web application for placement preparation, interview practice, and skill development, integrating an AI chatbot to deliver personalized guidance.",
        image: project2Img,
        tech: ["Tailwind CSS", "JavaScript", "HTML", "CSS"],
        github: "https://github.com/SalapuVijay"
    },
    {
        title: "Realty Whisper - AI Real Estate Chatbot",
        description: "An AI-driven real estate chatbot delivering user-friendly guidance for multiple regions, location insights, and land price predictions.",
        image: project3Img,
        tech: ["React", "Next.js", "Node.js", "Tailwind CSS"],
        github: "https://github.com/SalapuVijay"
    }
];

const defaultOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1.02,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
}

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative transition-colors duration-300">

            <div className="max-w-[85rem] mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors">Featured Projects</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <Tilt options={defaultOptions} className="h-full">
                                <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-300 h-full flex flex-col group">

                                    {/* Image Container with Hover Expand */}
                                    <div className="relative h-52 overflow-hidden">
                                        <div className="absolute inset-0 bg-blue-900/20 dark:bg-black/40 group-hover:bg-transparent dark:group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed transition-colors">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                                            {project.tech.map((tech, tIndex) => (
                                                <span key={tIndex} className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-md tracking-wide transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-3 mt-auto border-t border-gray-50 dark:border-white/5 pt-5 transition-colors">
                                            {project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex items-center gap-1.5 text-xs font-semibold text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-blue-600 dark:hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors shadow-sm"
                                                >
                                                    <ExternalLink size={14} /> View Live
                                                </a>
                                            )}
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 px-4 py-2 rounded-lg transition-colors shadow-sm"
                                                >
                                                    <Github size={14} /> Source
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
