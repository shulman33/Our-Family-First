import React from "react";
import Image from "next/image";

export default function OurMission() {
  return (
    <div className="bg-white py-16 sm:py-32" id="our-mission">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex">
        <div className="hidden lg:block lg:w-1/2">
          <Image
            src="/our-mission-image.png"
            width={497}
            height={601}
            alt="Mission Image"
            className="w-full"
          />
        </div>
        <div className="lg:w-1/2">
          <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our <span className="text-customBlue">Mission</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 lg:text-justify">
              Our Family First was developed in response to specific requests
              for mental health support to assist Chayalim and Chayalot as they
              return to their families from the frontlines. We provide
              psycho-educational workshops and couples counseling during
              overnight retreats. Our mission is to address mental health,
              marital and parenting issues with members of the military as they
              reintegrate into their families after experiencing life altering
              trauma during the war. We strive to help each person achieve a
              sense of security and stability in their families so that they can
              return to combat with the clear mind that is necessary to protect
              the members of their military family.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
