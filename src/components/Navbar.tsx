"use client";

import   { useState, useEffect } from "react";
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
          scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-black"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-5">

          {/* Logo RESPONSIVE */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-THEGROOMLAB.png"
              alt="Logo Barber"
              width={160}
              height={160}
              style={{ width: "auto", height: "auto" }} 
              className="w-28 sm:w-32 xl:w-48 object-contain"
            />
          </Link>

          {/*  MENU DESKTOP  */}
          <ul className="hidden xl:flex items-center gap-10 text-sm font-semibold tracking-wide uppercase text-white">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition hover:text-[#FFD400] ${
                    pathname === href ? "text-[#FFD400]" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/appointment"
            className="hidden xl:block bg-[#FFD400] text-black px-5 py-2 font-semibold uppercase text-sm hover:bg-[#cfa876] transition"
          >
            Réserver un rendez-vous
          </Link>

          {/*  BOUTON BURGER  */}
          <button
            onClick={() => setMenuOpen(true)}
            className="xl:hidden cursor-pointer text-white"
          >
            <Menu size={30} />
          </button>
        </div>

        <div className="w-full bg-[#FFD400] t text-black text-center py-2 text-[12px] md:text-sm font-semibold">
        <p className="text-lg">
        💈✂️ OFFRE SPÉCIALE : -20% sur toutes les coupes du lundi au mercredi !
        </p>
        </div>
      </nav>

      {/*   MENU MOBILE  */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 z-[9999] xl:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute cursor-pointer top-6 right-6 text-white hover:text-[#FFD400]"
          >
            <X size={38} />
          </button>

          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-semibold tracking-widest hover:text-[#FFD400] transition"
            >
              {label}
            </Link>
          ))}

          <Link
            href="/appointment"
            onClick={() => setMenuOpen(false)}
            className="bg-[#FFD400] text-black px-8 py-4 uppercase font-semibold tracking-wide hover:bg-[#cfa876] transition"
          >
            Réserver un rendez-vous
          </Link>
        </div>
      )}
    </>
  );
}
