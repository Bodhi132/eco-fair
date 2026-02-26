"use client";

import { motion } from "framer-motion";

const reasons = [
    {
        title: "Curated Audience",
        desc: "Engage with 1000+ pre-qualified HNIs and conscious luxury consumers actively seeking premium ethical alternatives."
    },
    {
        title: "Exclusive Positioning",
        desc: "Exhibit alongside a handpicked selection of pioneering brands, ensuring your collection commands attention in an uncrowded environment."
    },
    {
        title: "High-Intent Buyers",
        desc: "Our attendees are not merely browsing; they are decisive industry leaders, connoisseurs, and early adopters of sustainable luxury."
    },
    {
        title: "Strategic Visibility",
        desc: "Benefit from our rigorous PR strategy, influencer collaborations, and elite marketing campaigns explicitly targeting high-net-worth demographics."
    },
    {
        title: "Sustainable Network",
        desc: "Immerse your brand in an influential ecosystem of advocates, founders, and global pioneers shaping the future of conscious fashion."
    },
    {
        title: "Unparalleled ROI",
        desc: "Strictly limited stall availability eradicates market noise, guaranteeing maximum impact, networking, and returns for your brand story."
    }
];

export default function WhyExhibitSection() {
    return (
        <section
            id="why-exhibit"
            className="relative w-full py-32 bg-[#050505] overflow-hidden border-t border-b border-[#2A2A2A]"
        >
            {/* Subtle background glow effect to make it feel premium */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#C19B6C] opacity-[0.02] blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <div className="flex items-center mb-6 space-x-4">
                            <span className="w-12 h-[1px] bg-[#C19B6C]"></span>
                            <span className="text-[#C19B6C] font-medium tracking-[0.3em] text-[10px] sm:text-xs uppercase">
                                Partnership value
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#FAFAFA] tracking-tight leading-[1.1]">
                            The Exhibition <br />
                            <span className="italic font-light text-[#555555]">Advantage.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                        className="max-w-md"
                    >
                        <p className="text-[#D1D1D1] font-light text-sm lg:text-base leading-relaxed border-l border-[#2A2A2A] pl-6 py-2">
                            Partnering with Eco Fair guarantees unparalleled market placement. We engineer bespoke environments where discerning buyers meet extraordinary architectural precision in brand curation.
                        </p>
                    </motion.div>
                </div>

                {/* Highly Designed Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {reasons.map((reason, idx) => (
                        <motion.div
                            key={idx}
                            className="group relative bg-[#0A0A0A] border border-[#2A2A2A] p-8 md:p-10 overflow-hidden cursor-default transition-transform duration-[1s] hover:-translate-y-2"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1, delay: idx * 0.15, ease: [0.25, 1, 0.5, 1] }}
                        >
                            {/* Animated borders on hover */}
                            <div className="absolute top-0 left-0 w-0 h-[1px] bg-[#C19B6C] group-hover:w-full transition-all duration-700 ease-[0.25,1,0.5,1]"></div>
                            <div className="absolute bottom-0 right-0 w-0 h-[1px] bg-[#C19B6C] group-hover:w-full transition-all duration-700 ease-[0.25,1,0.5,1]"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-12 flex justify-between items-start">
                                    <span className="text-4xl font-serif italic font-light text-[#2A2A2A] group-hover:text-[#FAFAFA] transition-colors duration-700">
                                        0{idx + 1}
                                    </span>
                                    {/* Minimalist dot indicator */}
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#2A2A2A] group-hover:bg-[#C19B6C] transition-colors duration-700 mt-3"></div>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="text-2xl font-serif text-[#FAFAFA] mb-4 group-hover:text-[#C19B6C] transition-colors duration-700 tracking-tight">
                                        {reason.title}
                                    </h3>
                                    <p className="text-[#D1D1D1]/70 group-hover:text-[#D1D1D1] font-light leading-relaxed text-sm transition-colors duration-700">
                                        {reason.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Hover background gradient shift */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#C19B6C]/0 to-[#C19B6C]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Editorial Bottom Metrics Bar */}
                <motion.div
                    className="mt-32 relative"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
                >
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 pt-20 pb-10 gap-16 md:gap-0">
                        {[
                            { val: "27", label: "Selected Exhibitors", sub: "Curated Brands" },
                            { val: "10k+", label: "Sq. Ft. Venue", sub: "Premium Space" },
                            { val: "50+", label: "Media Partners", sub: "Global Reach" },
                        ].map((metric, i) => (
                            <motion.div
                                key={i}
                                className={`flex flex-col items-center justify-center relative group ${i !== 2 ? 'md:border-r border-[#2A2A2A]' : ''}`}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="text-6xl md:text-7xl lg:text-[6rem] font-serif text-[#FAFAFA] mb-6 tracking-tighter mix-blend-difference group-hover:text-[#C19B6C] transition-colors duration-700">
                                    {metric.val}
                                </div>
                                <div className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#FAFAFA] font-medium mb-3">
                                    {metric.label}
                                </div>
                                <div className="text-sm text-[#555555] font-serif italic text-center px-4">
                                    {metric.sub}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

