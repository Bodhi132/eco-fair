"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroductionSection() {
    return (
        <section
            id="introduction"
            className="relative w-full min-h-screen bg-[#F5F2EA] py-20 overflow-hidden flex items-center border-b-[3px] border-[#1A362D]"
        >
            {/* Retro Texture */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.2] mix-blend-multiply bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjxmaWx0ZXIgaWQ9J24nPjxmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScwLjknIG51bU9jdGF2ZXM9JzMnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjbiknIG9wYWNpdHY9JzAuMScvPjwvc3ZnPg==')]"></div>

            {/* Abstract Architectural Background Shapes (Muted for better contrast) */}
            <div className="absolute top-0 right-0 w-[30%] h-[100%] bg-[#E8E2D2] border-l-[3px] border-[#1A362D] z-0 max-sm:hidden"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(26,54,45,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(26,54,45,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10"></div>

            <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Typography Content */}
                    <motion.div
                        className="lg:col-span-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <div className="flex items-center mb-6 space-x-4">
                            <span className="w-8 h-[2px] bg-[#D15C42]"></span>
                            <h2 className="text-[#D15C42] font-bold tracking-[0.3em] uppercase text-xs">
                                About The Event
                            </h2>
                        </div>

                        <h3 className="font-serif text-[2.5rem] sm:text-5xl lg:text-6xl text-[#1A362D] leading-[1.1] sm:leading-[1] mb-6 tracking-tight">
                            A Premium <br />
                            <span className="italic text-[#DDA76A]">Lifestyle</span> Experience.
                        </h3>

                        <p className="text-base sm:text-lg text-[#1A362D]/80 leading-relaxed mb-8 font-medium max-w-none sm:max-w-lg">
                            Eco Fair 1.0 is Pune's most exclusive confluence of sustainable brands and bespoke luxury. Designed to elevate the standard of modern exhibitions, we unite the elite in fashion, lifestyle, and conscious consumerism.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            {['Curated Brands', 'Elite Networking', 'Conscious Luxury', 'Premium Venue'].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-center text-[#1A362D] font-bold text-sm tracking-wide"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                                >
                                    <div className="w-5 h-5 border-2 border-[#1A362D] flex items-center justify-center mr-3 shrink-0 bg-[#E8E2D2]">
                                        <div className="w-1.5 h-1.5 bg-[#D15C42]"></div>
                                    </div>
                                    <span>{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            className="mt-6 sm:mt-8 relative px-6 sm:px-8 py-3 bg-transparent text-[#1A362D] font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs overflow-hidden rounded-none border-[3px] border-[#1A362D] group shadow-[4px_4px_0px_0px_rgba(209,92,66,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 cursor-pointer"
                        >
                            <span className="relative z-10">Read Manifesto</span>
                        </motion.button>
                    </motion.div>

                    {/* Right Column: Retro Image Overlay & Stat Cards */}
                    <motion.div
                        className="lg:col-span-6 relative flex flex-col items-end"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >

                        {/* Main Pexels Image in a Retro Frame */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-md h-[450px] border-4 border-[#1A362D] p-2 bg-[#F5F2EA] shadow-[12px_12px_0px_0px_rgba(26,54,45,1)] z-10"
                        >
                            <div className="relative w-full h-full overflow-hidden border border-[#1A362D]/20">
                                <div className="absolute inset-0 bg-[#DDA76A]/20 mix-blend-color-burn z-10 pointer-events-none hover:opacity-0 transition-opacity duration-700"></div>
                                <Image
                                    src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                                    alt="Premium lifestyle aesthetic"
                                    fill
                                    className="object-cover grayscale contrast-125 sepia-[0.2] hover:grayscale-0 hover:sepia-0 transition-all duration-700"
                                />
                            </div>
                        </motion.div>

                        {/* Overlapping Stat Cards */}
                        <div className="absolute bottom-4 sm:bottom-10 left-0 sm:-left-6 md:-left-12 z-20 flex flex-col space-y-4">

                            {/* Stat Card 1 */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="bg-[#1A362D] p-4 sm:p-6 border-2 border-[#1A362D] shadow-[4px_4px_0px_0px_rgba(209,92,66,1)] sm:shadow-[6px_6px_0px_0px_rgba(209,92,66,1)] w-48 sm:w-56"
                            >
                                <div className="text-3xl sm:text-4xl font-serif text-[#F5F2EA] tracking-tighter mb-1">5k+</div>
                                <div className="text-[9px] sm:text-[10px] font-bold text-[#DDA76A] uppercase tracking-widest">Premium Attendees</div>
                            </motion.div>

                            {/* Stat Card 2 */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="bg-[#E8E2D2] p-4 sm:p-5 border-2 border-[#1A362D] shadow-[4px_4px_0px_0px_rgba(26,54,45,1)] sm:shadow-[6px_6px_0px_0px_rgba(26,54,45,1)] w-40 sm:w-48 ml-4 sm:ml-8"
                            >
                                <div className="text-2xl sm:text-3xl font-serif text-[#1A362D] tracking-tighter mb-1">150+</div>
                                <div className="text-[9px] sm:text-[10px] font-bold text-[#D15C42] uppercase tracking-[0.2em]">Global Brands</div>
                            </motion.div>
                        </div>

                        {/* Massive Typography Backdrop mapped to image */}
                        <div className="absolute right-[-10%] top-[-5%] sm:top-[-10%] text-[8rem] sm:text-[12rem] font-serif font-bold text-[#E8E2D2] opacity-80 select-none z-0 tracking-tighter mix-blend-multiply">
                            1.0
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
