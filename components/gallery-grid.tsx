"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Gallery items with categories
const galleryItems = [
  {
    category:"clinic tour",
    image: "/images/gallery-01.jpeg",
  },
  {
    category:"clinic tour",
    image: "/images/gallery-02.jpeg",
  },
  {
    category:"clinic tour",
    image: "/images/gallery-03.jpeg",
  },
  {
    category:"clinic tour",
    image: "/images/gallery-04.jpeg",
  },
  {
    category:"clinic tour",
    image: "/images/gallery-05.jpeg",
  },
  {
    category:"clinic tour",
    image: "/images/gallery-06.jpg",
  },
  {
    category:"posters",
    image: "/gallery/poster-01.jpg",
  },
  {
    category:"posters",
    image: "/gallery/poster-02.jpg",
  },
  {
    category:"posters",
    image: "/gallery/poster-03.jpg",
  },
  {
    category:"street view",
    image: "/gallery/street.jpg",
  },
  {
    category:"posters",
    image: "/gallery/poster-04.jpg",
  },
  {
    category:"posters",
    image: "/gallery/poster-05.jpg",
  },
  {
    category:"posters",
    image: "/gallery/poster-06.jpg",
  },
  {
    category:"posters",
    image: "/gallery/poster-07.jpg",
  },
  {
    category:"clinic cases",
    image: "/gallery/tooth-01.jpg",
  },
  {
    category:"clinic cases",
    image: "/gallery/tooth-02.jpg",
  },
  {
    category:"clinic cases",
    image: "/gallery/tooth-03.jpg",
  },
  {
    category:"clinic cases",
    image: "/gallery/tooth-04.jpg",
  },
  {
    category:"clinic cases",
    image: "/gallery/tooth-05.jpg",
  },
  {
    category:"clinic cases",
    image: "/gallery/tooth-06.jpg",
  },
  {
    category:"clinic cases",
    image: "/gallery/tooth-07.jpg",
  },
  {
    category:"clinic cases",
    image: "/gallery/tooth-08.jpg",
  },
]

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showAll, setShowAll] = useState<boolean>(false);

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  // Limit the number of images shown initially
  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 11);

  return (
    <div>
      {/* Category filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {["all", "clinic tour", "clinic cases", "posters", "street view"].map((category) => (
          <Button
            key={category}
            size={"lg"}
            variant={selectedCategory === category ? "default" : "outline"}
            className={cn(
              "capitalize",
              selectedCategory === category && "bg-[#1a2e4c] hover:bg-[#2a3e5c] cursor-pointer text-lg"
            )}
            onClick={() => {
              setSelectedCategory(category);
              setShowAll(false); // Reset "Show All" when switching categories
            }}
          >
            {category === "all" ? "All " : `${category}`}
          </Button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedItems.map((item) => (
          <div
            key={item.image}
            className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.image}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </div>
        ))}
      </div>

      {/* Show All Button */}
      {filteredItems.length > 6 && (
        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            variant="link"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show All"}
          </Button>
        </div>
      )}
    </div>
  );
}