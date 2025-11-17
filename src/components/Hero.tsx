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
      {/* Background image - HD optimized with tiling */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{ 
            backgroundImage: "url('/assets/images/Blossoming Birds Timberlea.jpeg')",
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            backgroundPosition: 'center',
            imageRendering: '-webkit-optimize-contrast',
            WebkitBackfaceVisibility: 'hidden',
            MozBackfaceVisibility: 'hidden',
            WebkitTransform: 'translate3d(0, 0, 0)',
            MozTransform: 'translate3d(0, 0, 0)',
                    // filter: 'grayscale(100%)'

          } as React.CSSProperties}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main content container - centered */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-6">
        <div className="relative w-full max-w-2xl flex flex-col items-center justify-center">
          {/* Rectangular Box */}
          <div className="relative w-full max-w-[95vw] md:max-w-full aspect-[3/4] md:aspect-[4/3] max-h-[60vh] md:max-h-[70vh] rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-4 border-white/20 shadow-2xl">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: "url(/assets/images/WhatsApp-Image-heroo.jpg)",
                imageRendering: '-webkit-optimize-contrast',
                    // filter: 'grayscale(100%)'

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
                    backgroundImage: "url(/assets/images/WhatsApp-Image-heroo.jpg)",
                    imageRendering: '-webkit-optimize-contrast',
                    // filter: 'grayscale(50%)'
                  }}
                />
                {/* Circle overlay */}
                <div className="absolute inset-0 bg-black/50" />
                
                {/* Content inside circle */}
                <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 space-y-2 sm:space-y-3 md:space-y-4">
                  <h2 className="text-sm sm:text-base md:text-xl font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">THE WEDDING OF</h2>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic mt-1 mb-1">Manca</h1>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-serif italic my-0">&</div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic mt-1 mb-1">Ihsan</h1>
                  
                  {/* Date/Time Card inside circle */}
                  <div className="card-glass rounded-md md:rounded-lg border border-white/30 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 mt-3 sm:mt-4 md:mt-6">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                      {/* Day */}
                      <div className="text-center">
                        <div className="text-[7px] sm:text-[8px] uppercase tracking-wide opacity-70">Saturday</div>
                      </div>
                      
                      {/* Divider */}
                      <div className="h-6 sm:h-7 w-px bg-white/30"></div>
                      
                      {/* Date */}
                      <div className="text-center">
                        <div className="text-lg sm:text-xl md:text-2xl font-bold leading-none">06</div>
                        <div className="text-[6px] sm:text-[7px] uppercase tracking-wider opacity-80">Dec 2025</div>
                      </div>
                      
                      {/* Divider */}
                      <div className="h-6 sm:h-7 w-px bg-white/30"></div>
                      
                      {/* Time */}
                      <div className="text-center">
                        <div className="text-xs sm:text-sm md:text-base font-semibold">10:00</div>
                        <div className="text-[6px] sm:text-[7px] uppercase tracking-wide opacity-70">AM</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* <div className="text-[10px] sm:text-xs md:text-sm opacity-90 mt-1 sm:mt-2">
                    Lapangan Rumah Manca
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Guest invitation card below */}
          <div className="mx-auto mt-4 sm:mt-5 md:mt-6 w-full max-w-md p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl" style={{ backgroundColor: "hsl(24.71deg 10.95% 54.41% / 62%)" }}>
            <p className="text-xs sm:text-sm opacity-80">To</p>
            <p className="mt-1 text-[10px] sm:text-xs opacity-70">Mr./Mrs./Brother/Sister:</p>
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
              Open Invitation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


