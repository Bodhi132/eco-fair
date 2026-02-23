"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reasons = [
    { title: "Direct HNI Access", desc: "Interact face-to-face with Pune's premier shoppers, tastemakers, and lifestyle enthusiasts in a highly curated environment.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { title: "Elite Positioning", desc: "Elevate your brand perception by aligning with a curated luxury showcase alongside top-tier national designers.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
    { title: "B2B Expansion", desc: "Connect with key distributors, boutique owners, and industry influencers to scale your brand footprint.", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { title: "Aggressive PR", desc: "Benefit from an extensive PR campaign including print media, outdoor billboards, and targeted digital influencer marketing.", icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" },
];

export default function WhyExhibitSection() {
    return (
        <section
            id="why-exhibit"
            className="relative w-full py-32 bg-[#1A362D] overflow-hidden"
        >
            {/* Retro noise overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.25] mix-blend-color-burn bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjxmaWx0ZXIgaWQ9J24nPjxmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScwLjknIG51bU9jdGF2ZXM9JzMnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjbiknIG9wYWNpdHY9JzAuMScvPjwvc3ZnPg==')]"></div>

            {/* Background Image mapped to top right */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none z-0 mix-blend-luminosity">
                <Image
                    src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Premium structural background"
                    fill
                    className="object-cover sepia-[0.5]"
                />
                {/* Fade gradient so it blends nicely into the deep green */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A362D] to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A362D] to-transparent"></div>
            </div>

            {/* Subtle organic gradient background */}
            <div className="absolute top-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#DDA76A] to-transparent opacity-80"></div>

            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[50%] -right-[20%] w-[100vw] h-[100vw] bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-[#D15C42]/10 via-[#1A362D]/10 to-[#DDA76A]/10 blur-[120px] pointer-events-none z-0"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6 md:gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-[#DDA76A] font-bold tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-3 sm:mb-4 flex items-center">
                            <span className="w-6 sm:w-8 h-[2px] bg-[#DDA76A] mr-3 sm:mr-4"></span>
                            Opportunities
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#F5F2EA] tracking-tight leading-tight">
                            Why Exhibit <br />
                            <span className="italic font-light text-[#D15C42]">With Us?</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="max-w-sm"
                    >
                        <p className="text-[#F5F2EA]/80 font-medium text-sm lg:text-base leading-relaxed">
                            Partnering with Eco Fair guarantees unparalleled visibility. We do not just sell space; we engineer environments where discerning buyers meet extraordinary brands.
                        </p>
                    </motion.div>
                </div>

                {/* Vintage Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reasons.map((reason, idx) => (
                        <motion.div
                            key={idx}
                            className="group relative bg-[#F5F2EA] p-12 overflow-hidden border-[3px] border-[#1A362D] transition-transform duration-300 shadow-[8px_8px_0px_0px_rgba(209,92,66,1)] hover:shadow-[12px_12px_0px_0px_rgba(221,167,106,1)] hover:-translate-y-2 hover:-translate-x-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.15 }}
                        >
                            {/* Vintage overlay corners */}
                            <div className="absolute top-2 left-2 w-4 h-4 border-t-[3px] border-l-[3px] border-[#1A362D]"></div>
                            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-[3px] border-r-[3px] border-[#1A362D]"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-16 h-16 rounded-full bg-[#E8E2D2] flex items-center justify-center border-[3px] border-[#1A362D] mb-8 shadow-inner">
                                    <svg className="w-7 h-7 text-[#D15C42]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={reason.icon}></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-serif text-[#1A362D] mb-4">{reason.title}</h3>
                                    <p className="text-[#1A362D]/80 leading-relaxed font-medium text-sm">{reason.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Metrics Bar with Vintage Layout */}
                <motion.div
                    className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8 border-y-[3px] border-[#DDA76A]/40 py-10 sm:py-16 relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="absolute top-0 left-1/3 w-[3px] h-full bg-[#DDA76A]/40 hidden md:block"></div>
                    <div className="absolute top-0 left-2/3 w-[3px] h-full bg-[#DDA76A]/40 hidden md:block"></div>

                    {[
                        { val: "100+", label: "Premium Stalls", sub: "Handpicked brands" },
                        { val: "10k+", label: "Sq. Ft. Venue", sub: "Impeccable space" },
                        { val: "50+", label: "Media Partners", sub: "Maximum reach" },
                    ].map((metric, i) => (
                        <motion.div
                            key={i}
                            className={`text-center group relative ${i !== 2 ? 'pb-8 border-b border-[#DDA76A]/20 md:border-b-0 md:pb-0' : ''}`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#F5F2EA] mb-2 sm:mb-3 group-hover:text-[#D15C42] transition-colors duration-300">{metric.val}</div>
                            <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#DDA76A] font-bold mb-1 sm:mb-2">{metric.label}</div>
                            <div className="text-xs sm:text-sm text-[#E8E2D2]/60 font-medium italic">{metric.sub}</div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
