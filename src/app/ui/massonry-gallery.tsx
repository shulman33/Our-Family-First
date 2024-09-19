"use client";

import { useState } from "react";

const images = [
  "cta-1.jpg",
  "cta-2.jpg",
  "cta3.jpg",
  "stickers.jpg",
  "img11.jpg",
  "img12.jpg",
  "img13.jpg",
  "img14.jpg",
  "img15.jpg",
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img8.jpg",
  "PHOTO-2024-03-07-13-58-24.jpg",
  "PHOTO-2024-03-07-15-40-27.jpg",
  "PHOTO-2024-07-20-17-36-20.jpg",
  "PHOTO-2024-07-21-11-03-50.jpg"
];

export default function MasonryGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAllImages, setShowAllImages] = useState(false);

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const toggleShowAllImages = () => {
    setShowAllImages(!showAllImages);
  };

  return (
    <div className="relative isolate overflow-hidden bg-sectionBlue" id="gallery">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="text-center p-6 md:p-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Our <span className="text-customBlue">Gallery</span>
        </h2>
        <div className="columns-2 md:columns-3 gap-4">
          {images.slice(0, showAllImages ? images.length : 6).map((src, index) => (
            <div key={index} className="w-full mb-4">
              <img
                src={src}
                alt={`Random image ${index}`}
                className="w-full h-auto rounded-lg cursor-pointer"
                onClick={() => openImage(src)}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="animate-pulse text-white bg-customTeal px-4 py-2 rounded-full"
            onClick={toggleShowAllImages}
          >
            {showAllImages ? "Less" : "More"}
          </button>
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="max-w-3xl relative">
            <img
              src={selectedImage}
              alt="Selected image"
              className="w-full h-auto rounded-md"
            />
            <button
              className="absolute top-4 right-4 text-white bg-gray-900 px-4 py-2 rounded-md"
              onClick={closeImage}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
