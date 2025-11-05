import React from "react";

export default function FloatingMenu({ opened }: { opened: boolean }) {
  const items = [{ href: "#home", label: "Home" }].concat(
    opened
      ? [
          { href: "#couple", label: "Couple" },
          { href: "#quote", label: "Quote" },
          { href: "#dresscode", label: "Dress" },
          { href: "#countdown", label: "Event" },
          { href: "#rsvp", label: "RSVP" },
          { href: "#gallery", label: "Gallery" },
        ]
      : []
  );
  return (
    <nav className="fixed bottom-6 right-6 z-50">
      <ul className="rounded-full bg-black/60 px-3 py-2 shadow-lg backdrop-blur">
        {items.map((i) => (
          <li key={i.href} className="inline">
            <a href={i.href} className="mx-1 inline-block rounded-full px-3 py-1 text-sm opacity-90 hover:bg-white/10">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}


