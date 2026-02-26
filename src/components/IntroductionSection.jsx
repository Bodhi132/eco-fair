"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroductionSection() {
    return (
        <section
            id="introduction"
            className="relative w-full min-h-[90vh] bg-white py-24 sm:py-32 overflow-hidden flex items-center"
        >
            <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Typography Content */}
                    <motion.div
                        className="lg:col-span-5"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <div className="flex items-center mb-8 space-x-4">
                            <span className="w-12 h-[1px] bg-[#C19B6C]"></span>
                            <h2 className="text-[#C19B6C] font-medium tracking-[0.3em] uppercase text-xs">
                                About The Event
                            </h2>
                        </div>

                        <h3 className="font-serif text-[2.5rem] sm:text-5xl lg:text-6xl text-[#0A0A0A] leading-[1.1] mb-8 tracking-tight">
                            A Premium <br />
                            <span className="italic font-light text-[#555555]">Lifestyle</span> Experience.
                        </h3>

                        <p className="text-base sm:text-lg text-[#555555] leading-relaxed mb-10 font-light max-w-none sm:max-w-lg">
                            Ecofair 1.0 is a 2-day premium lifestyle exhibition that brings together thoughtfully curated lifestyle in ethical fashion and conscious lifestyle. Designed for confirmed business for lifestyle brands, bringing sustainability in our daily lifestyle, This exhibition aims to connect the brands with 1000+ conscious consumers and HNI buyers who are actively looking to purchase sustainable alternatives.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 border-t border-[#0A0A0A]/10 pt-8">
                            {['Curated Brands', 'Elite Networking', 'Conscious Luxury', 'Premium Venue'].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-center text-[#0A0A0A] text-sm uppercase tracking-widest font-medium"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full mr-4 bg-[#C19B6C]"></div>
                                    <span>{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            className="group flex items-center space-x-4 pb-2 border-b border-[#0A0A0A] hover:border-[#C19B6C] transition-colors duration-500"
                        >
                            <span className="text-[#0A0A0A] uppercase tracking-[0.2em] text-xs font-medium group-hover:text-[#C19B6C] transition-colors duration-500">Read Manifesto</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 text-[#0A0A0A] group-hover:text-[#C19B6C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </motion.button>
                    </motion.div>

                    {/* Right Column: Editorial Image Overlay & Sleek Stat Cards */}
                    <motion.div
                        className="lg:col-span-7 relative flex flex-col items-center lg:items-end mt-12 lg:mt-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >

                        {/* Main Editorial Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
                            className="relative w-full max-w-lg h-[550px] overflow-hidden"
                        >
                            <Image
                                src="https://images.pexels.com/photos/1926768/pexels-photo-1926768.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                                alt="Premium lifestyle aesthetic"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-[2s] ease-[0.25,1,0.5,1]"
                            />
                            {/* Sleek inner border overlay */}
                            <div className="absolute inset-4 border border-white/20 pointer-events-none"></div>
                        </motion.div>

                        {/* Sleek Floating Overlapping Stat Cards */}
                        <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-12 z-20 flex flex-col space-y-6">

                            {/* Stat Card 1 */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
                                className="bg-white/80 backdrop-blur-xl p-6 sm:p-8 border border-[#0A0A0A]/5 shadow-sm w-48 sm:w-56"
                            >
                                <div className="text-3xl sm:text-5xl font-serif text-[#0A0A0A] tracking-tighter mb-2">5k+</div>
                                <div className="text-[9px] sm:text-[10px] font-medium text-[#555555] uppercase tracking-widest">Premium Attendees</div>
                            </motion.div>

                            {/* Stat Card 2 */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.8, ease: [0.25, 1, 0.5, 1] }}
                                className="bg-[#0A0A0A]/90 backdrop-blur-xl p-6 sm:p-8 border border-white/10 shadow-lg w-48 sm:w-56 ml-8 sm:ml-12"
                            >
                                <div className="text-3xl sm:text-5xl font-serif text-white tracking-tighter mb-2">150+</div>
                                <div className="text-[9px] sm:text-[10px] font-medium text-[#C19B6C] uppercase tracking-[0.2em]">Global Brands</div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

