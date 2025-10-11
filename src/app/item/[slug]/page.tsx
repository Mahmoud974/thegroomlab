import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <>
      <div className="relative">
        {/* Navbar superposée */}
        <Navbar />

        <section
          className="relative flex flex-col items-center justify-center text-white px-6 bg-cover bg-center bg-no-repeat min-h-screen"
          style={{
            backgroundImage: "url('/images/background-grey.png')",
          }}
        >
          {/* Fil d’Ariane */}
          <nav className="text-sm mb-10 relative z-10 mt-60 w-full flex justify-start container">
            <div>
              <Link href="/" className="text-orange-500 hover:underline font-medium">
                Accueil
              </Link>{" "}
              <span className="text-gray-500"> &gt; </span>{" "}
              <span className="text-gray-200"> O{`'`}Pizza</span>
            </div>
          </nav>

          {/* Titre principal */}
          <div className="relative z-10 text-center max-w-4xl mx-auto mb-24">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
              O{`'`}Pizza
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-100">
              Identité graphique – Stylé · Audacieux · Délicieux
            </p>
          </div>

          {/* Section infos */}
          <div className="grid grid-cols-1 md:grid-cols-3 container mb-16 items-start mx-auto gap-12">
            {/* Colonne gauche */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">Outils utilisés</h2>
              <ul className="space-y-2 text-lg">
                <li>• Adobe Photoshop</li>
                <li>• Adobe Illustrator</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-orange-500">Code(s) couleur(s)</h2>
              <div className="w-full flex justify-center mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full max-w-6xl">
                  <div className="h-24 bg-[#1717bc] flex items-center justify-center text-white font-medium text-lg">
                    #1717bc
                  </div>
                  <div className="h-24 bg-[#bbc2ff] flex items-center justify-center text-black font-medium text-lg">
                    #bbc2ff
                  </div>
                  <div className="h-24 bg-[#ff6942] flex items-center justify-center text-white font-medium text-lg">
                    #ff6942
                  </div>
                  <div className="h-24 bg-[#ffcbbf] flex items-center justify-center text-black font-medium text-lg">
                    #ffcbbf
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-orange-500">Description</h2>
              <div className="w-full flex justify-center mt-6">
                <p className="max-w-xl text-gray-200   text-lg text-justify  ">
                  Une identité visuelle savoureuse qui combine style et audace. 
                  Cette composition met en valeur les couleurs chaleureuses et modernes de la marque, 
                  ainsi qu’un logo dynamique et expressif.
                </p>
              </div>
            </div>

            {/* Colonne du milieu */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-orange-500">Projet</h2>
              <ul className="space-y-2 text-lg">
                <li>• Identité visuelle</li>
                <li>• Logo mascotte</li>
              </ul>
            </div>

            {/* Colonne droite (image) */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/portfolios/menu.png"
                alt="Logo Mondo Pizza"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>

          {/* Images de présentation */}
          <div className="grid md:grid-cols-3 container gap-10 items-center relative z-10 mb-16">
            <div className="flex justify-center">
              <Image
                src="/images/portfolios/menu.png"
                alt="Mondo Pizza branding mockups"
                width={600}
                height={600}
                className="shadow-md object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/portfolios/menu.png"
                alt="Mondo Pizza branding mockups"
                width={600}
                height={600}
                className="shadow-md object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/portfolios/menu.png"
                alt="Mondo Pizza branding mockups"
                width={600}
                height={600}
                className="shadow-md object-contain"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
