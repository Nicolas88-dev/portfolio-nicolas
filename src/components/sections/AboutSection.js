"use client";

import { motion } from "framer-motion";
import SkillCard from "../ui/SkillCard";
import { skills } from "@/data/SkillsData";

export default function AboutSection() {
  return (
    <motion.section
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-bold uppercase">
        À propos
      </span>

      <h1 className="mt-8 text-3xl font-bold text-black md:text-5xl">
        Créer des récits grâce au design et à l&apos;innovation
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/70">
        Depuis que j&apos;ai débuté mon parcours en tant que designer indépendant
        il y a près de 8 ans, j&apos;ai travaillé à distance pour des agences,
        apporté mon expertise à des start-ups et collaboré avec des personnes
        talentueuses afin de créer des produits numériques destinés aussi bien
        aux entreprises qu&apos;aux particuliers. Je suis d&apos;un naturel
        confiant et curieux, et je m&apos;efforce sans cesse d&apos;améliorer
        mes compétences, un défi de design à la fois.
      </p>

      <div className="mt-10 flex flex-col gap-5 md:flex-row md:gap-20">
        <div className="flex flex-col">
          <h2 className="text-5xl font-black text-[#55E6A5]">5+</h2>
          <h3 className="text-xl font-bold uppercase">
            années d&apos;expérience
          </h3>
        </div>

        <div className="flex flex-col">
          <h2 className="text-5xl font-black text-[#55E6A5]">120+</h2>
          <h3 className="text-xl font-bold uppercase">
            projets complétés
          </h3>
        </div>
      </div>

      <div className="mt-16 space-y-16">
        {skills.map((group) => (
          <div key={group.category}>
            <h2 className="mb-10 text-3xl font-bold">
              {group.category}
            </h2>

            <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
              {group.items.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}