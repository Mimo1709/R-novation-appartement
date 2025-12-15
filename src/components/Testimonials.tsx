// src/components/Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import type { Testimonial } from "./ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text:
      "Rénovation complète de notre appartement haussmannien : délais tenus, finitions impeccables, équipe très pro du début à la fin.",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
    name: "Claire D.",
    role: "Propriétaire à Paris 16e",
  },
  {
    text:
      "Ils ont refait notre salle de bain et cuisine. Chantier propre, bon suivi, et de très bonnes idées d'optimisation d'espace.",
    image:
      "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=200&q=80",
    name: "Marc et Sophie L.",
    role: "Couple à Boulogne",
  },
  {
    text:
      "Travaux réalisés dans les temps malgré un planning serré. Communication claire, je recommande sans hésiter.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    name: "Jérôme P.",
    role: "Investisseur locatif",
  },
  {
    text:
      "Très satisfait du résultat : parquet, peinture, électricité refaits à neuf. L'appartement a pris énormément de valeur.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80",
    name: "Nadia R.",
    role: "Propriétaire à Paris 11e",
  },
  {
    text:
      "Equipe sérieuse, respect du budget et bonnes suggestions de matériaux. Le suivi après chantier est aussi au rendez-vous.",
    image:
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=200&q=80",
    name: "Alexandre G.",
    role: "Jeune propriétaire",
  },
  {
    text:
      "Nous avons confié la rénovation de deux appartements. Gestion fluide, artisans soigneux, résultat haut de gamme.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    name: "Isabelle T.",
    role: "Bailleur privé",
  },
  {
    text:
      "Très bonne expérience : conseils, réactivité et rendu final vraiment au-dessus de nos attentes.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    name: "Pauline M.",
    role: "Propriétaire à Vincennes",
  },
  {
    text:
      "La rénovation a complètement transformé notre appartement. Les délais et le devis ont été respectés.",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    name: "Hugo F.",
    role: "Propriétaire occupant",
  },
  {
    text:
      "Excellent contact, très bon suivi de chantier. Je les recommande à mes clients sans hésiter.",
    image:
      "https://images.unsplash.com/photo-1546456073-92b9f0a8d412?auto=format&fit=crop&w=200&q=80",
    name: "Camille B.",
    role: "Architecte d'intérieur",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <div className="w-full py-8 md:py-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center max-w-[640px] mx-auto px-4"
      >
        <div className="flex justify-center">
          <div className="border py-1 px-3 md:px-4 rounded-lg text-[10px] md:text-xs uppercase tracking-wide">
            Témoignages clients
          </div>
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter mt-3 md:mt-5 text-center">
          Ils nous ont confié leur appartement
        </h2>
        <p className="text-center mt-2 md:mt-4 opacity-75 text-xs md:text-sm">
          Avis de propriétaires et d'investisseurs qui ont réalisé leurs
          travaux avec nous.
        </p>
      </motion.div>

      <div className="flex justify-center gap-3 md:gap-6 mt-6 md:mt-8 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[400px] md:max-h-[640px] overflow-hidden px-4 md:px-0">
        <TestimonialsColumn testimonials={firstColumn} duration={18} />
        <TestimonialsColumn
          testimonials={secondColumn}
          className="hidden md:block"
          duration={22}
        />
        <TestimonialsColumn
          testimonials={thirdColumn}
          className="hidden lg:block"
          duration={20}
        />
      </div>
    </div>
  );
}
