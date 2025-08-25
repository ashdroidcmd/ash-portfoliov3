import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface CarouselProps {
  images: string[];
  onClose: () => void;
}

const Carousel: React.FC<CarouselProps> = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <dialog id="carouselModal" className="modal modal-open" onClick={onClose}>
      <div
        className="modal-box relative max-w-7xl rounded-2xl border border-gray-400 p-0 bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-black/70 p-2 text-white hover:bg-black"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full max-h-[80vh] object-contain rounded-2xl"
        />

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white hover:bg-black"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white hover:bg-black"
        >
          <ChevronRight size={28} />
        </button>

        {/* Indicators */}
        <div className="my-3 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 w-2 rounded-full ${
                i === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </dialog>
  );
};

export default Carousel;
