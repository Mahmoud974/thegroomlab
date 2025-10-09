import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* --- LOGO + DESCRIPTION --- */}
        <div className="md:w-1/3">
          <Image
            src="/images/logo.png"
            alt="Logo Manuscrit Graphisme"
            width={250}
            height={250}
            className="mb-4"
          />
          <p className="text-gray-400 leading-relaxed">
            L’agence explore chaque pixel et défie la monotonie visuelle.
            <br /> <br />
            • Web design <br />
            • Print <br />
            • Création de marque
          </p>

          <div className="mt-4">
            <p className="text-sm text-gray-400 font-light">→ BOUTEILLER</p>
            <p className="text-sm text-gray-400 font-light">
              33 Rue Saint-Honoré, <br /> 75001 Paris
            </p>
          </div>
        </div>

        {/* --- COLONNES DE LIENS --- */}
        <div className="flex flex-wrap md:w-2/3 justify-between gap-10">
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">À Propos</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Notre agence</li>
              <li>Équipe</li>
              <li>Carrières</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Organisation</li>
              <li>Graphisme</li>
              <li>Développement</li>
              <li>Personnalisation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Catégories</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Logo</li>
              <li>Site Web</li>
              <li>Flyer</li>
              <li>Packaging</li>
            </ul>
          </div>

          {/* --- ICON LINKEDIN --- */}
          <div className="flex items-start">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition"
            >
              <Linkedin className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>

      {/* --- LIGNE BAS DE PAGE --- */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-purple-700 via-purple-600 to-orange-500 h-[4px]"></div>

      <div className="text-center mt-10 text-sm text-gray-400">
        <p>
          <span className="text-purple-400 hover:underline cursor-pointer">
            Mentions légales
          </span>{" "}
          •{" "}
          <span className="text-purple-400 hover:underline cursor-pointer">
            Politique de confidentialité
          </span>{" "}
          | Copyright © 2026
        </p>
      </div>
    </footer>
  );
}
