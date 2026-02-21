import { Star } from "lucide-react";
import { Button } from "./ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

interface CKTestimonialsProps {
  onBook: () => void;
}

const testimonials = [
  {
    name: "Marivic S.",
    origin: "Manila",
    rating: 5,
    text: "Absolutely loved it! The place is so clean and cozy — felt like home. The Scrabble greeting was such a sweet touch. We'll definitely be back!",
    date: "December 2024",
  },
  {
    name: "Jed & Family",
    origin: "Pampanga",
    rating: 5,
    text: "Perfect for family trips! The board games kept the kids entertained and we loved cooking together in the kitchen. Hot shower is a must in Baguio!",
    date: "January 2025",
  },
  {
    name: "Rhed A.",
    origin: "Quezon City",
    rating: 5,
    text: "Very peaceful location. We slept so well — no noise from traffic. The host CK was super responsive and accommodating. 10/10!",
    date: "November 2024",
  },
  {
    name: "Cheryl & Miguel",
    origin: "Cavite",
    rating: 5,
    text: "We stayed for 3 nights and honestly didn't want to leave. The unit is spotless, well-stocked, and the condo security gave us peace of mind.",
    date: "February 2025",
  },
];

export function CKTestimonials({ onBook }: CKTestimonialsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="bg-[#0b1120] py-20 px-4 border-y border-white/5">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase text-indigo-400 font-semibold">
            Guest Reviews
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl tracking-tight text-white" style={{ fontWeight: 700 }}>
            What Our Guests Say
          </h2>
        </div>

        <div className="overflow-hidden mb-10" ref={emblaRef}>
          <div className="flex gap-4">
            {testimonials.map(({ name, origin, rating, text, date }) => (
              <div
                key={name}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc(50%-8px)] lg:flex-[0_0_calc(25%-12px)]"
              >
                <div
                  className="bg-[#111827]/60 backdrop-blur-sm rounded-xl p-5 border border-white/8 flex flex-col hover:border-indigo-500/30 transition-colors h-full"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed flex-1">"{text}"</p>
                  <div className="mt-4 pt-4 border-t border-white/8">
                    <p className="text-white text-sm" style={{ fontWeight: 600 }}>{name}</p>
                    <p className="text-white/35 text-xs">{origin} · {date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-5 py-2">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-white text-sm" style={{ fontWeight: 600 }}>5.0</span>
            <span className="text-white/40 text-xs">· All guest reviews</span>
          </div>
          <Button
            onClick={onBook}
            className="bg-indigo-500 hover:bg-indigo-400 text-white font-medium px-6"
          >
            Join Our Happy Guests
          </Button>
        </div>
      </div>
    </section>
  );
}
