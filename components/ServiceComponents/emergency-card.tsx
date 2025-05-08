import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, CheckCircle } from "lucide-react"

interface EmergencyCardProps {
  title: string
  emergencies: string[]
  steps: string[]
  image: string
}

export default function EmergencyCard({ title, emergencies, steps, image }: EmergencyCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg?height=200&width=400"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <h4 className="font-semibold text-gray-800">Common Emergencies:</h4>
          </div>
          <ul className="ml-7 list-disc space-y-1 text-gray-600">
            {emergencies.map((emergency, index) => (
              <li key={index}>{emergency}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-2 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <h4 className="font-semibold text-gray-800">Immediate Steps:</h4>
          </div>
          <ol className="ml-7 list-decimal space-y-1 text-gray-600">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </CardContent>
    </Card>
  )
}
