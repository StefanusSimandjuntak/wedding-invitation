import React from "react";

type SectionProps = {
  id: string;
  bgImage?: string;
  nextId?: string;
  contentClassName?: string;
  sectionRef?: React.MutableRefObject<HTMLElement | null>;
  blurBg?: boolean;
  children: React.ReactNode;
};

export default function Section({ id, bgImage, nextId, contentClassName, sectionRef, blurBg, children }: SectionProps) {
  return (
    <section id={id} ref={sectionRef as any} className="relative min-h-screen flex items-center py-20">
      {bgImage && (
        <>
          <div
            className={`absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat ${blurBg ? 'blur-md' : ''}`}
            style={{ 
              backgroundImage: `url(${bgImage})`,
              imageRendering: '-webkit-optimize-contrast',
              WebkitBackfaceVisibility: 'hidden',
              MozBackfaceVisibility: 'hidden',
              WebkitTransform: 'translate3d(0, 0, 0)',
              MozTransform: 'translate3d(0, 0, 0)'
            } as React.CSSProperties}
          />
          <div className="absolute inset-0 -z-10 bg-black/55" />
        </>
      )}
      <div className={`container-section w-full text-white ${contentClassName ?? ""}`}>{children}</div>
      {nextId && (
        <a href={`#${nextId}`} aria-label="Scroll to next section" className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white/90 shadow-lg backdrop-blur hover:bg-black/60">
          {/* chevron down */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 animate-bounce-slow">
            <path fillRule="evenodd" d="M11.47 15.53a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 1 0-1.06-1.06L12 13.19 7.28 9.22a.75.75 0 0 0-1.06 1.06l5.25 5.25Z" clipRule="evenodd" />
          </svg>
        </a>
      )}
    </section>
  );
}


