"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ServiceAccordionProps {
  title: string
  icon: ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
}

export default function ServiceAccordion({ title, icon, children, defaultOpen = false }: ServiceAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors",
          isOpen && "border-b",
        )}
      >
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-blue-100 p-2 text-blue-600">{icon}</div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <ChevronDown
          className={cn("h-5 w-5 text-gray-500 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="p-6 bg-white space-y-4">{children}</div>
      </div>
    </div>
  )
}
