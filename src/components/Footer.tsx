import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-24">
      {/* --- CONTENU PRINCIPAL --- */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10 pb-30">
        {/* LOGO */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <Image
            src="/images/logo.png"
            alt="Logo Manuscrit Graphisme"
            width={380}
            height={380}
            className="mb-6"
          />
        </div>

     
        <div className="flex flex-wrap md:w-2/3 justify-center md:justify-between gap-10 text-center md:text-left">
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
          <div className="flex gap-5 items-start justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

     
      <div className="w-full   bg-purple-900 py-4">
        <p className="text-center text-sm text-white font-medium">
          <span className="hover:underline cursor-pointer">Mentions légales</span> •{" "}
          <span className="hover:underline cursor-pointer">Politique de confidentialité</span> |{" "}
          Copyright © 2026
        </p>
      </div>
    </footer>
  );
}
