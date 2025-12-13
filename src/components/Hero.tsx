import { useRef } from "react";
import { ImageTrail } from "./ImageTrail";
import { BackgroundPaths } from "./BackgroundPaths";

interface HeroProps {
  onDevisClick: () => void;
}

export default function Hero({ onDevisClick }: HeroProps) {
  const trailRef = useRef<HTMLDivElement | null>(null);

  const images = [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    "https://images.unsplash.com/photo-1502672023488-70e25813eb80",
  ].map((url) => `${url}?auto=format&fit=crop&w=300&q=80`);

  return (
    <div className="relative hero min-h-[80vh] md:h-[86vh] bg-black text-white overflow-hidden">
      <BackgroundPaths />

      <div ref={trailRef} className="absolute inset-0 z-10 pointer-events-none">
        <ImageTrail containerRef={trailRef}>
          {images.map((url, index) => (
            <div
              key={index}
              className="relative w-36 h-24 md:w-72 md:h-40 overflow-hidden rounded-2xl opacity-95"
            >
              <img
                src={url}
                alt={`Appartement ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </ImageTrail>
      </div>

      <div className="hero-overlay bg-black bg-opacity-70" />

      <div className="hero-content relative z-20 flex items-center justify-center text-center px-4 pt-20 md:pt-24">
        <div className="max-w-md md:max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wider leading-tight">
            Rénovation d&apos;Appartements à Paris
          </h1>
          <p className="mt-3 mb-4 text-base md:text-xl">
            Excellence depuis 1998
          </p>
          <button
            onClick={onDevisClick}
            className="btn btn-outline btn-md md:btn-lg mt-2"
          >
            Devis Gratuit
          </button>
        </div>
      </div>
    </div>
  );
}
