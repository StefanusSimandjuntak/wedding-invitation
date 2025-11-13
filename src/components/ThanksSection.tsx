import React from "react";
import Section from "@/components/Section";

export default function ThanksSection() {
  return (
    <Section id="thanks" bgImage="/assets/images/IMG2025-11-hero.jpg" contentClassName="animate-fade-in">
      <div className="text-center">
        <div className="card-glass mx-auto max-w-2xl p-8 md:p-12">
          <p className="text-lg md:text-xl opacity-90 text-white leading-relaxed mb-8">
            Your presence and blessings are the most beautiful gift for us
          </p>
          <h2 className="title text-3xl md:text-4xl">Manca & Ihsan</h2>
        </div>
      </div>
    </Section>
  );
}