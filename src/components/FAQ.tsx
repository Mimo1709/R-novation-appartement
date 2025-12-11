// src/components/FAQ.tsx
"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FAQ() {
  const faqItems = [
    {
      id: "item-1",
      question: "Combien de temps dure une rénovation d’appartement ?",
      answer:
        "En moyenne entre 2 semaines et 3 mois selon la surface, l’état initial et le niveau de rénovation (partielle ou complète).",
    },
    {
      id: "item-2",
      question: "Intervenez-vous dans toute l’Île-de-France ?",
      answer:
        "Oui, nous intervenons à Paris et dans la majorité des villes d’Île-de-France. Indiquez votre adresse dans le formulaire de devis pour vérification.",
    },
    {
      id: "item-3",
      question: "Le devis est-il gratuit et sans engagement ?",
      answer:
        "Oui, le devis est 100% gratuit et sans engagement. Nous vous contactons sous 48h pour affiner votre projet si besoin.",
    },
    {
      id: "item-4",
      question: "Pouvez-vous gérer la rénovation complète clé en main ?",
      answer:
        "Oui, nous coordonnons tous les corps de métier : démolition, électricité, plomberie, sols, peinture, cuisine, salle de bain, etc.",
    },
    {
      id: "item-5",
      question: "Comment se passe le suivi de chantier ?",
      answer:
        "Vous avez un interlocuteur dédié, des points réguliers (photos, appels, visites) et un planning clair tout au long des travaux.",
    },
  ];

  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setSent(true);
    setComment("");
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section className="py-0">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Titre aligné avec Testimonials */}
        <div className="flex flex-col items-center justify-center max-w-[640px] mx-auto">
          <div className="flex justify-center w-full">
            <div className="border py-1 px-4 rounded-lg text-xs uppercase tracking-wide">
              Questions fréquentes
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mt-5 text-center">
            Tout savoir avant vos travaux
          </h2>
          <p className="text-center mt-4 opacity-75 text-sm">
            Les réponses aux questions que se posent le plus souvent nos clients
            avant de lancer leur rénovation.
          </p>
        </div>

        {/* Bloc questions + input, descendu pour mieux centrer dans la colonne */}
        <div className="mx-auto mt-16 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card w-full rounded-2xl border px-6 py-3 shadow-sm"
          >
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-0">
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Champ de commentaire agrandi */}
          <form
            onSubmit={handleSubmit}
            className="mt-20 flex flex-col gap-3 items-stretch"
          >

            <label className="text-base font-medium opacity-90" htmlFor="faq-comment">
              Vous souhaitez nous laisser un commentaire à propos de la FAQ ?
            </label>
            <div className="flex gap-2">
              <input
                id="faq-comment"
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Écrivez votre commentaire..."
                className="input input-bordered w-full bg-base-100 h-24 text-base px-4"
              />
              <button type="submit" className="btn btn-primary btn-sm">
                Envoyer
              </button>
            </div>
            {sent && (
              <p className="text-xs text-green-400">
                Merci pour votre commentaire, il a bien été envoyé.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
