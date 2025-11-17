import React from "react";
import Image from "next/image";
import Section from "@/components/Section";

export default function CoupleSection() {
  return (
    <Section id="couple" bgImage="/assets/images/IMG-20251107-WA0013.jpg" nextId="quote" contentClassName="animate-fade-in">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-[var(--radius)]">
          <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: "url(/assets/images/6.jpg)" }} />
          <div className="relative z-10 card-glass m-6 md:m-10 p-8 md:p-10 text-center text-white">
            <h2 className="title">Manca</h2>
            <div className="my-4 h-px w-24 mx-auto bg-white/30" />
            <p className="opacity-90 text-white text-sm">Dewi Manca Indira, S. Ars.</p>
            <p className="mt-2 opacity-80 text-xs">Putri pertama dari</p>
            <p className="mt-1 opacity-80 text-xs">Bpk. Sartono & Ibu Mela Asriyah</p>
            <a
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/30 px-4 py-2 text-sm opacity-90 hover:bg-white/10"
              href="https://instagram.com/dewi_indira"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.428.403.61.212 1.046.466 1.504.923.457.458.711.894.923 1.504.163.458.347 1.258.403 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.428a3.889 3.889 0 0 1-.923 1.504 3.889 3.889 0 0 1-1.504.923c-.458.163-1.258.347-2.428.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.428-.403a3.889 3.889 0 0 1-1.504-.923 3.889 3.889 0 0 1-.923-1.504c-.163-.458-.347-1.258-.403-2.428C2.175 15.784 2.163 15.404 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.428.212-.61.466-1.046.923-1.504.458-.457.894-.711 1.504-.923.458-.163 1.258-.347 2.428-.403C8.416 2.175 8.796 2.163 12 2.163Zm0 1.62c-3.155 0-3.522.012-4.764.069-.987.045-1.52.208-1.874.346-.472.183-.81.4-1.164.754-.354.354-.57.692-.754 1.164-.138.355-.301.887-.346 1.874-.057 1.242-.069 1.609-.069 4.764s.012 3.522.069 4.764c.045.987.208 1.52.346 1.874.183.472.4.81.754 1.164.354.354.692.57 1.164.754.355.138.887.301 1.874.346 1.242.057 1.609.069 4.764.069s3.522-.012 4.764-.069c.987-.045 1.52-.208 1.874-.346.472-.183.81-.4 1.164-.754.354-.354.57-.692.754-1.164.138-.355.301-.887.346-1.874.057-1.242.069-1.609.069-4.764s-.012-3.522-.069-4.764c-.045-.987-.208-1.52-.346-1.874-.183-.472-.4-.81-1.164-1.164-.355-.138-.887-.301-1.874-.346-1.242-.057-1.609-.069-4.764-.069Zm0 3.905a4.332 4.332 0 1 1 0 8.664 4.332 4.332 0 0 1 0-8.664Zm0 1.62a2.712 2.712 0 1 0 0 5.424 2.712 2.712 0 0 0 0-5.424Zm5.447-2.89a1.008 1.008 0 1 1 0 2.016 1.008 1.008 0 0 1 0-2.016Z"/>
              </svg>
              @dewi_manca
            </a>
          </div>
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </div>
        <div className="relative overflow-hidden rounded-[var(--radius)]">
          <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: "url(/assets/images/6.jpg)" }} />
          <div className="relative z-10 card-glass m-6 md:m-10 p-8 md:p-10 text-center text-white">
            <h2 className="title">Ihsan</h2>
            <div className="my-4 h-px w-24 mx-auto bg-white/30" />
            <p className="opacity-90 text-white text-sm">Ihsan Taqwa, S.T</p>
            <p className="mt-2 opacity-80 text-xs">Putra ketiga dari</p>
            <p className="mt-1 opacity-80 text-xs">Alm. Bpk Ir. H. Aom Mukarom & <br></br> Ibu Hj. Dewi Krisnani</p>
            <a
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/30 px-4 py-2 text-sm opacity-90 hover:bg-white/10"
              href="https://instagram.com/ihsan_taqwa29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.428.403.61.212 1.046.466 1.504.923.457.458.711.894.923 1.504.163.458.347 1.258.403 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.428a3.889 3.889 0 0 1-.923 1.504 3.889 3.889 0 0 1-1.504.923c-.458.163-1.258.347-2.428.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.428-.403a3.889 3.889 0 0 1-1.504-.923 3.889 3.889 0 0 1-.923-1.504c-.163-.458-.347-1.258-.403-2.428C2.175 15.784 2.163 15.404 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.428.212-.61.466-1.046.923-1.504.458-.457.894-.711 1.504-.923.458-.163 1.258-.347 2.428-.403C8.416 2.175 8.796 2.163 12 2.163Zm0 1.62c-3.155 0-3.522.012-4.764.069-.987.045-1.52.208-1.874.346-.472.183-.81.4-1.164.754-.354.354-.57.692-.754 1.164-.138.355-.301.887-.346 1.874-.057 1.242-.069 1.609-.069 4.764s.012 3.522.069 4.764c.045.987.208 1.52.346 1.874.183.472.4.81.754 1.164.354.354.692.57 1.164.754.355.138.887.301 1.874.346 1.242.057 1.609.069 4.764.069s3.522-.012 4.764-.069c.987-.045 1.52-.208 1.874-.346.472-.183.81-.4 1.164-.754.354-.354.57-.692.754-1.164.138-.355.301-.887.346-1.874.057-1.242.069-1.609.069-4.764s-.012-3.522-.069-4.764c-.045-.987-.208-1.52-.346-1.874-.183-.472-.4-.81-1.164-1.164-.355-.138-.887-.301-1.874-.346-1.242-.057-1.609-.069-4.764-.069Zm0 3.905a4.332 4.332 0 1 1 0 8.664 4.332 4.332 0 0 1 0-8.664Zm0 1.62a2.712 2.712 0 1 0 0 5.424 2.712 2.712 0 0 0 0-5.424Zm5.447-2.89a1.008 1.008 0 1 1 0 2.016 1.008 1.008 0 0 1 0-2.016Z"/>
              </svg>
              @ihsan_taqwa
            </a>
          </div>
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </div>
      </div>
    </Section>
  );
}


