import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function DonateForm() {
  return (
    <div className="relative isolate overflow-hidden bg-sectionBlue h-screen">
      <div className="bg-customBlue text-white text-center py-4">
        <h1 className="text-2xl font-bold">Donate Here</h1>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 sm:pt-10 lg:flex lg:px-8 h-full">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:flex-shrink-0 lg:pt-1 h-full w-full relative">
          <iframe
            id="JotFormIFrame-242065390395964"
            title="Our Family First - Lt. Colonel Daniel Jacob - Aug 8"
            onLoad={() => window.parent.scrollTo(0, 0)}
            allowTransparency={true}
            allow="geolocation; microphone; camera; fullscreen"
            src="https://form.jotform.com/242065390395964"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              position: "relative",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}