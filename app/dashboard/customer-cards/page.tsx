"use client"

import { useState } from "react"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, RefreshCw } from "lucide-react"
import { SendSampleModal } from "@/components/modals/send-sample-modal"
import { CreateCardModal } from "@/components/modals/create-card-modal"
import Link from "next/link"

export default function CustomerCardsPage() {
  const { designs } = useApp()
  const [showSendModal, setShowSendModal] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null)

  const handleSendSample = (designId: string) => {
    setSelectedDesign(designId)
    setShowSendModal(true)
  }

  const handleCreateEvent = (designId: string) => {
    setSelectedDesign(designId)
    setShowCreateModal(true)
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <span className="font-semibold">Customer cards</span>
        <Home className="h-4 w-4 ml-2" />
        <span>Home</span>
        <div className="ml-auto flex items-center gap-2 text-sm">
          <span className="text-yellow-500 font-medium">Float Gold: 153.5 | Royal: 0.5</span>
        </div>
      </div>

      {/* Templates Header Card */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/template-icon-folder.jpg" />
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">Templates</h2>
              <p className="text-muted-foreground">Customer cards</p>
            </div>
          </div>
          <Button variant="outline" className="gap-2 bg-transparent">
            <RefreshCw className="h-4 w-4" />
            Refresh page
          </Button>
        </div>
      </div>

      {/* Cards Table */}
      <div className="bg-card rounded-lg border border-border">
        <div className="p-4 border-b border-border">
          <h3 className="font-semibold">Cards</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium">No.</th>
                <th className="text-left p-4 font-medium">Card Preview</th>
                <th className="text-left p-4 font-medium">Name</th>
                <th className="text-left p-4 font-medium">Type</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Share</th>
              </tr>
            </thead>
            <tbody>
              {designs.map((design, index) => (
                <tr key={design.id} className="border-t border-border hover:bg-muted/30">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">
                    <img
                      src={design.thumbnailUrl || "/placeholder.svg"}
                      alt={design.title}
                      className="w-16 h-20 object-cover rounded"
                    />
                  </td>
                  <td className="p-4">
                    <p className="font-medium">{design.title}</p>
                  </td>
                  <td className="p-4 text-muted-foreground">Template Name: MSF</td>
                  <td className="p-4 text-muted-foreground">No event attached</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">(0)</span>
                      <Button
                        size="sm"
                        className="bg-green-500 hover:bg-green-600 text-white"
                        onClick={() => handleSendSample(design.id)}
                      >
                        Send sample
                      </Button>
                      <Link href={`/dashboard/editor/${design.id}`}>
                        <Button size="sm" variant="secondary">
                          Edit Template
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        className="bg-teal-500 hover:bg-teal-600 text-white"
                        onClick={() => handleCreateEvent(design.id)}
                      >
                        Create event
                      </Button>
                      <Button size="sm" variant="destructive">
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      <SendSampleModal open={showSendModal} onClose={() => setShowSendModal(false)} designId={selectedDesign} />
      <CreateCardModal open={showCreateModal} onClose={() => setShowCreateModal(false)} designId={selectedDesign} />
    </div>
  )
}
