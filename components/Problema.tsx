"use client";

import { motion } from "framer-motion";
import {
  KeyRound,
  Lock,
  DoorClosed,
  Clock,
  AlertTriangle,
  ShieldOff,
} from "lucide-react";

const items = [
  {
    icon: KeyRound,
    title: "Te quedaste sin llaves",
    desc: "Las perdiste, te las olvidaste adentro o se rompieron en la cerradura.",
  },
  {
    icon: DoorClosed,
    title: "No podés entrar",
    desc: "La puerta no abre, la cerradura está trabada o la llave te giró en falso.",
  },
  {
    icon: Clock,
    title: "Es de madrugada",
    desc: "Domingo, feriado, 3am y nadie atiende el teléfono.",
  },
  {
    icon: AlertTriangle,
    title: "Cerradura forzada",
    desc: "Intento de robo o cerradura dañada. Necesitás cambiarla ahora.",
  },
  {
    icon: ShieldOff,
    title: "Querés más seguridad",
    desc: "Cambiar combinación, instalar cerrojo o reforzar la puerta.",
  },
  {
    icon: Lock,
    title: "Necesitás copias",
    desc: "Copia de llave común, de seguridad o multipunto. En el acto.",
  },
];

export default function Problema() {
  return (
    <section id="problema" className="relative py-24 md:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="pill">EL PROBLEMA</div>
          <h2 className="mt-5 font-display text-4xl md:text-6xl font-semibold tracking-tight text-gradient max-w-3xl">
            ¿Te pasa alguna de estas?
          </h2>
          <p className="mt-4 text-ink-soft max-w-2xl">
            
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card card-glow p-6 hover:border-red/30 transition group"
            >
              <div className="w-11 h-11 rounded-xl bg-bg-panel border border-bg-line grid place-items-center text-red group-hover:bg-red/10 group-hover:border-red/40 transition">
                <it.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                {it.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
