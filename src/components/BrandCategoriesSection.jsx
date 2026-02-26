"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
    {
        name: "Ethical Apparel",
        desc: "Discover sustainable fabrics, zero-waste patterns, and contemporary silhouettes that redefine modern luxury without compromise.",
        image: "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    },
    {
        name: "Fine Jewellery",
        desc: "Explore masterfully crafted pieces featuring ethically sourced precious stones and recycled metals, designed for the conscious collector.",
        image: "https://images.pexels.com/photos/5690403/pexels-photo-5690403.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    },
    {
        name: "Bespoke Accessories",
        desc: "Elevate your ensemble with handcrafted leather alternatives, artisan bags, and curated statement pieces built for longevity.",
        image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
    },
];

export default function BrandCategoriesSection() {
    return (
        <section
            id="brand-categories"
            className="relative w-full py-32 bg-[#0A0A0A] overflow-hidden"
        >
            <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                >
                    <div className="w-full">
                        <span className="text-[#C19B6C] font-medium tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-6 flex items-center">
                            <span className="w-12 h-[1px] bg-[#C19B6C] mr-4"></span>
                            Exhibiting Sectors
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#FAFAFA] tracking-tight leading-[1.1]">
                            Curated <br className="hidden sm:block" />
                            <span className="italic font-light text-[#555555]">Ecosystem</span>
                        </h2>
                    </div>
                    <p className="text-[#D1D1D1] font-light w-full max-w-md text-sm lg:text-base leading-relaxed mt-4 md:mt-0">
                        A meticulously selected portfolio of brands dedicated to pushing the boundaries of ethical luxury, spanning from everyday apparel to haute couture accessories.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-y-0 md:gap-x-8 lg:gap-x-12">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1.2, delay: idx * 0.2, ease: [0.25, 1, 0.5, 1] }}
                            className="group relative flex flex-col h-full cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-[3/4] overflow-hidden mb-8 bg-[#111111]">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-[0.25,1,0.5,1] grayscale-[30%] group-hover:grayscale-0"
                                />
                                {/* Subtle inner border on the image */}
                                <div className="absolute inset-4 border border-white/10 pointer-events-none z-10"></div>

                                {/* Top right index number floating within image frame */}
                                <div className="absolute top-8 right-8 z-20 overflow-hidden">
                                    <span className="block text-[#FAFAFA]/70 font-light text-sm tracking-widest transform translate-y-0 group-hover:-translate-y-full transition-transform duration-500">0{idx + 1}</span>
                                    <span className="block absolute text-[#C19B6C] font-medium text-sm tracking-widest transform translate-y-full group-hover:translate-y-[-100%] top-0 transition-transform duration-500">0{idx + 1}</span>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-4 border-b border-[#2A2A2A] pb-6">
                                    <h3 className="text-2xl lg:text-3xl font-serif text-[#FAFAFA] tracking-tight group-hover:text-[#C19B6C] transition-colors duration-700">
                                        {cat.name}
                                    </h3>
                                    <div className="w-8 h-8 rounded-full border border-transparent group-hover:border-[#C19B6C]/30 flex items-center justify-center transition-colors duration-700">
                                        <svg className="w-4 h-4 text-[#555555] group-hover:text-[#C19B6C] transform rotate-0 group-hover:rotate-45 transition-all duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </div>
                                </div>

                                <p className="text-[#D1D1D1]/80 font-light text-sm lg:text-base leading-relaxed mt-2">
                                    {cat.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Elegant CTA banner */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
                    className="mt-32 border-t border-[#2A2A2A] pt-16"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
                        <div>
                            <h4 className="text-2xl sm:text-3xl font-serif text-[#FAFAFA] mb-2 tracking-tight">Ready to join the collection?</h4>
                            <p className="text-[#555555] font-light text-[10px] sm:text-xs tracking-widest uppercase">Exhibit alongside 150+ premium pioneers.</p>
                        </div>
                        <a href="#contact-us" className="px-8 py-4 bg-transparent text-[#FAFAFA] text-[10px] sm:text-xs uppercase tracking-[0.2em] border border-[#2A2A2A] hover:border-[#C19B6C] hover:text-[#C19B6C] transition-all duration-700">
                            Submit Portfolio
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
