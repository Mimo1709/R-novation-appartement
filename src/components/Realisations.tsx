import { ImageComparison } from "./ui/image-comparison-slider";

export default function NosRealisations() {
  const projects = [
    {
      title: "Cuisine moderne minimaliste",
      location: "Paris 16ᵉ",
      before:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
      after:
        "/image/CUISINE_AVANT1.png",
    },
    {
      title: "Transformation studio en 2 pièces",
      location: "Paris 11ᵉ",
      before:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80",
      after:
        "/image/SALON_AVANT1.jpg",
    },
    {
      title: "Cuisine ouverte sur séjour",
      location: "Boulogne-Billancourt",
      before:
        "/image/CHAMBRE_APRES.jpg",
      after:
        "/image/CHAMBRE_AVANT.jpg",
    },
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Titre de section */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="border py-1 px-4 rounded-lg text-xs uppercase tracking-wide inline-block">
            Nos réalisations
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-5">
            Avant / Après de rénovations d&apos;appartements
          </h2>
          <p className="mt-4 text-sm md:text-base opacity-75">
            Découvrez quelques exemples concrets de rénovations complètes :
            réagencement, modernisation et mise en valeur de votre bien.
          </p>
        </div>

        {/* Liste des projets alternés */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0; // 0,2,... → slider à droite ; 1 → slider à gauche

            return (
              <div
                key={index}
                className={`flex flex-col gap-6 md:gap-10 md:min-h-[360px] ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Texte / infos appart */}
                <div className="md:w-1/3 w-full self-center md:translate-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-70 mb-4">{project.location}</p>
                  <p className="text-sm md:text-base opacity-80">
                    Rénovation complète incluant réagencement, mise aux normes
                    et finitions soignées pour optimiser l&apos;espace et la
                    luminosité.
                  </p>
                </div>

                {/* Slider avant / après */}
                <div className="md:w-2/3 w-full">
                  <ImageComparison
                    beforeImage={project.before}
                    afterImage={project.after}
                    altBefore={`Avant - ${project.title}`}
                    altAfter={`Après - ${project.title}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
