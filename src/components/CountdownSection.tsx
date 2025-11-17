"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function useCountdown(target: string): TimeLeft {
  const targetTime = useMemo(() => new Date(target).getTime(), [target]);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    function tick() {
      const diff = Math.max(0, targetTime - Date.now());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetTime]);
  return timeLeft;
}

export default function CountdownSection() {
  const time = useCountdown("2025-12-06T09:00:00+07:00");
  return (
    <Section id="countdown" bgImage="/assets/images/IMG-20251107-WA0020.jpg" nextId="rsvp" contentClassName="animate-slide-in-right" blurBg>
      <div className="mx-auto max-w-2xl text-center">
        <div className="card-glass p-8">
          <div className="mx-auto mb-6 h-65 w-full max-w-md overflow-hidden rounded-2xl">
            <div className="h-full w-full  transition-transform duration-700 origin-center">
              <Image src="/assets/images/IMG-20251107-WA0016.jpg" alt="venue" width={900} height={400} className="h-full w-full object-cover" />
            </div>
          </div>
          <h3 className="mb-4 text-2xl font-serif">Wedding Countdown</h3>
          <div className="grid grid-cols-4 gap-4">
            {[{label:"Days",v:time.days},{label:"Hours",v:time.hours},{label:"Minutes",v:time.minutes},{label:"Seconds",v:time.seconds}].map((t)=> (
              <div key={t.label} className="rounded-xl bg-white/10 p-4">
                <div className="text-3xl font-bold">{t.v}</div>
                <div className="mt-1 text-xs opacity-80">{t.label}</div>
              </div>
            ))}
          </div>
          {/* <div className="my-6 h-px w-full bg-white/20" />
            <h4 className="text-2xl font-serif">Resepsi</h4>
            <p className="mt-2 opacity-90">Sabtu, Desember 6, 2025</p>
            <p className="opacity-90">Jam: 11:00 - Selesai</p>
            <p className="mt-2 font-semibold">Gedung Pemuda Ambarawa</p>
            <a href="#" className="mt-5 inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm hover:bg-white/20">Watch Live Wedding</a> */}
        <div className="card-glass mx-auto mt-10 max-w-4xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="my-6 h-px w-full bg-white/20" />
              <h4 className="text-2xl font-serif">Ceremony</h4>
              <p className="mt-2 opacity-90">Saturday, December 6, 2025</p>
              <p className="opacity-90">Time: 10:00 - 11:00</p>
              <p className="mt-2 font-semibold">Lapangan Bulu Tangkis</p>
              <br /><hr />
              <p className="mt-2">Taman Wisma Asri 2, Blok U 27, Jl. Cempaka XII RT. 007/030, Teluk Pucung, Bekasi Utara, Kota Bekasi</p>
              
            </div>
            <div className="relative text-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-full w-px bg-white/20" />
              </div>
              <div className="relative z-10">
                <div className="my-6 h-px w-full bg-white/20" />
                <h4 className="text-2xl font-serif">Reception</h4>
                <p className="mt-2 opacity-90">Saturday, December 6, 2025</p>
                <p className="opacity-90">Time: 11:00 - Until End</p>
                <p className="mt-2 font-semibold">Lapangan Bulu Tangkis</p>
                <br /><hr />
              <p className="mt-2">Taman Wisma Asri 2, Blok U 27, Jl. Cempaka XII RT. 007/030, Teluk Pucung, Bekasi Utara, Kota Bekasi</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </Section>
  );
}


