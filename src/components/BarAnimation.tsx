import React from "react";

export default function BarAnimation() {
  const items = ["LOGO", "CRÉATIONS", "FLYER", " GRAPHIQUE", "LOGO", " SITE WEB", "FLYER", "CHARTE"];

  return (
    <div className="relative z-20 -mt-16">
      {/* bande inclinée */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-700 transform -rotate-1 origin-top scale-110 shadow-lg">
        <ul className="flex items-center justify-center space-x-10 py-10 text-3xl font-extrabold text-purple-900 uppercase tracking-wide">
          {items.map((item, index) => (
            <React.Fragment key={item}>
              <li>{item}</li>
              {index < items.length - 1 && (
                <span className="text-purple-900 text-2xl">✦</span>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}

