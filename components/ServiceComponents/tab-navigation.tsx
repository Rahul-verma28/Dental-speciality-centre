"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface TabNavigationProps {
  tabs: string[]
  defaultTab?: string
  children: (activeTab: string) => React.ReactNode
}

export default function TabNavigation({ tabs, defaultTab, children }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0])

  return (
    <div>
      <div className="border-b border-gray-200 mb-8">
        <div className="flex flex-wrap gap-2 md:gap-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-3 text-base md:text-lg font-medium transition-colors relative",
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50",
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div>{children(activeTab)}</div>
    </div>
  )
}
