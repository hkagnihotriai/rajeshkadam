import { MapPin, Clock, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-ink px-6 py-16 text-cream/90">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-xl font-semibold text-cream">RadiantSoul</h3>
          <p className="mt-2 font-accent italic text-gold">
            A quieter mind. A wiser heart.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            Bhaktivedanta Hospital &amp; Research Institute, Mira Road, Mumbai
          </p>
          <p className="flex items-center gap-2">
            <Clock size={16} className="shrink-0" />
            Mon–Sat, 11am–6pm
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <a href="tel:+919321996833" className="flex items-center gap-2 hover:text-gold">
            <Phone size={16} className="shrink-0" />
            +91 93219 96833
          </a>
          <a href="mailto:rajeshkadam.rns@gmail.com" className="flex items-center gap-2 hover:text-gold">
            <Mail size={16} className="shrink-0" />
            rajeshkadam.rns@gmail.com
          </a>
          <p className="text-xs text-cream/50">
            Still need a WhatsApp link here before launch.
          </p>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl text-xs text-cream/40">
        © {new Date().getFullYear()} RadiantSoul. All rights reserved.
      </p>
    </footer>
  );
}
