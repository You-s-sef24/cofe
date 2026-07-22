import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-4 text-center md:grid-cols-2 md:text-left">
        {/* Logo Container */}
        <div className="flex justify-center items-center">
          <div className="relative flex items-center justify-center rounded-3xl bg-blue-50/50 p-6 md:p-10 transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src="/logo.png"
              width={260}
              height={260}
              alt="COFE Logo"
              priority
              className="h-auto w-auto object-contain"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center md:items-start gap-5">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800 border border-blue-100">
            Global Export Leader
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-blue-900 md:text-4xl lg:text-5xl leading-tight">
            Commercial Office For Export - COFE
          </h1>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
            We export to the Gulf Cooperation Council Countries, West and
            Central Africa, and the European Union. All our products conform to
            European and international standards.
          </p>

          <div className="pt-2">
            <Button className="group flex items-center gap-2 rounded-xl bg-blue-800 px-7 py-6 text-base font-semibold text-white shadow-md transition-all hover:bg-blue-900 hover:shadow-lg cursor-pointer">
              <span>Get in touch</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
