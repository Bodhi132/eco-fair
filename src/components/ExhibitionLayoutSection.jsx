"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExhibitionLayoutSection() {
    return (
        <section
            id="exhibition-layout"
            className="relative w-full py-32 bg-[#FAFAFA] overflow-hidden"
        >
            <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                    {/* Left Column: Premium Typography & Editorial Fashion Image */}
                    <div className="w-full lg:w-5/12 flex flex-col items-start pt-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                            className="w-full"
                        >
                            <div className="flex items-center mb-6 space-x-4">
                                <span className="w-12 h-[1px] bg-[#C19B6C]"></span>
                                <h2 className="text-[#C19B6C] font-medium tracking-[0.3em] uppercase text-[10px] sm:text-xs">
                                    Spatial Design
                                </h2>
                            </div>

                            <h3 className="font-serif text-[2.5rem] sm:text-5xl lg:text-6xl text-[#0A0A0A] leading-[1.1] mb-8 tracking-tight">
                                The Venue <br />
                                <span className="italic font-light text-[#555555]">Architecture.</span>
                            </h3>

                            <p className="text-base sm:text-lg text-[#555555] leading-relaxed mb-10 font-light pr-0 sm:pr-4">
                                Immerse yourself in our meticulously designed exhibition space. Featuring 27 premium stalls, the floor plan is intentionally curated to facilitate seamless discovery, allowing each brand's narrative to breathe while guiding buyers through an unbroken journey of conscious luxury.
                            </p>

                            {/* Premium Editorial Image embedded within text column */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden mt-6 shadow-2xl border border-[#0A0A0A]/5 group hidden xl:block">
                                <Image
                                    src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt="Premium fashion venue aesthetic"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-[2s] ease-[0.25,1,0.5,1] grayscale-[20%] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-4 border border-white/30 pointer-events-none transition-all duration-700 group-hover:inset-6"></div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: The User's Uploaded Floor Plan */}
                    <div className="w-full lg:w-7/12 relative flex justify-center items-center h-full">
                        <motion.div
                            className="relative w-full bg-[#FFFFFF] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-[#0A0A0A]/5 p-2 sm:p-4 flex flex-col items-center justify-center group"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#C19B6C] group-hover:w-full transition-all duration-[1s] ease-[0.25,1,0.5,1] z-30"></div>
                            <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#C19B6C] group-hover:w-full transition-all duration-[1s] ease-[0.25,1,0.5,1] z-30"></div>

                            {/* The Floor Plan Image provided by User */}
                            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#E8E8E8] group-hover:bg-[#F0F0F0] transition-colors duration-[1s]">
                                <Image
                                    src="/layout.png"
                                    alt="Exhibition Layout Floor Plan with 27 Stalls"
                                    fill
                                    className="object-contain p-2 mix-blend-multiply transition-transform duration-[1.5s] group-hover:scale-[1.03]"
                                />
                                {/* Fallback instructions (behind the image if it loads) */}
                                <div className="absolute inset-0 flex items-center justify-center -z-10 text-center px-6">
                                    <span className="text-[#555555] text-xs uppercase tracking-widest font-medium">Please save uploaded image as<br /> "layout-plan.png" in public folder</span>
                                </div>
                            </div>

                            {/* Floating Architecture Data Card inside the layout frame */}
                            <motion.div
                                className="absolute -bottom-6 sm:-bottom-10 -left-2 sm:-left-8 z-20 bg-[#0A0A0A] p-6 sm:p-8 shadow-2xl min-w-[180px] sm:min-w-[220px]"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.8, ease: [0.25, 1, 0.5, 1] }}
                            >
                                <div className="text-[9px] sm:text-[10px] text-[#C19B6C] uppercase tracking-[0.3em] font-medium mb-1 sm:mb-2">Stall Investment</div>
                                <div className="text-2xl sm:text-4xl font-serif text-[#FAFAFA] tracking-tighter">
                                    ₹30,000<span className="text-xs sm:text-sm text-[#D1D1D1] font-light italic"> flat</span>
                                </div>
                            </motion.div>

                            {/* Floating Stats */}
                            <motion.div
                                className="absolute -top-6 sm:-top-8 -right-2 sm:-right-8 z-20 bg-white p-6 sm:p-8 border border-[#0A0A0A]/5 shadow-xl min-w-[140px] sm:min-w-[170px]"
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 1, ease: [0.25, 1, 0.5, 1] }}
                            >
                                <div className="text-4xl sm:text-5xl font-serif text-[#0A0A0A] tracking-tighter mix-blend-difference mb-1 sm:mb-2">
                                    27
                                </div>
                                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#C19B6C] font-medium">
                                    Premium Stalls
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>

                {/* Minimalist Legend / Features below */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-32 border-t border-[#0A0A0A]/10 pt-16">
                    {[
                        { title: "Premium Booths", desc: "Custom-built, illuminated architectural showcases for optimum brand visibility and uncompromised aesthetic alignment." },
                        { title: "Strategic Flow", desc: "A guided experiential pathway designed to eliminate dead zones, ensuring every brand receives equal, high-intent footfall." },
                        { title: "Bespoke Environment", desc: "Dedicated high-end networking spaces and consultation zones crafted explicitly for luxury B2B and HNI conversions." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="flex flex-col group pl-4 border-l border-transparent hover:border-[#C19B6C] transition-colors duration-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                        >
                            <div className="text-3xl font-serif text-[#0A0A0A]/10 group-hover:text-[#C19B6C] transition-colors duration-500 italic leading-none mb-4">
                                0{idx + 1}
                            </div>
                            <div className="text-[#0A0A0A] text-xl font-serif tracking-tight mb-2 group-hover:text-[#C19B6C] transition-colors duration-500">
                                {item.title}
                            </div>
                            <div className="text-[#555555] text-sm font-light leading-relaxed">
                                {item.desc}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
