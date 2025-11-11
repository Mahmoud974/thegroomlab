import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FFD400]">
            Politique en matière de Cookies
          </h1>

          {/* SECTION 1 */}
          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-semibold text-white">1. Qu&apos;est-ce qu&apos;un cookie ?</h2>

            <p className="text-gray-300 leading-relaxed">
              Un cookie est un petit fichier constitué de lettres et de chiffres, et téléchargé sur
              votre ordinateur lorsque vous accédez à certains sites Web.
              En général, les cookies permettent à un site Web de reconnaître l&apos;ordinateur de l&apos;utilisateur.
            </p>

            <p className="text-gray-300 leading-relaxed">
              La chose la plus importante à savoir sur les cookies que nous plaçons est qu&apos;ils servent
              à améliorer la convivialité de notre site web, par exemple en mémorisant vos préférences
              du site et les paramètres linguistiques.
            </p>
          </section>

          {/* SECTION 2 */}
          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-semibold text-white">2. Pourquoi utilisons-nous des cookies ?</h2>

            <p className="text-gray-300 leading-relaxed">
              Nous pouvons utiliser des cookies et d&apos;autres technologies similaires pour :
            </p>

            <ul className="list-disc list-inside space-y-2 ml-3 text-gray-300">
              <li>des besoins de sécurité ou de protection contre la fraude,</li>
              <li>identifier et prévenir les cyber-attaques,</li>
              <li>vous fournir le service que vous avez choisi de recevoir de notre part,</li>
              <li>contrôler et analyser les performances et l’efficacité du service,</li>
              <li>améliorer votre expérience utilisateur.</li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-semibold text-white">3. Tableau des cookies :</h2>

            <p className="text-gray-300 leading-relaxed">
              Dans cette section, vous devez mentionner les cookies que vous utilisez sur votre site.
              Pour plus d&apos;informations, cliquez ici.
            </p>
          </section>

          {/* SECTION 4 */}
          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-white">4. Vos choix :</h2>

            <p className="text-gray-300 leading-relaxed">
              Pour en savoir plus sur les cookies, notamment sur la manière de voir quels cookies ont
              été définis et de comprendre comment les gérer, les supprimer ou les bloquer, visitez :
              <br />
              <a href="https://aboutcookies.org/" target="_blank" className="text-[#FFD400] underline">
                https://aboutcookies.org/
              </a>{" "}
              ou{" "}
              <a href="https://www.allaboutcookies.org/fr/" target="_blank" className="text-[#FFD400] underline">
                https://www.allaboutcookies.org/fr/
              </a>
            </p>

            <p className="text-gray-300 leading-relaxed">
              Il est également possible d&apos;empêcher votre navigateur d&apos;accepter les cookies en modifiant les
              paramètres concernés dans votre navigateur. Vous pouvez généralement trouver ces paramètres
              dans le menu « Options » ou « Préférences » de votre navigateur.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Veuillez noter que la suppression de nos cookies ou la désactivation de futurs cookies ou
              technologies de suivi pourront vous empêcher d&apos;accéder à certaines zones ou
              fonctionnalités de nos services, ou pourront affecter négativement votre expérience utilisateur.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Les liens suivants peuvent être utiles, ou vous pouvez utiliser l&apos;option « Aide » de votre navigateur.
            </p>

            <ul className="list-disc list-inside space-y-2 ml-3 text-[#FFD400]">
              <li><a href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" target="_blank" className="underline">Paramètres des cookies dans Firefox</a></li>
              <li><a href="https://support.microsoft.com/fr-fr/topic/suppression-et-gestion-des-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" className="underline">Paramètres des cookies dans Internet Explorer</a></li>
              <li><a href="https://support.google.com/chrome/answer/95647?hl=fr" target="_blank" className="underline">Paramètres des cookies dans Google Chrome</a></li>
              <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" className="underline">Paramètres des cookies dans Safari (OS X)</a></li>
              <li><a href="https://support.apple.com/fr-fr/HT201265" target="_blank" className="underline">Paramètres des cookies dans Safari (iOS)</a></li>
              <li><a href="https://support.google.com/chrome/answer/95647?hl=fr&co=GENIE.Platform%3DAndroid" target="_blank" className="underline">Paramètres des cookies dans Android</a></li>
            </ul>

            <p className="text-gray-300 leading-relaxed mt-6">
              Pour refuser que vos données soient utilisées par Google Analytics :
              <br />
              <a
                href="https://tools.google.com/dlpage/gaoptout?hl=fr"
                target="_blank"
                className="text-[#FFD400] underline"
              >
                https://tools.google.com/dlpage/gaoptout?hl=fr
              </a>
            </p>

            <p className="text-gray-400 leading-relaxed mt-6">
              Il se peut que nous modifions cette politique en matière de cookies.
              Nous vous encourageons à consulter régulièrement cette page pour obtenir
              les dernières informations.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
