"use client";

import { useState } from "react";
import LeftIconNavigation from "./LeftIconNavigation";
import FixedProfileImage from "./FixedProfileImage";
import { motion } from "framer-motion";

import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactSection from "@/components/sections/ContactSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import IntroSection from "../sections/IntroSection";

export default function HomeContent() {
  const [activeSection, setActiveSection] = useState("intro");

  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center gap-8 px-4 py-8 lg:h-screen lg:flex-row lg:justify-center lg:gap-0 lg:px-8 lg:py-0">
      <div className="flex w-full flex-col items-center gap-8 lg:ml-32 lg:flex-row lg:justify-center lg:gap-0">
        <div className="order-1 lg:order-2">
          <FixedProfileImage setActiveSection={setActiveSection} />
        </div>

        <div className="order-2 lg:order-1">
          <LeftIconNavigation
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>

        <div className="order-3 relative w-full max-w-[780px] rounded-[2rem] bg-white/80 p-6 shadow-xl md:p-10 lg:-ml-10 lg:h-[720px] lg:p-14">
          <div className="max-h-[70vh] overflow-y-auto pr-2 lg:h-full lg:max-h-none lg:pr-6">
            {activeSection === "intro" && (
              <IntroSection setActiveSection={setActiveSection} />
            )}
            {activeSection === "about" && <AboutSection />}
            {activeSection === "services" && <ServicesSection />}
            {activeSection === "portfolio" && <PortfolioSection />}
            {activeSection === "contact" && <ContactSection />}
            {activeSection === "testimonial" && <TestimonialsSection />}
          </div>
        </div>
          
      </div>
    </div>
  );
}
