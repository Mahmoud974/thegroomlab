import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from  'react' 

export default function page() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFD400]">
          Termes et Conditions
        </h1>
        <p className="text-gray-400 text-sm mb-12">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
        </p>
        
        <div className="space-y-8 text-gray-300">
          
        
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. Réservations et Rendez-vous
            </h2>
            <p className="leading-relaxed">
              Les rendez-vous peuvent être pris en ligne, par téléphone ou directement au salon. 
              Nous recommandons de réserver à l{`'`}avance pour garantir votre créneau. En cas d{`'`}empêchement, 
              merci de nous prévenir au moins <strong>24 heures à l{`'`}avance</strong> pour annuler ou modifier votre rendez-vous.
            </p>
            <p className="leading-relaxed mt-3">
              Tout rendez-vous non honoré sans notification préalable pourra entraîner des frais équivalents à 50% du service réservé.
            </p>
          </section>

         
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. Services et Tarifs
            </h2>
            <p className="leading-relaxed">
              Les prestations proposées incluent coupes de cheveux, soins de la barbe, rasages traditionnels et traitements capillaires. 
              Les tarifs affichés sont susceptibles d{`'`}évoluer et sont consultables en salon ou sur notre site.
            </p>
            <p className="leading-relaxed mt-3">
              Toute prestation commencée est due en intégralité. Les paiements s{`'`}effectuent par carte bancaire, espèces ou chèque.
            </p>
          </section>

         
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. Hygiène et Sécurité
            </h2>
            <p className="leading-relaxed">
              THEGROOMLAB s{`'`}engage à respecter les normes d{`'`}hygiène et de sécurité les plus strictes. 
              Tout matériel est stérilisé entre chaque client. Nous utilisons exclusivement des produits professionnels de qualité.
            </p>
            <p className="leading-relaxed mt-3">
              Si vous présentez une affection cutanée ou une allergie connue, merci d{`'`}en informer votre barbier avant toute prestation.
            </p>
          </section>

           
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. Comportement au Salon
            </h2>
            <p className="leading-relaxed">
              Nous attendons de nos clients qu{`'`}ils respectent le personnel, les autres clients et les locaux. 
              Tout comportement inapproprié, irrespectueux ou menaçant entraînera une exclusion immédiate sans remboursement.
            </p>
          </section>

        
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. Responsabilité
            </h2>
            <p className="leading-relaxed">
              THEGROOMLAB met tout en œuvre pour garantir la satisfaction de ses clients. 
              Toutefois, la responsabilité du salon ne pourra être engagée en cas de résultat non conforme aux attentes 
              si les instructions du client n{`'`}étaient pas claires ou réalisables.
            </p>
            <p className="leading-relaxed mt-3">
              Nous déclinons toute responsabilité en cas de réaction allergique si le client n{`'`}a pas informé le personnel 
              de ses allergies connues.
            </p>
          </section>

        
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. Propriété Intellectuelle
            </h2>
            <p className="leading-relaxed">
              Tous les contenus présents sur ce site (textes, images, logos, vidéos) sont la propriété exclusive de THEGROOMLAB 
              et sont protégés par le droit d{`'`}auteur. Toute reproduction non autorisée est interdite.
            </p>
          </section>

     
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              7. Modifications des Conditions
            </h2>
            <p className="leading-relaxed">
              THEGROOMLAB se réserve le droit de modifier ces termes et conditions à tout moment. 
              Les modifications prendront effet dès leur publication sur cette page. 
              Nous vous invitons à consulter régulièrement cette page.
            </p>
          </section>

          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              8. Contact
            </h2>
            <p className="leading-relaxed">
              Pour toute question concernant ces termes et conditions, vous pouvez nous contacter :
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Par téléphone : <span className="text-[#FFD400]">+33 06 12 34 56 78</span></li>
              <li>Par email : <span className="text-[#FFD400]">contact@thegroomlab.com</span></li>
              <li>En salon : 12 rue Victor Hugo, 34000 Montpellier</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
