"use client";

import Gallery from "@/components/Gallery";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import PriceInquirySection from "@/components/PriceInquirySection";

export default function CategoryItems() {
    const { id } = useParams();

    const categories = [
        {
            id: "freshvegfruit",
            name: "Fresh Vegetables & Fruits",
            images: [
                "/freshvegfruit/1.jpg",
                "/freshvegfruit/2.jpg",
                "/freshvegfruit/3.jpg",
                "/freshvegfruit/4.jpg",
                "/freshvegfruit/5.jpg",
                "/freshvegfruit/6.jpg",
            ],
        },
        {
            id: "frozenveg",
            name: "Frozen Vegetables",
            images: [
                "/frozenveg/1.jpg",
                "/frozenveg/2.jpg",
                "/frozenveg/3.jpg",
            ],
        },
        {
            id: "frozenfish",
            name: "Frozen Fish & Shrimp",
            images: [
                "/frozenfish/1.jpg",
                "/frozenfish/2.jpg",
                "/frozenfish/3.jpg",
                "/frozenfish/4.jpg",
                "/frozenfish/5.jpg",
                "/frozenfish/6.jpg",
                "/frozenfish/7.jpg",
                "/frozenfish/8.jpg"
            ],
        },
        {
            id: "snacks",
            name: "Snacks",
            images: [
                "/snacks/1.jpg",
                "/snacks/2.jpg",
                "/snacks/3.jpg",
                "/snacks/4.jpg",
                "/snacks/5.jpg",
                "/snacks/6.jpg",
            ],
        },
        {
            id: "cosmetics",
            name: "Cosmetics",
            images: [
                "/cosmetics/1.jpg",
                "/cosmetics/2.jpg",
                "/cosmetics/3.jpg",
                "/cosmetics/4.jpg",
            ],
        },
    ];

    const activeCategory = categories.find((c) => c.id === id) || {
        id,
        name: id,
    };

    const images = activeCategory.images;

    return (
        <div className="min-h-screen bg-gray-50/30">
            <div className="max-w-7xl mx-auto px-4 py-8 md:px-8 space-y-8">

                <div className="space-y-4 border-b border-gray-200/60 pb-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-blue-600 transition-colors uppercase tracking-wider"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
                    </Link>

                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full mb-2 border border-blue-100">
                                <Sparkles className="w-3 h-3" /> Export Catalog
                            </span>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-blue-950 tracking-tight">
                                {activeCategory.name}
                            </h1>
                        </div>

                        <p className="text-sm font-medium text-gray-500">
                            Showing <span className="text-blue-950 font-bold">{images.length}</span> items
                        </p>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto pt-4 pb-2 no-scrollbar">
                        {categories.map((cat) => {
                            const isActive = cat.id === id;
                            return (
                                <Link
                                    key={cat.id}
                                    href={`/category/${cat.id}`}
                                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all ${isActive
                                        ? "bg-blue-900 text-white shadow-md shadow-blue-900/10"
                                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100 hover:text-gray-900"
                                        }`}
                                >
                                    {cat.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <Gallery images={images} categoryName={activeCategory.name} />
                <PriceInquirySection categoryName={activeCategory.name} />
            </div>
        </div>
    );
}