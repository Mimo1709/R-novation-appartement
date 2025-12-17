// src/pages/ServicesPage.tsx
import { 
  Home, 
  Hammer, 
  Zap, 
  Droplet, 
  PaintBucket, 
  Wrench,
  DoorOpen,
  Shield,
  Clock,
  Award,
  MapPin
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Home,
      title: "Rénovation complète",
      description: "Nous prenons en charge l'intégralité de votre projet de rénovation, de la conception à la livraison. Notre équipe coordonne tous les corps de métier pour transformer votre appartement selon vos envies. Nous gérons les démarches administratives, le planning des travaux et assurons un suivi quotidien du chantier.",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Hammer,
      title: "Cuisine",
      description: "Création ou rénovation complète de votre cuisine : aménagement sur-mesure, installation d'électroménager encastrable, plans de travail en quartz ou granit, crédence, éclairage LED intégré. Nous optimisons l'espace pour allier fonctionnalité et design moderne. Possibilité de cuisine ouverte avec îlot central.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Droplet,
      title: "Salle de bain",
      description: "Rénovation complète avec installation de douche à l'italienne, baignoire îlot, meuble vasque suspendu, faïence et carrelage haut de gamme. Mise aux normes de la plomberie et de la ventilation (VMC). Installation de sèche-serviettes et miroirs LED. Étanchéité garantie avec procédés professionnels.",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Zap,
      title: "Électricité",
      description: "Mise aux normes électriques NF C 15-100, remplacement du tableau électrique, installation de prises USB, interrupteurs connectés, spots LED encastrés et domotique. Diagnostic électrique inclus. Câblage fibre optique et réseau ethernet dans toutes les pièces. Protection différentielle et parafoudre.",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Droplet,
      title: "Plomberie & Chauffage",
      description: "Installation et remplacement de chaudière gaz ou électrique, radiateurs design, plancher chauffant, ballon d'eau chaude thermodynamique. Création ou modification de réseau de plomberie cuivre ou PER. Détection et réparation de fuites. Installation de robinetterie thermostatique et économiseurs d'eau.",
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: PaintBucket,
      title: "Peinture & Sols",
      description: "Peinture décorative avec finitions mat, satin ou brillant, enduit lissé, papier peint panoramique. Pose de parquet massif ou flottant, stratifié, carrelage grand format, mosaïque, résine époxy. Ponçage et vitrification de parquet ancien. Application de béton ciré dans cuisines et salles de bain.",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Wrench,
      title: "Maçonnerie intérieure",
      description: "Création ou démolition de cloisons pour réagencer les espaces, ouverture de murs porteurs (avec étude structurelle), pose de poutres IPN, création d'arches et niches murales. Isolation thermique et phonique. Doublage de murs, faux-plafonds avec spots intégrés. Ragréage et chapes pour sols parfaitement plans.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: DoorOpen,
      title: "Menuiserie",
      description: "Remplacement de fenêtres double ou triple vitrage PVC, bois ou aluminium, installation de portes intérieures affleurantes ou coulissantes, placards sur-mesure avec aménagement optimisé (penderie, tiroirs, étagères). Création de dressing walk-in. Pose de parquets et plinthes assorties. Volets roulants motorisés.",
      image: "https://images.unsplash.com/photo-1534237886190-ced735ca4b73?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const tarifs = [
    {
      type: "Rafraîchissement",
      price: "250 - 700 €/m²",
      includes: ["Peinture murs et plafonds", "Remplacement sols", "Petits travaux électriques", "Décoration"]
    },
    {
      type: "Rénovation complète",
      price: "700 - 1000 €/m²",
      includes: ["Cuisine équipée", "Salle de bain complète", "Électricité aux normes", "Plomberie", "Sols et peinture"],
      featured: true
    },
    {
      type: "Rénovation lourde",
      price: "1100 - 2000 €/m²",
      includes: ["Modification structure", "Murs porteurs", "Redistribution totale", "Prestations haut de gamme"]
    }
  ];

  const zones = [
    "Paris 1er - 20ème arrondissements",
    "Hauts-de-Seine (92)",
    "Seine-Saint-Denis (93)",
    "Val-de-Marne (94)",
    "Val-d'Oise (95)"
  ];

  const garanties = [
    {
      icon: Shield,
      title: "Devis gratuit",
      description: "Étude de votre projet sans engagement"
    },
    {
      icon: Clock,
      title: "Paiement selon avancement",
      description: "Pas de règlement à l'avance"
    },
    {
      icon: Award,
      title: "Garantie décennale",
      description: "Assurance tous risques incluse"
    },
    {
      icon: Wrench,
      title: "SAV gratuit 2 ans",
      description: "Service après-vente sur tous travaux"
    }
  ];

  const avantages = [
    "Interlocuteur unique dédié à votre projet",
    "Service clé en main de A à Z",
    "Architecte d'intérieur pour optimiser l'espace",
    "+ de 15 ans d'expérience à Paris",
    "Artisans qualifiés et certifiés RGE",
    "Délais et budgets respectés"
  ];

  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Background luxury avec dégradés */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 blur-[100px] rounded-full" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block mb-4 px-4 py-1 border border-yellow-500/30 rounded-full text-yellow-500 text-sm font-medium">
              Excellence & Savoir-faire
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Nos Services de Rénovation
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Des prestations haut de gamme pour tous vos projets de rénovation à Paris
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              Nos Prestations
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
              Une expertise reconnue dans tous les corps de métiers du bâtiment
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-gradient-to-br from-zinc-900 to-black rounded-xl border border-zinc-800 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20 overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 inline-flex p-3 bg-yellow-500/20 backdrop-blur-sm rounded-lg border border-yellow-500/30">
                        <Icon className="w-8 h-8 text-yellow-500" />
                      </div>
                    </div>
                    
                    {/* Contenu */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              Nos Tarifs
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
              Des prix transparents adaptés à votre budget
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {tarifs.map((tarif, index) => (
                <div 
                  key={index}
                  className={`relative bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-2 ${
                    tarif.featured 
                      ? 'border-yellow-500 shadow-2xl shadow-yellow-500/30 scale-105' 
                      : 'border-zinc-800 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/20'
                  }`}
                >
                  {tarif.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      POPULAIRE
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-3 text-white">{tarif.type}</h3>
                  <p className="text-4xl font-bold text-yellow-500 mb-8">{tarif.price}</p>
                  <ul className="space-y-4">
                    {tarif.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="text-yellow-500 mt-1 text-lg">✓</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex p-4 bg-yellow-500/10 rounded-2xl mb-6">
                <MapPin className="w-12 h-12 text-yellow-500" />
              </div>
              <h2 className="text-4xl font-bold mb-4 text-white">
                Zone d'Intervention
              </h2>
              <p className="text-gray-400 mb-12 text-lg">
                Nous intervenons dans tout Paris et l'Île-de-France
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {zones.map((zone, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-zinc-900 to-black p-5 rounded-xl border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
                  >
                    <p className="text-lg text-gray-200">{zone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Garanties */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Nos Garanties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {garanties.map((garantie, index) => {
                const Icon = garantie.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-zinc-900 to-black p-6 rounded-xl text-center border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20"
                  >
                    <div className="inline-flex p-3 bg-yellow-500/10 rounded-lg mb-4">
                      <Icon className="w-10 h-10 text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{garantie.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{garantie.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Pourquoi Nous Choisir
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {avantages.map((avantage, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 bg-gradient-to-br from-zinc-900 to-black p-6 rounded-xl border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
                  >
                    <span className="text-yellow-500 text-2xl font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-200 leading-relaxed">{avantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent" />
          <div className="container mx-auto px-4 text-center relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Contactez-nous pour un devis gratuit et sans engagement
            </p>
            <button 
              onClick={() => navigate('/devis')}
              className="group relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-12 py-5 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-500/70 hover:scale-105"
            >
              <span className="relative z-10">Obtenir mon Devis Gratuit</span>
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
