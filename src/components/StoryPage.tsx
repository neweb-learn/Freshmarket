import { siteContent } from "../data/content";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Users, Sprout, Award } from "lucide-react";

export function StoryPage() {
  const { story } = siteContent;

  const values = [
    {
      icon: Heart,
      title: "Passion for Quality",
      description: "We source only the finest organic ingredients from trusted local partners."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Supporting local farmers and bringing our community together through food."
    },
    {
      icon: Sprout,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and reducing our environmental impact."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Every dish is crafted with care, attention to detail, and love."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-b from-green-50/50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl text-gray-900">{story.heading}</h1>
          <p className="text-2xl text-gray-600">{story.subhead}</p>
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6 text-lg text-gray-600">
            {story.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={story.image}
                alt="Our farmers"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 px-6 py-4 bg-white rounded-2xl shadow-xl border-4 border-green-100">
              <div className="text-center">
                <div className="text-3xl text-green-600">12+</div>
                <div className="text-sm text-gray-600">Local Farms</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 px-6 py-4 bg-white rounded-2xl shadow-xl border-4 border-orange-100">
              <div className="text-center">
                <div className="text-3xl text-orange-500">100%</div>
                <div className="text-sm text-gray-600">Organic</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every single day</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-3xl hover:bg-green-50 transition-colors"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline or Stats */}
        <div className="mt-20 p-12 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl text-white text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl">Join the Fresh Food Movement</h2>
          <p className="text-xl text-green-50 max-w-2xl mx-auto">
            Together, we're building a healthier, more sustainable food system—one bowl at a time.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-8">
            <div>
              <div className="text-4xl mb-2">50K+</div>
              <div className="text-green-100">Bowls Served</div>
            </div>
            <div>
              <div className="text-4xl mb-2">12</div>
              <div className="text-green-100">Partner Farms</div>
            </div>
            <div>
              <div className="text-4xl mb-2">100%</div>
              <div className="text-green-100">Organic Ingredients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
