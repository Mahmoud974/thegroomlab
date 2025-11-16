"use client";

import Navbar from "@/components/Navbar"; // <- adapte le chemin si nécessaire
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400 mb-6">
          404
        </h1>

        <p className="text-xl md:text-2xl font-bold text-yellow-300 mb-3">
          PAGE INTROUVABLE.
        </p>

        <p className="text-lg text-gray-300 max-w-xl mb-8">
          L’endroit que tu cherches n’existe pas…  
          mais ton style, lui, existe toujours.
        </p>

        <Link
          href="/"
          className="px-6 py-3 border border-yellow-400 text-yellow-400  
          hover:bg-yellow-400 hover:text-black transition-all font-semibold"
        >
          Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}
