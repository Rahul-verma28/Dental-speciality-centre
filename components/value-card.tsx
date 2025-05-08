import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface ValueCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl hover:border-blue-200 bg-gradient-to-br from-white to-blue-50">
      <CardContent className="px-6">
        <div className="mb-4 inline-flex rounded-full bg-blue-100 p-3 text-blue-600">{icon}</div>
        <h3 className="mb-2 text-xl font-semibold text-[#1a2e4c]">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
