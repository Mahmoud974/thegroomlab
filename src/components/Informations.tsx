import { Clock, Mail, Phone, MapPin } from "lucide-react";

export default function Informations() {
  return (
    <section className="w-full bg-black text-white py-7">

    

     
      <div className="  mx-auto container  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   text-center">
 
        <div className="group space-y-4 p-6 -xl transition-all duration-300 hover:bg-white/5 hover:scale-[1.03] cursor-pointer">
          <div className="flex items-center justify-center">
            <span className="p-4 border border-[#FFD400] -full group-hover:bg-[#FFD400] transition-all duration-300">
              <Clock className="text-[#FFD400] group-hover:text-black" size={32} />
            </span>
          </div>
          <h3 className="font-bold uppercase tracking-wide text-lg">
            Tous les jours
          </h3>
          <p className="text-sm opacity-70">9h00 — 20h00</p>
        </div>

      
        <div className="group space-y-4 p-6 -xl transition-all duration-300 hover:bg-white/5 hover:scale-[1.03] cursor-pointer">
          <div className="flex items-center justify-center">
            <span className="p-4 border border-[#FFD400] -full group-hover:bg-[#FFD400] transition-all duration-300">
              <Mail className="text-[#FFD400] group-hover:text-black" size={32} />
            </span>
          </div>
          <h3 className="font-bold uppercase tracking-wide text-lg">
            Email
          </h3>
          <p className="text-sm opacity-70">contact@thegroomlab.com</p>
        </div>
 
        <div className="group space-y-4 p-6 -xl transition-all duration-300 hover:bg-white/5 hover:scale-[1.03] cursor-pointer">
          <div className="flex items-center justify-center">
            <span className="p-4 border border-[#FFD400] -full group-hover:bg-[#FFD400] transition-all duration-300">
              <Phone className="text-[#FFD400] group-hover:text-black" size={32} />
            </span>
          </div>
          <h3 className="font-bold uppercase tracking-wide text-lg">
            Téléphone
          </h3>
          <p className="text-sm opacity-70">06.93.12.34.56</p>
        </div>
 
        <div className="group space-y-4 p-6 -xl transition-all duration-300 hover:bg-white/5 hover:scale-[1.03] cursor-pointer">
          <div className="flex items-center justify-center">
            <span className="p-4 border border-[#FFD400] -full group-hover:bg-[#FFD400] transition-all duration-300">
              <MapPin className="text-[#FFD400] group-hover:text-black" size={32} />
            </span>
          </div>
          <h3 className="font-bold uppercase tracking-wide text-lg">
            Adresse
          </h3>
          <p className="text-sm opacity-70">12 rue Victor Hugo — Montpellier</p>
        </div>

      </div>
    </section>
  );
}
