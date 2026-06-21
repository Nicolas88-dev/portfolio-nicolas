"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <motion.section
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-white px-4 py-1 "
    >
      <span className="rounded-full bg-gray-100 px-4 py-2 text-xs font-bold uppercase text-black">
        Contact
      </span>

      <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-5xl">
        Entrons en contact!
      </h1>

      <form className="mt-14 max-w-5xl">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
          <input
            type="text"
            placeholder="Votre Nom*"
            className="border-b border-gray-200 bg-transparent pb-5 text-base font-medium text-black outline-none placeholder:text-black/70 focus:border-black"
          />

          <input
            type="email"
            placeholder="Votre Email*"
            className="border-b border-gray-200 bg-transparent pb-5 text-base font-medium text-black outline-none placeholder:text-black/70 focus:border-black"
          />

          <input
            type="tel"
            placeholder="Your Téléphone*"
            className="border-b border-gray-200 bg-transparent pb-5 text-base font-medium text-black outline-none placeholder:text-black/70 focus:border-black"
          />

          <input
            type="text"
            placeholder="Suject*"
            className="border-b border-gray-200 bg-transparent pb-5 text-base font-medium text-black outline-none placeholder:text-black/70 focus:border-black"
          />
        </div>

        <textarea
          placeholder="dites m'en plus sur votre demande*"
          rows="4"
          className="mt-12 w-full resize-none border-b border-gray-200 bg-transparent pb-8 text-base font-medium text-black outline-none placeholder:text-black/70 focus:border-black"
        />

        <button
          type="submit"
          className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-emerald-400 px-8 py-5 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-emerald-300"
        >
          <Send size={24} />
          Envoyer
        </button>
      </form>

      <div className="mt-20">
        <h2 className="text-3xl font-bold tracking-tight text-black md:text-5xl">
          Mes coordonnées
        </h2>

        <div className="mt-8 space-y-5 text-black/70">
          <a
            href="tel:0652969538"
            className="flex items-center gap-4 text-black/70 transition hover:text-emerald-400"
          >
            <Phone className="text-emerald-400" size={22} />
            <span>06 52 96 95 38</span>
          </a>

          <a
            href="mailto:nicolas.lestrez@free.fr"
            className="flex items-center gap-4"
          >
            <Mail className="text-emerald-400" size={22} />
            <span>nicolas.lestrez@free.fr</span>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=5+rue+de+la+Moxatte,+88150+Thaon-les-Vosges"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-black/70 transition hover:text-emerald-400"
          >
            <MapPin className="text-emerald-400" size={22} />
            <span>5 rue de la Moxatte, 88150 Thaon-les-Vosges</span>
          </a>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
          <iframe
            title="Localisation Studio NL"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.904464224729!2d6.436429676875962!3d48.25373404306673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479375714b0c72cd%3A0x97ddca0b43521c47!2s5%20Rue%20de%20la%20Moxatte%2C%2088150%20Thaon-les-Vosges!5e1!3m2!1sfr!2sfr!4v1781874303849!5m2!1sfr!2sfr"
            className="h-[340px] w-full"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="mt-5">
        <p>© Portfolio Nicolas 2026. Tous les droits réservés à Nicolas Lestrez.</p>
      </div>
    </motion.section>
  );
}
