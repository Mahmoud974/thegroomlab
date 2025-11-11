"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function AvisClients() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "John Moore",
      rating: 5,
      text: "Service impeccable. Coupe précise, barbe nickel. Un vrai barber de confiance.",
      img: "/images/profils/client-3.png",
    },
    {
      id: 2,
      name: "Robbie Jones",
      rating: 5,
      text: "Ambiance premium, résultat parfait à chaque fois. Je recommande à 100%.",
      img: "/images/profils/client-1.png",
    },
    {
      id: 3,
      name: "Ethan Miles",
      rating: 5,
      text: "Détails, soins, conseils… ici tu ne viens pas juste te faire couper les cheveux.",
      img: "/images/profils/client-2.png",
    },
  ];

  return (
    <section className="relative w-full py-32 px-6 text-white">
 
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/coupe.png"
          alt="Background barber"
          fill
          priority
          className="object-cover object-center brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-black/40" />  
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-20 bg-[#FFD400]"></span>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
              Avis Clients
            </h2>
          </div>
          <p className="text-gray-200 text-lg mt-3">
            Découvrez ce que nos clients pensent de leur expérience.
          </p>
        </div>

        <div
  ref={sliderRef}
  className="flex flex-col xl:flex-row gap-6 xl:overflow-x-auto xl:snap-x xl:snap-mandatory pb-6 custom-scroll"
>

          {testimonials.map((review) => (
            <div
              key={review.id}
              className="md:snap-center w-full md:min-w-[400px] bg-black/70 backdrop-blur border border-[#FFD400]/40   p-8
                        flex flex-col gap-6 hover:border-[#FFD400] transition duration-300"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={review.img}
                  alt={review.name}
                  width={60}
                  height={60}
                  className="rounded-full w-16 h-16 object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg uppercase tracking-wide">{review.name}</h3>
                  <div className="flex text-[#FFD400] gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#FFD400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}