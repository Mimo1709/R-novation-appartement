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
    <div className="relative hero h-[86vh] bg-black text-white overflow-hidden">
      {/* BackgroundPaths en fond */}
      <BackgroundPaths />

      {/* Trail d’images au-dessus du fond */}
      <div ref={trailRef} className="absolute inset-0 z-10 pointer-events-none">
        <ImageTrail containerRef={trailRef}>
          {images.map((url, index) => (
            <div
              key={index}
              className="relative w-70 h-38 overflow-hidden rounded-2xl opacity-95"
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

      {/* Overlay sombre */}
      <div className="hero-overlay bg-black bg-opacity-70" />

      {/* Contenu texte au-dessus de tout */}
      <div className="hero-content text-center relative z-20 items-start pt-16 md:pt-20">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold uppercase tracking-wider">
            Rénovation d&apos;Appartements à Paris
          </h1>
          <p className="mt-4 mb-4 text-xl">Excellence depuis 1998</p>
          <button
            onClick={onDevisClick}
            className="btn btn-outline btn-lg mt-2"
          >
            Devis Gratuit
          </button>
        </div>
      </div>
    </div>
  );
}
