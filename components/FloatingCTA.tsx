"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="fixed z-40 bottom-3 inset-x-3 md:inset-x-auto md:right-6 md:bottom-6 flex md:flex-col gap-2 md:gap-3"
    >
      <a
        href={PHONE_TEL}
        aria-label="Llamar"
        className="flex-1 md:flex-none md:w-14 md:h-14 h-14 inline-flex items-center justify-center gap-2 rounded-full bg-red hover:bg-red-glow text-white font-semibold shadow-glow transition"
      >
        <Phone className="w-5 h-5" />
        <span className="md:hidden">Llamar ahora</span>
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="flex-1 md:flex-none md:w-14 md:h-14 h-14 inline-flex items-center justify-center gap-2 rounded-full bg-bg-card border border-bg-line text-ink hover:border-red transition"
      >
        <MessageCircle className="w-5 h-5 text-ink" />
        <span className="md:hidden">WhatsApp directo</span>
      </a>
    </motion.div>
  );
}
