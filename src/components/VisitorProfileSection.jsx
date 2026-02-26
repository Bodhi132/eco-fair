"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VisitorProfileSection() {
    return (
        <section
            id="visitor-profile"
            className="relative w-full py-32 bg-[#FAFAFA] overflow-hidden"
        >
            <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">

                    {/* Left Side: Elegant Editorial Graphic Box */}
                    <div className="w-full lg:w-1/2 relative h-[500px] sm:h-[600px] flex justify-center items-center">

                        <motion.div
                            className="relative z-10 w-[95%] sm:w-[85%] h-full bg-[#0A0A0A] overflow-hidden"
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <Image
                                src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                                alt="High-net-worth attendees"
                                fill
                                className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-[2s]"
                            />
                            {/* Subtle inner border */}
                            <div className="absolute inset-4 sm:inset-6 border border-white/20 pointer-events-none"></div>

                            <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-12 z-20">
                                <div className="text-[#C19B6C] text-xs font-medium tracking-[0.3em] uppercase">Audience Analytics</div>

                                <div>
                                    <div className="text-5xl sm:text-7xl font-serif text-[#FAFAFA] tracking-tight mb-2">HNI</div>
                                    <div className="text-xl sm:text-2xl font-light text-[#D1D1D1]">Core Elite Demographic</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Minimalist Floating Data Points */}
                        <motion.div
                            className="absolute top-12 sm:top-24 -left-4 sm:-left-8 bg-white p-6 sm:p-8 border border-[#0A0A0A]/5 shadow-sm z-30 min-w-[150px]"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <div className="text-3xl sm:text-4xl font-serif text-[#0A0A0A]">35-55</div>
                            <div className="text-[10px] font-medium text-[#555555] uppercase tracking-widest mt-2">Avg Age Group</div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-12 sm:bottom-24 -right-4 sm:-right-8 bg-[#FAFAFA] p-6 sm:p-8 border border-[#0A0A0A]/10 shadow-lg z-30 min-w-[150px]"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <div className="text-3xl sm:text-4xl font-serif text-[#0A0A0A]">100%</div>
                            <div className="text-[10px] font-medium text-[#C19B6C] uppercase tracking-widest mt-2">Pre-verified</div>
                        </motion.div>

                    </div>

                    {/* Right Side: High-End Typography and Clean List */}
                    <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <div className="flex items-center mb-8 space-x-4">
                                <span className="w-12 h-[1px] bg-[#C19B6C]"></span>
                                <h2 className="text-[#C19B6C] font-medium tracking-[0.3em] uppercase text-xs">Who Visits</h2>
                            </div>
                            <h3 className="font-serif text-5xl sm:text-6xl text-[#0A0A0A] mb-8 leading-[1.1] tracking-tight">
                                An Exclusive <br />
                                <span className="italic font-light text-[#555555]">Audience Profile.</span>
                            </h3>
                            <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed mb-12">
                                Eco Fair 1.0 caters directly to Pune's high-net-worth individuals, fashion connoisseurs, industry leaders, and conscious luxury buyers looking for exceptional lifestyle products.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 border-t border-[#0A0A0A]/10 pt-10">
                                {[
                                    { title: "HNI Buyers", desc: "Luxury lifestyle consumers" },
                                    { title: "Conscious Professionals", desc: "Millennials and Gen Z" },
                                    { title: "Industry Leaders", desc: "Entrepreneurs and founders" },
                                    { title: "Lifestyle Adopters", desc: "Sustainable choices" },
                                    { title: "Enthusiasts", desc: "Premium fashion and jewellery" },
                                    { title: "Ethical Seekers", desc: "Actively seeking alternatives" }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="relative group"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                                    >
                                        <div className="border-l border-[#C19B6C] pl-5">
                                            <div className="font-serif text-2xl text-[#0A0A0A] mb-2 tracking-tight group-hover:text-[#C19B6C] transition-colors duration-300">{item.title}</div>
                                            <div className="text-sm text-[#555555] font-light">{item.desc}</div>
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

