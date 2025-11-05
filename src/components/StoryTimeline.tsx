import React from "react";
import Section from "@/components/Section";

export default function StoryTimeline() {
  const timelineEvents = [
    {
      id: 1,
      date: "2013",
      title: "First Meeting",
      description: "It all began back in 2013, when our paths first crossed during our school days. What started as a simple friendship slowly blossomed into something beautiful — a love story that truly began in 2015, when we chose to walk hand in hand through the journey of life.",
      image: "https://www.veslavia.com/demo/images/story1.webp",
    },
    {
      id: 2,
      date: "July 20, 2025",
      title: "Engagement",
      description: "After years of growing together, sharing dreams, and facing challenges side by side, we took another meaningful step — seeking blessings and celebrating our engagement in July 2025.",
      image: "https://www.veslavia.com/demo/images/story2.webp",
    },
    {
      id: 3,
      date: "December 06, 2025",
      title: "Wedding",
      description: "Now, with hearts full of gratitude and hope, we are ready to begin a new chapter — the beginning of our lifelong journey as husband and wife, in December 2025.",
      image: "https://www.veslavia.com/demo/images/story3.webp",
    },
  ];

  return (
    <Section id="story" bgImage="https://www.veslavia.com/demo/images/headerImg3.webp" nextId="gallery" contentClassName="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="title text-4xl md:text-5xl">Our Love Story</h2>
        <div className="mt-4 h-px w-24 mx-auto bg-white/30" />
        <p className="mt-4 opacity-90 text-white max-w-2xl mx-auto">
          Perjalanan cinta Dewi Manca Indira dan Ihsan Taqwa yang penuh berkah dan kenangan indah.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-white/20 hidden md:block" />

        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={event.id} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-white/20 hidden md:block" />

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="card-glass p-6 md:p-8 text-center text-white">
                  <div className="relative overflow-hidden rounded-[var(--radius)] mb-6">
                    <div
                      className="aspect-video bg-cover bg-center"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <div className="text-sm opacity-80 mb-2">{event.date}</div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{event.title}</h3>
                  <p className="opacity-90 leading-relaxed">{event.description}</p>
                </div>
              </div>

              {/* Spacer for mobile */}
              <div className="hidden md:block w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}