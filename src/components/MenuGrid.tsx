import { siteContent } from "../data/content";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

interface MenuGridProps {
  onNavigate: (path: string) => void;
}

export function MenuGrid({ onNavigate }: MenuGridProps) {
  const { menuHighlights } = siteContent;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900">{menuHighlights.heading}</h2>
          <p className="text-xl text-gray-600">{menuHighlights.subhead}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuHighlights.items.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => onNavigate("/menu")}
            >
              <div className="relative overflow-hidden rounded-3xl bg-gray-50 mb-4 aspect-square">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <button className="px-6 py-2 bg-white text-green-600 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Price badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-white rounded-full shadow-lg">
                  <span className="text-green-600">{item.price}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl text-gray-900 group-hover:text-green-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate(menuHighlights.cta.link)}
            className="px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all hover:shadow-lg hover:scale-105 inline-flex items-center gap-2"
          >
            {menuHighlights.cta.label}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
