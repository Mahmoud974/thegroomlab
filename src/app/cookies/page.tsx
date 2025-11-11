import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
 

export default function CookiesPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFD400]">
            Politique en matière de Cookies
          </h1>

          <p className="text-gray-400 text-sm mb-12">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>

          <div className="space-y-10 text-gray-300">

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                1. Qu’est-ce qu’un cookie ?
              </h2>
              <p className="leading-relaxed">
                Un cookie est un petit fichier constitué de lettres et de chiffres, enregistré sur
                votre appareil lorsque vous accédez à certains sites Web.
                Il permet à un site Web de reconnaître l’ordinateur ou l’appareil de l’utilisateur.
              </p>
              <p className="leading-relaxed mt-3">
                Les cookies que nous plaçons servent principalement à améliorer votre expérience sur
                notre site, comme mémoriser vos préférences ou votre langue.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                2. Pourquoi utilisons-nous des cookies ?
              </h2>

              <p className="leading-relaxed mb-3">
                Nous pouvons utiliser des cookies pour les raisons suivantes :
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Assurer la sécurité et prévenir la fraude</li>
                <li>Identifier et prévenir les cyber-attaques</li>
                <li>Vous fournir les services que vous avez demandés</li>
                <li>Analyser les performances et améliorer le fonctionnement du site</li>
                <li>Améliorer votre expérience utilisateur</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                3. Tableau des cookies
              </h2>
              <p className="leading-relaxed">
                Dans cette section, nous indiquerons les cookies utilisés sur ce site :
                cookies essentiels, de personnalisation, de performance ou d’analyse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                4. Vos choix
              </h2>

              <p className="leading-relaxed mb-3">
                Pour en savoir plus sur les cookies, notamment comment les gérer, les supprimer
                ou les bloquer, vous pouvez consulter :
                <br />
                <a href="https://aboutcookies.org/" target="_blank" className="text-[#FFD400] underline">
                  https://aboutcookies.org/
                </a>{" "}
                ou{" "}
                <a href="https://www.allaboutcookies.org/fr/" target="_blank" className="text-[#FFD400] underline">
                  https://www.allaboutcookies.org/fr/
                </a>
              </p>

              <p className="leading-relaxed mb-3">
                Vous pouvez également empêcher votre navigateur d’accepter les cookies dans ses paramètres.
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4 text-[#FFD400]">
                <li><a href="https://support.mozilla.org/fr/kb/cookies" target="_blank" className="underline">Firefox</a></li>
                <li><a href="https://support.microsoft.com/fr-fr/topic/suppression-et-gestion-des-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" className="underline">Internet Explorer</a></li>
                <li><a href="https://support.google.com/chrome/answer/95647?hl=fr" target="_blank" className="underline">Google Chrome</a></li>
                <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" className="underline">Safari (macOS)</a></li>
                <li><a href="https://support.apple.com/fr-fr/HT201265" target="_blank" className="underline">Safari (iPhone / iPad)</a></li>
                <li><a href="https://support.google.com/chrome/answer/95647?hl=fr&co=GENIE.Platform%3DAndroid" target="_blank" className="underline">Android</a></li>
              </ul>

              <p className="leading-relaxed mt-4">
                Pour bloquer Google Analytics :
                <br />
                <a
                  href="https://tools.google.com/dlpage/gaoptout?hl=fr"
                  target="_blank"
                  className="text-[#FFD400] underline"
                >
                  https://tools.google.com/dlpage/gaoptout?hl=fr
                </a>
              </p>

              <p className="leading-relaxed text-gray-400 mt-6">
                Cette politique peut être mise à jour. Nous vous invitons à consulter cette page régulièrement.
              </p>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
