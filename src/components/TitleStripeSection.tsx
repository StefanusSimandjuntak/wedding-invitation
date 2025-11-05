import React from "react";
import Section from "@/components/Section";

export default function TitleStripeSection({ sectionRef }: { sectionRef?: React.MutableRefObject<HTMLElement | null> }) {
  return (
    <Section id="title" sectionRef={sectionRef} bgImage="https://www.veslavia.com/demo/images/headerImg2.webp" nextId="couple" contentClassName="animate-zoom-in">
      <div className="flex justify-center">
        <div className="relative flex items-center gap-6 text-white">
          <div className="flex flex-col items-center animate-slide-in-left">
            <div className="h-16 w-px bg-white/80" />
            <div className="mt-2 text-xs tracking-[0.35em] [writing-mode:vertical-rl] rotate-180">THE WEDDING OF</div>
            <div className="mt-2 h-16 w-px bg-white/80" />
          </div>
          <div className="relative px-8 py-6 animate-slide-in-right">
            <div className="pointer-events-none absolute inset-0 border-2 border-white/80" />
            <div className="relative z-10 text-center font-serif font-bold leading-tight">
              <div className="text-5xl md:text-6xl">Dewi</div>
              <div className="text-5xl md:text-6xl">&</div>
              <div className="text-5xl md:text-6xl">Ihsan</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}


