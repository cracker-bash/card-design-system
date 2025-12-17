"use client"

import { useState, useRef } from "react"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"
import { Home, Camera } from "lucide-react"

export default function ProfilePage() {
  const { user, setUser } = useApp()
  const { toast } = useToast()
  const fileRef = useRef<HTMLInputElement | null>(null)
  const { agents, setAgents } = useApp()

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [saving, setSaving] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSaveProfile = async () => {
    setSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (user) {
      setUser({
        ...user,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      })
    }

    toast({
      title: "Success",
      description: "Profile updated successfully",
    })
    setSaving(false)
  }

  const handleChangePassword = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      })
      return
    }

    setSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Success",
      description: "Password changed successfully",
    })

    setFormData((prev) => ({
      ...prev,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }))
    setSaving(false)
  }

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Home className="h-4 w-4" />
        <span>Home</span>
        <span>/</span>
        <span>My Profile</span>
      </div>

      <h1 className="text-2xl font-bold">My Profile</h1>

      {/* Profile Picture */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="font-semibold mb-4">Profile Picture</h2>
        <div className="flex items-center gap-4">
            <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user?.avatar || "/placeholder.svg"} />
              <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                {user?.name?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
            <button
              className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
              onClick={() => fileRef?.current?.click()}
            >
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <div>
            <p className="font-medium">{user?.name}</p>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>
        </div>
      </div>
      <input
        ref={(el) => (fileRef.current = el)}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0]
          if (!f) return
          const reader = new FileReader()
          reader.onload = () => {
            const data = String(reader.result)
            if (user) {
              const updated = { ...user, avatar: data }
              setUser(updated)
              localStorage.setItem("nyamizi_user", JSON.stringify(updated))
              // if user is an agent, update agent record too
              try {
                const stored = localStorage.getItem("nyamizi_agents")
                if (stored) {
                  const parsed = JSON.parse(stored) as any[]
                  const idx = parsed.findIndex((a) => a.id === user.id)
                  if (idx >= 0) {
                    parsed[idx] = { ...parsed[idx], avatar: data }
                    localStorage.setItem("nyamizi_agents", JSON.stringify(parsed))
                    setAgents(parsed)
                  }
                }
              } catch {}
              toast({ title: "Profile", description: "Profile image updated." })
            }
          }
          reader.readAsDataURL(f)
        }}
      />

      {/* Profile Information */}
      <div className="bg-card rounded-lg border border-border p-6 space-y-4">
        <h2 className="font-semibold">Profile Information</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} />
        </div>

        <Button onClick={handleSaveProfile} disabled={saving}>
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      {/* Change Password */}
      <div className="bg-card rounded-lg border border-border p-6 space-y-4">
        <h2 className="font-semibold">Change Password</h2>

        <div className="space-y-2">
          <Label htmlFor="currentPassword">Current Password</Label>
          <Input
            id="currentPassword"
            type="password"
            value={formData.currentPassword}
            onChange={(e) => handleChange("currentPassword", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              id="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={(e) => handleChange("newPassword", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
            />
          </div>
        </div>

        <Button onClick={handleChangePassword} disabled={saving}>
          {saving ? "Changing..." : "Change Password"}
        </Button>
      </div>
    </div>
  )
}
