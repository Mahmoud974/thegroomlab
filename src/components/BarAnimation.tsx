import React from "react";

export default function BarAnimation() {
  const items = [
    "LOGO",
    "CRÉATIONS SITE WEB",
    "FLYER",
    "CHARTE GRAPHIQUE",
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r -mt-12 z-12 from-orange-500 to-orange-700 transform -rotate-2 shadow-lg">
      <ul className="flex items-center justify-center space-x-8 py-12  text-2xl font-extrabold text-purple-900 uppercase tracking-wide">
        {items.map((item, index) => (
          <React.Fragment key={item}>
            <li className="text-5xl">{item}</li>
            {index < items.length - 1 && (
              <span className="text-purple-900 text-xl">✦</span>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
