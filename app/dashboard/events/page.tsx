"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Home, Plus, Calendar, MapPin, Users, Search } from "lucide-react"

interface Event {
  id: string
  name: string
  type: string
  date: string
  time: string
  venue: string
  guestCount: number
  status: "upcoming" | "ongoing" | "completed"
}

const sampleEvents: Event[] = [
  {
    id: "1",
    name: "Mtoto wa Tenth J. Maruhe Wedding",
    type: "Wedding",
    date: "2024-12-15",
    time: "14:00",
    venue: "Butiama Hall, Dar es Salaam",
    guestCount: 250,
    status: "upcoming",
  },
  {
    id: "2",
    name: "Stephen and Lucy Wedding Day",
    type: "Wedding",
    date: "2024-12-20",
    time: "10:00",
    venue: "Blue Sapphire Hall, Jangwani Beach",
    guestCount: 180,
    status: "upcoming",
  },
  {
    id: "3",
    name: "Anarah First Birthday",
    type: "Birthday",
    date: "2024-11-30",
    time: "15:00",
    venue: "Ocean View Restaurant",
    guestCount: 50,
    status: "completed",
  },
]

export default function EventsPage() {
  const [events] = useState<Event[]>(sampleEvents)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Upcoming</Badge>
      case "ongoing":
        return <Badge className="bg-green-500 hover:bg-green-600">Ongoing</Badge>
      case "completed":
        return <Badge variant="secondary">Completed</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Home className="h-4 w-4" />
        <span>Home</span>
        <span>/</span>
        <span>Events</span>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">nyamizi Events</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Event
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold line-clamp-2">{event.name}</h3>
                  <p className="text-sm text-muted-foreground">{event.type}</p>
                </div>
                {getStatusBadge(event.status)}
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    at {event.time}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{event.venue}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{event.guestCount} guests</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  View Details
                </Button>
                <Button size="sm" className="flex-1">
                  Send Cards
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No events found</p>
          <Button>Create Your First Event</Button>
        </div>
      )}
    </div>
  )
}
