import React from "react";
import Section from "@/components/Section";

export default function StoryTimeline() {
  const timelineEvents = [
    {
      id: 1,
      date: "2013",
      title: "First Meeting",
      description: "From the moment we met, it felt like the world gave us the chance to get to know each other more deeply. What started as a simple friendship blossomed into love, and we became certain that we wanted to walk this journey together.",
      image1: "/assets/images/IMG-20251107-WA0010.jpg",
      image2: "/assets/images/IMG-20251107-WA0012.jpg",
    },
    {
      id: 2,
      date: "July 20, 2025",
      title: "Love that Blossomed",
      description: "The years we spent together laid a strong foundation. We dreamed, supported each other, and took every step forward. Finally, in July 2025, we celebrated our engagement as the beginning of an even more beautiful story.",
      image1: "/assets/images/IMG-20251107-WA0030.jpg",
      image2: "/assets/images/IMG-20251107-WA0017.jpg",
    },
    {
      id: 3,
      date: "December 06, 2025",
      title: "Towards Marriage",
      description: "December 2025 will be a sacred moment when two souls, who perfectly complement each other, are united in a holy bond. With love and laughter, we&apos;re ready to start a new chapter as husband and wife.",
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
            It all began in 2013, when a simple meeting during our school days sparked a warm and meaningful connection. Two years later, in 2015, we decided to support each other and walk together through every chapter of life.
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

          {/* A Future Together Section - Right Side */}
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
                
                <h3 className="text-2xl font-serif font-bold mb-2">A Future Together</h3>
                <p className="opacity-90 leading-relaxed">
                  We believe every day brings a new adventure. With our hands intertwined, we will continue to build a life full of love, happiness, and everlasting memories.
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