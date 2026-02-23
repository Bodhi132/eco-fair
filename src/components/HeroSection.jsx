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

    // Parallax effects
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            id="hero"
            ref={ref}
            className="relative w-full min-h-[110vh] flex items-center justify-center bg-[#E8E2D2] overflow-hidden rounded-b-[3rem] shadow-[0px_20px_0px_0px_rgba(26,54,45,1)] z-10"
        >
            {/* Retro Texture / Grain Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.25] mix-blend-multiply bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjxmaWx0ZXIgaWQ9J24nPjxmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScwLjknIG51bU9jdGF2ZXM9JzMnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjbiknIG9wYWNpdHY9JzAuMScvPjwvc3ZnPg==')]"></div>

            {/* Hero Background Image (Pexels - Fashion/Lifestyle) */}
            <motion.div
                className="absolute inset-0 z-0 origin-center"
                style={{ y: yBg }}
                initial={{ scale: 1.2, filter: "blur(10px)" }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <Image
                    src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
                    alt="Premium lifestyle abstract"
                    fill
                    priority
                    className="object-cover opacity-80 mix-blend-luminosity sepia-[0.3]"
                />
                {/* Vintage vignette overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#E8E2D2_80%)]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#E8E2D2]/80 via-transparent to-[#E8E2D2]/95"></div>
            </motion.div>

            {/* Abstract Geometric Shapes (resembling the poster art) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-t-full bg-[#D15C42] mix-blend-multiply blur-[120px] opacity-40"
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#1A362D] mix-blend-multiply blur-[120px] opacity-30"
                />
            </div>

            {/* Fine grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(26,54,45,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(26,54,45,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10 opacity-50"></div>

            <motion.div
                className="relative z-30 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center mt-20"
                style={{ y: yText, opacity: opacityText }}
            >

                {/* Subtle top label */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8 inline-flex items-center space-x-4 border border-[#1A362D]/30 px-6 py-2 bg-[#F5F2EA]/50 backdrop-blur-sm"
                >
                    <div className="w-2 h-2 rounded-full bg-[#D15C42] animate-pulse"></div>
                    <p className="text-xs md:text-sm font-bold tracking-[0.4em] text-[#1A362D] uppercase">
                        Exclusive Lifestyle Expo
                    </p>
                </motion.div>

                {/* Main Title - Split Text Animation */}
                <div className="relative">
                    <motion.h1
                        className="font-serif text-[4rem] sm:text-7xl md:text-[8rem] lg:text-[13rem] leading-[0.85] md:leading-[0.8] text-[#1A362D] uppercase tracking-tighter mix-blend-color-burn"
                        initial={{ y: 50, opacity: 0, rotateX: 45 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        style={{ perspective: "1000px" }}
                    >
                        ECO <span className="text-[#D15C42] italic pr-2 md:pr-6 relative inline-block">FAIR
                            {/* Decorative line under FAIR */}
                            <motion.span
                                className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[4px] md:h-[6px] bg-[#DDA76A]"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, delay: 1.2, ease: "circOut" }}
                            />
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                        className="absolute right-0 md:-right-12 -bottom-4 md:bottom-0 text-lg sm:text-xl md:text-3xl text-[#1A362D] font-serif italic tracking-wider bg-[#E8E2D2] border-2 border-[#1A362D] px-4 md:px-6 py-2 md:py-3 shadow-[4px_4px_0px_0px_rgba(209,92,66,1)] md:shadow-[6px_6px_0px_0px_rgba(209,92,66,1)] origin-bottom-left rotate-[-5deg]"
                    >
                        Edition 1.0
                    </motion.div>
                </div>

                {/* Info Box - Vintage Ticket Style */}
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mt-16 md:mt-20 p-6 md:p-8 border-4 border-[#1A362D] bg-[#F5F2EA] shadow-[8px_8px_0px_0px_rgba(26,54,45,1)] md:shadow-[12px_12px_0px_0px_rgba(26,54,45,1)] relative group w-full max-w-sm md:max-w-none"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                >
                    {/* Decorative Corner Stamps */}
                    <div className="absolute -top-3 -left-3 w-4 h-4 md:w-6 md:h-6 border-b-2 border-r-2 border-[#1A362D] bg-[#D15C42] rotate-45"></div>
                    <div className="absolute -bottom-3 -right-3 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 border-[#1A362D] bg-[#DDA76A] rotate-45"></div>

                    <div className="flex flex-col items-center">
                        <span className="text-[10px] md:text-sm text-[#D15C42] uppercase tracking-[0.4em] mb-1 md:mb-2 font-bold">Dates</span>
                        <span className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1A362D]">30 & 31 May</span>
                    </div>

                    <div className="hidden md:block w-[3px] h-16 bg-[#1A362D] opacity-20 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#E8E2D2] border-2 border-[#1A362D] rounded-full"></div>
                    </div>
                    <div className="block md:hidden h-[3px] w-full max-w-[120px] bg-[#1A362D] opacity-20 my-2"></div>

                    <div className="flex flex-col items-center">
                        <span className="text-[10px] md:text-sm text-[#D15C42] uppercase tracking-[0.4em] mb-1 md:mb-2 font-bold">Venue</span>
                        <span className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1A362D] whitespace-nowrap">Hotel St Laurn</span>
                    </div>
                </motion.div>

                {/* Cinematic Down Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#1A362D]"
                >
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center cursor-pointer"
                    >
                        <span className="uppercase text-[9px] tracking-[0.3em] font-bold mb-3">Scroll</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                    </motion.div>
                </motion.div>

            </motion.div>
        </section>
    );
}
