"use client";

import { motion } from "framer-motion";
import {
  Key,
  KeyRound,
  DoorOpen,
  Home,
  Wrench,
  Store,
  ArrowUpRight,
} from "lucide-react";

const items = [
  {
    icon: Key,
    title: "Copias de llaves",
    desc: "Todo tipo de llaves: casas, autos, motos, candados, consorcios, doble paleta y yale.",
  },
  {
    icon: KeyRound,
    title: "Cambio de combinación / Creación de llave",
    desc: "¿Perdiste las llaves o querés cambiar la combinación? Te hago llaves nuevas y reconfiguro la cerradura.",
  },
  {
    icon: DoorOpen,
    title: "Apertura de puertas",
    desc: "Aperturas sin romper la puerta ni la cerradura. Técnica profesional, urgencias 24hs.",
  },
  {
    icon: Home,
    title: "Trabajo en domicilio",
    desc: "Instalación de cerraduras, pasadores, trabas y cerrojos en tu casa o local.",
  },
  {
    icon: Wrench,
    title: "Reparaciones",
    desc: "Reparación de cerraduras y pasadores. Diagnóstico claro antes de empezar el trabajo.",
  },
  {
    icon: Store,
    title: "Venta en mostrador",
    desc: "Cerraduras, cerrojos, pasadores, candados y candados de cadena. Asesoramiento honesto.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="relative py-24 md:py-32 border-t border-bg-line">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="pill">SERVICIOS</div>
            <h2 className="mt-5 font-display text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
              Nuestros <span className="red-gradient">servicios.</span>
            </h2>
          </motion.div>
          <p className="text-ink-soft max-w-md">
            Trabajos en local y a domicilio. Sin
            vueltas y con presupuesto claro antes de empezar.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative card overflow-hidden p-6 hover:border-red/40 transition"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-red/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-bg-panel border border-bg-line grid place-items-center text-red">
                  <it.icon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-ink-faint group-hover:text-red group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              </div>
              <h3 className="relative mt-6 font-display text-xl font-semibold tracking-tight">
                {it.title}
              </h3>
              <p className="relative mt-2 text-sm text-ink-soft leading-relaxed">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
