"use client";

import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-red/30 via-transparent to-transparent blur-2xl" />
      <div className="absolute inset-4 rounded-[28px] border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute inset-8 rounded-[24px] overflow-hidden border border-white/[0.06] bg-bg-card/70"
      >
        <svg
          viewBox="0 0 520 520"
          className="w-full h-full"
          aria-label="Llave de cerrajería"
        >
          <defs>
            <radialGradient id="bg-radial" cx="50%" cy="50%" r="65%">
              <stop offset="0%" stopColor="#1a0606" />
              <stop offset="55%" stopColor="#0e0608" />
              <stop offset="100%" stopColor="#08080B" />
            </radialGradient>
            <pattern
              id="grid-fine"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 28 0 L 0 0 0 28"
                fill="none"
                stroke="rgba(255,42,42,0.07)"
                strokeWidth="1"
              />
            </pattern>
            <linearGradient id="key-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="55%" stopColor="#FF2A2A" />
              <stop offset="100%" stopColor="#8a0a0a" />
            </linearGradient>
            <linearGradient id="key-shine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="hot-spot" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF2A2A" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#FF2A2A" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#FF2A2A" stopOpacity="0" />
            </radialGradient>
            <filter id="key-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
              <stop offset="60%" stopColor="#000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000" stopOpacity="0.5" />
            </radialGradient>
          </defs>

          <rect width="520" height="520" fill="url(#bg-radial)" />
          <rect width="520" height="520" fill="url(#grid-fine)" />

          {/* Halo central */}
          <circle cx="260" cy="260" r="220" fill="url(#hot-spot)" />

          {/* Anillos concéntricos */}
          <g
            fill="none"
            stroke="rgba(255,42,42,0.18)"
            strokeWidth="1"
          >
            <circle cx="260" cy="260" r="110" strokeDasharray="2 6" />
            <circle cx="260" cy="260" r="160" strokeDasharray="2 8" />
            <circle cx="260" cy="260" r="210" strokeDasharray="2 10" />
          </g>

          {/* Rejas verticales de fondo */}
          <g stroke="rgba(255,42,42,0.18)" strokeWidth="2" strokeLinecap="round">
            <line x1="80" y1="80" x2="80" y2="440" />
            <line x1="130" y1="60" x2="130" y2="460" />
            <line x1="180" y1="50" x2="180" y2="470" />
            <line x1="340" y1="50" x2="340" y2="470" />
            <line x1="390" y1="60" x2="390" y2="460" />
            <line x1="440" y1="80" x2="440" y2="440" />
          </g>
          {/* Travesaños horizontales */}
          <g stroke="rgba(255,42,42,0.15)" strokeWidth="2" strokeLinecap="round">
            <line x1="60" y1="130" x2="460" y2="130" />
            <line x1="60" y1="390" x2="460" y2="390" />
          </g>
          {/* Adornos decorativos en rejas */}
          <g fill="rgba(255,42,42,0.25)">
            <circle cx="80" cy="130" r="3" />
            <circle cx="130" cy="130" r="3" />
            <circle cx="180" cy="130" r="3" />
            <circle cx="340" cy="130" r="3" />
            <circle cx="390" cy="130" r="3" />
            <circle cx="440" cy="130" r="3" />
            <circle cx="80" cy="390" r="3" />
            <circle cx="130" cy="390" r="3" />
            <circle cx="180" cy="390" r="3" />
            <circle cx="340" cy="390" r="3" />
            <circle cx="390" cy="390" r="3" />
            <circle cx="440" cy="390" r="3" />
          </g>

          {/* LLAVE — diagonal, centrada */}
          <motion.g
            initial={{ opacity: 0, scale: 0.85, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: -28 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "260px 260px" }}
            filter="url(#key-glow)"
          >
            {/* Sombra suave debajo */}
            <ellipse
              cx="270"
              cy="395"
              rx="140"
              ry="10"
              fill="#FF2A2A"
              opacity="0.18"
            />

            {/* Cabeza de la llave (anillo) */}
            <circle
              cx="160"
              cy="260"
              r="70"
              fill="none"
              stroke="url(#key-grad)"
              strokeWidth="18"
            />
            <circle
              cx="160"
              cy="260"
              r="70"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1.5"
            />
            {/* Hueco interior brillo */}
            <circle
              cx="160"
              cy="260"
              r="52"
              fill="none"
              stroke="rgba(255,107,107,0.3)"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
            {/* Detalle interior */}
            <circle
              cx="160"
              cy="260"
              r="14"
              fill="none"
              stroke="url(#key-grad)"
              strokeWidth="6"
            />

            {/* Cuerpo (paleta) */}
            <rect
              x="230"
              y="251"
              width="170"
              height="18"
              rx="3"
              fill="url(#key-grad)"
            />
            <rect
              x="230"
              y="251"
              width="170"
              height="5"
              rx="2"
              fill="url(#key-shine)"
            />

            {/* Dientes */}
            <path
              d="M 320 269 L 320 290 L 332 290 L 332 269 Z"
              fill="url(#key-grad)"
            />
            <path
              d="M 345 269 L 345 282 L 357 282 L 357 269 Z"
              fill="url(#key-grad)"
            />
            <path
              d="M 370 269 L 370 295 L 382 295 L 382 269 Z"
              fill="url(#key-grad)"
            />
            <path
              d="M 392 269 L 392 280 L 400 280 L 400 269 Z"
              fill="url(#key-grad)"
            />

            {/* Borde resaltado de la paleta */}
            <rect
              x="230"
              y="251"
              width="170"
              height="18"
              rx="3"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
            />

            {/* Brillo destellante en la cabeza */}
            <motion.circle
              cx="125"
              cy="225"
              r="8"
              fill="#fff"
              animate={{ opacity: [0.2, 0.9, 0.2] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>

          {/* Destellos puntuales */}
          <motion.g
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="110" cy="160" r="1.5" fill="#FF6B6B" />
            <circle cx="420" cy="380" r="1.5" fill="#FF6B6B" />
            <circle cx="400" cy="120" r="1" fill="#FF6B6B" />
            <circle cx="130" cy="400" r="1" fill="#FF6B6B" />
          </motion.g>

          {/* Vignette */}
          <rect
            width="520"
            height="520"
            fill="url(#vignette)"
            pointerEvents="none"
          />
        </svg>
      </motion.div>

      {/* Corner ticks */}
      {[
        "top-3 left-3",
        "top-3 right-3",
        "bottom-3 left-3",
        "bottom-3 right-3",
      ].map((p) => (
        <div
          key={p}
          className={`absolute ${p} w-3 h-3 border-white/15`}
          style={{
            borderTopWidth: p.includes("top") ? 1 : 0,
            borderBottomWidth: p.includes("bottom") ? 1 : 0,
            borderLeftWidth: p.includes("left") ? 1 : 0,
            borderRightWidth: p.includes("right") ? 1 : 0,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute top-10 -left-2 sm:-left-6 pill bg-bg-card backdrop-blur-md"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse-glow" />
        En línea ahora
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        className="absolute bottom-12 -right-2 sm:-right-6 pill bg-bg-card backdrop-blur-md"
      >
        Llegada 15–30 min
      </motion.div>
    </div>
  );
}
