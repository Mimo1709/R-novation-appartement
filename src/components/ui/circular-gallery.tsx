import React, {
  useState,
  useEffect,
  useRef,
  type HTMLAttributes,
  type MouseEvent,
  type TouchEvent,
} from "react";

const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(" ");

export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
    by: string;
  };
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  radius?: number;
  autoRotateSpeed?: number;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 600, autoRotateSpeed = 0.05, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [responsiveRadius, setResponsiveRadius] = useState(radius);
    const dragStartX = useRef(0);
    const dragStartRotation = useRef(0);
    const animationFrameRef = useRef<number | null>(null);

    // Détecter mobile et ajuster radius
    useEffect(() => {
      const handleResize = () => {
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);
        setResponsiveRadius(mobile ? 250 : radius);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [radius]);

    // Auto-rotation en continu (uniquement quand on ne drag pas)
    useEffect(() => {
      const autoRotate = () => {
        if (!isDragging) {
          setRotation((prev) => prev + autoRotateSpeed);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isDragging, autoRotateSpeed]);

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      dragStartX.current = e.clientX;
      dragStartRotation.current = rotation;
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      const deltaX = e.clientX - dragStartX.current;
      setRotation(dragStartRotation.current + deltaX * 0.3);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    // Support tactile pour mobile
    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
      setIsDragging(true);
      dragStartX.current = e.touches[0].clientX;
      dragStartRotation.current = rotation;
    };

    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      const deltaX = e.touches[0].clientX - dragStartX.current;
      setRotation(dragStartRotation.current + deltaX * 0.3);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn(
          "relative w-full h-full flex items-center justify-center select-none",
          className
        )}
        style={{ perspective: "2000px" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        {...props}
      >
        <div
          className="relative w-full h-full cursor-grab active:cursor-grabbing"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(
              relativeAngle > 180 ? 360 - relativeAngle : relativeAngle
            );
            const opacity = Math.max(0.3, 1 - normalizedAngle / 180);

            return (
              <div
                key={item.photo.url}
                role="group"
                aria-label={item.common}
                // Mobile 160x240, Desktop 300x400
                className="absolute w-[160px] h-[240px] md:w-[300px] md:h-[400px]"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${responsiveRadius}px)`,
                  left: "50%",
                  top: "50%",
                  // MARGES : Mobile -80/-120, Desktop -150/-200 (COMME TON CODE ORIGINAL)
                  marginLeft: isMobile ? "-80px" : "-150px",
                  marginTop: isMobile ? "-120px" : "-200px",
                  opacity,
                  transition: "opacity 0.3s linear",
                }}
              >
                <div className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden group border border-gray-800 bg-gray-950/70 backdrop-blur-lg">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: item.photo.pos || "center" }}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-3 md:p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h2 className="text-base md:text-xl font-bold">
                      {item.common}
                    </h2>
                    <em className="text-xs md:text-sm italic opacity-80">
                      {item.binomial}
                    </em>
                    <p className="text-[9px] md:text-xs mt-1.5 md:mt-2 opacity-70">
                      {item.photo.by}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = "CircularGallery";

export { CircularGallery };
