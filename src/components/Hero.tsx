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
  if (opened) return null; // Hide Hero when invitation is opened
  
  return (
    <section id="home" className="fixed inset-0 w-screen h-screen flex items-center justify-center text-center text-white overflow-hidden z-50">
      {/* Background image - HD optimized */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/assets/images/ChatGPT Image Nov 7, 2025, 12_15_06 PM.png')",
            imageRendering: '-webkit-optimize-contrast',
            WebkitBackfaceVisibility: 'hidden',
            MozBackfaceVisibility: 'hidden',
            WebkitTransform: 'translate3d(0, 0, 0)',
            MozTransform: 'translate3d(0, 0, 0)'
          } as React.CSSProperties}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main content container - aligned to left */}
      <div className="relative z-10 w-full h-full flex items-center justify-start p-4 md:p-6 md:pl-12 lg:pl-20">
        <div className="relative w-full max-w-2xl flex flex-col items-center justify-center">
          {/* Rectangular Box */}
          <div className="relative w-full max-w-[95vw] md:max-w-full aspect-[3/4] md:aspect-[4/3] max-h-[60vh] md:max-h-[70vh] rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-4 border-white/20 shadow-2xl">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: "url(/assets/images/IMG-20251107-WA0018.jpg)",
                imageRendering: '-webkit-optimize-contrast'
              }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />
            
            {/* Circular overlay in front */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[550px] md:h-[550px] rounded-full border-2 md:border-4 border-white/30 shadow-2xl overflow-hidden">
                {/* Circle background with same image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
                  style={{ 
                    backgroundImage: "url(/assets/images/IMG-20251107-WA0018.jpg)",
                    imageRendering: '-webkit-optimize-contrast'
                  }}
                />
                {/* Circle overlay */}
                <div className="absolute inset-0 bg-black/50" />
                
                {/* Content inside circle */}
                <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 space-y-2 sm:space-y-3 md:space-y-4">
                  <h2 className="text-sm sm:text-base md:text-xl font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">THE WEDDING OF</h2>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic">Dewi</h1>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-serif italic">&</div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic">Ihsan</h1>
                  
                  {/* Date/Time Card inside circle */}
                  <div className="card-glass rounded-xl md:rounded-2xl border border-white/30 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 mt-3 sm:mt-4 md:mt-6">
                    <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs md:text-sm">
                      <div className="text-center">
                        <div className="text-[10px] sm:text-xs uppercase opacity-80">Sat</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[10px] sm:text-xs uppercase opacity-80">Dec</div>
                        <div className="text-2xl sm:text-3xl font-bold">06</div>
                        <div className="text-[10px] sm:text-xs">2025</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[10px] sm:text-xs uppercase opacity-80">10:00</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-[10px] sm:text-xs md:text-sm opacity-90 mt-1 sm:mt-2">
                    Lapangan Rumah Manca
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guest invitation card below */}
          <div className="card-glass mx-auto mt-4 sm:mt-5 md:mt-6 w-full max-w-md p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl">
            <p className="text-xs sm:text-sm opacity-80">Kepada Yth.</p>
            <p className="mt-1 text-[10px] sm:text-xs opacity-70">Bapak/Ibu/Saudara/i :</p>
            <p className="mt-2 sm:mt-3 text-xl sm:text-2xl font-serif">{guestName || "Guest Name"}</p>
            <button
              onClick={() => {
                setOpened(true);
                setTimeout(() => {
                  if (firstSectionRef.current) {
                    firstSectionRef.current.scrollIntoView({ behavior: "smooth" });
                  }
                }, 50);
              }}
              className="mt-3 sm:mt-4 inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm hover:bg-white/20 transition-all"
            >
              Buka Undangan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


