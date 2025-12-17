"use client"

import { useState } from "react"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Home } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SamplePage() {
  const { addNotification } = useApp()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    eventType: "Wedding",
    eventVenue: "",
    sendReminder: true,
    sendShukrani: true,
    language: "Swahili",
    sendWithLocation: true,
    latitude: "",
    longitude: "",
    locationName: "",
    quickMessage: "",
    smsOnly: true,
    automatic: false,
  })
  const [sending, setSending] = useState(false)

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSendQuickMessage = async () => {
    if (!formData.quickMessage.trim()) {
      toast({
        title: "Error",
        description: "Please enter a message",
        variant: "destructive",
      })
      return
    }

    setSending(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    addNotification({
      message: "Quick message sent successfully",
      isRead: false,
      type: "success",
    })

    toast({
      title: "Success",
      description: "Quick message has been sent!",
    })

    setFormData((prev) => ({ ...prev, quickMessage: "" }))
    setSending(false)
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Home className="h-4 w-4" />
        <span>Home</span>
        <span>/</span>
        <span>nyamizi Sample</span>
      </div>

      <h1 className="text-2xl font-bold">nyamizi Sample</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card Preview Area */}
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Card Preview</p>
          </div>
          <div className="mt-4 flex justify-center">
            <Button className="bg-primary hover:bg-primary/90">Complete</Button>
          </div>
        </div>

        {/* Settings Panel */}
        <div className="space-y-6">
          {/* Event Settings */}
          <div className="bg-card rounded-lg border border-border p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Event type:</Label>
                <Select value={formData.eventType} onValueChange={(v) => handleChange("eventType", v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Wedding">Wedding</SelectItem>
                    <SelectItem value="Birthday">Birthday</SelectItem>
                    <SelectItem value="Anniversary">Anniversary</SelectItem>
                    <SelectItem value="Graduation">Graduation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Event Venue:</Label>
                <Input
                  value={formData.eventVenue}
                  onChange={(e) => handleChange("eventVenue", e.target.value)}
                  placeholder="Enter venue"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm">Send Reminder:</span>
                <Checkbox
                  checked={formData.sendReminder}
                  onCheckedChange={(v) => handleChange("sendReminder", v as boolean)}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Send Shukrani:</span>
                <Checkbox
                  checked={formData.sendShukrani}
                  onCheckedChange={(v) => handleChange("sendShukrani", v as boolean)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Change language:</Label>
              <Select value={formData.language} onValueChange={(v) => handleChange("language", v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Swahili">Swahili</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                checked={formData.sendWithLocation}
                onCheckedChange={(v) => handleChange("sendWithLocation", v as boolean)}
              />
              <span className="text-sm">Send with Location (TUMA NA LOCATION)</span>
            </div>

            {formData.sendWithLocation && (
              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <Label>Real Location</Label>
                  <Input placeholder="Search location..." />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Input
                    placeholder="Latitude"
                    value={formData.latitude}
                    onChange={(e) => handleChange("latitude", e.target.value)}
                  />
                  <Input
                    placeholder="Longitude"
                    value={formData.longitude}
                    onChange={(e) => handleChange("longitude", e.target.value)}
                  />
                  <Input
                    placeholder="Location Name"
                    value={formData.locationName}
                    onChange={(e) => handleChange("locationName", e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Quick Message Section */}
          <div className="bg-card rounded-lg border border-border p-6 space-y-4">
            <h3 className="font-semibold">Quick Message (204)</h3>
            <p className="text-sm text-orange-500">Note: Quick Message cost 0.15 from your GOLD Float</p>
            <Textarea
              value={formData.quickMessage}
              onChange={(e) => handleChange("quickMessage", e.target.value)}
              placeholder="Type your message here..."
              rows={4}
            />
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={formData.automatic}
                  onCheckedChange={(v) => handleChange("automatic", v as boolean)}
                />
                <span className="text-sm text-muted-foreground">Automatic</span>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox checked={formData.smsOnly} onCheckedChange={(v) => handleChange("smsOnly", v as boolean)} />
                <span className="text-sm">SMS Only</span>
              </div>
            </div>
            <Button onClick={handleSendQuickMessage} disabled={sending} className="bg-primary hover:bg-primary/90">
              {sending ? "Sending..." : "Send Quick Message"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
