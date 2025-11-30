import { useState } from "react";
import { siteContent } from "../data/content";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (path: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => {
              onNavigate("/");
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <span className="text-white">V</span>
            </div>
            <span className="text-gray-900 transition-colors group-hover:text-green-600">
              Vitality Bowl
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {siteContent.navigation.map((link) => (
              <button
                key={link.path}
                onClick={() => onNavigate(link.path)}
                className={`transition-colors ${
                  currentPage === link.path
                    ? "text-green-600"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate("/contact")}
              className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
            >
              Visit Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-green-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {siteContent.navigation.map((link) => (
                <button
                  key={link.path}
                  onClick={() => {
                    onNavigate(link.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    currentPage === link.path
                      ? "bg-green-50 text-green-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate("/contact");
                  setMobileMenuOpen(false);
                }}
                className="mx-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
              >
                Visit Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
