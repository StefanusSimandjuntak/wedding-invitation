import React from "react";
import Section from "@/components/Section";

export default function StoryTimeline() {
  const timelineEvents = [
    {
      id: 1,
      date: "2013",
      title: "The First Meeting",
      description: "From the moment we met, it felt like the universe was giving us the chance to truly get to know one another. What started as a casual friendship slowly turned into something much deeper, and before long, we realized we wanted to walk through life together.",
      image1: "/assets/images/IMG-20251107-WA0010.jpg",
      image2: "/assets/images/IMG-20251107-WA0012.jpg",
    },
    {
      id: 2,
      date: "July 20, 2025",
      title: "Five Years Together",
      description: "After years of growing side by side, strengthening each other, and dreaming together, we finally arrived at a significant moment. In July 2025, with hearts full of gratitude, we sought blessings and celebrated our engagement as the beginning of an even more beautiful story.",
      image1: "/assets/images/IMG-20251107-WA0030.jpg",
      image2: "/assets/images/IMG-20251107-WA0017.jpg",
    },
    {
      id: 3,
      date: "December 06, 2025",
      title: "The Journey to Marriage",
      description: "In December 2025, with hearts full of gratitude and hope, we view this day as a sacred moment to begin our lifelong journey together. Two souls who have grown and complemented each other now unite in a sacred bond as husband and wife, stepping into days filled with love, laughter, and stories we'll continue to write forever.",
      image1: "/assets/images/IMG-20251107-WA0036.jpg",
      image2: "/assets/images/IMG-20251107-WA0033.jpg",
    },
  ];

  return (
    <Section id="story" bgImage="/assets/images/IMG-20251107-WA0019.jpg" nextId="gallery" contentClassName="animate-fade-in" blurBg>
      <div className="text-center mb-6">
        <h2 className="title text-4xl md:text-5xl">Our Love Story</h2>
        <div className="mt-4 h-px w-24 mx-auto bg-white/30" />
      </div>

      {/* About Us Section */}
      <div className="mb-6 max-w-3xl mx-auto">
        <div className="card-glass p-4 md:p-6 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">About Us</h3>
          <p className="opacity-90 leading-relaxed">
            It all began in 2013, when our paths first crossed during our school days. From a simple friendship, a warm and meaningful bond was formed — a beautiful journey that continued until 2015, when we chose to support each other and walk together through every chapter of life.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-white/20 hidden md:block" />

        <div className="space-y-0">
          {timelineEvents.map((event, index) => (
            <div key={event.id} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-white/20 hidden md:block" />

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="card-glass p-4 md:p-6 text-center text-white">
                  {/* Two images side by side with blur background */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
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
                  
                  <div className="text-sm opacity-80 mb-1">{event.date}</div>
                  <h3 className="text-2xl font-serif font-bold mb-2">{event.title}</h3>
                  <p className="opacity-90 leading-relaxed">{event.description}</p>
                </div>
              </div>

              {/* Spacer for mobile */}
              <div className="hidden md:block w-1/2" />
            </div>
          ))}

          {/* The Love We've Built Section - Right Side */}
          <div className="relative flex items-center md:flex-row-reverse">
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-white/20 hidden md:block" />

            {/* Content */}
            <div className="w-full md:w-1/2 md:pl-12">
              <div className="card-glass p-4 md:p-6 text-center text-white">
                {/* Two images side by side with blur background */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {/* Left Image */}
                  <div className="relative overflow-hidden rounded-[var(--radius)] aspect-[3/4]">
                    {/* Blurred background layer */}
                    <div
                      className="absolute inset-0 bg-cover bg-center scale-110 blur-2xl"
                      style={{ backgroundImage: `url(/assets/images/IMG-20251107-WA0006.jpg)` }}
                    />
                    {/* Main image layer - centered and contained */}
                    <div
                      className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(/assets/images/IMG-20251107-WA0006.jpg)` }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  
                  {/* Right Image */}
                  <div className="relative overflow-hidden rounded-[var(--radius)] aspect-[3/4]">
                    {/* Blurred background layer */}
                    <div
                      className="absolute inset-0 bg-cover bg-center scale-110 blur-2xl"
                      style={{ backgroundImage: `url(/assets/images/IMG-20251107-WA0011.jpg)` }}
                    />
                    {/* Main image layer - centered and contained */}
                    <div
                      className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(/assets/images/IMG-20251107-WA0011.jpg)` }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif font-bold mb-2">The Love We've Built</h3>
                <p className="opacity-90 leading-relaxed">
                  The years we've spent together have laid a strong foundation. We've not only supported each other, but we've also dreamt and stepped forward together. Every step we've taken has been part of a greater story, and now we're ready to move forward to the next chapter.
                </p>
              </div>
            </div>

            {/* Spacer for mobile */}
            <div className="hidden md:block w-1/2" />
          </div>

          {/* Our Future Together Section - Left Side */}
          <div className="relative flex items-center md:flex-row">
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-white/20 hidden md:block" />

            {/* Content */}
            <div className="w-full md:w-1/2 md:pr-12">
              <div className="card-glass p-4 md:p-6 text-center text-white">
                {/* Two images side by side with blur background */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {/* Left Image */}
                  <div className="relative overflow-hidden rounded-[var(--radius)] aspect-[3/4]">
                    {/* Blurred background layer */}
                    <div
                      className="absolute inset-0 bg-cover bg-center scale-110 blur-2xl"
                      style={{ backgroundImage: `url(/assets/images/IMG-20251107-WA0020.jpg)` }}
                    />
                    {/* Main image layer - centered and contained */}
                    <div
                      className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(/assets/images/IMG-20251107-WA0020.jpg)` }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  
                  {/* Right Image */}
                  <div className="relative overflow-hidden rounded-[var(--radius)] aspect-[3/4]">
                    {/* Blurred background layer */}
                    <div
                      className="absolute inset-0 bg-cover bg-center scale-110 blur-2xl"
                      style={{ backgroundImage: `url(/assets/images/IMG-20251107-WA0022.jpg)` }}
                    />
                    {/* Main image layer - centered and contained */}
                    <div
                      className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(/assets/images/IMG-20251107-WA0022.jpg)` }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif font-bold mb-2">Our Future Together</h3>
                <p className="opacity-90 leading-relaxed">
                  We know that every new day will bring new adventures, and we're ready to face them hand in hand. We will continue to build this life together, filled with love, happiness, and memories we'll share for the rest of our lives.
                </p>
              </div>
            </div>

            {/* Spacer for mobile */}
            <div className="hidden md:block w-1/2" />
          </div>
        </div>
      </div>
    </Section>
  );
}