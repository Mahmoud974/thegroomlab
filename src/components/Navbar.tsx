"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

 
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/#Tarifs", label: "Tarifs" },
    { href: "/#Galerie", label: "Galerie" },
    { href: "/#FAQ", label: "FAQ" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-lg shadow-2xl" : "bg-black"
        }`}
      >
        <div className="w-full">
       
          <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-18 md:h-20 px-4 sm:px-6 lg:px-8">
          
            <Link href="/" className="flex items-center flex-shrink-0 z-10">
            <Image
  src="/images/logo-THEGROOMLAB.png"
  alt="Logo The Groom Lab"
  width={192}
  height={192}
  priority
  className="h-8 sm:h-10 md:h-12 lg:h-9 w-auto object-contain transition-all duration-300"
/>

            </Link>

            {/* MENU DESKTOP - Aligné à droite avant le bouton */}
            <ul className="hidden xl:flex items-center gap-8 2xl:gap-10 text-sm font-semibold tracking-wider uppercase text-white">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative transition-colors duration-300 hover:text-[#FFD400] group ${
                      pathname === href ? "text-[#FFD400]" : ""
                    }`}
                  >
                    {label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD400] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

          
            <Link
              href="/appointment"
              className="hidden xl:block bg-[#FFD400] text-black px-6 py-2.5 font-bold uppercase text-sm hover:bg-[#e6c000] transition-all duration-300 whitespace-nowrap"
            >
              Réserver un rendez-vous
            </Link>

          
            <button
              onClick={() => setMenuOpen(true)}
              className="xl:hidden cursor-pointer text-white hover:text-[#FFD400] transition-colors duration-300 p-2 z-10"
              aria-label="Ouvrir le menu"
            >
              <Menu size={28} strokeWidth={2.5} />
            </button>
          </div>

          {/* Bandeau promotionnel - IDENTIQUE À L'IMAGE */}
          <div className="w-full bg-[#FFD400] text-black text-center py-2">
            <p className="text-sm font-semibold px-4">
              💈✂️ OFFRE SPÉCIALE : -20% sur toutes les coupes du lundi au mercredi !
            </p>
          </div>
        </div>
      </nav>

      {/* MENU MOBILE - Overlay animé */}
      <div
        className={`fixed inset-0 bg-black/98 backdrop-blur-lg flex flex-col items-center justify-center gap-6 sm:gap-8 z-[9999] xl:hidden transition-all duration-500 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Bouton fermeture */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 text-white hover:text-[#FFD400] transition-all duration-300 hover:rotate-90 p-2"
          aria-label="Fermer le menu"
        >
          <X size={36} strokeWidth={2.5} />
        </button>

        {/* Logo dans le menu mobile */}
        <div className="mb-4">
          <Image
            src="/images/logo-THEGROOMLAB.png"
            alt="Logo The Groom Lab"
            width={120}
            height={120}
            className="w-28 sm:w-32 h-auto object-contain opacity-80"
          />
        </div>

        {/* Liens de navigation */}
        <nav className="flex flex-col items-center gap-4 sm:gap-6">
          {navLinks.map(({ href, label }, index) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-white hover:text-[#FFD400] transition-all duration-300 hover:scale-110 ${
                menuOpen ? "animate-fade-in" : ""
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Bouton RDV mobile */}
        <Link
          href="/appointment"
          onClick={() => setMenuOpen(false)}
          className="mt-4 bg-[#FFD400] text-black px-8 sm:px-10 py-3 sm:py-4 uppercase font-bold tracking-wider text-base sm:text-lg hover:bg-[#e6c000] hover:scale-105 transition-all duration-300 shadow-2xl"
        >
          Prise de rendez-vous
        </Link>
      </div>

 
      <div className="h-[100px] sm:h-[110px] md:h-[120px] lg:h-[130px]"></div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}