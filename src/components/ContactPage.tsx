import { siteContent } from "../data/content";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const socialIconMap = {
  Instagram: Instagram,
  Facebook: Facebook,
  Twitter: Twitter
};

export function ContactPage() {
  const { footer } = siteContent;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-b from-green-50/50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl text-gray-900">Visit Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come experience the freshest food in town. We can't wait to serve you!
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            {/* Location */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl text-gray-900">Location</h2>
              </div>
              <div className="pl-15 text-gray-600">
                <p>{footer.address.street}</p>
                <p>{footer.address.city}</p>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl text-gray-900">Hours</h2>
              </div>
              <div className="pl-15 space-y-2">
                {footer.hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center text-gray-600 border-b border-gray-100 pb-2">
                    <span>{schedule.days}</span>
                    <span className="text-green-600">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl text-gray-900">Get in Touch</h2>
              </div>
              <div className="pl-15 space-y-3">
                <a
                  href={`tel:${footer.contact.phone}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {footer.contact.phone}
                </a>
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  {footer.contact.email}
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h2 className="text-2xl text-gray-900">Follow Us</h2>
              <div className="flex gap-4">
                {footer.socials.map((social) => {
                  const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-gray-100 hover:bg-green-600 hover:text-white flex items-center justify-center transition-all text-gray-600"
                      aria-label={social.platform}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-6">
            <div className="w-full h-[500px] bg-gradient-to-br from-green-100 to-green-200 rounded-3xl overflow-hidden shadow-xl flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <MapPin className="w-16 h-16 mx-auto text-green-600" />
                <h3 className="text-2xl text-gray-900">Find Us Here</h3>
                <p className="text-gray-600">
                  Located in the heart of Portland, just a short walk from downtown.
                </p>
                <button className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-orange-50 rounded-2xl text-center">
                <div className="text-3xl mb-2">🚗</div>
                <div className="text-sm text-gray-600">Free Parking</div>
              </div>
              <div className="p-6 bg-green-50 rounded-2xl text-center">
                <div className="text-3xl mb-2">🌱</div>
                <div className="text-sm text-gray-600">Outdoor Seating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reservation CTA */}
        <div className="mt-20 text-center space-y-6 py-12 px-8 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl text-white">
          <h2 className="text-3xl lg:text-4xl">Ready to Experience Fresh?</h2>
          <p className="text-xl text-green-50 max-w-2xl mx-auto">
            Walk-ins welcome! For groups of 6 or more, please call ahead.
          </p>
          <button className="px-8 py-4 bg-white text-green-600 rounded-full hover:bg-green-50 transition-all hover:shadow-lg">
            Call to Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
