import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { MenuGrid } from "./components/MenuGrid";
import { ProcessSection } from "./components/ProcessSection";
import { GalleryTeaser } from "./components/GalleryTeaser";
import { Footer } from "./components/Footer";
import { MenuPage } from "./components/MenuPage";
import { StoryPage } from "./components/StoryPage";
import { GalleryPage } from "./components/GalleryPage";
import { ContactPage } from "./components/ContactPage";

function App() {
  const [currentPage, setCurrentPage] = useState("/");

  const handleNavigate = (path: string) => {
    setCurrentPage(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      {currentPage === "/" && (
        <>
          <Hero onNavigate={handleNavigate} />
          <MenuGrid onNavigate={handleNavigate} />
          <ProcessSection />
          <GalleryTeaser onNavigate={handleNavigate} />
        </>
      )}

      {currentPage === "/menu" && <MenuPage />}
      {currentPage === "/story" && <StoryPage />}
      {currentPage === "/gallery" && <GalleryPage />}
      {currentPage === "/contact" && <ContactPage />}

      <Footer />
    </div>
  );
}

export default App;
