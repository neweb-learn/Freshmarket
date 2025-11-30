import { siteContent } from "../data/content";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

interface GalleryTeaserProps {
  onNavigate: (path: string) => void;
}

export function GalleryTeaser({ onNavigate }: GalleryTeaserProps) {
  const { galleryTeaser } = siteContent;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900">{galleryTeaser.heading}</h2>
          <p className="text-xl text-gray-600">{galleryTeaser.subhead}</p>
        </div>

        {/* Playful overlapping grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {galleryTeaser.images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
              onClick={() => onNavigate("/gallery")}
            >
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Hover overlay with emoji */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-6xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  {index === 0 ? "🌿" : index === 1 ? "🥗" : index === 2 ? "🥤" : "🥑"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate(galleryTeaser.cta.link)}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition-all hover:shadow-lg hover:scale-105 inline-flex items-center gap-2"
          >
            {galleryTeaser.cta.label}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
