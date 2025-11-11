export interface ServiceBarber {
  title: string;
  price: number;
  image: string;
  desc: string;
}

export const servicesBarber: ServiceBarber[] = [
  {
    title: "Dégradé Classique",
    price: 25,
    image: "/images/icons/hair.png",
    desc: "Coupe propre, structurée et élégante.",
  },
  {
    title: "Taille de Barbe",
    price: 15,
    image: "/images/icons/beard.png",
    desc: "Barbe sculptée + finitions rasoir.",
  },
  {
    title: "Rasage Traditionnel",
    price: 20,
    image: "/images/icons/rasoir.png",
    desc: "Serviette chaude + rasage à l’ancienne.",
  },
  {
    title: "Coloration / Retouche",
    price: 30,
    image: "/images/icons/product.png",
    desc: "Coloration ou camouflage cheveux blancs.",
  },
  {
    title: "Soin Visage",
    price: 20,
    image: "/images/icons/face.png",
    desc: "Nettoyage, gommage et hydratation.",
  },
  {
    title: "Shampoing + Soin",
    price: 10,
    image: "/images/icons/shampoo.png",
    desc: "Lavage + massage crânien relaxant.",
  },
];
