// src/components/ServicesCircular.tsx
import { CircularGallery, type GalleryItem } from "./ui/circular-gallery";

const servicesItems: GalleryItem[] = [
  {
    common: "Plomberie",
    binomial: "Installation & rénovation",
    photo: {
      url: "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?auto=format&fit=crop&w=1200&q=80",
      text: "Travaux de plomberie dans une salle de bain",
      pos: "50% 40%",
      by: "Plomberie",
    },
  },
  {
    common: "Revêtement de sol",
    binomial: "Parquet, carrelage, vinyle",
    photo: {
      url: "https://images.unsplash.com/photo-1575204015311-0fe377370780?auto=format&fit=crop&w=1200&q=80",
      text: "Pose de parquet au sol",
      pos: "50% 60%",
      by: "Revêtement de sol",
    },
  },
  {
    common: "Électricité",
    binomial: "Mise aux normes",
    photo: {
      url: "https://images.unsplash.com/photo-1759562082240-c1c30da0a284?auto=format&fit=crop&w=1200&q=80",
      text: "Installation électrique moderne",
      pos: "50% 50%",
      by: "Électricité",
    },
  },
  {
    common: "Peinture",
    binomial: "Murs & plafonds",
    photo: {
      url: "https://images.unsplash.com/photo-1717281234297-3def5ae3eee1?auto=format&fit=crop&w=1200&q=80",
      text: "Travaux de peinture sur mur",
      pos: "50% 40%",
      by: "Peinture",
    },
  },
  {
    common: "Cuisine",
    binomial: "Aménagement sur-mesure",
    photo: {
      url: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=80",
      text: "Cuisine rénovée moderne",
      pos: "50% 50%",
      by: "Cuisine",
    },
  },
  {
    common: "Salon",
    binomial: "Espace de vie",
    photo: {
      url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
      text: "Salon lumineux rénové",
      pos: "50% 50%",
      by: "Salon",
    },
  },
  {
    common: "Chambre",
    binomial: "Espace nuit",
    photo: {
      url: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=1200&q=80",
      text: "Chambre cosy rénovée",
      pos: "50% 45%",
      by: "Chambre",
    },
  },
  {
    common: "Salle de bain",
    binomial: "Douche & baignoire",
    photo: {
      url: "https://images.unsplash.com/photo-1587527901949-ab0341697c1e?auto=format&fit=crop&w=1200&q=80",
      text: "Salle de bain moderne",
      pos: "50% 40%",
      by: "Salle de bain",
    },
  },
];

export default function ServicesCircular() {
  return (
    <section className="w-full bg-black text-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-4 md:mb-6">
          <div className="border py-1 px-4 rounded-lg text-xs uppercase tracking-wide inline-block">
            Nos services
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-4 md:mt-5">
            Tous les espaces et corps de métier
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base opacity-75 px-2">
            Faites tourner la galerie pour découvrir nos services : plomberie,
            revêtements de sol, électricité, peinture et toutes les pièces de
            votre appartement.
          </p>
        </div>

        <div className="w-full h-[480px] sm:h-[520px] md:h-[560px] lg:h-[600px] overflow-hidden">
          <CircularGallery
            items={servicesItems}
            radius={550}
            autoRotateSpeed={0.05}
          />
        </div>
      </div>
    </section>
  );
}
