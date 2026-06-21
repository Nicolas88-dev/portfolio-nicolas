"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/PortfolioData";
import PortfolioCard from "@/components/layout/PortfolioCard";
import PortfolioModal from "@/components/layout/PortfolioModal";

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-[600px]"
      id="portfolio"
    >
      <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-bold uppercase">
        Portfolio
      </span>

      <h1 className="mt-8 text-3xl font-bold text-black md:text-5xl">
        Quelques projets sur lesquels j&apos;ai travaillé
      </h1>

      <p className="mt-6 max-w-4xl text-xl text-black/70">
        Découvrez quelques projets sur lesquels j&apos;ai eu le plaisir de
        travailler. Création de sites internet, identité visuelle ou
        communication digitale : chaque réalisation témoigne de ma passion pour
        le numérique et de mon envie de créer des expériences à la fois
        esthétiques et efficaces.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 mb-5">
        {projects.map((project) => (
          <PortfolioCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      <PortfolioModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.section>
  );
}