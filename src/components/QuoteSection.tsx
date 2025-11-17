import React from "react";
import Image from "next/image";
import Section from "@/components/Section";

export default function QuoteSection() {
  return (
    <Section id="quote" bgImage="/assets/images/IMG-20251107-WA0015.jpg" nextId="dresscode" contentClassName="animate-fade-in-up">
      <div className="mx-auto max-w-xl text-center">
        <div className="card-glass p-6 md:p-10">
          {/* <div className="mx-auto mb-6 h-64 w-44 overflow-hidden rounded-[2rem]">
            <Image src="/assets/images/IMG2025-11-hero.jpg" alt="couple" width={500} height={800} className="h-full w-full object-cover" />
          </div> */}
          {/* <p className="mt-4 font-semibold">وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ</p> */}
          <p className="italic opacity-90">“Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”</p>
          <p className="mt-4 font-semibold">Ar-Rum · Ayat 21</p>
        </div>
      </div>
    </Section>
  );
}


