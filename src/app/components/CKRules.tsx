import { XCircle, CheckCircle2, Clock3, Users, Flame, Volume2 } from "lucide-react";
import { SparkleButton } from "./SparkleButton";

interface CKRulesProps {
  onBook: () => void;
}

const rules = [
  {
    icon: XCircle,
    color: "text-red-400",
    bg: "bg-red-500/10",
    label: "No Smoking",
    desc: "Strictly no smoking inside the unit or within the building premises.",
  },
  {
    icon: XCircle,
    color: "text-red-400",
    bg: "bg-red-500/10",
    label: "No Illegal Activities",
    desc: "Any form of illegal activity will result in immediate termination of stay.",
  },
  {
    icon: Volume2,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    label: "Quiet Hours: 10PM–7AM",
    desc: "Respect neighboring units. Keep noise to a minimum during quiet hours.",
  },
  {
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    label: "Registered Guests Only",
    desc: "Only guests declared at booking are allowed inside the unit.",
  },
  {
    icon: CheckCircle2,
    color: "text-green-400",
    bg: "bg-green-500/10",
    label: "Leave It As You Found It",
    desc: "Observe cleanliness and return items (games, kitchen) to their proper place.",
  },
  {
    icon: Flame,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    label: "No Open Flames",
    desc: "Candles, incense, and other open flame items are not permitted inside.",
  },
  {
    icon: Clock3,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    label: "Respect Check-in/out Times",
    desc: "Check-in: 2:00 PM · Check-out: 12:00 PM. Early/late subject to availability.",
  },
  {
    icon: CheckCircle2,
    color: "text-green-400",
    bg: "bg-green-500/10",
    label: "No Pets",
    desc: "For the comfort of all guests, pets are not allowed inside the unit.",
  },
];

export function CKRules({ onBook }: CKRulesProps) {
  return (
    <section id="rules" className="bg-[#020617] py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase text-indigo-400 font-semibold">House Rules</span>
          <h2 className="mt-2 text-3xl md:text-4xl tracking-tight text-white" style={{ fontWeight: 700 }}>
            Shared Expectations
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto text-sm md:text-base">
            Simple rules that keep the space wonderful for you and every guest after you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {rules.map(({ icon: Icon, color, bg, label, desc }) => (
            <div
              key={label}
              className="bg-[#0b1120] rounded-xl border border-white/8 p-5 hover:border-white/15 hover:bg-[#0f1a2e] transition-all"
            >
              <div className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center mb-3`}>
                <Icon size={18} className={color} />
              </div>
              <h3 className="text-white text-sm mb-1.5" style={{ fontWeight: 600 }}>{label}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-indigo-500/10 border border-indigo-500/20 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-indigo-300 text-sm text-center sm:text-left">
            <span style={{ fontWeight: 600 }}>By booking, you agree to all house rules.</span>{" "}
            Have questions? Message us before your stay.
          </p>
          <div className="flex gap-3 shrink-0">
            <SparkleButton
              onClick={onBook}
              className="bg-indigo-500 hover:bg-indigo-400 text-white font-medium px-5"
            >
              Book Now
            </SparkleButton>
            <SparkleButton
              variant="link"
              onClick={onBook}
              className="font-medium text-white/60 hover:text-white"
            >
              Ask a Question
            </SparkleButton>
          </div>
        </div>
      </div>
    </section>
  );
}