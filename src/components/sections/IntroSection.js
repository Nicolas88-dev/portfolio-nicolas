"use client";

import { motion } from "framer-motion";
import { CloudDownload } from "lucide-react";
import ProjectsButton from "@/components/ui/ProjectsButton";

export default function IntroSection({ setActiveSection }) {
  return (
    <motion.section
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-[600px]"
    >
      <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-bold uppercase">
        Intro
      </span>

      <h1 className="mt-8 text-3xl md:text-5xl font-bold text-black leading-tight">
        Bonjour, je suis Nicolas Lestrez développeur web
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/70">
        Je suis un développeur web passionné qui s&apos;est donné pour mission
        de créer des expériences numériques agréables et intuitives. Fort
        d&apos;une solide maîtrise des principes de conception et d&apos;un sens
        aigu du détail, je me spécialise dans la création d&apos;interfaces
        conviviales qui captivent les utilisateurs et répondent à leurs besoins.
      </p>

      <a
        href="/cv/cv-nicolas-lestrez.pdf"
        download="CV-Nicolas-Lestrez.pdf"
        className="mt-8 flex w-64 items-center justify-center gap-3 rounded-xl bg-emerald-400 py-4 font-bold text-black transition-all duration-300 hover:rounded-none hover:border-2 hover:border-[#55E6A5] hover:bg-gray-100"
      >
        <CloudDownload size={20} />
        <span>Télécharger CV</span>
      </a>

      <ProjectsButton setActiveSection={setActiveSection} />
    </motion.section>
  );
}
