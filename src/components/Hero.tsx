"use client";

import React, { MutableRefObject } from "react";

type Props = {
  opened: boolean;
  setOpened: (o: boolean) => void;
  firstSectionRef: MutableRefObject<HTMLElement | null>;
  nextId?: string;
  guestName?: string;
};

export default function Hero({ opened, setOpened, firstSectionRef, nextId, guestName }: Props) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/images/IMG-20251107-WA0018.jpg)" }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative container-section">
        <p className="uppercase tracking-[0.35em] text-sm opacity-80">The Wedding of</p>
        <h1 className="title mt-4">Dewi & Ihsan</h1>
        
        <div className="card-glass mx-auto mt-10 max-w-md p-6">
          <p className="subtitle">Kepada Yth.</p>
          <p className="mt-1 opacity-80">Bapak/Ibu/Saudara/i :</p>
          <p className="mt-4 text-2xl font-serif">{guestName || "Guest Name"}</p>
          <button
            onClick={() => {
              setOpened(true);
              setTimeout(() => {
                if (firstSectionRef.current) {
                  firstSectionRef.current.scrollIntoView({ behavior: "smooth" });
                }
              }, 50);
            }}
            className="mt-6 inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm hover:bg-white/20"
          >
            Buka Undangan
          </button>
        </div>
      </div>
      {nextId && (
        <a href={`#${nextId}`} aria-label="Scroll to next section" className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white/90 shadow-lg backdrop-blur hover:bg-black/60">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 animate-bounce-slow">
            <path fillRule="evenodd" d="M11.47 15.53a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 1 0-1.06-1.06L12 13.19 7.28 9.22a.75.75 0 0 0-1.06 1.06l5.25 5.25Z" clipRule="evenodd" />
          </svg>
        </a>
      )}
    </section>
  );
}


