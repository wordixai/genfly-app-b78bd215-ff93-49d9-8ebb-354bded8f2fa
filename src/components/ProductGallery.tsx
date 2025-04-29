import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0);
  
  return (
    <>
      <div className="relative h-72 w-full">
        <Image
          src={images[currentImage]}
          alt="Product image"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
        />
        
        <button 
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center"
          onClick={() => setCurrentImage(prev => (prev === 0 ? images.length - 1 : prev - 1))}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        
        <button 
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center"
          onClick={() => setCurrentImage(prev => (prev === images.length - 1 ? 0 : prev + 1))}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
        
        <a href="/" className="absolute top-4 left-4 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </a>
      </div>
      
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button 
            key={index}
            className={`w-2 h-2 rounded-full ${currentImage === index ? 'bg-primary' : 'bg-muted'}`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </>
  );
}