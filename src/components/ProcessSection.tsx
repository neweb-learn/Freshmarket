import { siteContent } from "../data/content";
import { Leaf, Truck, ChefHat, Heart } from "lucide-react";

const iconMap = {
  Leaf: Leaf,
  Truck: Truck,
  ChefHat: ChefHat,
  Heart: Heart
};

export function ProcessSection() {
  const { process } = siteContent;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900">{process.heading}</h2>
          <p className="text-xl text-gray-600">{process.subhead}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.steps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            
            return (
              <div key={index} className="text-center space-y-4">
                {/* Icon Circle */}
                <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                  <Icon className="w-12 h-12 text-white" />
                </div>

                {/* Connecting Line (except last item) */}
                {index < process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+48px)] w-[calc(100%-96px)] h-1 bg-gradient-to-r from-green-400 to-green-200"></div>
                )}

                <div className="space-y-2">
                  <h3 className="text-xl text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual flow line for desktop */}
        <div className="hidden lg:block relative mt-16">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse"></div>
            <div className="flex-1 h-1 bg-gradient-to-r from-green-600 via-green-400 to-orange-400"></div>
            <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
          </div>
          <p className="text-center mt-4 text-sm text-gray-500">
            Farm to Table in 24 Hours
          </p>
        </div>
      </div>
    </section>
  );
}
