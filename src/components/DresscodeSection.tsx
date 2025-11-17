import React from "react";
import Section from "@/components/Section";

export default function DresscodeSection() {
  return (
    <Section id="dresscode" bgImage="/assets/images/IMG-20251107-WA0014.jpg" nextId="countdown" contentClassName="animate-zoom-in" blurBg>
      <div className="text-center">
        <h2 className="title">DRESS CODE</h2>
        <p className="subtitle mt-4">We respectfully request our guests to wear the following colors:</p>
        <div className="mt-8 flex justify-center gap-4">
          {["#F3D6CC", "#E7A7A4", "#C55266", "#8D1023", "#340608"].map((c) => (
            <span key={c} className="block h-16 w-16 rounded-full border border-white/30" style={{ backgroundColor: c }} />
          ))}
        </div>
      </div>
    </Section>
  );
}


