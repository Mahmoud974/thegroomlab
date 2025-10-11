import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-24    ">
     
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-16 pb-16">
        
        
        <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/images/logo.png"
            alt="Logo Manuscrit Graphisme"
            width={500}
            height={500}
            className="mb-4"
          />
          
        </div>

        {/* --- LIENS PRINCIPAUX --- */}
        <div className="flex flex-wrap md:w-2/3 justify-center md:justify-end gap-16 text-center md:text-left">
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 border-b border-orange-500/30 inline-block pb-1">
              À propos
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-orange-500 transition cursor-pointer">Notre agence</li>
              <li className="hover:text-orange-500 transition cursor-pointer">Équipe</li>
              <li className="hover:text-orange-500 transition cursor-pointer">Carrières</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4 border-b border-orange-500/30 inline-block pb-1">
              Services
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-orange-500 transition cursor-pointer">Organisation</li>
              <li className="hover:text-orange-500 transition cursor-pointer">Graphisme</li>
              <li className="hover:text-orange-500 transition cursor-pointer">Développement</li>
              <li className="hover:text-orange-500 transition cursor-pointer">Personnalisation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4 border-b border-orange-500/30 inline-block pb-1">
              Réalisations
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-orange-500 transition cursor-pointer">Logo</li>
              <li className="hover:text-orange-500 transition cursor-pointer">Site Web</li>
              <li className="hover:text-orange-500 transition cursor-pointer">Flyer</li>
              <li className="hover:text-orange-500 transition cursor-pointer">Packaging</li>
            </ul>
          </div>

          {/* --- NOUVELLE COLONNE : RÉSEAUX SOCIAUX --- */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 border-b border-orange-500/30 inline-block pb-1">
              Suivez-nous
            </h3>
            <div className="flex gap-5 justify-center md:justify-start mt-2">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- COPYRIGHT --- */}
      <div className="w-full py-6 bg-black text-center text-sm text-gray-400 border-t border-gray-800">
        <p>
          <span className="hover:text-orange-500 cursor-pointer transition">
            Mentions légales
          </span>{" "}
          •{" "}
          <span className="hover:text-orange-500 cursor-pointer transition">
            Politique de confidentialité
          </span>{" "}
          | Copyright © 2026 Manuscrit Graphisme
        </p>
      </div>
    </footer>
  );
}
