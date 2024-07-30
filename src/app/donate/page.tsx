"use client";

import { useEffect } from "react";

export default function Donate() {
  useEffect(() => {
    document.body.classList.add("hide-footer");
    return () => {
      document.body.classList.remove("hide-footer");
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center">
      <iframe
        id="JotFormIFrame-242065390395964"
        title="Our Family First - Lt. Colonel Daniel Jacob - Aug 8"
        onLoad={() => window.parent.scrollTo(0, 0)}
        allowTransparency={true}
        allow="geolocation; microphone; camera; fullscreen"
        src="https://form.jotform.com/242065390395964"
        className="w-full max-w-4xl h-96 border-none"
      ></iframe>
    </main>
  );
}
