"use client"

import { useState } from "react"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, Home } from "lucide-react"
import Link from "next/link"

const eventColors = [
  { name: "Green", color: "#22c55e" },
  { name: "Yellow", color: "#eab308" },
  { name: "Purple", color: "#a855f7" },
  { name: "Red", color: "#ef4444" },
  { name: "Blue", color: "#3b82f6" },
  { name: "Gold", color: "#d4af37" },
  { name: "Black", color: "#000000" },
  { name: "White", color: "#ffffff" },
  { name: "Cyan", color: "#06b6d4" },
  { name: "Magenta", color: "#ec4899" },
  { name: "Orange", color: "#f97316" },
  { name: "Pink", color: "#f472b6" },
  { name: "Ivory", color: "#fffff0" },
  { name: "Champagne", color: "#f7e7ce" },
  { name: "Lavender", color: "#e6e6fa" },
  { name: "Peach", color: "#ffcba4" },
  { name: "Coral", color: "#ff7f50" },
  { name: "Mint Green", color: "#98fb98" },
  { name: "Blush", color: "#de5d83" },
  { name: "Navy", color: "#000080" },
  { name: "Burgundy", color: "#800020" },
  { name: "Silver", color: "#c0c0c0" },
]

export default function TemplatesPage() {
  const { templates } = useApp()
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const toggleColor = (colorName: string) => {
    setSelectedColors((prev) => (prev.includes(colorName) ? prev.filter((c) => c !== colorName) : [...prev, colorName]))
  }

  const filteredTemplates =
    selectedColors.length > 0 ? templates.filter((t) => selectedColors.includes(t.color)) : templates

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Home className="h-4 w-4" />
        <span>Home</span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">ROYAL CARDS (TSH 1,800)</h1>
      </div>

      <div className="flex gap-6">
        {/* Color Filters Sidebar */}
        <div className="w-64 flex-shrink-0">
          <h3 className="font-medium mb-4">Event colors</h3>
          <div className="space-y-2">
            {eventColors.map((color) => (
              <div key={color.name} className="flex items-center gap-3">
                <Checkbox
                  id={color.name}
                  checked={selectedColors.includes(color.name)}
                  onCheckedChange={() => toggleColor(color.name)}
                />
                <div className="w-6 h-6 rounded-full border border-border" style={{ backgroundColor: color.color }} />
                <label htmlFor={color.name} className="text-sm cursor-pointer">
                  {color.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                    ROYAL
                  </span>
                  <div className="absolute top-2 right-2 flex items-center gap-0.5">
                    {[...Array(template.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <img
                    src={template.previewUrl || "/placeholder.svg"}
                    alt={template.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-primary text-primary-foreground text-sm px-2 py-1 rounded">
                    No. {template.number}
                  </div>
                </div>
                <div className="p-3">
                  <Link href={`/dashboard/editor/${template.id}`}>
                    <Button className="w-full">Use Template</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
