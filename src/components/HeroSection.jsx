"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Sleek Parallax effects
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            id="hero"
            ref={ref}
            className="relative w-full min-h-[100vh] flex items-center justify-center bg-[#FAFAFA] overflow-hidden z-10"
        >
            {/* High-end Runway Fashion Image */}
            <motion.div
                className="absolute inset-0 z-0 origin-center"
                style={{ y: yBg }}
                initial={{ scale: 1.1, filter: "blur(20px)" }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1] }}
            >
                <Image
                    src="https://images.pexels.com/photos/1926768/pexels-photo-1926768.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
                    alt="Premium luxury fashion editorial"
                    fill
                    priority
                    className="object-cover opacity-90 object-top"
                />
                {/* Advanced sophisticated gradient overlay - moving away from vignette constraints */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/40 to-transparent"></div>
                <div className="absolute inset-0 bg-[#0A0A0A]/10 mix-blend-overlay"></div>
            </motion.div>

            <motion.div
                className="relative z-30 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center mt-32"
                style={{ y: yText, opacity: opacityText }}
            >
                {/* Subtle top label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 0.4 }}
                    className="mb-10 inline-flex items-center space-x-4"
                >
                    <div className="w-1 h-1 rounded-full bg-[#C19B6C]"></div>
                    <p className="text-[10px] md:text-xs font-medium tracking-[0.4em] text-[#0A0A0A] uppercase">
                        Where Brands Define The Future Of Lifestyle
                    </p>
                    <div className="w-1 h-1 rounded-full bg-[#C19B6C]"></div>
                </motion.div>

                {/* Main Title - Extremely elegant serif typography */}
                <div className="relative overflow-hidden py-4">
                    <motion.h1
                        className="font-serif text-[4rem] sm:text-7xl md:text-[9rem] lg:text-[12rem] leading-[0.9] text-[#0A0A0A] tracking-tighter mix-blend-overlay"
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
                    >
                        ECO <span className="text-[#C19B6C] italic font-light relative leading-[0.9]">FAIR</span>
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, letterSpacing: "0px" }}
                    animate={{ opacity: 1, letterSpacing: "12px" }}
                    transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
                    className="mt-6 md:mt-2 text-sm sm:text-base md:text-xl text-[#555555] uppercase font-light"
                >
                    Edition 1.0
                </motion.div>

                {/* Info Bar - Minimalist Glassmorphism */}
                <motion.div
                    className="flex flex-row items-center justify-between w-full max-w-3xl mt-24 md:mt-32 p-6 md:p-8 border-t border-b border-[#0A0A0A]/10 backdrop-blur-md bg-white/30"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 1 }}
                >
                    <div className="flex flex-col items-center flex-1">
                        <span className="text-[8px] md:text-[10px] text-[#555555] uppercase tracking-[0.3em] mb-2 font-medium">Dates</span>
                        <span className="text-lg md:text-xl font-serif text-[#0A0A0A] whitespace-nowrap">30 & 31 May</span>
                    </div>

                    <div className="w-[1px] h-12 bg-[#0A0A0A]/10"></div>

                    <div className="flex flex-col items-center flex-1">
                        <span className="text-[8px] md:text-[10px] text-[#555555] uppercase tracking-[0.3em] mb-2 font-medium">Venue</span>
                        <span className="text-lg md:text-xl font-serif text-[#0A0A0A] whitespace-nowrap">Hotel St Laurn</span>
                    </div>

                    <div className="hidden md:block w-[1px] h-12 bg-[#0A0A0A]/10"></div>

                    <div className="hidden md:flex flex-col items-center flex-1">
                        <span className="text-[8px] md:text-[10px] text-[#555555] uppercase tracking-[0.3em] mb-2 font-medium">Access</span>
                        <span className="text-lg md:text-xl font-serif text-[#0A0A0A] whitespace-nowrap">1000+ Buyers</span>
                    </div>
                </motion.div>

                {/* Minimalist Down Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#0A0A0A]/40"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-[1px] h-12 bg-gradient-to-b from-[#0A0A0A]/40 to-transparent"></div>
                    </motion.div>
                </motion.div>

            </motion.div>
        </section>
    );
}

