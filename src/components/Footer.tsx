import { siteContent } from "../data/content";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const socialIconMap = {
  Instagram: Instagram,
  Facebook: Facebook,
  Twitter: Twitter
};

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white">V</span>
              </div>
              <span className="text-white">Vitality Bowl</span>
            </div>
            <p className="text-gray-400">
              Fresh, organic, and locally sourced meals that make you feel alive.
            </p>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-lg text-white">Location</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p>{footer.address.street}</p>
                  <p>{footer.address.city}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg text-white">Hours & Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {footer.hours.map((schedule, index) => (
                    <div key={index}>
                      <p className="text-sm">{schedule.days}</p>
                      <p className="text-sm text-gray-500">{schedule.time}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-400" />
                <a href={`tel:${footer.contact.phone}`} className="hover:text-green-400 transition-colors">
                  {footer.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-green-400" />
                <a href={`mailto:${footer.contact.email}`} className="hover:text-green-400 transition-colors">
                  {footer.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-lg text-white">Follow Us</h3>
            <div className="flex gap-4">
              {footer.socials.map((social) => {
                const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Join our community for daily inspiration, recipes, and special offers!
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; 2024 Vitality Bowl. All rights reserved. Made with 💚 and real ingredients.</p>
        </div>
      </div>
    </footer>
  );
}
