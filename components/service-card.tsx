import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  duration: string
  link: string
}

export default function ServiceCard({ icon, title, description, duration, link }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md hover:border-blue-200">
      <CardContent className="p-6">
        <div className="mb-4 inline-flex rounded-full bg-blue-100 p-3 text-blue-600">{icon}</div>
        <h3 className="mb-2 text-xl font-semibold text-[#1a2e4c]">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Clock className="h-4 w-4" />
          <span>{duration}</span>
        </div>
        <Button asChild variant="outline" className="w-full">
          <Link href={link}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
