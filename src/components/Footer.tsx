"use client";

import Image from "next/image";
import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative">

      <div className="bg-[#000000] text-white pt-20 pb-14 px-6 shadow-xl border-t border-[#FFD400]/40">

        <div className="container mx-auto flex flex-col items-center text-center gap-10">

         
          <Image
            src="/images/logo-THEGROOMLAB.png"
            alt="Logo Barber"
            width={150}
            height={150}
            className="opacity-90"
          />

         
          <p className="text-gray-400 text-sm  leading-relaxed">
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
              <span>+33 06 52 34 76 91</span>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <Mail className="text-[#FFD400] w-5 h-5" />
              <span>contact@thegroomlab.com</span>
            </div>
          </div>
 
          <div className="flex items-center gap-6 mt-6">
            <Facebook className="w-7 h-7 text-gray-400 hover:text-[#FFD400] transition cursor-pointer" />
            <Instagram className="w-7 h-7 text-gray-400 hover:text-[#FFD400] transition cursor-pointer" />
          </div>
        </div>
 
        <div className="w-full bg-[#FFD400] h-[4px] -full mt-14"></div>
 
        <div className="text-center mt-6">
          <p className="text-gray-500 text-xs tracking-wide">
            © {new Date().getFullYear()} — THEGROOMLAB. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  );
}
