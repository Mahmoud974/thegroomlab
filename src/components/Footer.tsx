"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Phone, MapPin, Mail  } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full">

      <div className="bg-[#000000] text-white pt-20 pb-14 px-6 shadow-xl border-t border-[#FFD400]/40">

        <div className="container mx-auto flex flex-col items-center text-center gap-10">

          {/* Logo */}
          <Image
            src="/images/logo-THEGROOMLAB.png"
            alt="Logo Barber"
            width={150}
            height={150}
            className="opacity-90"
          />

        
          <p className="text-gray-400 text-sm leading-relaxed">
            Style. Précision. Excellence. <br />
            Nous révélons la meilleure version de toi — avec une coupe impeccable et un service premium.
          </p>

          
          <div className="flex flex-col md:flex-row gap-10 text-gray-300 text-sm mt-4">

           
            <div className="flex items-center gap-3 justify-center">
              <MapPin className="text-[#FFD400] w-5 h-5" />
              <span>12 rue Victor Hugo, 34000 Montpellier</span>
            </div>

       
            <div className="flex items-center gap-3 justify-center">
              <Phone className="text-[#FFD400] w-5 h-5" />
              <span>+33 06 12 34 56 78</span>
            </div>

    
            <div className="flex items-center gap-3 justify-center">
              <Mail className="text-[#FFD400] w-5 h-5" />
              <span>contact@thegroomlab.com</span>
            </div>
          </div>
 
          <div className="mt-4 text-center">
          

            <h3 className="mt-4 text-lg font-semibold tracking-wide">
              Mardi au Samedi
            </h3>

            <p className="text-gray-400 text-sm tracking-wide">11h00 - 20h00</p>
          </div>

       
          <div className="flex items-center gap-6 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-7 h-7 text-gray-400 hover:text-[#FFD400] transition cursor-pointer" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-7 h-7 text-gray-400 hover:text-[#FFD400] transition cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="w-full bg-[#FFD400] h-[3px] rounded-full mt-14"></div>

    
        <div className="flex flex-col  max-w-7xl md:flex-row justify-between container mx-auto items-center">

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-8 text-gray-400 text-xs">
            <Link href="/terms" className="hover:text-[#FFD400] transition">
              Termes et conditions
            </Link>
            <Link href="/privacy" className="hover:text-[#FFD400] transition">
              Politique de confidentialité
            </Link>
            <Link href="/legal" className="hover:text-[#FFD400] transition">
              Mentions légales
            </Link>
            <Link href="/cookies" className="hover:text-[#FFD400] transition">
              Politique de cookies
            </Link>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-500 text-xs tracking-wide">
              © {new Date().getFullYear()} — THEGROOMLAB. Tous droits réservés.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
