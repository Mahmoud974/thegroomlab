export default function Contact() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/background-contact.png')", // <-- ton image de fond
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenu */}
      <div className="relative z-10 w-full max-w-3xl text-center px-6">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          <span className="bg-orange-500 px-6 py-2 rounded-md text-white">
            Contactez-nous
          </span>
        </h2>

        {/* Formulaire */}
        <form className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-200 mb-2">NOM</label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full bg-transparent border border-orange-500 text-white px-4 py-3 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-200 mb-2">NUMÉRO DE TÉLÉPHONE</label>
              <input
                type="tel"
                placeholder="06 12 34 56 78"
                className="w-full bg-transparent border border-orange-500 text-white px-4 py-3 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-200 mb-2">E-MAIL *</label>
            <input
              type="email"
              placeholder="exemple@email.com"
              className="w-full bg-transparent border border-orange-500 text-white px-4 py-3 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-200 mb-2">COMMENTAIRE</label>
            <textarea
              rows={5}
              placeholder="Votre message..."
              className="w-full bg-transparent border border-orange-500 text-white px-4 py-3 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            ></textarea>
          </div>

          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-12 rounded-full text-lg transition"
            >
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
