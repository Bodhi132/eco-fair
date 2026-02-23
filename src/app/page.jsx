"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import BrandCategoriesSection from "@/components/BrandCategoriesSection";
import VisitorProfileSection from "@/components/VisitorProfileSection";
import WhyExhibitSection from "@/components/WhyExhibitSection";
import ExhibitionLayoutSection from "@/components/ExhibitionLayoutSection";
import ContactUsSection from "@/components/ContactUsSection";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function EcoFairPage() {
    const [scrolled, setScrolled] = useState(false);

    // Smooth scrolling implementation and Navbar background logic
    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth",
                });
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => link.addEventListener("click", handleScroll));

        const checkScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", checkScroll);

        return () => {
            links.forEach((link) => link.removeEventListener("click", handleScroll));
            window.removeEventListener("scroll", checkScroll);
        };
    }, []);

    return (
        <main className="min-h-screen bg-[#E8E2D2] font-sans text-[#1A362D] selection:bg-[#D15C42] selection:text-white">

            {/* Premium Retro Sticky Header */}
            <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? 'bg-[#F5F2EA]/95 backdrop-blur-md border-b-2 border-[#1A362D] py-6 shadow-[0px_4px_0px_0px_rgba(26,54,45,1)]' : 'bg-transparent py-6'}`}>
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Empty div to push the button to the right using flex-between */}
                    <div></div>

                    <div>
                        <a href="#contact-us" className="px-6 py-2 sm:px-8 sm:py-3 border-2 border-[#1A362D] text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-widest font-bold hover:bg-[#1A362D] hover:text-[#F5F2EA] transition-colors shadow-[4px_4px_0px_0px_rgba(209,92,66,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-[#F5F2EA]">
                            Join Waitlist
                        </a>
                    </div>
                </div>
            </header>

            <HeroSection />
            <IntroductionSection />
            <BrandCategoriesSection />
            <VisitorProfileSection />
            <WhyExhibitSection />
            <ExhibitionLayoutSection />
            <ContactUsSection />

            {/* Premium Retro Footer */}
            <footer className="bg-[#1A362D] pt-24 pb-12 px-6 border-t-4 border-[#DDA76A] relative overflow-hidden">

                {/* Abstract footprint texture */}
                <div className="absolute inset-0 z-0 opacity-10 mix-blend-color-burn bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjxmaWx0ZXIgaWQ9J24nPjxmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScwLjknIG51bU9jdGF2ZXM9JzMnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjbiknIG9wYWNpdHY9JzAuMScvPjwvc3ZnPg==')]"></div>

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Top Footer Section with Pexels Image */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 border-b-2 border-[#2A4D42] pb-16">
                        <div className="relative h-[300px] w-full lg:w-3/4 rounded-t-full rounded-bl-full overflow-hidden border-4 border-[#E8E2D2] shadow-[12px_12px_0px_0px_rgba(209,92,66,1)]">
                            <div className="absolute inset-0 bg-[#1A362D] mix-blend-multiply opacity-20 z-10 hover:opacity-0 transition-opacity duration-700"></div>
                            <Image
                                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Premium menswear fashion"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        <div>
                            <h4 className="font-serif text-5xl md:text-6xl text-[#F5F2EA] tracking-tighter mb-6">
                                Experience The <br /><span className="italic text-[#DDA76A]">Exception.</span>
                            </h4>
                            <p className="text-[#E8E2D2]/70 font-medium mb-8 max-w-sm">
                                Curation is our foundation. Only the most ambitious, sustainable, and high-quality brands make the cut.
                            </p>
                            <a href="#contact-us" className="inline-block border-b-2 border-[#D15C42] text-[#E8E2D2] font-bold uppercase tracking-widest pb-1 hover:text-[#D15C42] transition-colors cursor-pointer">
                                Submit Portfolio
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 border border-[#E8E2D2] flex items-center justify-center bg-[#DDA76A] mr-3">
                                    <span className="font-serif font-black text-[#1A362D] text-sm">E</span>
                                </div>
                                <div className="text-2xl font-serif font-bold tracking-tighter text-[#F5F2EA]">
                                    ECO <span className="italic font-light text-[#D15C42]">FAIR</span>
                                </div>
                            </div>
                            <p className="text-[#E8E2D2]/60 font-medium text-sm">Elite Lifestyle Exhibition. Edition 1.0.</p>
                        </div>

                        <div className="flex space-x-4">
                            {['Ig', 'Fb', 'Li', 'X'].map((social, i) => (
                                <div key={social} className="w-12 h-12 border-2 border-[#2A4D42] rounded-full flex items-center justify-center text-[#E8E2D2] font-serif font-bold hover:bg-[#D15C42] hover:border-[#D15C42] hover:text-white transition-colors cursor-pointer shadow-[2px_2px_0px_0px_rgba(209,92,66,0.5)]">
                                    {social}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center text-xs uppercase tracking-[0.2em] text-[#2A4D42] font-bold">
                        &copy; {new Date().getFullYear()} Eco Fair Pune. All Rights Reserved.
                    </div>

                </div>
            </footer>
        </main>
    );
}
