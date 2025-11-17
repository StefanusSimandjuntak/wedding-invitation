import React from "react";
import Section from "@/components/Section";

export default function StoryTimeline() {
  const timelineEvents = [
    {
      id: 1,
      date: "2013",
      title: "First Meeting",
      description: "It all began in 2013, when our paths first crossed during our school days. From a simple friendship that grew over time, a warm and meaningful bond was created — a beautiful journey that continued until 2015, when we chose to support each other and walk together through every chapter of life.",
      image1: "/assets/images/IMG-20251107-WA0010.jpg",
      image2: "/assets/images/IMG-20251107-WA0012.jpg",
    },
    {
      id: 2,
      date: "July 20, 2025",
      title: "Engagement",
      description: "After years of walking side by side — growing together, strengthening each other, and weaving dreams into one step — we finally arrived at a meaningful moment. In July 2025, with hearts full of gratitude, we sought blessings and celebrated our engagement as the beginning of an even more beautiful story.",
      image1: "/assets/images/IMG-20251107-WA0030.jpg",
      image2: "/assets/images/IMG-20251107-WA0017.jpg",
    },
    {
      id: 3,
      date: "December 06, 2025",
      title: "Wedding",
      description: "With hearts full of gratitude and hope, we look upon this day as a sacred moment to begin our lifelong journey together. In December 2025, two souls who have grown and complemented each other now unite in a sacred bond as husband and wife, stepping into days filled with love, laughter, and stories we will weave forever.",
      image1: "/assets/images/IMG-20251107-WA0036.jpg",
      image2: "/assets/images/IMG-20251107-WA0033.jpg",
    },
  ];

  return (
    <Section id="story" bgImage="/assets/images/IMG-20251107-WA0019.jpg" nextId="gallery" contentClassName="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="title text-4xl md:text-5xl">Our Love Story</h2>
        <div className="mt-4 h-px w-24 mx-auto bg-white/30" />
        <p className="mt-4 opacity-90 text-white max-w-2xl mx-auto">
          The blessed love journey of Dewi Manca Indira and Ihsan Taqwa filled with beautiful memories.
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
                  {/* Two images side by side with blur background */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {/* Left Image */}
                    <div className="relative overflow-hidden rounded-[var(--radius)] aspect-[3/4]">
                      {/* Blurred background layer */}
                      <div
                        className="absolute inset-0 bg-cover bg-center scale-110 blur-2xl"
                        style={{ backgroundImage: `url(${event.image1})` }}
                      />
                      {/* Main image layer - centered and contained */}
                      <div
                        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${event.image1})` }}
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                    
                    {/* Right Image */}
                    <div className="relative overflow-hidden rounded-[var(--radius)] aspect-[3/4]">
                      {/* Blurred background layer */}
                      <div
                        className="absolute inset-0 bg-cover bg-center scale-110 blur-2xl"
                        style={{ backgroundImage: `url(${event.image2})` }}
                      />
                      {/* Main image layer - centered and contained */}
                      <div
                        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${event.image2})` }}
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
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