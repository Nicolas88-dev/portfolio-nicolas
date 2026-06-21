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
        Créer des expériences web modernes et intuitives
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/70">
        Depuis plus de 10 ans, j’accompagne entreprises et entrepreneurs dans
        leurs projets digitaux. Fort d’une expérience en création de sites web,
        gestion de projets et formation, je conçois des interfaces modernes,
        performantes et pensées avant tout pour l’utilisateur. Curieux et
        passionné par les nouvelles technologies, je continue à me former chaque
        jour afin de proposer des solutions simples, efficaces et adaptées aux
        besoins de chaque projet.
      </p>

      <div className="mt-10 flex flex-col gap-5 md:flex-row md:gap-20">
        <div className="flex flex-col">
          <h2 className="text-5xl font-black text-[#55E6A5]">10+</h2>
          <h3 className="text-xl font-bold uppercase text-black">
            années d&apos;expérience
          </h3>
        </div>

        <div className="flex flex-col">
          <h2 className="text-5xl font-black text-[#55E6A5]">100+</h2>
          <h3 className="text-xl font-bold uppercase text-black">projets complétés</h3>
        </div>
      </div>

      <div className="mt-16 space-y-16">
        {skills.map((group) => (
          <div key={group.category}>
            <h2 className="mb-10 text-3xl font-bold text-black">{group.category}</h2>

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
