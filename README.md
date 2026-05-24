# Cerrajería SacuLnaI — Landing

Landing page de conversión para Cerrajería SacuLnaI (Lanús Oeste, AR).
Stack: **Next.js 14 (App Router) · TailwindCSS · Framer Motion · TypeScript**.

## Cómo correr

```bash
cd landing-saculnal
npm install
npm run dev
```

Abrí http://localhost:3000

## Build de producción

```bash
npm run build
npm run start
```

## Estructura

```
app/
  layout.tsx       # Fuentes (Anton + Manrope), metadata, JSON-LD
  page.tsx         # Composición de la landing
  globals.css      # Tailwind + utilidades (grain, ticker, display)
components/
  Header.tsx       # Header sticky con CTAs
  Hero.tsx         # Hero asimétrico + ticker
  Servicios.tsx    # Grid de servicios
  Urgencias.tsx    # Sección oscura con CTAs grandes
  Precios.tsx      # 3 cards (precio / habituales / jubilados)
  Resenas.tsx      # Testimonios
  SobreIan.tsx     # Historia en primera persona
  CTAFinal.tsx     # Cierre rojo
  Footer.tsx       # Contacto + dirección
  FloatingCTA.tsx  # Botones flotantes (mobile bottom bar / desktop right)
lib/
  contact.ts       # Tel / WhatsApp / dirección centralizados
```

## Personalización rápida

Cambiá teléfono / WhatsApp / dirección en `lib/contact.ts` — se actualiza en toda la página.

## Notas de diseño

- Tipografía: **Anton** (display industrial) + **Manrope** (body refinado).
- Paleta: rojo `#E10600`, negro `#0A0A0A`, blanco, verde WhatsApp `#25D366`.
- Texturas: noise sutil + franjas diagonales en secciones rojas.
- Mobile-first: barra inferior con Llamar + WhatsApp siempre visible.
