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
        <main className="min-h-screen bg-[#FAFAFA] font-sans text-[#0A0A0A] selection:bg-[#C19B6C] selection:text-white">

            {/* Premium Glass Header */}
            <header className={`fixed top-0 z-50 w-full transition-all duration-700 ${scrolled ? 'bg-[#FAFAFA]/90 backdrop-blur-xl border-b border-[#0A0A0A]/10 py-5 shadow-sm' : 'bg-transparent py-8'}`}>
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Empty div to push the button to the right using flex-between */}
                    <div></div>

                    <div>
                        <a href="#contact-us" className="px-6 py-2 sm:px-8 sm:py-3 border border-[#0A0A0A] text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-widest font-medium hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-all duration-500 cursor-pointer bg-transparent">
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

            {/* Premium Modern Footer */}
            <footer className="bg-[#0A0A0A] pt-32 pb-16 px-6 relative overflow-hidden">

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Top Footer Section with Pexels Image */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 border-b border-[#2A2A2A] pb-24">
                        <div className="relative h-[400px] w-full lg:w-3/4 rounded-full overflow-hidden">
                            <Image
                                src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Premium fashion exhibition"
                                fill
                                className="object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-[1.5s] ease-[0.25,1,0.5,1]"
                            />
                        </div>

                        <div>
                            <h4 className="font-serif text-5xl md:text-7xl text-[#FAFAFA] tracking-tight mb-8 leading-[1.1]">
                                Experience The <br /><span className="italic text-[#C19B6C] font-light">Exception.</span>
                            </h4>
                            <p className="text-[#D1D1D1] font-light mb-10 max-w-sm text-lg leading-relaxed">
                                Curation is our foundation. Only the most ambitious, sustainable, and high-quality brands make the cut.
                            </p>
                            <a href="#contact-us" className="inline-block border-b border-[#C19B6C] text-[#FAFAFA] text-sm uppercase tracking-[0.2em] pb-2 hover:text-[#C19B6C] transition-colors duration-500 cursor-pointer">
                                Submit Portfolio
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="text-3xl font-serif tracking-tight text-[#FAFAFA]">
                                    ECO <span className="italic font-light text-[#C19B6C]">FAIR</span>
                                </div>
                            </div>
                            <p className="text-[#D1D1D1] font-light text-sm">Elite Lifestyle Exhibition. Edition 1.0.</p>
                        </div>

                        <div className="flex space-x-6">
                            {['Instagram', 'Facebook', 'LinkedIn', 'Twitter'].map((social, i) => (
                                <div key={social} className="text-[#D1D1D1] text-sm uppercase tracking-widest hover:text-[#C19B6C] transition-colors duration-300 cursor-pointer">
                                    {social}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-20 text-center text-xs uppercase tracking-[0.2em] text-[#555555]">
                        &copy; {new Date().getFullYear()} Eco Fair. Uncompromising Luxury.
                    </div>

                </div>
            </footer>
        </main>
    );
}
