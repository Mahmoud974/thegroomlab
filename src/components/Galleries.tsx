"use client";

import Image from "next/image";

export default function Gallery() {
  const images = [
    "/images/portfolios/barber-1.jpg",
  "/images/portfolios/barber-2.png",
  "/images/portfolios/barber-3.png",
  "/images/portfolios/barber-6.png",
  "/images/portfolios/barber-4.png",
  "/images/portfolios/barber-5.png",
  ];

  return (
    <section
      id="galerie"
      className="relative w-full py-32 px-6 text-white"
    >
    
      <Image
        src="/images/salon.png" 
        alt="Background Gallery"
        fill
        priority
        className="absolute inset-0 object-cover object-center brightness-[0.25] -z-10"
      />

       
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="max-w-7xl mx-auto relative">

  
        <div className="mb-16 text-left">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-16 bg-[#FFD400]" />
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
              Galerie 
            </h2>
          </div>
          <p className="text-gray-300 text-lg mt-4 max-w-xl">
            Des styles réalisés au salon. Chaque coupe est unique et pensée pour révéler ta personnalité.
          </p>
        </div>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative  overflow-hidden cursor-pointer"
            >
              <Image
                src={img}
                alt={`Coupe ${index + 1}`}
                width={500}
                height={600}
                className="object-cover w-full h-[420px] brightness-90 group-hover:scale-110 group-hover:brightness-100 transition-all duration-500"
              />

       
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

     
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
