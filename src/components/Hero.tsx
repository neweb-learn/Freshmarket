import { siteContent } from "../data/content";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles } from "lucide-react";

interface HeroProps {
  onNavigate: (path: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const { hero } = siteContent;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50/50 to-white">
      {/* Organic blob background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-green-100">
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-700">100% Organic & Local</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-gray-900 tracking-tight">
                {hero.headline}
              </h1>
              <p className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                {hero.subhead}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onNavigate(hero.cta.link)}
                className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all hover:shadow-lg hover:scale-105"
              >
                {hero.cta.label}
              </button>
              <button
                onClick={() => onNavigate("/story")}
                className="px-8 py-4 bg-white text-green-600 rounded-full border-2 border-green-600 hover:bg-green-50 transition-all"
              >
                Our Story
              </button>
            </div>
          </div>

          {/* Hero Image - Floating Effect */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <ImageWithFallback
                src={hero.image.src}
                alt={hero.image.alt}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-white text-3xl">🥗</span>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
