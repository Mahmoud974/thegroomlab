"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-white text-black">

 
      <div className="w-full h-[520px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.4195110404744!2d3.877620176544941!3d43.60831597110186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af03e83d4275%3A0xa7fb0e7b0e9d73c1!2s12%20Rue%20Victor%20Hugo%2C%2034000%20Montpellier!5e0!3m2!1sfr!2sfr!4v1731252000000!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: "grayscale(100%) contrast(120%) brightness(85%)",
          }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </section>
  );
}
