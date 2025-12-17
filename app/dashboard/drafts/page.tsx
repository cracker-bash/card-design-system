"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, Edit2, Trash2, Clock } from "lucide-react"
import Link from "next/link"

interface Draft {
  id: string
  title: string
  thumbnailUrl: string
  lastModified: string
  autoSaved: boolean
}

const sampleDrafts: Draft[] = [
  {
    id: "d1",
    title: "Wedding Invitation Draft",
    thumbnailUrl: "/wedding-draft-card.jpg",
    lastModified: "2024-11-28T15:30:00Z",
    autoSaved: true,
  },
  {
    id: "d2",
    title: "Birthday Card Draft",
    thumbnailUrl: "/birthday-draft-card.jpg",
    lastModified: "2024-11-27T10:15:00Z",
    autoSaved: false,
  },
]

export default function DraftsPage() {
  const [drafts, setDrafts] = useState<Draft[]>(sampleDrafts)

  const handleDelete = (id: string) => {
    setDrafts(drafts.filter((d) => d.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Home className="h-4 w-4" />
        <span>Home</span>
        <span>/</span>
        <span>Saved Drafts</span>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Saved Drafts</h1>
        <p className="text-sm text-muted-foreground">{drafts.length} drafts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {drafts.map((draft) => (
          <div
            key={draft.id}
            className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <img
                src={draft.thumbnailUrl || "/placeholder.svg"}
                alt={draft.title}
                className="w-full h-48 object-cover"
              />
              {draft.autoSaved && (
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  Auto-saved
                </div>
              )}
            </div>
            <div className="p-4 space-y-3">
              <h3 className="font-medium line-clamp-2">{draft.title}</h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>
                  {new Date(draft.lastModified).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <div className="flex gap-2">
                <Link href={`/dashboard/editor/${draft.id}`} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Edit2 className="h-4 w-4 mr-1" />
                    Continue Editing
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(draft.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {drafts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No saved drafts</p>
          <p className="text-sm text-muted-foreground">
            Drafts are automatically saved while you work on your designs.
          </p>
        </div>
      )}
    </div>
  )
}
