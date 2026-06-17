"use client";

import { motion } from "framer-motion";
import { MapPin, Check } from "lucide-react";

const valores = [
  "Atención personal del dueño",
  "Presupuesto claro antes de empezar",
  "Sin recargos abusivos por horario",
  "Trabajo prolijo y garantizado",
];

export default function SobreIan() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 border-t border-bg-line">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl"
        >
          <div className="pill">SOBRE MI</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient">
            Soy Ian. <span className="red-gradient">Atiendo cada llamado.</span>
          </h2>

          <div className="mt-6 space-y-4 text-ink-soft text-[17px] leading-relaxed">
            <p>
              Soy Ian, responsable de Cerrajería SacuLnaI. Empecé en este oficio
              a los 15 años, trabajando junto a mi tío, y desde entonces no
              paré.
            </p>
            <p>
              Fueron años de aprender el trabajo desde abajo, entendiendo cada
              detalle y enfrentando todo tipo de situaciones: desde algo simple
              como una copia de llave, hasta urgencias donde alguien no podía
              entrar a su casa.
            </p>
            <p>
              Hoy, con 28 años, tengo mi propio local y sigo atendiendo
              personalmente cada trabajo en toda Zona Sur.
            </p>
          </div>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {valores.map((v) => (
              <li key={v} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-red/15 border border-red/40 grid place-items-center text-red shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span className="text-sm text-ink">{v}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 inline-flex items-center gap-2 pill">
            <MapPin className="w-3.5 h-3.5 text-red" />
            Carlos Casares 2987 · Lanús Oeste
          </div>
        </motion.div>
      </div>
    </section>
  );
}
