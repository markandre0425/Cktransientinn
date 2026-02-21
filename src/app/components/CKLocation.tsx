import { images } from "../assets/images";
import { MapPin, Navigation, Clock } from "lucide-react";
import { SparkleButton } from "./SparkleButton";

interface CKLocationProps {
  onBook: () => void;
}

const landmarks = [
  { name: "Session Road", time: "5 min" },
  { name: "Burnham Park", time: "7 min" },
  { name: "SM Baguio", time: "8 min" },
  { name: "Mines View Park", time: "12 min" },
  { name: "Wright Park", time: "10 min" },
  { name: "Baguio Cathedral", time: "6 min" },
];

const googleMapsUrl = "https://maps.google.com/?q=The+Courtyards+Condominium+Leonilla+Hill+Baguio+City";
const wazeUrl = "https://waze.com/ul?q=The+Courtyards+Condominium+Leonilla+Hill+Baguio+City";

export function CKLocation({ onBook }: CKLocationProps) {
  return (
    <section id="location" className="bg-[#020617] py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase text-indigo-400 font-semibold">Location</span>
          <h2 className="mt-2 text-3xl md:text-4xl tracking-tight text-white" style={{ fontWeight: 700 }}>
            Quiet Hill.<br />City at Your Doorstep.
          </h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto text-sm md:text-base">
            Nestled in Leonilla Hill — just 3km from the city center. The sweet spot between Baguio's vibrant downtown and peaceful residential charm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Info */}
          <div className="space-y-4">
            {/* Condo Photo */}
            <div className="rounded-2xl overflow-hidden border border-white/8 h-52 md:h-60 shadow-xl shadow-black/40">
              <img
                src={images.condo}
                alt="The Courtyards Condominium"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 rounded-xl bg-[#0b1120] border border-white/8 p-4">
              <MapPin size={18} className="text-indigo-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white text-sm" style={{ fontWeight: 600 }}>
                  The Courtyards Condominium
                </p>
                <p className="text-white/40 text-xs mt-0.5">
                  The Courtyards Condominium, Leonilla Hill, Baguio City
                </p>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="bg-[#0b1120] rounded-xl border border-white/8 p-4">
              <p className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-3">Nearby Destinations</p>
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                {landmarks.map(({ name, time }) => (
                  <div key={name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Clock size={11} className="text-indigo-400 shrink-0" />
                      <span className="text-xs text-white/70">{name}</span>
                    </div>
                    <span className="text-xs text-white/30 shrink-0">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <SparkleButton asChild wrapperClassName="flex-1" className="w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg gap-2 font-medium">
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin size={15} />
                  Google Maps
                </a>
              </SparkleButton>
              <SparkleButton asChild wrapperClassName="flex-1" variant="link" className="w-full font-medium gap-2 text-white/60 hover:text-white">
                <a href={wazeUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation size={15} />
                  Navigate via Waze
                </a>
              </SparkleButton>
            </div>

            <SparkleButton onClick={onBook} className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-medium">
              Reserve This Unit
            </SparkleButton>
          </div>

          {/* Right: Map Embed */}
          <div className="rounded-2xl overflow-hidden border border-white/8 h-80 md:h-[520px] shadow-xl shadow-black/40 relative">
            <iframe
              title="CK Transient Inn Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.8!2d120.5985!3d16.4102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a15f62284d01%3A0x63fcff73fbbe37a6!2sLeonilla+Hill%2C+Baguio%2C+Benguet!5e0!3m2!1sen!2sph!4v1700000000000"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}