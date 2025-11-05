"use client";

import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Hero from "@/components/Hero";
import TitleStripeSection from "@/components/TitleStripeSection";
import CoupleSection from "@/components/CoupleSection";
import QuoteSection from "@/components/QuoteSection";
import DresscodeSection from "@/components/DresscodeSection";
import CountdownSection from "@/components/CountdownSection";
import RsvpSection from "@/components/RsvpSection";
import GallerySection from "@/components/GallerySection";
import FloatingMenu from "@/components/FloatingMenu";
import StoryTimeline from "@/components/StoryTimeline";
import GiftSection from "@/components/GiftSection";
import ThanksSection from "@/components/ThanksSection";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [guestName, setGuestName] = useState("Guest Name");
  const firstSectionRef = useRef<HTMLElement | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const name = searchParams.get("send-to");
    if (name) {
      setGuestName(decodeURIComponent(name).replace(/_/g, " "));
    }
  }, [searchParams]);

  return (
    <main>
      <Hero opened={opened} setOpened={setOpened} firstSectionRef={firstSectionRef} nextId={opened ? "title" : undefined} guestName={guestName} />

      {opened && <TitleStripeSection sectionRef={firstSectionRef} />}
      {opened && <CoupleSection />}
      {opened && <QuoteSection />}
      {opened && <CountdownSection />}
      {opened && <RsvpSection />}
      {opened && <GallerySection />}
      {opened && <StoryTimeline />}
      {opened && <GiftSection />}
      {opened && <ThanksSection />}
      {/* <FloatingMenu opened={opened} /> */}
    </main>
  );
}
