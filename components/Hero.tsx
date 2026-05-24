"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, Star } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

const reviews = [
  {
    name: "Giuliano Senno",
    meta: "Reseña de Google · Hace 3 meses",
    text: "Fui a hacer dos copias, ya de entrada la atención es buenisima, Ian es un crack. En 5 minutos me estaba yendo con las copias y el precio estoy seguro que de la zona es el mas barato. Ya tengo cerrajero de confianza sin dudas.",
  },
  {
    name: "Ile Ciappa",
    meta: "Reseña de Google · Hace 4 meses",
    text: "Ian fue muy atento. Respondió a mi llamado un sábado por la tarde. Le expliqué el motivo, lo comprendió, y fue a buscar las cerraduras y herramientas necesarias para resolver aquello que me preocupaba. Me aconsejó prudentemente. Se comprometió a finalizar el trabajo el lunes y cumplió.",
  },
  {
    name: "Ayelén Sosa",
    meta: "Local Guide · Hace 4 meses",
    text: "Excelente atención. Puntualidad y el arreglo quedo bárbaro. Cambiamos cerradura, arreglamos otra y soldaron las bisagras de una puerta que da a la calle. Con el paso del tiempo funciona bárbaro. Lo super recomiendo!",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">
        <div>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-5xl sm:text-6xl lg:text-[72px] leading-[0.98] tracking-tight font-semibold"
          >
            <span className="text-gradient">¿Te quedaste afuera</span>
            <br />
            <span className="text-gradient">de tu casa?</span>
            <br />
            <span className="red-gradient">Cerrajero 24hs.</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 text-lg text-ink-soft max-w-xl leading-relaxed"
          >
            Aperturas sin romper, cambio de cerraduras y urgencias en toda Zona
            Sur. Atención personal, respuesta rápida y precios económicos.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <motion.a
              href={PHONE_TEL}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="group relative inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-red text-white font-semibold shadow-glow overflow-hidden"
            >
              <span className="absolute inset-0 rounded-full bg-red animate-ping opacity-40 pointer-events-none" />
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
              <motion.span
                animate={{ rotate: [0, -12, 12, -8, 8, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  ease: "easeInOut",
                }}
                className="relative inline-flex"
              >
                <Phone className="w-4 h-4" />
              </motion.span>
              <span className="relative">Llamar ahora</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="group relative inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-bg-card border border-bg-line hover:border-red/50 text-ink font-semibold overflow-hidden"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-red/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
              <motion.span
                animate={{ y: [0, -2, 0, -1, 0] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="relative inline-flex"
              >
                <MessageCircle className="w-4 h-4 group-hover:text-red transition-colors" />
              </motion.span>
              <span className="relative">Mandar WhatsApp</span>
            </motion.a>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-10 grid grid-cols-3 gap-4 max-w-md"
          >
            {[
              ["13+", "años de oficio"],
              ["24/7", "atención real"],
              ["5.0", "rating vecinos"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-semibold text-ink">
                  {n}
                </div>
                <div className="text-xs text-ink-dim mt-1">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-red/15 via-transparent to-transparent blur-2xl pointer-events-none" />

          <div className="relative flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-red animate-ping opacity-75" />
                <span className="relative rounded-full bg-red w-2 h-2" />
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-ink-dim font-medium">
                Reseñas reales · Google
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-red text-red" />
                ))}
              </div>
              <span className="text-sm font-semibold text-ink">5.0</span>
            </div>
          </div>

          <div className="relative space-y-3">
            {reviews.map((r, i) => (
              <motion.figure
                key={r.name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.35 + i * 0.08 }}
                className="card p-5 hover:border-red/30 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-red/10 border border-red/30 text-red grid place-items-center text-xs font-semibold shrink-0">
                    {r.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-semibold text-sm truncate">
                        {r.name}
                      </div>
                      <div className="flex shrink-0">
                        {Array.from({ length: 5 }).map((_, k) => (
                          <Star
                            key={k}
                            className="w-3 h-3 fill-red text-red"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-[11px] text-ink-dim truncate">
                      {r.meta}
                    </div>
                  </div>
                </div>
                <blockquote className="mt-3 text-[13.5px] text-ink-soft leading-relaxed line-clamp-4">
                  “{r.text}”
                </blockquote>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
