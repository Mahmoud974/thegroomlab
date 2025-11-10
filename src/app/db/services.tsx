import { Scissors, UserRound, SprayCan, Bath, Gauge, Sparkles } from "lucide-react";

 
export interface ServiceBarber {
  title: string;
  price: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  desc: string;
}

export const servicesBarber: ServiceBarber[] = [
  {
    title: "Dégradé Classique",
    price: 25,
    icon: Scissors,
    desc: "Coupe propre, structurée et élégante.",
  },
  {
    title: "Taille de Barbe",
    price: 15,
    icon: UserRound,
    desc: "Barbe sculptée + finitions rasoir.",
  },
  {
    title: "Rasage Traditionnel",
    price: 20,
    icon: Gauge,
    desc: "Serviette chaude + rasage à l’ancienne.",
  },
  {
    title: "Coloration / Retouche",
    price: 30,
    icon: SprayCan,
    desc: "Coloration ou camouflage cheveux blancs.",
  },
  {
    title: "Soin Visage",
    price: 20,
    icon: Sparkles,
    desc: "Nettoyage, gommage et hydratation.",
  },
  {
    title: "Shampoing + Soin",
    price: 10,
    icon: Bath,
    desc: "Lavage + massage crânien relaxant.",
  },
];
