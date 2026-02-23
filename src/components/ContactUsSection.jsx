"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function ContactUsSection() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section
            id="contact-us"
            className="relative w-full py-32 bg-[#E8E2D2] overflow-hidden"
        >
            {/* Retro Texture */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.25] mix-blend-multiply bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjxmaWx0ZXIgaWQ9J24nPjxmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScwLjknIG51bU9jdGF2ZXM9JzMnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjbiknIG9wYWNpdHY9JzAuMScvPjwvc3ZnPg==')]"></div>

            {/* Abstract Architectural Image Shape (Hidden on Mobile) */}
            <div className="hidden lg:block absolute top-0 right-0 w-[60%] h-[120%] bg-[#1A362D] rounded-l-full shadow-[-40px_0px_0px_0px_rgba(209,92,66,0.2)] z-0 mix-blend-multiply opacity-[0.95] overflow-hidden">
                <Image
                    src="https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Premium architectural detail"
                    fill
                    className="object-cover opacity-60 mix-blend-luminosity sepia-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1A362D]"></div>
            </div>

            {/* Muted background shapes */}
            <div className="absolute bottom-[20%] left-[10%] w-64 h-64 border-[4px] border-[#DDA76A] rounded-full z-0 opacity-40"></div>

            <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Left Typography Side */}
                    <motion.div
                        className="lg:col-span-5 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <div className="flex items-center mb-4 sm:mb-6 space-x-3 sm:space-x-4">
                            <span className="w-6 sm:w-8 h-[2px] sm:h-[3px] bg-[#D15C42]"></span>
                            <h2 className="text-[#D15C42] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs">RSVP & Inquiries</h2>
                        </div>

                        <h3 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#1A362D] mb-6 sm:mb-8 tracking-tighter leading-[1] relative inline-block">
                            Reserve <br />
                            <span className="italic text-[#DDA76A]">Your Place.</span>
                        </h3>

                        <p className="text-[#1A362D]/80 font-medium mb-10 sm:mb-16 text-base sm:text-lg max-w-md leading-relaxed">
                            Participation is strictly curated. Submit your brand details below to begin the selection process. Allow 48 hours for our curation committee to review.
                        </p>

                        {/* Retro Contact Details list */}
                        <div className="space-y-10 border-l-[3px] border-[#1A362D] pl-8">
                            <motion.div
                                className="group relative"
                                whileHover={{ x: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <h4 className="text-xs font-bold text-[#D15C42] uppercase tracking-[0.2em] mb-2">Direct Line</h4>
                                <a href="tel:+919876543210" className="font-serif text-3xl text-[#1A362D] group-hover:text-[#DDA76A] transition-colors cursor-pointer">- 98765 43210</a>
                            </motion.div>

                            <motion.div
                                className="group relative"
                                whileHover={{ x: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <h4 className="text-xs font-bold text-[#D15C42] uppercase tracking-[0.2em] mb-2">Concierge Email</h4>
                                <a href="mailto:hello@ecofairpune.com" className="font-serif text-3xl text-[#1A362D] group-hover:text-[#DDA76A] transition-colors cursor-pointer">- hello@eco.com</a>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Retro Form Side */}
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <div
                            className="bg-[#F5F2EA] border-[3px] sm:border-[4px] border-[#1A362D] p-6 sm:p-8 md:p-14 relative overflow-hidden group/form shadow-[8px_8px_0px_0px_rgba(209,92,66,1)] sm:shadow-[16px_16px_0px_0px_rgba(209,92,66,1)]"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {/* Decorative Vintage Corners inside form */}
                            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-3 sm:w-4 h-3 sm:h-4 border-t-[2px] sm:border-t-[3px] border-l-[2px] sm:border-l-[3px] border-[#1A362D]/30"></div>
                            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-3 sm:w-4 h-3 sm:h-4 border-t-[2px] sm:border-t-[3px] border-r-[2px] sm:border-r-[3px] border-[#1A362D]/30"></div>
                            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-3 sm:w-4 h-3 sm:h-4 border-b-[2px] sm:border-b-[3px] border-l-[2px] sm:border-l-[3px] border-[#1A362D]/30"></div>
                            <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-3 sm:w-4 h-3 sm:h-4 border-b-[2px] sm:border-b-[3px] border-r-[2px] sm:border-r-[3px] border-[#1A362D]/30"></div>

                            <div className="relative z-10 w-full">
                                <h4 className="font-serif text-3xl sm:text-4xl text-[#1A362D] mb-8 sm:mb-12 border-b-[2px] sm:border-b-[3px] border-[#1A362D] pb-3 sm:pb-4 inline-block tracking-tight">
                                    Brand <span className="italic">Application</span>
                                </h4>

                                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>

                                    <div className="relative z-0 w-full group">
                                        <input
                                            type="text"
                                            className="block py-4 px-0 w-full font-serif text-xl text-[#1A362D] bg-transparent border-0 border-b-[3px] border-[#1A362D] appearance-none focus:outline-none focus:ring-0 focus:border-[#D15C42] peer transition-colors placeholder:text-transparent"
                                            placeholder=" "
                                            required
                                        />
                                        <label className="absolute text-sm font-bold tracking-[0.2em] uppercase text-[#1A362D]/60 duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D15C42] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-8">
                                            Brand Name
                                        </label>
                                    </div>

                                    <div className="relative z-0 w-full group">
                                        <input
                                            type="text"
                                            className="block py-4 px-0 w-full font-serif text-xl text-[#1A362D] bg-transparent border-0 border-b-[3px] border-[#1A362D] appearance-none focus:outline-none focus:ring-0 focus:border-[#D15C42] peer transition-colors placeholder:text-transparent"
                                            placeholder=" "
                                            required
                                        />
                                        <label className="absolute text-sm font-bold tracking-[0.2em] uppercase text-[#1A362D]/60 duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D15C42] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-8">
                                            Representative
                                        </label>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="relative z-0 w-full group">
                                            <input
                                                type="tel"
                                                className="block py-4 px-0 w-full font-serif text-xl text-[#1A362D] bg-transparent border-0 border-b-[3px] border-[#1A362D] appearance-none focus:outline-none focus:ring-0 focus:border-[#D15C42] peer transition-colors"
                                                placeholder=" "
                                                required
                                            />
                                            <label className="absolute text-sm font-bold tracking-[0.2em] uppercase text-[#1A362D]/60 duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D15C42] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-8">
                                                Contact Details
                                            </label>
                                        </div>

                                        <div className="relative z-0 w-full group">
                                            <select className="block py-4 px-0 w-full font-serif text-xl text-[#1A362D] bg-transparent border-0 border-b-[3px] border-[#1A362D] appearance-none focus:outline-none focus:ring-0 focus:border-[#D15C42] peer transition-colors cursor-pointer rounded-none">
                                                <option className="bg-[#E8E2D2] text-[#1A362D]" value="" disabled selected>Select Segment *</option>
                                                <option className="bg-[#E8E2D2]" value="couture">Couture</option>
                                                <option className="bg-[#E8E2D2]" value="jewelry">Fine Jewelry</option>
                                                <option className="bg-[#E8E2D2]" value="accessories">Accessories</option>
                                                <option className="bg-[#E8E2D2]" value="other">Lifestyle</option>
                                            </select>
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#1A362D]">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8">
                                        <motion.button
                                            className="relative w-full h-16 bg-[#1A362D] border-[3px] border-[#1A362D] overflow-hidden group/btn shadow-[6px_6px_0px_0px_rgba(209,92,66,1)] hover:shadow-none hover:translate-y-1.5 hover:translate-x-1.5 transition-all duration-200 cursor-pointer"
                                        >
                                            <div className="absolute inset-0 bg-[#DDA76A] transform scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-500 ease-out"></div>
                                            <span className="relative z-10 flex items-center justify-center text-[#E8E2D2] font-bold uppercase tracking-[0.3em] text-sm group-hover/btn:text-[#1A362D] transition-colors duration-300">
                                                Submit Form
                                                <motion.svg
                                                    className="w-4 h-4 ml-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    animate={{ x: isHovered ? [0, 5, 0] : 0 }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                </motion.svg>
                                            </span>
                                        </motion.button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
