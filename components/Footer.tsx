import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  ADDRESS,
  MAPS_URL,
} from "@/lib/contact";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-bg-line pt-16 pb-28 md:pb-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 text-ink-soft max-w-sm leading-relaxed text-sm">
              Cerrajero de barrio en Zona Sur. Urgencias 24hs, trabajos en
              local y a domicilio. Atención personal.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-ink-dim mb-4">
              Contacto
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={PHONE_TEL}
                  className="flex items-center gap-2 hover:text-red transition"
                >
                  <Phone className="w-4 h-4 text-red" /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2 hover:text-red transition"
                >
                  <MessageCircle className="w-4 h-4 text-red" /> WhatsApp directo
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-ink-dim mb-4">
              Local
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener"
              className="flex items-start gap-2 text-sm hover:text-red transition"
            >
              <MapPin className="w-4 h-4 text-red shrink-0 mt-0.5" />
              <span>
                {ADDRESS}
                <br />
                <span className="text-ink-dim text-xs">
                  Buenos Aires · Argentina
                </span>
              </span>
            </a>
            <div className="mt-3 flex items-center gap-2 text-sm text-ink-soft">
              <Clock className="w-4 h-4 text-red" /> 24 horas · todos los días
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-bg-line flex flex-col sm:flex-row justify-between gap-2 text-xs text-ink-dim">
          <div>
            © {new Date().getFullYear()} Cerrajería SacuLnaI · Todos los
            derechos reservados.
          </div>
          <div>Zona Sur · Buenos Aires</div>
        </div>
      </div>
    </footer>
  );
}
