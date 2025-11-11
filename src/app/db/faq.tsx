export interface ServiceBarber {
    question: string;
    answer: string;
  }
  
  export const faqs: ServiceBarber[] = [
    {
      question: "Puis-je venir sans rendez-vous ?",
      answer:
        "Oui, il est possible de venir sans rendez-vous. Cependant, nous fonctionnons principalement sur réservation. Sans rendez-vous, l’attente peut varier en fonction de l’affluence. Pour garantir un créneau et éviter toute attente, nous vous recommandons vivement de prendre rendez-vous en ligne ou par téléphone.",
    },
    {
      question: "Combien de temps dure une coupe ou une taille de barbe ?",
      answer:
        "Une coupe dure en moyenne entre 30 et 45 minutes selon le style souhaité et la densité des cheveux. La taille de barbe dure entre 15 et 30 minutes. Nous prenons le temps d’écouter votre demande, d’ajuster les contours et de réaliser des finitions précises afin d’obtenir un résultat impeccable.",
    },
    {
      question: "Vous utilisez quoi pour la finition barbe ?",
      answer:
        "Nous réalisons la finition de la barbe à la lame pour une précision maximale. La prestation inclut une serviette chaude afin de préparer la peau et ouvrir les pores, suivie de l'application de soins apaisants et nourrissants. Tous nos produits sont professionnels et adaptés aux peaux sensibles.",
    },
    {
      question: "Est-ce que vous coupez les cheveux des enfants ?",
      answer:
        "Oui, nous proposons des prestations coupe pour enfants. Nous adaptons notre approche pour que l’expérience soit agréable et rassurante. Nous prenons le temps nécessaire afin que l’enfant se sente à l’aise, tout en garantissant un résultat propre et soigné.",
    },
    {
      question: "Est-ce que vous faites des transformations (dégradé + barbe) ?",
      answer:
        "Oui, nous réalisons des prestations complètes incluant coupe + barbe + coiffage + finitions à la lame. Nous pouvons également effectuer des transformations plus importantes (style + longueur + couleur si nécessaire). L’objectif : harmoniser coupe et barbe pour un résultat cohérent et stylé.",
    },
    {
      question: "Quels moyens de paiement acceptez-vous ?",
      answer:
        "Nous acceptons le paiement par carte bancaire, espèces et paiement sur place. Si vous réservez en ligne, certains créneaux peuvent également proposer le paiement sécurisé par carte lors de la prise de rendez-vous.",
    },
  ];
  