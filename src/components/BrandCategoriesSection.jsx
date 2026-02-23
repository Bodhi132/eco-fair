"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const categories = [
    { name: "Couture & Apparel", desc: "Handcrafted sustainable fashion lines" },
    { name: "Fine Jewelry", desc: "Ethically sourced precious stones and metals" },
    { name: "Accessories", desc: "Bespoke leather goods and artisan crafts" },
    { name: "Home Decor", desc: "Curated interior aesthetics" },
    { name: "Organic Skincare", desc: "Clean beauty and wellness products" },
    { name: "Gourmet Foods", desc: "Artisanal culinary experiences" },
];

export default function BrandCategoriesSection() {
    return (
        <section
            id="brand-categories"
            className="relative w-full py-32 bg-[#1A362D] overflow-hidden border-t-[3px] border-[#DDA76A]"
        >
            {/* Retro background texture overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.25] mix-blend-color-burn bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjxmaWx0ZXIgaWQ9J24nPjxmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScwLjknIG51bU9jdGF2ZXM9JzMnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjbiknIG9wYWNpdHY9JzAuMScvPjwvc3ZnPg==')]"></div>

            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(232,226,210,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(232,226,210,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0"></div>

            <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="w-full">
                        <span className="text-[#DDA76A] font-bold tracking-[0.3em] text-xs uppercase mb-4 flex items-center">
                            <span className="w-8 h-[2px] bg-[#DDA76A] mr-4"></span>
                            Exhibiting Sectors
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#F5F2EA] tracking-tight leading-tight">
                            Curated <br className="hidden sm:block" />
                            <span className="italic font-light text-[#D15C42]">Ecosystem</span>
                        </h2>
                    </div>
                    <p className="text-[#E8E2D2]/80 font-medium w-full max-w-sm text-sm lg:text-base leading-relaxed mt-4 md:mt-0">
                        Experience a meticulously selected ensemble of sustainable brands defining the future of conscious luxury and premium lifestyle.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <div
                                className="group relative h-full bg-[#E8E2D2] border-[3px] border-[#1A362D] transition-transform duration-300 shadow-[8px_8px_0px_0px_rgba(209,92,66,1)] hover:shadow-[12px_12px_0px_0px_rgba(221,167,106,1)] hover:-translate-y-2 hover:-translate-x-2 flex flex-col overflow-hidden"
                            >
                                {/* Typographic Header Replace Images */}
                                <div className="relative w-full border-b-[3px] border-[#1A362D] overflow-hidden bg-[#F5F2EA] p-6 lg:p-8 flex items-center justify-between group-hover:bg-[#1A362D] transition-colors duration-500">
                                    <h3 className="text-2xl lg:text-3xl font-serif text-[#1A362D] group-hover:text-[#F5F2EA] relative z-10 transition-colors duration-500">{cat.name}</h3>
                                    <div className="text-5xl lg:text-7xl font-serif font-black text-[#1A362D] opacity-10 absolute right-4 top-1/2 -translate-y-1/2 z-0 group-hover:opacity-20 transition-opacity duration-500">0{idx + 1}</div>
                                </div>

                                <div className="p-6 lg:p-8 relative z-10 flex flex-col grow justify-between bg-[linear-gradient(rgba(26,54,45,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(26,54,45,0.05)_1px,transparent_1px)] bg-[size:20px_20px]">
                                    <div className="mb-6 z-10">
                                        <div className="w-12 h-[3px] bg-[#DDA76A] mb-4 group-hover:w-full transition-all duration-700 ease-out"></div>
                                        <p className="text-[#1A362D]/70 font-medium text-sm lg:text-base leading-relaxed">{cat.desc}</p>
                                    </div>

                                    <div className="mt-auto flex justify-end relative z-10">
                                        <div className="w-10 h-10 border-2 border-[#1A362D] flex items-center justify-center text-[#1A362D] group-hover:bg-[#D15C42] group-hover:text-[#F5F2EA] group-hover:border-[#D15C42] transition-colors duration-300 cursor-pointer">
                                            <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </div>
                                    </div>

                                    {/* Geometric hover accent */}
                                    <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-[#DDA76A] rounded-full mix-blend-multiply opacity-0 group-hover:opacity-30 transition-all duration-700 scale-0 group-hover:scale-100 ease-out"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Cinematic CTA banner */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="mt-24"
                >
                    <div className="relative border-[3px] border-[#DDA76A] p-2 bg-[#E8E2D2]">
                        <div className="relative bg-[#1A362D] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8 overflow-hidden">
                            <div className="absolute top-2 left-2 right-2 bottom-2 border border-[#E8E2D2]/20 pointer-events-none"></div>

                            <div className="relative z-10">
                                <h4 className="text-3xl font-serif text-[#F5F2EA] mb-3 tracking-wide">Ready to showcase?</h4>
                                <p className="text-[#DDA76A] font-bold text-xs tracking-widest uppercase">Join 150+ premium brands this season.</p>
                            </div>
                            <a href="#contact-us" className="relative z-10 bg-[#D15C42] text-[#F5F2EA] font-bold uppercase tracking-[0.2em] text-xs px-10 py-4 shadow-[4px_4px_0px_0px_rgba(232,226,210,0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 border-2 border-[#D15C42] hover:border-[#E8E2D2]">
                                Inquire Now
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
