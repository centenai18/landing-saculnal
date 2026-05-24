"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

export default function CTAFinal() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 border-t border-bg-line">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative card card-glow overflow-hidden p-10 md:p-16 text-center"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-red/30 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

          <div className="relative">
            <div className="pill mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse-glow" />
              DISPONIBLE AHORA
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
              <span className="text-gradient">¿Necesitás un cerrajero</span>
              <br />
              <span className="red-gradient">ahora mismo?</span>
            </h2>
            <p className="mt-5 text-ink-soft max-w-xl mx-auto text-lg">
              Llamá o mandá WhatsApp. Te respondo en menos de 5 minutos.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={PHONE_TEL}
                className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-red hover:bg-red-glow text-white font-semibold transition shadow-glow"
              >
                <Phone className="w-5 h-5" />
                Llamar 11 3094-2292
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-bg-card border border-bg-line hover:border-ink-faint text-ink font-semibold transition"
              >
                <MessageCircle className="w-5 h-5" />
                Whatsapp
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-ink-dim">
              <span>· Urgencias 24hs</span>
              <span>· Zona Sur</span>
              <span>· 20% off jubilados/clientes files</span>
              <span>· Sin cobrarte de mas</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
