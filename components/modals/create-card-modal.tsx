"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useApp } from "@/lib/context/app-context"
import { useToast } from "@/hooks/use-toast"
import { X, Clock } from "lucide-react"

interface CreateCardModalProps {
  open: boolean
  onClose: () => void
  designId: string | null
}

export function CreateCardModal({ open, onClose, designId }: CreateCardModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    pricePerCard: "1500",
    quantity: "",
    customerName: "",
    customerPhone: "",
    eventName: "",
    eventDate: "",
    eventTime: "18:00",
    eventType: "Wedding",
    eventLanguage: "Swahili",
    venue: "",
    sendReminder: true,
    sendShukrani: true,
    sendWithLocation: false,
    country: "Tanzania",
    region: "",
    district: "",
  })
  const [saving, setSaving] = useState(false)
  const { addNotification } = useApp()
  const { toast } = useToast()

  const totalAmount = Number.parseInt(formData.pricePerCard || "0") * Number.parseInt(formData.quantity || "0")

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    setSaving(true)

    // Simulate saving
    await new Promise((resolve) => setTimeout(resolve, 1500))

    addNotification({
      message: `New card created for ${formData.customerName}`,
      isRead: false,
      type: "success",
    })

    toast({
      title: "Success",
      description: "Card created successfully!",
    })

    setSaving(false)
    onClose()
    setStep(1)
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>Create card</DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-red-500">
            <X className="h-5 w-5" />
          </Button>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Card Detail Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-muted-foreground">- Card detail</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Price per card*</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md text-sm">
                    TZS
                  </span>
                  <Input
                    value={formData.pricePerCard}
                    onChange={(e) => handleChange("pricePerCard", e.target.value)}
                    className="rounded-l-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Quantity*</Label>
                <Input
                  value={formData.quantity}
                  onChange={(e) => handleChange("quantity", e.target.value)}
                  placeholder="Enter quantity"
                />
              </div>
            </div>
            <div className="bg-green-100 text-green-800 rounded-lg p-4 text-center">
              <p className="text-sm text-red-500">Customer to pay:*</p>
              <p className="text-2xl font-bold">{totalAmount.toLocaleString()} Tshs</p>
            </div>
          </div>

          {/* Customer Details Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-muted-foreground">- Customer details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>
                  Customer Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  value={formData.customerName}
                  onChange={(e) => handleChange("customerName", e.target.value)}
                  placeholder="Enter customer name"
                />
              </div>
              <div className="space-y-2">
                <Label>
                  Customer Phone <span className="text-red-500">*</span>
                </Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md text-sm">
                    +255
                  </span>
                  <Input
                    value={formData.customerPhone}
                    onChange={(e) => handleChange("customerPhone", e.target.value)}
                    className="rounded-l-none"
                    placeholder="733100000"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Event Details Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-muted-foreground">- Event details</h3>
            <div className="space-y-2">
              <Label>
                Event Name <span className="text-red-500">*</span>
              </Label>
              <Input
                value={formData.eventName}
                onChange={(e) => handleChange("eventName", e.target.value)}
                placeholder="Enter event name"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>
                  Event Date <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => handleChange("eventDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>
                  Event Time <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    type="time"
                    value={formData.eventTime}
                    onChange={(e) => handleChange("eventTime", e.target.value)}
                  />
                  <Clock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>
                  Event Type <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.eventType} onValueChange={(v) => handleChange("eventType", v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Wedding">Wedding</SelectItem>
                    <SelectItem value="Birthday">Birthday</SelectItem>
                    <SelectItem value="Anniversary">Anniversary</SelectItem>
                    <SelectItem value="Graduation">Graduation</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>
                  Event language <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.eventLanguage} onValueChange={(v) => handleChange("eventLanguage", v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Swahili">Swahili</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Venue</Label>
              <Input
                value={formData.venue}
                onChange={(e) => handleChange("venue", e.target.value)}
                placeholder="Enter venue"
              />
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
            <div className="flex items-center gap-2">
              <Checkbox
                checked={formData.sendWithLocation}
                onCheckedChange={(v) => handleChange("sendWithLocation", v as boolean)}
              />
              <span className="text-sm">Send with Location (TUMA NA LOCATION)</span>
            </div>
          </div>

          {/* Event Location Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-muted-foreground">- Event location</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>
                  Country<span className="text-red-500">*</span>
                </Label>
                <Input value={formData.country} onChange={(e) => handleChange("country", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>
                  Region<span className="text-red-500">*</span>
                </Label>
                <Select value={formData.region} onValueChange={(v) => handleChange("region", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dar es Salaam">Dar es Salaam</SelectItem>
                    <SelectItem value="Arusha">Arusha</SelectItem>
                    <SelectItem value="Mwanza">Mwanza</SelectItem>
                    <SelectItem value="Dodoma">Dodoma</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>
                District<span className="text-red-500">*</span>
              </Label>
              <Select value={formData.district} onValueChange={(v) => handleChange("district", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select district" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ilala">Ilala</SelectItem>
                  <SelectItem value="Kinondoni">Kinondoni</SelectItem>
                  <SelectItem value="Temeke">Temeke</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button variant="outline" onClick={onClose} className="text-red-500 border-red-500 bg-transparent">
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={saving}>
            {saving ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
