import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { ReactNode } from "react"

interface ServiceCategoryProps {
  title: string
  description: string
  icon: ReactNode
  count: number
  color: "blue" | "purple" | "red" | "green" | "amber" | "teal"
  href: string
}

export default function ServiceCategory({ title, description, icon, count, color, href }: ServiceCategoryProps) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600 border-blue-200",
    purple: "bg-purple-100 text-purple-600 border-purple-200",
    red: "bg-red-100 text-red-600 border-red-200",
    green: "bg-green-100 text-green-600 border-green-200",
    amber: "bg-amber-100 text-amber-600 border-amber-200",
    teal: "bg-teal-100 text-teal-600 border-teal-200",
  }

  return (
    <Link href={href}>
      <Card className="overflow-hidden transition-all hover:shadow-md hover:border-blue-200 h-full">
        <CardContent className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className={`inline-flex rounded-full p-3 ${colorClasses[color].split(" ").slice(0, 2).join(" ")}`}>
              {icon}
            </div>
            <Badge variant="outline" className={colorClasses[color]}>
              {count} Services
            </Badge>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-[#1a2e4c]">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
