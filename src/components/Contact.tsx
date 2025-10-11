export default function Contact() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-white py-42 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/background-contact.png')",
      }}
    >
      {/* Overlay sombre pour le contraste */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-5xl font-bold mb-8 inline-block">
          <span className="bg-orange-600 px-6 py-2 inline-block transform -rotate-2">
            Contact
          </span>
        </h2>

        <p className="text-center text-white/90 text-lg max-w-5xl mb-10 leading-relaxed">
          Chaque projet naît d’un besoin concret, évolue grâce à des solutions visuelles adaptées,
          et s’accomplit dans la réussite de vos objectifs.
        </p>

       
        <form className="space-y-6 flex flex-col justify-center w-full max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Nom complet"
              className="w-full bg-white/10 border border-white/40 text-white placeholder-white/70 px-4 py-3  focus:border-white focus:ring-2 focus:ring-purple-700 transition"
            />
            <input
              type="email"
              placeholder="Adresse e-mail"
              className="w-full bg-white/10 border border-white/40 text-white placeholder-white/70 px-4 py-3  focus:border-white focus:ring-2 focus:ring-purple-700 transition"
            />
          </div>

          <textarea
            rows={6}
            placeholder="Votre message..."
            className="w-full bg-white/10 border border-white/40 text-white placeholder-white/70 px-4 py-3  focus:border-white focus:ring-2 focus:ring-purple-700 resize-none transition"
          ></textarea>

          <div className="flex justify-center pt-4">
            <button className="bg-orange-600 hover:bg-purple-800 text-white font-bold py-3 px-12  text-lg transition-all duration-300 shadow-lg hover:shadow-purple-900/40">
              Envoyer le message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
