import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
 

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFD400]">
            Politique de Confidentialité
          </h1>
          <p className="text-gray-400 text-sm mb-12">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <div className="space-y-8 text-gray-300">
            
     
            <section>
              <p className="leading-relaxed">
                Chez <strong className="text-white">THEGROOMLAB</strong>, nous accordons une grande importance à la protection de vos données personnelles. 
                Cette politique de confidentialité explique quelles informations nous collectons, comment nous les utilisons, 
                et quels sont vos droits concernant vos données.
              </p>
            </section>

        
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                1. Informations que nous collectons
              </h2>
              <p className="leading-relaxed mb-3">
                Nous pouvons collecter les types d{`'`}informations suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Informations d{`'`}identité :</strong> nom, prénom, date de naissance</li>
                <li><strong>Coordonnées :</strong> adresse email, numéro de téléphone, adresse postale</li>
                <li><strong>Données de réservation :</strong> historique des rendez-vous, préférences de services</li>
                <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées</li>
                <li><strong>Données de paiement :</strong> informations bancaires (traitées de manière sécurisée)</li>
              </ul>
            </section>

       
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                2. Comment nous recueillons les informations
              </h2>
              <p className="leading-relaxed mb-3">
                Vos données personnelles sont collectées de différentes manières :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Lors de la prise de rendez-vous en ligne ou par téléphone</li>
               
                <li>Via les formulaires de contact sur notre site</li>
                <li>Automatiquement lors de votre navigation sur notre site (cookies)</li>
                <li>En salon, lors de votre première visite</li>
              </ul>
            </section>

          
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                3. Pourquoi nous recueillons ces informations
              </h2>
              <p className="leading-relaxed mb-3">
                Nous utilisons vos données personnelles pour :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Gérer vos réservations et rendez-vous</li>
                <li>Vous contacter concernant vos prestations</li>
                <li>Améliorer nos services et votre expérience client</li>
                <li>Vous envoyer des offres promotionnelles (avec votre consentement)</li>
                <li>Respecter nos obligations légales et comptables</li>
                <li>Analyser le trafic et l{`'`}utilisation de notre site web</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                4. Avec qui nous partageons vos informations
              </h2>
              <p className="leading-relaxed mb-3">
                THEGROOMLAB ne vend ni ne loue vos données personnelles à des tiers. 
                Nous pouvons partager vos informations uniquement avec :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nos prestataires de services (hébergement web, système de réservation, paiement en ligne)</li>
                <li>Les autorités légales si la loi l{`'`}exige</li>
                <li>Nos partenaires marketing (avec votre consentement explicite)</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Tous nos partenaires sont tenus de respecter la confidentialité de vos données et de les utiliser 
                uniquement dans le cadre des services qu{`'`}ils nous fournissent.
              </p>
            </section>

         
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                5. Où sont stockées vos informations
              </h2>
              <p className="leading-relaxed">
                Vos données sont stockées sur des serveurs sécurisés situés en France et dans l{`'`}Union Européenne. 
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées 
                pour protéger vos informations contre tout accès non autorisé, perte ou destruction.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                6. Combien de temps nous conservons vos informations
              </h2>
              <p className="leading-relaxed mb-3">
                Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités 
                pour lesquelles elles ont été collectées :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Données clients actifs :</strong> pendant toute la durée de la relation commerciale</li>
                <li><strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
                <li><strong>Données marketing :</strong> 3 ans après le dernier contact</li>
                <li><strong>Cookies :</strong> 13 mois maximum</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Passé ces délais, vos données sont supprimées ou anonymisées.
              </p>
            </section>

           
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                7. Comment nous protégeons vos informations
              </h2>
              <p className="leading-relaxed">
                Nous utilisons des protocoles de sécurité avancés incluant le cryptage SSL, 
                des pare-feu, des sauvegardes régulières et un accès restreint aux données. 
                Seul le personnel autorisé peut accéder à vos informations personnelles.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                8. Vos droits (RGPD)
              </h2>
              <p className="leading-relaxed mb-3">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Droit d{`'`}accès :</strong> consulter les données que nous détenons sur vous</li>
                <li><strong>Droit de rectification :</strong> corriger vos informations inexactes</li>
                <li><strong>Droit à l{`'`}effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                <li><strong>Droit d{`'`}opposition :</strong> refuser certains traitements de vos données</li>
                <li><strong>Droit de limitation :</strong> restreindre l{`'`}utilisation de vos données</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Pour exercer ces droits, contactez-nous à : 
                <span className="text-[#FFD400] font-semibold"> contact@thegroomlab.com</span>
              </p>
            </section>

        
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                9. Cookies et technologies similaires
              </h2>
              <p className="leading-relaxed mb-3">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur.
              </p>
              <p className="leading-relaxed">
                Pour plus d{`'`}informations, consultez notre <a href="/cookies" className="text-[#FFD400] hover:underline">Politique de Cookies</a>.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                10. Modifications de cette politique
              </h2>
              <p className="leading-relaxed">
                THEGROOMLAB se réserve le droit de modifier cette politique de confidentialité à tout moment. 
                Toute modification sera publiée sur cette page avec une date de mise à jour actualisée. 
                Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>

         
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">
                11. Contact
              </h2>
              <p className="leading-relaxed mb-3">
                Pour toute question concernant cette politique de confidentialité ou l{`'`}utilisation de vos données personnelles, 
                vous pouvez nous contacter :
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Par téléphone : <span className="text-[#FFD400]">+33 06 12 34 56 78</span></li>
                <li>Par email : <span className="text-[#FFD400]">contact@thegroomlab.com</span></li>
                <li>En salon : 12 rue Victor Hugo, 34000 Montpellier</li>
              </ul>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}