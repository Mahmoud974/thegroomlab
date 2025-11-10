"use client";

import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null); // section avec les chiffres
  const nextSectionRef = useRef<HTMLDivElement>(null); // nouvelle section pour scroll

  const [isVisible, setIsVisible] = useState(false);

  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.4 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let exp = 0,
      proj = 0,
      cli = 0;
    const interval = setInterval(() => {
      if (exp < 10) exp++;
      if (proj < 100) proj += 2;
      if (cli < 94) cli++;

      setExperience(exp);
      setProjects(proj);
      setClients(cli);

      if (exp >= 10 && proj >= 100 && cli >= 94) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [isVisible]);

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ✅ SECTION HERO */}
      <section className="relative h-screen text-white flex justify-center items-center overflow-hidden">

        {/* ✅ Image de fond */}
        <Image
          src="/images/bg-barber.png"
          alt="Arrière-plan barber"
          fill
          priority
          className="object-cover object-center brightness-[0.25] -z-10"
        />

        {/* ✅ Overlay sombre */}
        <div className="absolute inset-0 bg-black/40 -z-10" />

        {/* ✅ Navbar */}
        <div className="absolute top-0 w-full z-50">
          <Navbar />
        </div>

        {/* ✅ Contenu au centre */}
        <div className="relative z-20 text-center px-6 max-w-7xl">

          <h1 className="text-5xl md:text-6xl text-[#FFD400] font-extrabold uppercase leading-tight">
            Coupe Parfaite. Style Audacieux.<br />La Confiance Commence Ici.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-7xl mx-auto">
            Précision. Élégance. Excellence.
            Chaque coupe est réalisée comme une véritable œuvre,
            pensée pour mettre en valeur ta personnalité
            et t’offrir une confiance absolue.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
            <button className="bg-[#FFD400] text-black font-semibold text-lg px-10 py-4 cursor-pointer hover:bg-[#e6c200] transition-all">
              Prendre rendez-vous
            </button>

            <button className="border border-[#FFD400] text-[#FFD400] font-semibold text-lg px-10 py-4 cursor-pointer hover:bg-[#FFD400] hover:text-black transition-all">
              Voir les services
            </button>
          </div>

        
        </div>
      </section>
 
    </>
  );
}
