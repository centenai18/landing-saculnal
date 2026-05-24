"use client";

import { motion } from "framer-motion";
import { PhoneCall, Navigation, KeyRound } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: PhoneCall,
    title: "Llamás o escribís",
    desc: "Contame el problema por teléfono o WhatsApp. Te paso un presupuesto estimado al toque.",
  },
  {
    n: "02",
    icon: Navigation,
    title: "Voy a tu domicilio",
    desc: "Llego a tu casa en 15–30 minutos en toda Zona Sur. Con todas las herramientas.",
  },
  {
    n: "03",
    icon: KeyRound,
    title: "Resolvemos en el momento",
    desc: "Apertura, reparación o cambio. Te explico todo y cobro lo que te dije, sin sorpresas.",
  },
];

export default function Proceso() {
  return (
    <section
      id="proceso"
      className="relative py-24 md:py-32 border-t border-bg-line"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="pill">CÓMO TRABAJO</div>
          <h2 className="mt-5 font-display text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
            Tres pasos. <span className="red-gradient">Sin vueltas.</span>
          </h2>
          <p className="mt-4 text-ink-soft">
            Un proceso simple para que sepas exactamente qué pasa desde que me
            llamás hasta que tu puerta vuelve a funcionar.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-4 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-red/40 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative card card-glow p-7"
            >
              <div className="flex items-center justify-between">
                <div className="relative w-12 h-12 rounded-2xl bg-red/10 border border-red/30 grid place-items-center text-red">
                  <s.icon className="w-5 h-5" />
                </div>
                <div className="font-display text-5xl font-semibold text-ink-faint">
                  {s.n}
                </div>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
