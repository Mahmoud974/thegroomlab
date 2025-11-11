"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full py-32 px-6 text-white"
    >
      <Image
        src="/images/product.png"
        alt="Barber contact background"
        fill
        priority
        className="absolute inset-0 object-cover object-center brightness-[0.35] -z-10"
      />

      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="relative max-w-7xl mx-auto">

      <div className="mb-16">

 
  <div className="flex items-center gap-4">
    <span className="h-[2px] w-20 bg-[#FFD400]" />
    <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
      Prends Rendez-Vous
     
    </h2>
  </div>

 
  <p className="text-gray-300 mt-2 text-lg">
    Découvre comment me contacter et poser toutes tes questions.
  </p>
</div>


        {/* ✅ FORMULAIRE */}
        <form className="space-y-6 w-full">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Nom"
              className="w-full bg-black/50 border border-[#FFD400]/40 text-white placeholder-gray-400 px-4 py-4 -lg outline-none focus:border-[#FFD400]"
            />

            <input
              type="email"
              placeholder="E-mail *"
              className="w-full bg-black/50 border border-[#FFD400]/40 text-white placeholder-gray-400 px-4 py-4 -lg outline-none focus:border-[#FFD400]"
            />
          </div>

          <input
            type="tel"
            placeholder="Numéro de téléphone"
            className="w-full bg-black/50 border border-[#FFD400]/40 text-white placeholder-gray-400 px-4 py-4 -lg outline-none focus:border-[#FFD400]"
          />

          <textarea
            rows={6}
            placeholder="Commentaire"
            className="w-full bg-black/50 border border-[#FFD400]/40 text-white placeholder-gray-400 px-4 py-4 -lg outline-none resize-none focus:border-[#FFD400]"
          ></textarea>

          <button className="cursor-pointer bg-[#FFD400] hover:bg-yellow-500 text-black font-semibold py-3 px-10 text-lg -lg transition-all duration-300 shadow-lg">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
