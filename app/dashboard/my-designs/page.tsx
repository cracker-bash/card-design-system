"use client"

import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Home, Edit2, Copy, Trash2 } from "lucide-react"
import Link from "next/link"

export default function MyDesignsPage() {
  const { designs, setDesigns } = useApp()

  const handleDuplicate = (id: string) => {
    const design = designs.find((d) => d.id === id)
    if (design) {
      const newDesign = {
        ...design,
        id: Date.now().toString(),
        title: `${design.title} (Copy)`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      setDesigns([...designs, newDesign])
    }
  }

  const handleDelete = (id: string) => {
    setDesigns(designs.filter((d) => d.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Home className="h-4 w-4" />
        <span>Home</span>
        <span>/</span>
        <span>My Designs</span>
      </div>

      <h1 className="text-2xl font-bold">My Designs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {designs.map((design) => (
          <div
            key={design.id}
            className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={design.thumbnailUrl || "/placeholder.svg"}
              alt={design.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-3">
              <h3 className="font-medium line-clamp-2">{design.title}</h3>
              <p className="text-sm text-muted-foreground">
                Last edited: {new Date(design.updatedAt).toLocaleDateString()}
              </p>
              <div className="flex gap-2">
                <Link href={`/dashboard/editor/${design.id}`} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Edit2 className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={() => handleDuplicate(design.id)}>
                  <Copy className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(design.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {designs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No designs yet</p>
          <Link href="/dashboard/templates">
            <Button>Browse Templates</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
