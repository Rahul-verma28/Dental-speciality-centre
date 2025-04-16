"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Gallery items with categories
const galleryItems = [
  {
    id: 1,
    title: "Professional Teeth Whitening",
    description: "Dramatic brightening results with our professional whitening treatment",
    category: "cosmetic",
    image: "/images/gallery-01.jpeg",
  },
  {
    id: 2,
    title: "Porcelain Veneers",
    description: "Custom veneers for a complete smile transformation",
    category: "cosmetic",
    image: "/images/gallery-02.jpeg",
  },
  {
    id: 3,
    title: "Invisible Aligners",
    description: "Straighten teeth discreetly with clear aligners",
    category: "orthodontic",
    image: "/images/gallery-03.jpeg",
  },
  {
    id: 4,
    title: "Dental Implants",
    description: "Permanent tooth replacement that looks and functions naturally",
    category: "restorative",
    image: "/images/gallery-04.jpeg",
  },
  {
    id: 5,
    title: "Smile Makeover",
    description: "Complete smile transformation combining multiple treatments",
    category: "cosmetic",
    image: "/images/gallery-05.jpeg",
  },
  {
    id: 6,
    title: "Dental Crowns",
    description: "Porcelain crowns that restore and protect damaged teeth",
    category: "restorative",
    image: "/images/gallery-01.jpeg",
  },
  {
    id: 7,
    title: "Gum Contouring",
    description: "Reshaping the gumline for a balanced, harmonious smile",
    category: "cosmetic",
    image: "/images/gallery-02.jpeg",
  },
  {
    id: 8,
    title: "Tooth-Colored Fillings",
    description: "Natural-looking fillings that blend seamlessly with your teeth",
    category: "restorative",
    image: "/images/gallery-03.jpeg",
  },
  {
    id: 9,
    title: "Traditional Braces",
    description: "Effective orthodontic treatment for complex alignment issues",
    category: "orthodontic",
    image: "/images/gallery-04.jpeg",
  },
]

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Filter gallery items by category
  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  // Handle next/previous image in lightbox
  const handleNext = () => {
    if (selectedImage === null) return
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedImage(filteredItems[nextIndex].id)
  }

  const handlePrevious = () => {
    if (selectedImage === null) return
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage)
    const previousIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedImage(filteredItems[previousIndex].id)
  }

  // Get selected image details
  const selectedImageDetails = galleryItems.find((item) => item.id === selectedImage)

  return (
    <div>
      {/* Category filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {["all", "cosmetic", "restorative", "orthodontic"].map((category) => (
          <Button
            key={category}
            size={"lg"}
            variant={selectedCategory === category ? "default" : "outline"}
            className={cn("capitalize", selectedCategory === category && "bg-[#1a2e4c] hover:bg-[#2a3e5c] cursor-pointer")}
            onClick={() => setSelectedCategory(category)}
          >
            {category === "all" ? "All Treatments" : `${category}`}
          </Button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md"
            onClick={() => setSelectedImage(item.id)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image lightbox */}
      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 sm:rounded-lg">
          <div className="relative aspect-[4/3] w-full">
            {selectedImageDetails && (
              <Image
                src={selectedImageDetails.image || "/placeholder.svg"}
                alt={selectedImageDetails.title}
                fill
                className="object-contain"
              />
            )}
            <DialogClose className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous</span>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next</span>
            </button>
          </div>
          <div className="bg-white p-6">
            {selectedImageDetails && (
              <>
                <h3 className="mb-2 text-xl font-bold">{selectedImageDetails.title}</h3>
                <p className="text-gray-600">{selectedImageDetails.description}</p>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
