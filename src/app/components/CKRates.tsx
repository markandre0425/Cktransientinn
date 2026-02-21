import { Check, MessageCircle } from "lucide-react";
import { SparkleButton } from "./SparkleButton";

interface CKRatesProps {
  onBook: () => void;
}

const inclusions = [
  "Full exclusive unit access (no shared spaces)",
  "Hot & cold shower",
  "Fully equipped kitchen & utensils",
  "Bonding Corner (board games collection)",
  "Fast Wi-Fi",
  "Fresh white linens & towels",
  "Hotel-grade cleaning before every stay",
  "24/7 condominium security",
];

export function CKRates({ onBook }: CKRatesProps) {
  return (
    <section
      id="rates"
      className="bg-[#0b1120] py-20 px-4 border-y border-white/5"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase text-indigo-400 font-semibold">
            Rates & Booking
          </span>
          <h2
            className="mt-2 text-3xl md:text-4xl tracking-tight text-white"
            style={{ fontWeight: 700 }}
          >
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto text-sm md:text-base">
            One space. One rate. No surprises. Everything
            included.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
          {/* Rate Card */}
          <div className="md:col-span-2 bg-indigo-600 p-8 flex flex-col justify-between">
            <div>
              <p className="text-white/60 text-xs tracking-widest uppercase mb-4">
                Nightly Rate
              </p>
              <div className="mb-2">
                <span
                  className="text-5xl text-white"
                  style={{ fontWeight: 700 }}
                >
                  ₱1,500
                </span>
                <span className="text-white/60 text-sm ml-1">
                  / night
                </span>
              </div>
              <p className="text-white/50 text-xs mt-1">
                Weekends & holidays may vary
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <div className="rounded-lg bg-white/10 p-3">
                <p className="text-white/60 text-xs uppercase tracking-wide mb-0.5">
                  Check-in
                </p>
                <p
                  className="text-white text-sm"
                  style={{ fontWeight: 600 }}
                >
                  2:00 PM
                </p>
              </div>
              <div className="rounded-lg bg-white/10 p-3">
                <p className="text-white/60 text-xs uppercase tracking-wide mb-0.5">
                  Check-out
                </p>
                <p
                  className="text-white text-sm"
                  style={{ fontWeight: 600 }}
                >
                  12:00 PM (noon)
                </p>
              </div>
              <div className="rounded-lg bg-white/10 p-3">
                <p className="text-white/60 text-xs uppercase tracking-wide mb-0.5">
                  Max Guests
                </p>
                <p
                  className="text-white text-sm"
                  style={{ fontWeight: 600 }}
                >
                  Up to 6 guests
                </p>
              </div>
            </div>
          </div>

          {/* Inclusions */}
          <div className="md:col-span-3 bg-[#0f1a2e] p-8 flex flex-col justify-between">
            <div>
              <p
                className="text-white text-sm mb-5"
                style={{ fontWeight: 600 }}
              >
                Everything Included
              </p>
              <ul className="space-y-3">
                {inclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/60"
                  >
                    <Check
                      size={15}
                      className="text-indigo-400 mt-0.5 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <SparkleButton
                onClick={onBook}
                className="flex-1 bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg font-medium"
              >
                Book Your Stay
              </SparkleButton>
              <SparkleButton
                asChild
                variant="link"
                className="flex-1 rounded-lg gap-2 font-medium text-white/60 hover:text-white"
              >
                <a
                  href="https://www.facebook.com/kristinejoy.b.valdez?mibextid=wwXIfr&rdid=45QI8lilDKOhVQf5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1amUx2BtHx%2F%3Fmibextid%3DwwXIfr#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={15} />
                  Message Host
                </a>
              </SparkleButton>
            </div>
          </div>
        </div>

        <p className="text-center text-white/25 text-xs mt-6">
          Minimum 2-night stay · Rates subject to change during
          peak season · Deposit required upon booking
        </p>
      </div>
    </section>
  );
}