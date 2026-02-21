import { useState } from "react";
import { CKNav } from "./components/CKNav";
import { CKHero } from "./components/CKHero";
import { CKAmenities } from "./components/CKAmenities";
import { CKLocation } from "./components/CKLocation";
import { CKRates } from "./components/CKRates";
import { CKRules } from "./components/CKRules";
import { CKTestimonials } from "./components/CKTestimonials";
import { CKFooter } from "./components/CKFooter";
import { CKBookingModal } from "./components/CKBookingModal";
import { CKFloatingChat } from "./components/CKFloatingChat";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <div className="min-h-screen bg-[#020617] antialiased">
      <CKNav onBook={openBooking} />
      <CKHero onBook={openBooking} />
      <CKAmenities onBook={openBooking} />
      <CKTestimonials onBook={openBooking} />
      <CKLocation onBook={openBooking} />
      <CKRates onBook={openBooking} />
      <CKRules onBook={openBooking} />
      <CKFooter onBook={openBooking} />
      <CKBookingModal open={bookingOpen} onClose={closeBooking} />
      <CKFloatingChat onBook={openBooking} />
    </div>
  );
}