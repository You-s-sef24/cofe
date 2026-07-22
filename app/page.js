import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import { ImagesCarousel } from "@/components/ImagesCarousel";

export default function Home() {
  const images = [
    "/carousel/1.jpg",
    "/carousel/2.jpg",
    "/carousel/3.jpg",
    "/carousel/4.jpg",
    "/carousel/5.jpg",
  ];
  const altTexts = [
    "Fresh Vegetables & Fruits",
    "Frozen Vegetables",
    "Frozen Fish & Shrimp",
    "Snacks & Goods",
    "Cosmetic Products",
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center gap-14 px-4">
      <HeroSection />
      <ImagesCarousel images={images} altTexts={altTexts} />
      <ContactSection />
    </div>
  );
}