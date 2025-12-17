"use client"

import { useState } from "react"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Home, Search, Calendar, Eye, RotateCcw } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SentCardsPage() {
  const { sentCards, setSentCards } = useApp()
  const [searchQuery, setSearchQuery] = useState("")
  const [dateFilter, setDateFilter] = useState("all")

  // Add sample sent cards if empty
  const sampleSentCards =
    sentCards.length > 0
      ? sentCards
      : [
          {
            id: "1",
            userId: "1",
            designId: "1",
            recipientName: "John Mwangi",
            phone: "+255733100001",
            message: "You are invited to our wedding celebration",
            status: "delivered" as const,
            sentAt: "2024-11-28T10:30:00Z",
            thumbnailUrl: "/elegant-wedding-invitation.png",
          },
          {
            id: "2",
            userId: "1",
            designId: "2",
            recipientName: "Mary Kimani",
            phone: "+255733100002",
            message: "Save the date for our special day",
            status: "sent" as const,
            sentAt: "2024-11-27T14:20:00Z",
            thumbnailUrl: "/save-the-date-card.jpg",
          },
          {
            id: "3",
            userId: "1",
            designId: "3",
            recipientName: "Peter Ochieng",
            phone: "+255733100003",
            message: "Join us for the celebration",
            status: "pending" as const,
            sentAt: "2024-11-26T09:15:00Z",
            thumbnailUrl: "/celebration-card.jpg",
          },
          {
            id: "4",
            userId: "1",
            designId: "1",
            recipientName: "Grace Wanjiku",
            phone: "+255733100004",
            message: "You are cordially invited",
            status: "failed" as const,
            sentAt: "2024-11-25T16:45:00Z",
            thumbnailUrl: "/invitation-card-pink.jpg",
          },
        ]

  const filteredCards = sampleSentCards.filter((card) => {
    const matchesSearch =
      card.recipientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.phone.includes(searchQuery) ||
      card.message.toLowerCase().includes(searchQuery.toLowerCase())

    if (dateFilter === "all") return matchesSearch

    const cardDate = new Date(card.sentAt)
    const now = new Date()

    if (dateFilter === "today") {
      return matchesSearch && cardDate.toDateString() === now.toDateString()
    }
    if (dateFilter === "week") {
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
      return matchesSearch && cardDate >= weekAgo
    }
    if (dateFilter === "month") {
      const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
      return matchesSearch && cardDate >= monthAgo
    }

    return matchesSearch
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return <Badge className="bg-green-500 hover:bg-green-600">Delivered</Badge>
      case "sent":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Sent</Badge>
      case "pending":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600 text-black">Pending</Badge>
      case "failed":
        return <Badge variant="destructive">Failed</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const handleResend = (id: string) => {
    // Simulate resending
    const updatedCards = sampleSentCards.map((card) =>
      card.id === id ? { ...card, status: "pending" as const, sentAt: new Date().toISOString() } : card,
    )
    setSentCards(updatedCards)
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Home className="h-4 w-4" />
        <span>Home</span>
        <span>/</span>
        <span>Sent Cards</span>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Sent Cards History</h1>
        <div className="text-sm text-muted-foreground">Total: {filteredCards.length} cards</div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, phone, or message..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={dateFilter} onValueChange={setDateFilter}>
          <SelectTrigger className="w-40">
            <Calendar className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filter by date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Time</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Cards Table */}
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium">Card</th>
                <th className="text-left p-4 font-medium">Recipient</th>
                <th className="text-left p-4 font-medium">Phone</th>
                <th className="text-left p-4 font-medium">Message</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Sent At</th>
                <th className="text-left p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCards.map((card) => (
                <tr key={card.id} className="border-t border-border hover:bg-muted/30">
                  <td className="p-4">
                    <img
                      src={card.thumbnailUrl || "/placeholder.svg"}
                      alt="Card thumbnail"
                      className="w-12 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-4 font-medium">{card.recipientName}</td>
                  <td className="p-4 text-muted-foreground">{card.phone}</td>
                  <td className="p-4 max-w-xs">
                    <p className="text-sm text-muted-foreground truncate">{card.message}</p>
                  </td>
                  <td className="p-4">{getStatusBadge(card.status)}</td>
                  <td className="p-4 text-sm text-muted-foreground">
                    {new Date(card.sentAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      {card.status === "failed" && (
                        <Button variant="outline" size="sm" onClick={() => handleResend(card.id)}>
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No sent cards found</p>
          </div>
        )}
      </div>
    </div>
  )
}
