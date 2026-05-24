"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Giuliano Senno",
    meta: "Reseña de Google · Hace 3 meses",
    text: "Fui a hacer dos copias, ya de entrada la atención es buenisima, Ian es un crack. En 5 minutos me estaba yendo con las copias y el precio estoy seguro que de la zona es el mas barato. Ya tengo cerrajero de confianza sin dudas.",
  },
  {
    name: "Ile Ciappa",
    meta: "Reseña de Google · Hace 4 meses",
    text: "Ian fue muy atento. Respondió a mi llamado un sábado por la tarde. Le expliqué el motivo, lo comprendió, y fue a buscar las cerraduras y herramientas necesarias para resolver aquello que me preocupaba. Me aconsejó prudentemente.",
  },
  {
    name: "Ayelén Sosa",
    meta: "Local Guide · Hace 4 meses",
    text: "Excelente atención. Puntualidad y el arreglo quedo bárbaro. En un caso cambiamos cerradura y en otro no, se pudo arreglar. Arreglan la cerradura. Y además soldaron las bisagras de una puerta que da a la calle y quedo perfecto con el paso del tiempo funciona bárbaro. Gracias y lo super recomiendo!",
  },
];

export default function Resenas() {
  return (
    <section id="resenas" className="relative py-24 md:py-32 border-t border-bg-line">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="pill">CASOS</div>
            <h2 className="mt-5 font-display text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
              Lo que dicen <span className="red-gradient">los vecinos.</span>
            </h2>
          </motion.div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-red text-red" />
              ))}
            </div>
            <div>
              <div className="font-display text-xl font-semibold">4.9 / 5</div>
              <div className="text-xs text-ink-dim">basado en reseñas reales</div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card p-6 hover:border-red/30 transition"
            >
              <div className="flex">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-red text-red" />
                ))}
              </div>
              <blockquote className="mt-4 text-ink leading-relaxed text-[15px]">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-bg-line flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-red/10 border border-red/30 text-red grid place-items-center text-xs font-semibold">
                  {r.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-ink-dim">{r.meta}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
