"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function ContactUsSection() {
    return (
        <section id="contact-us" className="w-full">

            {/* Form 1: Brand Application (Dark Theme) */}
            <div className="relative w-full py-32 bg-[#0A0A0A] overflow-hidden">
                <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                        {/* Left Typography Side */}
                        <motion.div
                            className="lg:col-span-5 relative lg:sticky lg:top-32"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <div className="flex items-center mb-8 space-x-4">
                                <span className="w-12 h-[1px] bg-[#C19B6C]"></span>
                                <h2 className="text-[#C19B6C] font-medium tracking-[0.3em] uppercase text-xs">Form 1</h2>
                            </div>

                            <h3 className="font-serif text-5xl sm:text-6xl text-[#FAFAFA] mb-8 tracking-tight leading-[1]">
                                Book Your <br />
                                <span className="italic font-light text-[#555555]">Stall.</span>
                            </h3>

                            <p className="text-[#D1D1D1] font-light mb-12 text-sm sm:text-base max-w-md leading-relaxed">
                                Join our curated ecosystem of premium ethical brands. Submit your brand details to begin the selection process for Eco Fair Edition 1.0.
                            </p>

                            {/* Minimalist Contact Info */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-[10px] text-[#555555] uppercase tracking-widest mb-1">Direct Line</h4>
                                    <a href="tel:+919876543210" className="font-serif text-xl sm:text-2xl text-[#FAFAFA] hover:text-[#C19B6C] transition-colors cursor-pointer">+91 98765 43210</a>
                                </div>

                                <div>
                                    <h4 className="text-[10px] text-[#555555] uppercase tracking-widest mb-1">Inquiries</h4>
                                    <a href="mailto:exhibit@ecofairpune.com" className="font-serif text-xl sm:text-2xl text-[#FAFAFA] hover:text-[#C19B6C] transition-colors cursor-pointer">exhibit@ecofairpune.com</a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Minimalist Form Side */}
                        <motion.div
                            className="lg:col-span-7 pt-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>

                                <div className="space-y-12 border-l border-[#2A2A2A] pl-8 sm:pl-12">
                                    <div className="relative z-0 w-full group">
                                        <input type="text" className="block py-4 px-0 w-full font-serif text-xl text-[#FAFAFA] bg-transparent border-0 border-b border-[#2A2A2A] appearance-none focus:outline-none focus:ring-0 focus:border-[#C19B6C] peer transition-colors placeholder:text-transparent" placeholder=" " required />
                                        <label className="absolute text-sm font-medium tracking-[0.2em] uppercase text-[#555555] duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#C19B6C] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-8">
                                            Your Name
                                        </label>
                                    </div>

                                    <div className="relative z-0 w-full group">
                                        <input type="text" className="block py-4 px-0 w-full font-serif text-xl text-[#FAFAFA] bg-transparent border-0 border-b border-[#2A2A2A] appearance-none focus:outline-none focus:ring-0 focus:border-[#C19B6C] peer transition-colors placeholder:text-transparent" placeholder=" " required />
                                        <label className="absolute text-sm font-medium tracking-[0.2em] uppercase text-[#555555] duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#C19B6C] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-8">
                                            Brand Name
                                        </label>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="relative z-0 w-full group">
                                            <select className="block py-4 px-0 w-full font-serif text-xl text-[#FAFAFA] bg-transparent border-0 border-b border-[#2A2A2A] appearance-none focus:outline-none focus:ring-0 focus:border-[#C19B6C] peer transition-colors cursor-pointer rounded-none">
                                                <option className="bg-[#111111] text-[#FAFAFA]" value="" disabled selected>Brand Category</option>
                                                <option className="bg-[#111111] text-[#FAFAFA]" value="clothing">Clothing</option>
                                                <option className="bg-[#111111] text-[#FAFAFA]" value="jewellery">Jewellery</option>
                                                <option className="bg-[#111111] text-[#FAFAFA]" value="accessories">Fashion Accessories</option>
                                            </select>
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#555555]">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <input type="text" className="block py-4 px-0 w-full font-serif text-xl text-[#FAFAFA] bg-transparent border-0 border-b border-[#2A2A2A] appearance-none focus:outline-none focus:ring-0 focus:border-[#C19B6C] peer transition-colors placeholder:text-transparent" placeholder=" " required />
                                            <label className="absolute text-sm font-medium tracking-[0.2em] uppercase text-[#555555] duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#C19B6C] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-8">
                                                Stall No (Pref.)
                                            </label>
                                        </div>
                                    </div>

                                    <div className="pt-8">
                                        <SubmitButton title="Submit Application" darkTheme={true} />
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Form 2: Guest Registry (Light Theme) */}
            <div className="relative w-full py-32 bg-[#FAFAFA] overflow-hidden border-t border-[#0A0A0A]/5">
                <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                        {/* Left Typography Side */}
                        <motion.div
                            className="lg:col-span-5 relative lg:sticky lg:top-32"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <div className="flex items-center mb-8 space-x-4">
                                <span className="w-12 h-[1px] bg-[#C19B6C]"></span>
                                <h2 className="text-[#C19B6C] font-medium tracking-[0.3em] uppercase text-xs">Form 2</h2>
                            </div>

                            <h3 className="font-serif text-5xl sm:text-6xl text-[#0A0A0A] mb-8 tracking-tight leading-[1]">
                                Register To <br />
                                <span className="italic font-light text-[#C19B6C]">Attend.</span>
                            </h3>

                            <p className="text-[#555555] font-light mb-12 text-sm sm:text-base max-w-md leading-relaxed">
                                Secure your invitation to Pune's premier lifestyle exhibition. Experience a meticulously curated selection of sustainable luxury.
                            </p>
                        </motion.div>

                        {/* Right Minimalist Form Side */}
                        <motion.div
                            className="lg:col-span-7 pt-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-12 border-l border-[#0A0A0A]/10 pl-8 sm:pl-12">
                                    <div className="relative z-0 w-full group">
                                        <input type="text" className="block py-4 px-0 w-full font-serif text-xl text-[#0A0A0A] bg-transparent border-0 border-b border-[#0A0A0A]/10 appearance-none focus:outline-none focus:ring-0 focus:border-[#C19B6C] peer transition-colors placeholder:text-transparent" placeholder=" " required />
                                        <label className="absolute text-sm font-medium tracking-[0.2em] uppercase text-[#555555] duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#C19B6C] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-8">
                                            Your Name
                                        </label>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="relative z-0 w-full group">
                                            <select className="block py-4 px-0 w-full font-serif text-xl text-[#0A0A0A] bg-transparent border-0 border-b border-[#0A0A0A]/10 appearance-none focus:outline-none focus:ring-0 focus:border-[#C19B6C] peer transition-colors cursor-pointer rounded-none">
                                                <option className="bg-[#FAFAFA] text-[#0A0A0A]" value="" disabled selected>Partner Profile</option>
                                                <option className="bg-[#FAFAFA] text-[#0A0A0A]" value="single">Single</option>
                                                <option className="bg-[#FAFAFA] text-[#0A0A0A]" value="couple">Couple</option>
                                                <option className="bg-[#FAFAFA] text-[#0A0A0A]" value="group">Group</option>
                                            </select>
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#555555]">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <select className="block py-4 px-0 w-full font-serif text-xl text-[#0A0A0A] bg-transparent border-0 border-b border-[#0A0A0A]/10 appearance-none focus:outline-none focus:ring-0 focus:border-[#C19B6C] peer transition-colors cursor-pointer rounded-none">
                                                <option className="bg-[#FAFAFA] text-[#0A0A0A]" value="" disabled selected>Favorite Buy</option>
                                                <option className="bg-[#FAFAFA] text-[#0A0A0A]" value="dresses">Designer Dresses</option>
                                                <option className="bg-[#FAFAFA] text-[#0A0A0A]" value="jewelry">Ethical Jewelery</option>
                                                <option className="bg-[#FAFAFA] text-[#0A0A0A]" value="accessories">Conscious Fashion Accessories</option>
                                            </select>
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#555555]">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative z-0 w-full group">
                                        <select className="block py-4 px-0 w-full font-serif text-xl text-[#0A0A0A] bg-transparent border-0 border-b border-[#0A0A0A]/10 appearance-none focus:outline-none focus:ring-0 focus:border-[#C19B6C] peer transition-colors cursor-pointer rounded-none">
                                            <option className="bg-[#FAFAFA] text-[#0A0A0A]" value="" disabled selected>Shopping Budget</option>
                                            <option className="bg-[#FAFAFA] text-[#0A0A0A]" value="below5k">Below 5000</option>
                                            <option className="bg-[#FAFAFA] text-[#0A0A0A]" value="5k_10k">5000 – 10,000</option>
                                            <option className="bg-[#FAFAFA] text-[#0A0A0A]" value="10k_15k">10,000 – 15,000</option>
                                            <option className="bg-[#FAFAFA] text-[#0A0A0A]" value="above15k">Above 15,000</option>
                                        </select>
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#555555]">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>

                                    <div className="pt-8">
                                        <SubmitButton title="Complete Registry" darkTheme={false} />
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    );
}

// Minimalist Submit Button Component
const SubmitButton = ({ title, darkTheme }) => {
    return (
        <button
            className={`group flex items-center space-x-4 pb-3 border-b border-transparent ${darkTheme ? 'hover:border-[#C19B6C]' : 'hover:border-[#C19B6C]'} transition-colors duration-500`}
        >
            <span className={`uppercase tracking-[0.2em] text-xs font-medium ${darkTheme ? 'text-[#FAFAFA] group-hover:text-[#C19B6C]' : 'text-[#0A0A0A] group-hover:text-[#C19B6C]'} transition-colors duration-500`}>
                {title}
            </span>
            <svg className={`w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ${darkTheme ? 'text-[#FAFAFA] group-hover:text-[#C19B6C]' : 'text-[#0A0A0A] group-hover:text-[#C19B6C]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
        </button>
    );
};
