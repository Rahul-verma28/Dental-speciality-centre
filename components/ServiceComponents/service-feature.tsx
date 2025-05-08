import { Check } from "lucide-react"

interface ServiceFeatureProps {
  text: string
}

export default function ServiceFeature({ text }: ServiceFeatureProps) {
  return (
    <div className="flex items-start gap-2">
      <div className="mt-1 rounded-full bg-green-100 p-0.5 text-green-600">
        <Check className="h-3 w-3" />
      </div>
      <span className="text-sm text-gray-600">{text}</span>
    </div>
  )
}
