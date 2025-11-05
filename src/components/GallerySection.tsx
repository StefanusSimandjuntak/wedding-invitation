import React from "react";
import Image from "next/image";
import Section from "@/components/Section";

export default function GallerySection() {
  return (
    <Section id="gallery" bgImage="https://www.veslavia.com/demo/images/footerImg.webp" contentClassName="animate-fade-in">
      <h2 className="title text-center">Gallery</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {["https://www.veslavia.com/demo/images/headerImg6.webp","https://www.veslavia.com/demo/images/footerImg.webp","https://www.veslavia.com/demo/images/headerImg.webp"].map((src)=> (
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


