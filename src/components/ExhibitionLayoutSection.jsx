"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ExhibitionLayoutSection() {
    const [activeZone, setActiveZone] = useState(null);

    const zones = [
        { id: 1, title: "VIP & Haute Couture", desc: "Dedicated pavilions for high-ticket brand interactions.", x: "left-[25%]", y: "top-[30%]", color: "bg-[#1A362D]" },
        { id: 2, title: "Pret & Apparel", desc: "Showcases established and emerging national designers.", x: "left-[60%]", y: "top-[25%]", color: "bg-[#D15C42]" },
        { id: 3, title: "Experiential Lounge", desc: "Networking spaces and gourmet F&B zones for attendees.", x: "left-[45%]", y: "top-[70%]", color: "bg-[#DDA76A]" },
        { id: 4, title: "Lifestyle Avenue", desc: "Curated jewelry, decor, and wellness brands.", x: "left-[80%]", y: "top-[55%]", color: "bg-[#2A4D42]" }
    ];

    return (
        <section
            id="exhibition-layout"
            className="relative w-full py-20 bg-[#F5F2EA] overflow-hidden border-t-2 border-[#1A362D]"
        >
            {/* Retro noise overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.2] mix-blend-multiply bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjxmaWx0ZXIgaWQ9J24nPjxmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScwLjknIG51bU9jdGF2ZXM9JzMnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjbiknIG9wYWNpdHY9JzAuMScvPjwvc3ZnPg==')]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">

                    {/* Left Text logic */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="flex items-center mb-4 sm:mb-6 space-x-3 sm:space-x-4">
                                <span className="w-6 sm:w-8 h-[2px] bg-[#D15C42]"></span>
                                <h2 className="text-[#D15C42] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs">Venue & Flow</h2>
                            </div>
                            <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1A362D] mb-6 sm:mb-8 leading-[1.1] tracking-tight">
                                Strategic <br />
                                <span className="italic text-[#DDA76A]">Architecture.</span>
                            </h3>
                            <p className="text-base sm:text-lg text-[#1A362D]/80 leading-relaxed font-medium mb-10 sm:mb-12 max-w-lg">
                                Engineered for maximum footfall engagement. Our layout guarantees every exhibitor gets premium visibility, guiding attendees organically through distinct curated lifestyle zones.
                            </p>

                            <div className="space-y-4">
                                {zones.map((zone, idx) => (
                                    <motion.div
                                        key={zone.id}
                                        className={`flex items-start p-6 border-2 transition-all duration-300 cursor-pointer ${activeZone === zone.id ? 'bg-[#E8E2D2] border-[#1A362D] shadow-[6px_6px_0px_0px_rgba(209,92,66,1)] translate-x-2' : 'border-transparent hover:bg-[#E8E2D2]/50 hover:border-[#1A362D]/20'}`}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                                        onMouseEnter={() => setActiveZone(zone.id)}
                                        onMouseLeave={() => setActiveZone(null)}
                                    >
                                        <div className="mr-6 mt-1 flex-shrink-0">
                                            <div className={`w-12 h-12 flex items-center justify-center font-serif font-bold text-lg border-2 border-[#1A362D] transition-colors duration-300 ${activeZone === zone.id ? 'bg-[#1A362D] text-[#E8E2D2]' : 'bg-[#E8E2D2] text-[#1A362D]'}`}>
                                                0{zone.id}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className={`text-xl font-serif transition-colors ${activeZone === zone.id ? 'text-[#D15C42]' : 'text-[#1A362D]'}`}>{zone.title}</h4>
                                            <p className="text-[#1A362D]/70 font-medium mt-2 text-sm leading-relaxed">{zone.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                        </motion.div>
                    </div>

                    {/* Right Retro SVG / CSS Blueprint overlay mimicking the layout image */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 relative h-[350px] sm:h-[500px] lg:h-[600px] flex justify-center items-center overflow-visible mt-8 lg:mt-0 px-4 sm:px-0">

                        {/* Abstract Vintage Blueprint Container */}
                        <motion.div
                            className="relative w-full aspect-square max-w-[320px] sm:max-w-[400px] md:max-w-[500px] bg-[#E8E2D2] border-2 sm:border-4 border-[#1A362D] shadow-[8px_8px_0px_0px_rgba(26,54,45,1)] sm:shadow-[16px_16px_0px_0px_rgba(26,54,45,1)]"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Vintage Drafting Grid Overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(26,54,45,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(26,54,45,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                            {/* Structural abstract blocks representing booths / hotel floor plan layout */}
                            <div className="absolute inset-x-8 top-12 bottom-12 border-2 border-[#1A362D]/40"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-[#D15C42]/60 rounded-full bg-[#F5F2EA]/40 backdrop-blur-sm z-0"></div>

                            {/* Floor plan geometric shapes indicating stages/pavilions */}
                            <div className="absolute top-[20%] left-[20%] w-24 h-16 bg-[#1A362D]/10 border border-[#1A362D]"></div>
                            <div className="absolute top-[20%] right-[20%] w-32 h-20 bg-[#D15C42]/10 border border-[#D15C42] rotate-12"></div>
                            <div className="absolute bottom-[20%] left-[30%] right-[30%] h-16 bg-[#DDA76A]/20 border border-[#DDA76A]"></div>

                            {/* Interactive Hotspots */}
                            {zones.map((zone) => (
                                <div key={`hotspot-${zone.id}`} className={`absolute ${zone.x} ${zone.y} z-10 transition-all duration-500 -translate-x-1/2 -translate-y-1/2`}
                                    onMouseEnter={() => setActiveZone(zone.id)}
                                    onMouseLeave={() => setActiveZone(null)}
                                >
                                    {/* Outer radar pulse in retro styling */}
                                    <motion.div
                                        className={`absolute inset-0 rounded-full ${zone.color} mix-blend-multiply opacity-30`}
                                        animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: zone.id * 0.4 }}
                                    />

                                    {/* Inner retro dot */}
                                    <div className={`relative w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 sm:border-[3px] border-[#E8E2D2] shadow-[2px_2px_0px_0px_rgba(26,54,45,0.5)] sm:shadow-[4px_4px_0px_0px_rgba(26,54,45,0.5)] flex items-center justify-center transition-transform duration-300 ${activeZone === zone.id ? 'scale-125 ' + zone.color : 'scale-100 bg-[#1A362D]'}`}>
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#F5F2EA] rounded-full"></div>
                                    </div>

                                    {/* Tooltip on active */}
                                    {activeZone === zone.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1A362D] text-[#E8E2D2] text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-3 border-2 border-[#DDA76A] shadow-[4px_4px_0px_0px_rgba(209,92,66,1)] pointer-events-none z-50 transition-all"
                                        >
                                            {zone.title}
                                        </motion.div>
                                    )}
                                </div>
                            ))}

                            {/* Floorplan entrance markers */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 text-[#1A362D]/60 text-xs font-bold uppercase tracking-widest">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                                <span>Entrance</span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
