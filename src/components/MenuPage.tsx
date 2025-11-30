import { siteContent } from "../data/content";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Leaf } from "lucide-react";

export function MenuPage() {
  const { menuHighlights } = siteContent;

  // Extended menu items (duplicating for demonstration)
  const allMenuItems = [
    ...menuHighlights.items,
    {
      name: "Mediterranean Wrap",
      price: "$13",
      description: "Hummus, falafel, cucumber, tomato, lettuce, tahini sauce",
      image: menuHighlights.items[0].image,
      category: "Wraps"
    },
    {
      name: "Protein Power Bowl",
      price: "$16",
      description: "Grilled chicken, brown rice, broccoli, sweet potato, peanut sauce",
      image: menuHighlights.items[1].image,
      category: "Bowls"
    },
    {
      name: "Golden Turmeric Latte",
      price: "$7",
      description: "Turmeric, ginger, cinnamon, coconut milk, honey",
      image: menuHighlights.items[3].image,
      category: "Drinks"
    },
    {
      name: "Chocolate Protein Smoothie",
      price: "$11",
      description: "Banana, cacao, protein powder, almond butter, almond milk",
      image: menuHighlights.items[2].image,
      category: "Smoothies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/30 to-white">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-orange-100/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
            <Leaf className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-700">Fresh Daily</span>
          </div>
          <h1 className="text-5xl lg:text-6xl text-gray-900">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every item is crafted with locally sourced, organic ingredients. Made fresh to order.
          </p>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allMenuItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-4 py-2 bg-white rounded-full shadow-lg">
                  <span className="text-green-600">{item.price}</span>
                </div>
              </div>
              
              <div className="p-6 space-y-3">
                <h3 className="text-2xl text-gray-900">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                
                <div className="pt-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                    <Leaf className="w-3 h-3" />
                    Organic
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center space-y-6 py-12 px-8 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl text-white">
          <h2 className="text-3xl lg:text-4xl">Ready to Experience Fresh?</h2>
          <p className="text-xl text-green-50 max-w-2xl mx-auto">
            Visit us today and taste the difference that real, organic ingredients make.
          </p>
          <button className="px-8 py-4 bg-white text-green-600 rounded-full hover:bg-green-50 transition-all hover:shadow-lg">
            Find Our Location
          </button>
        </div>
      </div>
    </div>
  );
}
