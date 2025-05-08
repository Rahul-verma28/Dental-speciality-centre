import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"
import { Shield } from "lucide-react"

interface ProblemCardProps {
  title: string
  description: string
  icon?: ReactNode
}

export default function ProblemCard({ title, description, icon }: ProblemCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md hover:border-teal-200">
      <CardContent className="p-6">
        <div className="mb-4 inline-flex rounded-full bg-teal-100 p-3 text-teal-600">
          {icon || <Shield className="h-5 w-5" />}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-[#1a2e4c]">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
