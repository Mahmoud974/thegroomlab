import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section className="relative h-[100vh] overflow-hidden text-white flex flex-col">
       
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/background-video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>

    
      <div className="absolute inset-0 bg-black/50"></div>

     
      <div className="relative z-10 flex flex-col justify-between h-full">
        <Navbar />

        <div className="container mx-auto text-left px-6 mt-60">
          <p className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Créez Votre Identité Visuelle <br />
            avec un{" "}
            <span className="bg-orange-500 px-3 py-1 transform">
              Site Unique
            </span>{" "}
            – <br />
            Design & Professionnalisme
          </p>
          <p className="text-xl md:text-2xl text-gray-200 max-w-5xl ">
            Un site web pensé sur mesure pour refléter votre image, captiver vos
            visiteurs et booster votre activité.
          </p>
      
      <div className="flex flex-col  md:flex-row justify-start items-start text-left mt-4">
 
  <div className="md:pr-6 pb-32">
    <h3 className="text-4xl font-bold text-orange-500 leading-none mb-0">10+</h3>
    <p className="uppercase tracking-wide font-semibold text-orange-500 mb-1">
      Expérience
    </p>
    <p className="text-gray-300 text-sm">
      Des années à transformer visuels<br /> percutants.
    </p>
  </div>

 
  <div className="hidden md:block h-28 border-l border-slate-100 mx-6 "></div>

 
  <div className="md:px-0">
    <h3 className="text-4xl font-bold text-orange-500 leading-none mb-0">100+</h3>
    <p className="uppercase tracking-wide font-semibold text-orange-500 mb-1">
      Projets Réalisés
    </p>
    <p className="text-gray-300 text-sm">
      Sites web modernes, logos, flyers et<br /> designs sur mesure.
    </p>
  </div>

 
  <div className="hidden md:block h-28 border-l border-slate-100 mx-6"></div>

 
  <div className="md:pl-0">
    <h3 className="text-4xl font-bold text-orange-500 leading-none mb-0">94%</h3>
    <p className="uppercase tracking-wide font-semibold text-orange-500 mb-1">
      Clients Satisfaits
    </p>
    <p className="text-gray-300 text-sm">
      Sites web modernes, logos,<br /> flyers et designs sur mesure.
    </p>
  </div>
</div>

        </div>

    
      </div>
    </section>
  );
}
