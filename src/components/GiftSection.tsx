import React from "react";
import Section from "@/components/Section";

export default function GiftSection() {
  const giftOptions = [
    {
      bank: "BCA",
      accountNumber: "7390823694",
      accountName: "Dewi Manca Indira",
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 32 32" className="w-9 h-9 ml-4">
          <path d="M28,30.426H4c-1.337,0-2.425-1.089-2.425-2.426V4c0-1.337,1.088-2.425,2.425-2.425h24 c1.337,0,2.426,1.088,2.426,2.425v24C30.426,29.337,29.337,30.426,28,30.426z M16.425,29.574H28c0.868,0,1.574-0.706,1.574-1.574 v-2.574H25c-0.113,0-0.221-0.045-0.301-0.125l-3.875-3.875h-4.399V29.574z M2.425,25.426V28c0,0.868,0.707,1.574,1.575,1.574h11.575 v-8.148h-4.398l-3.875,3.875c-0.08,0.08-0.188,0.125-0.301,0.125C7.001,25.426,2.425,25.426,2.425,25.426z M25.176,24.574h4.398 v-8.149h-8.148v4.399L25.176,24.574z M2.425,24.574h4.398l3.751-3.75v-4.399H2.425V24.574z M11.425,20.574h9.149v-9.149h-9.149 C11.425,11.425,11.425,20.574,11.425,20.574z M21.426,15.575h8.148v-8.15h-4.398l-3.75,3.751 C21.426,11.176,21.426,15.575,21.426,15.575z M2.425,15.575h8.149v-4.398l-3.75-3.752H2.425V15.575z M16.425,10.575h4.399 L24.699,6.7c0.08-0.08,0.188-0.125,0.301-0.125h4.574V4c0-0.868-0.706-1.575-1.574-1.575H16.425V10.575z M11.176,10.575h4.398v-8.15 H4C3.132,2.425,2.425,3.132,2.425,4v2.575H7c0.113,0,0.221,0.044,0.301,0.125L11.176,10.575z"/>
          <rect id="_Transparent_Rectangle" width="32" height="32" style={{ fill: "none" }} />
        </svg>
      ),
    },
    {
      bank: "BCA",
      accountNumber: "5681084780",
      accountName: "Ihsan Taqwa",
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 32 32" className="w-9 h-9 ml-4">
          <path d="M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2z M16,28C9.373,28,4,22.627,4,16 S9.373,4,16,4s12,5.373,12,12S22.627,28,16,28z M20,12h-4v-2h4V12z M12,12H8v-2h4V12z M20,16h-4v-2h4V16z M12,16H8v-2h4V16z M20,20h-4v-2h4V20z M12,20H8v-2h4V20z"/>
        </svg>
      ),
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Section id="gift" bgImage="https://www.veslavia.com/demo/images/headerImg6.webp" nextId="thanks" contentClassName="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="title text-4xl md:text-5xl">Wedding Love Gift</h2>
        <div className="mt-4 h-px w-24 mx-auto bg-white/30" />
        <p className="mt-4 opacity-90 text-white max-w-2xl mx-auto">
          Apabila tamu ingin mengirimkan hadiah kepada kedua mempelai dapat melalui rekening atau virtual account dibawah ini
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {giftOptions.map((gift, index) => (
          <div key={index} className="w-full max-w-md h-44 rounded-xl p-4 shadow-lg flex flex-col justify-between bg-gradient-to-r text-white backdrop-blur-md bg-opacity-50 mx-auto">
            <div className="text-right text-lg font-mono">{gift.bank}</div>
            {gift.logo}
            <div className="font-mono text-base ml-2 mt-4">{gift.accountNumber}</div>
            <div className="flex justify-between items-end mt-2">
              <div className="font-mono text-sm ml-2">{gift.accountName}</div>
              <button
                onClick={() => copyToClipboard(gift.accountNumber.replace(/\s/g, ''))}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
              >
                Copy Number
              </button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}