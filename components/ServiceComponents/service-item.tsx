import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

interface ServiceItemProps {
  icon: ReactNode
  title: string
  description: string
  link?: string
}

export default function ServiceItem({ icon, title, description, link }: ServiceItemProps) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="rounded-full bg-blue-100 p-2 text-blue-600 flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h4 className="text-lg font-medium text-gray-800 mb-1">{title}</h4>
        <p className="text-gray-600 mb-2">{description}</p>
        {link && (
          <Link
            href={link}
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  )
}
