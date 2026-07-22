import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function ImagesCarousel({ images = [], altTexts = [] }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full px-4 md:px-8">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-3 md:-ml-4">
          {images.map((image, i) => {
            const altText = altTexts[i] ?? `Product image ${i + 1}`;

            return (
              <CarouselItem
                key={i}
                className="pl-3 sm:basis-1/2 md:pl-4 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="group relative h-[240px] w-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-100 shadow-sm transition-all duration-300 hover:shadow-md sm:h-[280px]">
                  <Image
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    src={image}
                    alt={altText}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm font-medium text-white line-clamp-1 drop-shadow-sm">
                      {altText}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {images.length > 1 && (
          <>
            <CarouselPrevious className="-left-3 md:-left-5 h-10 w-10 border-gray-200 bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-105 transition-all shadow-md text-gray-800" />
            <CarouselNext className="-right-3 md:-right-5 h-10 w-10 border-gray-200 bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-105 transition-all shadow-md text-gray-800" />
          </>
        )}
      </Carousel>
    </div>
  );
}
