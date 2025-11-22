import React from "react";
import Image from "next/image";
import Section from "@/components/Section";

export default function GallerySection() {
  return (
    <Section id="gallery" bgImage="/assets/images/IMG-20251112-WA0058.jpg" contentClassName="animate-fade-in" blurBg>
      <h2 className="title text-center">Gallery</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {["/assets/images/6.jpg","/assets/images/5.jpg","/assets/images/IMG-20251107-WA0036.jpg","/assets/images/IMG-20251107-WA0030.jpg","/assets/images/4.jpg","/assets/images/2.jpg"].map((src, index)=> (
          <div key={src} className="h-72 w-full overflow-hidden rounded-2xl">
            <Image 
              src={src} 
              alt="gallery" 
              width={900} 
              height={600} 
              className="h-full w-full object-cover" 
              loading={index < 3 ? "eager" : "lazy"}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        ))}
      </div>
      {/* <div className="mt-10 overflow-hidden rounded-2xl">
        <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/0rA0QwG3P0U" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div> */}
    </Section>
  );
}


