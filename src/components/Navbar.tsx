"use client";

import React, { useState, useEffect } from "react";
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
    { href: "/", label: "ACCUEIL" },
    { href: "/#ABOUTUS", label: "À PROPOS" },
    { href: "/services", label: "SERVICES" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-black"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo-THEGROOMLAB.png" alt="Logo Barber" width={240} height={240} />
          </Link>
  
          {/* ✅ MENU DESKTOP */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide uppercase text-white">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative transition duration-300 hover:text-[#FFD400] ${
                      isActive ? "text-[#FFD400]" : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
  
          <Link
            href="/appointment"
            className="hidden md:block bg-[#FFD400] text-black px-5 py-2 font-semibold uppercase text-sm hover:bg-[#cfa876] transition"
          >
            RÉSERVER UN RENDEZ-VOUS
          </Link>
  
          {/* 📱 Menu mobile */}
          <button onClick={() => setMenuOpen(true)} className="md:hidden text-white">
            <Menu size={32} />
          </button>
        </div>
  
        {/* ✅ BARRE PROMO SOUS LA NAVBAR */}
        <div className="w-full bg-[#FFD400] text-black text-center py-2 text-sm font-semibold tracking-wide">
          ✂️ OFFRE SPÉCIALE : -20% sur toutes les coupes du lundi au mercredi !
        </div>
      </nav>
  
 
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6">
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
          className="mt-10 bg-[#FFD400] text-black px-8 py-4 uppercase font-semibold tracking-wide"
        >
          Réserver un rendez-vous
        </Link>
      </div>
    </>
  );
  
}
