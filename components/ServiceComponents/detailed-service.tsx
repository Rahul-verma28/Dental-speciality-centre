import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import ServiceFeature from "@/components/ServiceComponents/service-feature"
import type { ReactNode } from "react"

interface DetailedServiceProps {
  title: string
  description: string
  icon: ReactNode
  features: string[]
  duration: string
  image: string
  reverse?: boolean
}

export default function DetailedService({
  title,
  description,
  icon,
  features,
  duration,
  image,
  reverse = false,
}: DetailedServiceProps) {
  return (
    <div className={`grid gap-8 md:grid-cols-2 ${reverse ? "md:grid-flow-dense" : ""}`}>
      <div className={`relative h-[300px] overflow-hidden rounded-lg md:h-auto ${reverse ? "md:col-start-2" : ""}`}>
        <Image src={image || "/placeholder.svg?height=400&width=600"} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-blue-100 p-3 text-blue-600">{icon}</div>
          <h3 className="text-2xl font-bold text-[#1a2e4c]">{title}</h3>
        </div>
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
