"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, Search, UserPlus, Phone, Mail, MapPin } from "lucide-react"
import { useApp } from "@/lib/context/app-context"

export default function AgentsPage() {
  const { agents, addAgent, removeAgent } = useApp()
  const [searchQuery, setSearchQuery] = useState("")
  const [showAdd, setShowAdd] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "", location: "" })
  const [avatarFile, setAvatarFile] = useState<string | null>(null)

  const filteredAgents = agents.filter((agent) =>
    (agent.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
    (agent.phone || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
    (agent.email || "").toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Home className="h-4 w-4" />
        <span>Home</span>
        <span>/</span>
        <span>Agents</span>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">nyamizi Agents</h1>
        <Button onClick={() => setShowAdd(true)}>
          <UserPlus className="h-4 w-4 mr-2" />
          Add Agent
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search agents..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map((agent) => (
          <div key={agent.id} className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={agent.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{(agent.name || "U").charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{agent.name}</h3>
                  <Badge variant={"default"}>active</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{agent.email}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{agent.phone}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Agent ID</p>
                <p className="text-xs text-muted-foreground">{agent.id}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => alert(JSON.stringify(agent, null, 2))}>
                  View Details
                </Button>
                <Button variant="destructive" size="sm" onClick={() => removeAgent(agent.id)}>
                  Remove
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Agent Form (simple inline modal) */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Add Agent</h3>
            <div className="space-y-2">
              <Input placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Input placeholder="Phone (e.g. 0744...)" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <Input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <Input placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
              <Input placeholder="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const f = e.target.files?.[0]
                    if (f) {
                      const reader = new FileReader()
                      reader.onload = () => setAvatarFile(String(reader.result))
                      reader.readAsDataURL(f)
                    }
                  }}
                />
                {avatarFile && <img src={avatarFile} className="h-10 w-10 rounded-full object-cover" />}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-end gap-2">
              <Button variant="ghost" onClick={() => setShowAdd(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  const id = Date.now().toString()
                  addAgent({ id, name: form.name, phone: form.phone, email: form.email, avatar: avatarFile || undefined, password: form.password })
                  setShowAdd(false)
                  setForm({ name: "", phone: "", email: "", password: "", location: "" })
                  setAvatarFile(null)
                }}
              >
                Create
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
