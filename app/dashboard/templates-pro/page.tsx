"use client"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, Star, Crown } from "lucide-react"
import Link from "next/link"

export default function TemplatesProPage() {
  const { templates } = useApp()

  // Filter premium templates (higher numbers = premium in this demo)
  const proTemplates = templates.filter((t) => t.number > 100)

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Home className="h-4 w-4" />
        <span>Home</span>
        <span>/</span>
        <span>Templates Pro</span>
      </div>

      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Templates Pro</h1>
        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
          <Crown className="h-3 w-3 mr-1" />
          Premium
        </Badge>
      </div>

      <p className="text-muted-foreground">Premium templates with advanced designs - All FREE in nyamiziDigitals!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {proTemplates.map((template) => (
          <div
            key={template.id}
            className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all hover:scale-[1.02]"
          >
            <div className="relative">
              <div className="absolute top-2 left-2 z-10">
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                  <Crown className="h-3 w-3 mr-1" />
                  PRO
                </Badge>
              </div>
              <div className="absolute top-2 right-2 flex items-center gap-0.5 z-10">
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
            <div className="p-3 space-y-2">
              <h3 className="font-medium text-sm line-clamp-1">{template.title}</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground line-through">TSH 5,000</span>
                <span className="text-sm font-bold text-green-600">FREE</span>
              </div>
              <Link href={`/dashboard/editor/${template.id}`}>
                <Button className="w-full" size="sm">
                  Use Template
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
