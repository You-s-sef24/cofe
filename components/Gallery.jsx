import Image from "next/image";
import React from "react";

export default function Gallery({ images = [], categoryName = "Product" }) {
  if (!images || images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white p-12 text-center space-y-3">
        <p className="text-lg font-semibold text-gray-700">
          No items available
        </p>
        <p className="text-sm text-gray-400">
          Check back soon for updated items in {categoryName}.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {images.map((image, i) => (
        <div
          key={i}
          className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/5"
        >
          <Image
            src={image}
            alt={`${categoryName} ${i + 1}`}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white opacity-0 transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
            <span className="text-xs font-semibold tracking-wide bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/30">
              {categoryName}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
