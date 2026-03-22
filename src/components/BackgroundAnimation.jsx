import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-300">
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-transparent dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz48L3N2Zz4=')] mix-blend-overlay z-0 transition-opacity duration-300" />

            {/* Drifting Glowing Orbs - Hidden in Light Mode */}
            <motion.div
                animate={{
                    x: [0, 150, 0, -150, 0],
                    y: [0, -100, 50, -50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-transparent dark:bg-blue-600/10 blur-[100px] md:blur-[140px] transition-colors duration-300"
            />

            <motion.div
                animate={{
                    x: [0, -150, 0, 150, 0],
                    y: [0, 100, -50, 50, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2
                }}
                className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-transparent dark:bg-purple-600/10 blur-[100px] md:blur-[140px] transition-colors duration-300"
            />

            <motion.div
                animate={{
                    x: [0, 100, 150, -100, 0],
                    y: [0, -150, 0, 100, 0],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 5
                }}
                className="absolute top-[20%] left-[60%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-transparent dark:bg-teal-600/10 blur-[100px] md:blur-[140px] transition-colors duration-300"
            />
        </div>
    );
};

export default BackgroundAnimation;
