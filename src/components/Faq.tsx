"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, X } from "lucide-react";

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: "Puis-je venir sans rendez-vous ?",
      answer:
        "Nous acceptons les passages spontanés selon disponibilité, mais la prise de rendez-vous est fortement recommandée pour éviter l’attente.",
    },
    {
      question: "Combien de temps dure une coupe ou une taille de barbe ?",
      answer:
        "Une coupe dure en moyenne 30 à 45 minutes. Une taille de barbe entre 15 et 30 minutes selon le service choisi.",
    },
    {
      question: "Vous utilisez quoi pour la finition barbe ?",
      answer:
        "Nous travaillons avec des produits professionnels et une finition à la lame pour une précision maximale.",
    },
    {
      question: "Est-ce que vous coupez les cheveux des enfants ?",
      answer:
        "Oui, nous proposons une prestation adaptée aux enfants, avec patience et une expérience agréable.",
    },
    {
      question: "Est-ce que vous faites des transformations (dégradé + barbe) ?",
      answer:
        "Oui, nous proposons plusieurs formules combinées pour coupe + barbe + soin + serviette chaude.",
    },
    {
      question: "Quels moyens de paiement acceptez-vous ?",
      answer: "Carte bancaire, espèces et paiement sur place.",
    },
  ];

  return (
    <section id="faq" className="relative w-full py-32 px-6 text-white">
 
      <Image
        src="/images/salon.png"
        alt="Background barber"
        fill
        priority
        className="absolute inset-0 object-cover object-center brightness-[0.35] -z-10"
      />
 
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="relative max-w-7xl mx-auto text-left">
        
      <div className="mb-16">

<div className="flex items-center gap-4">
  <span className="h-[2px] w-20 bg-[#FFD400]" />
  <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
    FAQ
  </h2>
</div>

<p className="text-gray-300 mt-2 text-lg">
  Retrouvez ici les réponses aux questions les plus fréquentes.
</p>
</div>

        <div className="mt-16 w-full max-w-7xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openItem === index;

            return (
              <div
                key={index}
                className="border border-[#FFD400]/40 -lg overflow-hidden bg-black/40 hover:border-[#FFD400] transition-all"
              >
                <button
                  className="w-full flex justify-between items-center text-left px-6 py-4 text-lg font-medium"
                  onClick={() => setOpenItem(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  {isOpen ? <X className="text-[#FFD400]" /> : <Plus className="text-[#FFD400]" />}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
