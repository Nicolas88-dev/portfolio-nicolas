"use client";
import ServiceCard from "../ui/ServiceCard";

import { motion } from "framer-motion";
import { service } from "@/data/ServicesData";

export default function ServicesSection() {
  return (
    <motion.section
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-bold uppercase">
        Mes services
      </span>

      <h1 className="mt-8 text-3xl md:text-5xl font-bold text-black mb-10">
        Donner vie à votre vision avec précision et passion
      </h1>

      <p className="text-xl text-black/70">
        De la conception au référencement, je mets mon savoir-faire au service
        de votre activité pour créer des expériences digitales modernes et
        efficaces.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 mb-10">
        {service.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </motion.section>
  );
}
