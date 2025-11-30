import { siteContent } from "../data/content";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Camera } from "lucide-react";

export function GalleryPage() {
  const { galleryTeaser, menuHighlights } = siteContent;

  // Extended gallery with more images
  const allImages = [
    ...galleryTeaser.images,
    ...menuHighlights.items.map(item => ({
      src: item.image,
      alt: item.name,
      prompt: `Photo of ${item.name}`
    }))
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-b from-orange-50/50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
            <Camera className="w-4 h-4 text-orange-600" />
            <span className="text-sm text-orange-700">Fresh Vibes Daily</span>
          </div>
          <h1 className="text-5xl lg:text-6xl text-gray-900">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A visual feast of fresh ingredients, happy customers, and the vibrant energy that fills our space every day.
          </p>
        </div>
      </div>

      {/* Masonry Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
                index % 5 === 0 ? "lg:row-span-2" : ""
              }`}
            >
              <div className={index % 5 === 0 ? "aspect-[3/4]" : "aspect-square"}>
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center space-y-6 py-12 px-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl text-white">
          <Camera className="w-16 h-16 mx-auto" />
          <h2 className="text-3xl lg:text-4xl">Share Your Vitality Moment</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Tag us @vitalitybowl on Instagram for a chance to be featured in our gallery!
          </p>
          <button className="px-8 py-4 bg-white text-orange-600 rounded-full hover:bg-orange-50 transition-all hover:shadow-lg inline-flex items-center gap-2">
            <span>Follow @vitalitybowl</span>
          </button>
        </div>
      </div>
    </div>
  );
}
