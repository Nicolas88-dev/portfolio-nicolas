"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name")?.trim(),
      email: formData.get("email")?.trim(),
      phone: formData.get("phone")?.trim(),
      subject: formData.get("subject")?.trim(),
      message: formData.get("message")?.trim(),
      website: formData.get("website"),
    };

    const phoneRegex =
      /^(?:(?:\+33|0033)[1-9](?:[\s.-]?\d{2}){4}|0[1-9](?:[\s.-]?\d{2}){4})$/;

    if (!phoneRegex.test(data.phone)) {
      setStatus("phone-error");
      return;
    }

    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <motion.section
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-white px-4 py-1"
    >
      <span className="rounded-full bg-gray-100 px-4 py-2 text-xs font-bold uppercase text-black">
        Contact
      </span>

      <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-5xl">
        Entrons en contact !
      </h1>

      <form onSubmit={handleSubmit} className="mt-14 max-w-5xl">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
          <input
            name="name"
            type="text"
            placeholder="Votre nom*"
            required
            minLength={2}
            className="border-b border-gray-200 bg-transparent pb-5 text-base font-medium text-black outline-none placeholder:text-black/70 focus:border-black"
          />

          <input
            name="email"
            type="email"
            placeholder="Votre email*"
            required
            className="border-b border-gray-200 bg-transparent pb-5 text-base font-medium text-black outline-none placeholder:text-black/70 focus:border-black"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Votre téléphone*"
            required
            title="Merci d’indiquer un numéro de téléphone valide."
            className="border-b border-gray-200 bg-transparent pb-5 text-base font-medium text-black outline-none placeholder:text-black/70 focus:border-black"
          />

          <input
            name="subject"
            type="text"
            placeholder="Sujet*"
            required
            minLength={2}
            className="border-b border-gray-200 bg-transparent pb-5 text-base font-medium text-black outline-none placeholder:text-black/70 focus:border-black"
          />
        </div>

        <textarea
          name="message"
          placeholder="Dites-m'en plus sur votre demande*"
          rows="4"
          required
          minLength={10}
          className="mt-12 w-full resize-none border-b border-gray-200 bg-transparent pb-8 text-base font-medium text-black outline-none placeholder:text-black/70 focus:border-black"
        />

        <div className="hidden">
          <input type="text" name="website" autoComplete="off" tabIndex="-1" />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-emerald-400 px-8 py-5 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-emerald-300 disabled:opacity-60"
        >
          <Send size={24} />
          {isSending ? "Envoi..." : "Envoyer"}
        </button>

        {status === "success" && (
          <p className="mt-4 font-medium text-emerald-500">
            Votre message a bien été envoyé.
          </p>
        )}

        {status === "phone-error" && (
          <p className="mt-4 font-medium text-red-500">
            Merci d’indiquer un numéro de téléphone valide.
          </p>
        )}

        {status === "error" && (
          <p className="mt-4 font-medium text-red-500">
            Une erreur est survenue. Merci de réessayer.
          </p>
        )}
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
            <span>nicolas.lestrez@gmail.com</span>
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
        <p>
          © Portfolio Nicolas 2026. Tous les droits réservés à Nicolas Lestrez.
        </p>
      </div>
    </motion.section>
  );
}
