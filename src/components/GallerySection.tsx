import React from "react";
import Image from "next/image";
import Section from "@/components/Section";

export default function GallerySection() {
  return (
    <Section id="gallery" bgImage="/assets/images/IMG-20251107-WA0006.jpg" contentClassName="animate-fade-in">
      <h2 className="title text-center">Gallery</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {["/assets/images/IMG-20251107-WA0013.jpg","/assets/images/IMG-20251107-WA0014.jpg","/assets/images/IMG-20251107-WA0015.jpg"].map((src)=> (
          <div key={src} className="h-72 w-full overflow-hidden rounded-2xl">
            <Image src={src} alt="gallery" width={900} height={600} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
      <div className="mt-10 overflow-hidden rounded-2xl">
        <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/0rA0QwG3P0U" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    </Section>
  );
}


