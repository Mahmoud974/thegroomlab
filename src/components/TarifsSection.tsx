"use client";

import { servicesBarber } from "@/app/db/services";
import Image from "next/image";

export default function TarifsSection() {
  return (
    <section id="services" className="relative w-full py-32 px-6 text-white">
 
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/tondeuse.png"
          alt="Barber Background"
          fill
          priority
          className="object-cover object-center brightness-[0.25]"
        />
      </div>

      <div className="absolute inset-0 bg-black/30 -z-10" />

   
      <div className="max-w-7xl mx-auto mb-20 px-4 text-left">
        <div className="flex items-center gap-4">
          <span className="h-[2px] w-16 bg-[#FFD400]" />
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            NOS TARIFS
          </h2>
        </div>

        <p className="text-gray-300 text-lg mt-4 max-w-xl">
          Une sélection de prestations premium pour révéler ton style
          et t’apporter une confiance immédiate.
        </p>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14">
        {servicesBarber.map((srv, index) => {
          const Icon = srv.icon;
          return (
            <div key={index} className="group cursor-pointer">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-4">
                  <Icon size={30} className="text-[#FFD400]" />
                  <h3 className="text-xl font-bold uppercase tracking-wide group-hover:text-[#FFD400] transition-all">
                    {srv.title}
                  </h3>
                </div>
 
                <span className="text-[#FFD400] font-bold text-lg group-hover:scale-110 transition-all">
                  {srv.price}€
                </span>
              </div>

              <p className="text-gray-400 text-sm ml-12 mb-3">{srv.desc}</p>

              <div className="border-b border-[#FFD400]/40 group-hover:border-[#FFD400] transition-all"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
