import { Lightbulb, Brain, Clock, Monitor, Smile, Megaphone, Globe, Star, Headphones } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "SEO-Friendly Suggestions",
      description: "Enhance your content’s discoverability with captions optimized for search engines.",
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 2,
      title: "AI-Powered Creativity",
      description: "Harness the creative potential of AI captioning options that engage and inspire your audience.",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 3,
      title: "Cost and Time Saving",
      description: "Save time by generating captions effortlessly, allowing you to focus on creating great content.",
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      highlight: true, // 🔸 carte orange
    },
    {
      id: 4,
      title: "Intuitive User Interface",
      description: "Navigate our intuitive interface with ease, making caption generation a breeze for all users.",
      icon: <Monitor className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 5,
      title: "Emoji Integration",
      description: "Easily integrate emojis and emoticons to add expression and fun to your messages effectively.",
      icon: <Smile className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 6,
      title: "Call to Action",
      description: "Persuasively prompt your followers to take action with compelling calls to action included in every caption.",
      icon: <Megaphone className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 7,
      title: "Multilingual Support",
      description: "Reach a global audience effortlessly with captions available in multiple languages.",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 8,
      title: "Improved Branding",
      description: "Enhance your brand identity with captions that align seamlessly with your unique style and voice.",
      icon: <Star className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 9,
      title: "Dedicated Support",
      description: "Stay ahead with regular updates and improvements to keep your captions fresh and engaging.",
      icon: <Headphones className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white py-24"
      style={{
        backgroundImage: "url('/images/background-grey.png')",
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 container mx-auto text-center px-4">
        {/* Titre */}
        <h2 className="text-5xl font-extrabold mb-4">
          <span className="bg-orange-500 px-4 py-2 rounded-md">Services</span>
        </h2>

        {/* Sous-titre */}
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-16">
          Chaque collaboration démarre par l’émergence d’un problème, se poursuit
          par la mise en place de solutions graphiques pour aboutir à l’atteinte
          de vos objectifs.
        </p>

        {/* 🧩 Grille de services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`p-8 rounded-lg shadow-lg text-left transition-transform hover:scale-105 ${
                service.highlight
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3
                className={`text-xl font-bold mb-3 ${
                  service.highlight ? "text-white" : "text-gray-900"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  service.highlight ? "text-white/90" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
