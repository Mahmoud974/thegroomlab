import Link from "next/link";
import React from "react";

export default function Social() {
  return (
    <Link
      href="/"
      className="group relative h-96 flex justify-center items-center text-center text-white bg-cover bg-center bg-no-repeat cursor-pointer"
      style={{
        backgroundImage: "url('/images/instagram-background.png')",
      }}
    >
     
      <div className="absolute inset-0 bg-black/40 transition-all duration-500 ease-in-out group-hover:bg-black/70"></div>

       
      <div className="relative z-10">
        <p className="text-4xl md:text-5xl font-bold leading-snug">
          Suivez-moi sur <br />
          <span className=" ">@ManuscritAgency</span>
        </p>
      </div>
    </Link>
  );
}
