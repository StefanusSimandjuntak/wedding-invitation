import React from "react";
import Section from "@/components/Section";

export default function RsvpSection() {
  return (
    <Section id="rsvp" bgImage="https://www.veslavia.com/demo/images/rsvpImg2.webp" nextId="gallery" contentClassName="animate-slide-in-left">
      <div className="card-glass p-6 md:p-10">
        <h2 className="title text-center">RSVP & Ucapan</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <input className="w-full rounded-xl bg-white/10 px-4 py-3 placeholder-white/60 outline-none" placeholder="Nama" />
          <select className="w-full rounded-xl bg-white/10 px-4 py-3 outline-none">
            <option className="bg-neutral-900">Pilih Kehadiran</option>
            <option className="bg-neutral-900">Hadir</option>
            <option className="bg-neutral-900">Tidak Hadir</option>
          </select>
          <textarea className="md:col-span-2 min-h-28 rounded-xl bg-white/10 px-4 py-3 placeholder-white/60 outline-none" placeholder="Berikan Ucapan" />
          <div>
            <button className="rounded-xl border border-white/30 px-5 py-3 text-sm">Berikan Ucapan</button>
          </div>
        </div>
        <div className="mt-10 space-y-6">
          {[1,2].map((i)=> (
            <div key={i} className="flex items-start justify-between gap-4 rounded-xl bg-white/5 p-4">
              <div>
                <p className="font-semibold">Tamu {i}</p>
                <p className="opacity-80">Selamat menempuh perjalanan baru dalam hidup.</p>
                <p className="mt-2 text-xs opacity-70">02/10/2025 08:00</p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Hadir</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}


