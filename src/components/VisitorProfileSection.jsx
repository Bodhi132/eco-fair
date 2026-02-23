"use client";

import { motion } from "framer-motion";

export default function VisitorProfileSection() {
    return (
        <section
            id="visitor-profile"
            className="relative w-full py-32 bg-[#E8E2D2] overflow-hidden border-t-2 border-[#1A362D]"
        >
            {/* Premium static abstract noise */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.15] mix-blend-multiply bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjxmaWx0ZXIgaWQ9J24nPjxmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScwLjknIG51bU9jdGF2ZXM9JzMnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjbiknIG9wYWNpdHY9JzAuMScvPjwvc3ZnPg==')]"></div>

            <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Left Side: Retro Graphic Box */}
                    <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] lg:h-[600px] flex justify-center items-center mt-10 lg:mt-0">

                        {/* Offset solid shadow blocks */}
                        <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-[85%] sm:w-[80%] h-[85%] sm:h-[80%] bg-[#DDA76A] rounded-[2rem] z-0"></div>
                        <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 w-[85%] sm:w-[80%] h-[85%] sm:h-[80%] bg-[#1A362D] rounded-[2rem] z-0"></div>

                        {/* Central Graphic Element */}
                        <motion.div
                            className="relative z-10 w-[90%] sm:w-[85%] h-[90%] sm:h-[85%] rounded-[2rem] bg-[#F5F2EA] border-[3px] sm:border-4 border-[#1A362D] shadow-[8px_8px_0px_0px_rgba(209,92,66,1)] sm:shadow-[12px_12px_0px_0px_rgba(209,92,66,1)] flex flex-col items-center justify-center overflow-hidden"
                            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                        >
                            {/* Abstract geometric shapes inside */}
                            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#D15C42] rounded-bl-full opacity-50"></div>
                            <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-[#1A362D] rounded-tr-full opacity-20"></div>

                            <div className="text-center z-20">
                                <div className="font-serif text-[#1A362D] text-[5rem] sm:text-[8rem] leading-none mb-2 sm:mb-4 tracking-tighter mix-blend-multiply opacity-10 font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">HNI</div>

                                <div className="relative">
                                    <div className="w-16 h-16 sm:w-24 sm:h-24 border-2 border-[#1A362D] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 bg-[#E8E2D2]">
                                        <div className="w-10 h-10 sm:w-16 sm:h-16 border border-dashed border-[#D15C42] rounded-full flex items-center justify-center">
                                            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-[#DDA76A] rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="text-2xl sm:text-3xl font-serif text-[#1A362D] tracking-tight">Core Elite</div>
                                    <div className="text-[10px] sm:text-xs font-bold text-[#D15C42] uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-1 sm:mt-2">Target Demographic</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Retro Badges */}
                        <motion.div
                            className="absolute top-10 sm:top-20 -left-2 sm:left-0 bg-[#D15C42] text-[#F5F2EA] p-3 sm:p-5 border-2 border-[#1A362D] shadow-[4px_4px_0px_0px_rgba(26,54,45,1)] sm:shadow-[6px_6px_0px_0px_rgba(26,54,45,1)] z-30"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="text-xl sm:text-3xl font-serif">35-55</div>
                            <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest mt-1 min-w-max">Avg Age Group</div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-16 sm:bottom-32 -right-2 sm:-right-4 bg-[#F5F2EA] text-[#1A362D] p-3 sm:p-5 border-2 border-[#1A362D] shadow-[4px_4px_0px_0px_rgba(26,54,45,1)] sm:shadow-[6px_6px_0px_0px_rgba(26,54,45,1)] z-30"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <div className="text-xl sm:text-3xl font-serif">100%</div>
                            <div className="text-[8px] sm:text-[10px] font-bold text-[#D15C42] uppercase tracking-[0.1em] sm:tracking-widest mt-1 min-w-max">Pre-verified</div>
                        </motion.div>

                    </div>

                    {/* Right Side: High-End Typography */}
                    <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <div className="flex items-center mb-6 space-x-4">
                                <span className="w-8 h-[2px] bg-[#DDA76A]"></span>
                                <h2 className="text-[#DDA76A] font-bold tracking-[0.3em] uppercase text-xs">Who Visits</h2>
                            </div>
                            <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1A362D] mb-6 sm:mb-8 leading-[1.1] tracking-tight">
                                An Exclusive <br />
                                <span className="italic">Audience Profile.</span>
                            </h3>
                            <p className="text-base sm:text-lg text-[#1A362D]/80 leading-relaxed font-medium mb-10 sm:mb-12">
                                Eco Fair 1.0 caters directly to Pune's high-net-worth individuals, fashion connoisseurs, industry leaders, and conscious luxury buyers looking for exceptional lifestyle products.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-10">
                                {[
                                    { stat: "3,000+", label: "Target Footfall", desc: "Curated guest list" },
                                    { stat: "45%", label: "Decision Makers", desc: "Founders & CXOs" },
                                    { stat: "100+", label: "Influencers", desc: "Digital creators" },
                                    { stat: "Premium", label: "Purchasing Power", desc: "High disposable income" }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="group relative"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.3 + (idx * 0.1), ease: "easeOut" }}
                                    >
                                        <div className="border-l-[3px] sm:border-l-4 border-[#DDA76A] pl-4 sm:pl-5">
                                            <div className="font-serif text-3xl sm:text-4xl text-[#1A362D] mb-1 sm:mb-2 tracking-tight">{item.stat}</div>
                                            <div className="text-[10px] sm:text-xs font-bold text-[#D15C42] uppercase tracking-widest mb-1">{item.label}</div>
                                            <div className="text-xs sm:text-sm text-[#1A362D]/60 font-medium italic">{item.desc}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
