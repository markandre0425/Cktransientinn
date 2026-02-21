import livingRoomImg from "figma:asset/7a75b844ac62adfa0bd5cd435913dcf01d1e976f.png";
import bathroomImg from "figma:asset/3407889af86eaa52aaf07aa692a71b57ac4ab33a.png";
import kitchenImg from "figma:asset/c8a178b99b4d30767e17fa3c0a149038404a32c4.png";
import bedroomImg from "figma:asset/29323e9a92733ebb1d5e4b2fe787c75781389825.png";
import gamesImg from "figma:asset/5070a182ab9cad210c5780db8e4b1c092d8fcb4a.png";
import condoImg from "figma:asset/e69c8dd99533954b15b34dae3bdb1d21c3d31efd.png";
import {
  Thermometer, Utensils, Gamepad2, ShieldCheck,
  Wifi, ParkingSquare, Droplets, Moon,
} from "lucide-react";
import { SparkleButton } from "../components/SparkleButton";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CKAmenitiesProps {
  onBook: () => void;
}

const features = [
  { icon: Thermometer, title: "Hot & Cold Shower", desc: "Essential for Baguio's cool climate — never worry about a cold morning shower." },
  { icon: Utensils, title: "Fully Equipped Kitchen", desc: "Cook your own meals, save on food budget, and enjoy bonding over home-cooked food." },
  { icon: Gamepad2, title: "Bonding Corner", desc: "Scrabble, Jenga, Guess Who & more — curated games for genuine family connection." },
  { icon: ShieldCheck, title: "Total Privacy & Security", desc: "Solo-unit exclusivity inside a 24/7 guarded condominium complex." },
  { icon: Wifi, title: "Fast Wi-Fi", desc: "Reliable internet connection — work remotely or stream your favorite shows." },
  { icon: Moon, title: "Quiet Neighborhood", desc: "Escape the city noise. Leonilla Hill offers peaceful mornings and restful nights." },
  { icon: Droplets, title: "Hotel-Grade Cleanliness", desc: "Fresh white linens, sanitized spaces, and thoughtful amenities every stay." },
  { icon: ParkingSquare, title: "Parking Available", desc: "Within the condominium compound for added convenience." },
];

const galleryItems = [
  { image: livingRoomImg, label: "Living Area", span: "col-span-2 row-span-2" },
  { image: bedroomImg, label: "Bedroom", span: "col-span-1 row-span-1" },
  { image: kitchenImg, label: "Kitchen", span: "col-span-1 row-span-1" },
  { image: bathroomImg, label: "Bathroom", span: "col-span-1 row-span-1" },
  { image: gamesImg, label: "Bonding Corner", span: "col-span-2 row-span-1" },
];

export function CKAmenities({ onBook }: CKAmenitiesProps) {
  return (
    <section id="amenities" className="bg-[#020617] py-20 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs tracking-widest uppercase text-indigo-400 font-semibold">The Space</span>
          <h2 className="mt-2 text-3xl md:text-4xl tracking-tight text-white" style={{ fontWeight: 700 }}>
            Everything You Need.<br />Nothing You Don't.
          </h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto text-sm md:text-base">
            We've thought of every detail so you can focus on what matters — resting, reconnecting, and creating memories.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-2.5 h-[420px] md:h-[520px] mb-16 rounded-2xl overflow-hidden">
          {galleryItems.map((item) => (
            <div key={item.label} className={`${item.span} relative overflow-hidden group`}>
              <ImageWithFallback
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-white/90 text-xs tracking-wide">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl bg-[#0b1120] border border-white/8 p-4 hover:border-indigo-500/40 hover:bg-[#0f1a2e] transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-indigo-500/15 flex items-center justify-center mb-3">
                <Icon size={18} className="text-indigo-400" />
              </div>
              <h3 className="text-white text-sm mb-1" style={{ fontWeight: 600 }}>{title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <SparkleButton onClick={onBook} className="bg-indigo-500 hover:bg-indigo-400 px-6 py-2 font-medium text-white">
            Book This Space
          </SparkleButton>
          <SparkleButton variant="link" onClick={onBook} className="ml-3 px-4 py-2 font-medium text-white/60 hover:text-white">
            Message Host
          </SparkleButton>
        </div>
      </div>
    </section>
  );
}