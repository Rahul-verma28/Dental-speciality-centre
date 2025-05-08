import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import ServiceFeature from "@/components/ServiceComponents/service-feature"

interface FeaturedServiceProps {
  title: string
  description: string
  image: string
  features: string[]
  duration: string
  reverse?: boolean
}

export default function FeaturedService({
  title,
  description,
  image,
  features,
  duration,
  reverse = false,
}: FeaturedServiceProps) {
  return (
    <div className={`grid gap-8 md:grid-cols-2 ${reverse ? "md:grid-flow-dense" : ""}`}>
      <div className={`relative h-[300px] overflow-hidden rounded-lg md:h-auto ${reverse ? "md:col-start-2" : ""}`}>
        <Image src={image || "/placeholder.svg?height=400&width=600"} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="mb-3 text-2xl font-bold text-[#1a2e4c]">{title}</h3>
        <p className="mb-6 text-gray-600">{description}</p>
        <div className="mb-6 space-y-3">
          {features.map((feature, index) => (
            <ServiceFeature key={index} text={feature} />
          ))}
        </div>
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Clock className="h-4 w-4" />
          <span>{duration}</span>
        </div>
        <Button asChild className="w-fit bg-[#1a2e4c] hover:bg-[#2a3e5c]">
          <Link href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}>Learn More</Link>
        </Button>
      </div>
    </div>
  )
}
