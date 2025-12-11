// src/components/ProcessAndServices.tsx
import { ClipboardList, Calculator, Hammer, Home } from "lucide-react";

interface Service {
  title: string;
  description: string;
  buttonText: string;
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
    description: "Expertise reconnue depuis plus de 25 ans.",
    buttonText: "En savoir plus",
  },
  {
    title: "Tous corps d'état",
    description: "Artisans qualifiés pour chaque projet.",
    buttonText: "Nos services",
  },
  {
    title: "Rénovation énergétique",
    description: "Solutions modernes et écologiques.",
    buttonText: "Découvrir",
  },
  {
    title: "Accompagnement personnalisé",
    description: "Suivi renforcé tout au long du projet.",
    buttonText: "Contactez-nous",
  },
];

export default function ProcessAndServices() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Titre de section, même style que "Nos réalisations" */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="border py-1 px-4 rounded-lg text-xs uppercase tracking-wide inline-block">
            Notre processus
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-5">
            Un accompagnement complet pour votre rénovation
          </h2>
          <p className="mt-4 text-sm md:text-base opacity-75">
            De la première rencontre à la livraison, nous coordonnons chaque
            étape : étude, devis, travaux et remise des clés de votre
            appartement rénové.
          </p>
        </div>

        {/* Process (étapes) */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
          {steps.map((step, i) => {
            const IconComponent = step.icon;
            return (
              <div key={i} className="text-center flex-1">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent size={32} className="text-yellow-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm opacity-80">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Services (cartes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <div className="card-body items-center text-center">
                <h3 className="card-title">{service.title}</h3>
                <p>{service.description}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">
                    {service.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
