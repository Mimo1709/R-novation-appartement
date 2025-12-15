// src/components/ProcessAndServices.tsx
import { ClipboardList, Calculator, Hammer, Home } from "lucide-react";

interface Service {
  title: string;
  description: string;
}

const steps = [
  {
    icon: ClipboardList,
    title: "Étude gratuite",
    desc: "On se rencontre, on évalue vos besoins",
  },
  {
    icon: Calculator,
    title: "Devis détaillé",
    desc: "Devis transparent et clair en 48h",
  },
  {
    icon: Hammer,
    title: "Réalisation",
    desc: "Travaux réalisés par nos artisans qualifiés",
  },
  {
    icon: Home,
    title: "Livraison",
    desc: "Remise des clés et garantie décennale",
  },
];

const servicesData: Service[] = [
  {
    title: "Rénovation clé en main",
    description: "Nous prenons en charge l'intégralité de votre projet, de la conception à la livraison. Un seul interlocuteur coordonne tous les corps de métier pour un chantier sans stress, dans le respect des délais et du budget.",
  },
  {
    title: "Tous corps d'état",
    description: "Maçonnerie, plomberie, électricité, peinture, revêtements... Nos artisans qualifiés interviennent sur tous les aspects de votre rénovation. Nous coordonnons chaque métier pour une réalisation harmonieuse et conforme aux normes.",
  },
  {
    title: "Rénovation énergétique",
    description: "Isolation, chauffage performant, ventilation optimisée : nous améliorons le confort de votre logement tout en réduisant vos factures. Bénéficiez de nos conseils et de l'aide au montage des dossiers de financement.",
  },
  {
    title: "Accompagnement personnalisé",
    description: "Un chef de projet dédié vous écoute, analyse vos besoins et vous guide à chaque étape. Suivi régulier du chantier, gestion administrative et conseils d'expert pour un projet serein de bout en bout.",
  },
];

export default function ProcessAndServices() {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Titre de section */}
        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
          <div className="border py-1 px-3 md:px-4 rounded-lg text-[10px] md:text-xs uppercase tracking-wide inline-block">
            Notre processus
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mt-3 md:mt-5">
            Un accompagnement complet pour votre rénovation
          </h2>
          <p className="mt-3 md:mt-4 text-xs sm:text-sm md:text-base opacity-75">
            De la première rencontre à la livraison, nous coordonnons chaque
            étape : étude, devis, travaux et remise des clés de votre
            appartement rénové.
          </p>
        </div>

        {/* Process (étapes) */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 mb-10 md:mb-16">
          {steps.map((step, i) => {
            const IconComponent = step.icon;
            return (
              <div key={i} className="text-center flex-1">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <IconComponent size={24} className="text-yellow-500 md:w-8 md:h-8" />
                </div>
                <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">{step.title}</h3>
                <p className="text-xs md:text-sm opacity-80">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Services (cartes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <div className="card-body items-center text-center p-4 md:p-6">
                <h3 className="card-title text-base md:text-lg mb-2 md:mb-3">{service.title}</h3>
                <p className="text-xs md:text-sm leading-relaxed opacity-90">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
