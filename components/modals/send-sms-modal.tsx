"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useApp } from "@/lib/context/app-context"
import { useToast } from "@/hooks/use-toast"
import { X, Upload, Users, Plus, Trash2 } from "lucide-react"

interface SendSMSModalProps {
  open: boolean
  onClose: () => void
  designId: string | null
  designTitle?: string
}

interface Recipient {
  id: string
  name: string
  phone: string
}

export function SendSMSModal({ open, onClose, designId, designTitle }: SendSMSModalProps) {
  const [recipients, setRecipients] = useState<Recipient[]>([{ id: "1", name: "", phone: "" }])
  const [message, setMessage] = useState("")
  const [includeLink, setIncludeLink] = useState(true)
  const [scheduleTime, setScheduleTime] = useState("")
  const [sending, setSending] = useState(false)
  const [useWhatsApp, setUseWhatsApp] = useState(false)
  const { addNotification, setSentCards, sentCards } = useApp()
  const { toast } = useToast()

  const addRecipient = () => {
    setRecipients((prev) => [...prev, { id: Date.now().toString(), name: "", phone: "" }])
  }

  const removeRecipient = (id: string) => {
    if (recipients.length > 1) {
      setRecipients((prev) => prev.filter((r) => r.id !== id))
    }
  }

  const updateRecipient = (id: string, field: "name" | "phone", value: string) => {
    setRecipients((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)))
  }

  const handleBulkUpload = () => {
    // Simulate bulk upload
    const sampleRecipients: Recipient[] = [
      { id: Date.now().toString(), name: "John Mwangi", phone: "255733100001" },
      { id: (Date.now() + 1).toString(), name: "Mary Kimani", phone: "255733100002" },
      { id: (Date.now() + 2).toString(), name: "Peter Ochieng", phone: "255733100003" },
    ]
    setRecipients(sampleRecipients)
    toast({
      title: "Contacts Imported",
      description: `${sampleRecipients.length} contacts have been imported.`,
    })
  }

  const handleSend = async () => {
    const validRecipients = recipients.filter((r) => r.name && r.phone)

    if (validRecipients.length === 0) {
      toast({
        title: "Error",
        description: "Please add at least one recipient with name and phone",
        variant: "destructive",
      })
      return
    }

    setSending(true)

    // If user chose WhatsApp, open wa.me links (one by one)
    if (useWhatsApp) {
      for (const recipient of validRecipients) {
        const phoneNorm = recipient.phone.replace(/\D/g, "")
        const text = encodeURIComponent(message || `You are invited! View your card here.`)
        const url = `https://wa.me/${phoneNorm}?text=${text}`
        window.open(url, "_blank")
        // small delay to reduce popup block
        // eslint-disable-next-line no-await-in-loop
        await new Promise((r) => setTimeout(r, 500))
      }
    } else {
      // Simulate sending SMS to each recipient
      await new Promise((resolve) => setTimeout(resolve, 1500))
    }

    // Add to sent cards
    const newSentCards = validRecipients.map((recipient) => ({
      id: Date.now().toString() + recipient.id,
      userId: "1",
      designId: designId || "",
      recipientName: recipient.name,
      phone: "+" + recipient.phone,
      message: message || `You are invited! View your card here.`,
      status: "sent" as const,
      sentAt: new Date().toISOString(),
      thumbnailUrl: "/placeholder.svg?key=sms-card",
    }))

    setSentCards([...newSentCards, ...sentCards])

    addNotification({
      message: `Cards sent to ${validRecipients.length} recipient(s) successfully!`,
      isRead: false,
      type: "success",
    })

    toast({
      title: "Success",
      description: `SMS sent to ${validRecipients.length} recipient(s)`,
    })

    setSending(false)
    onClose()

    // Reset form
    setRecipients([{ id: "1", name: "", phone: "" }])
    setMessage("")
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>Send Card via SMS</DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {designTitle && (
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">Sending card:</p>
              <p className="font-medium">{designTitle}</p>
            </div>
          )}

          {/* Recipients Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base font-semibold">Recipients</Label>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleBulkUpload}>
                  <Upload className="h-4 w-4 mr-1" />
                  Import CSV
                </Button>
                <Button variant="outline" size="sm" onClick={addRecipient}>
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {recipients.map((recipient, index) => (
                <div key={recipient.id} className="flex gap-3 items-start">
                  <div className="flex-1 grid grid-cols-2 gap-3">
                    <Input
                      placeholder="Recipient name"
                      value={recipient.name}
                      onChange={(e) => updateRecipient(recipient.id, "name", e.target.value)}
                    />
                    <div className="flex">
                      <span className="inline-flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md text-sm">
                        +
                      </span>
                      <Input
                        placeholder="255733100000"
                        value={recipient.phone}
                        onChange={(e) => updateRecipient(recipient.id, "phone", e.target.value)}
                        className="rounded-l-none"
                      />
                    </div>
                  </div>
                  {recipients.length > 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeRecipient(recipient.id)}
                      className="text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Users className="h-4 w-4" />
              {recipients.filter((r) => r.name && r.phone).length} valid recipient(s)
            </p>
          </div>

          {/* Message Section */}
          <div className="space-y-2">
            <Label>Custom Message (Optional)</Label>
            <Textarea
              placeholder="Add a personalized message to accompany the card..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
            />
            <p className="text-xs text-muted-foreground">Leave empty to use the default invitation message.</p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox id="includeLink" checked={includeLink} onCheckedChange={(v) => setIncludeLink(v as boolean)} />
              <Label htmlFor="includeLink" className="font-normal cursor-pointer">
                Include card viewing link in SMS
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="useWhatsapp" checked={useWhatsApp} onCheckedChange={(v) => setUseWhatsApp(v as boolean)} />
              <Label htmlFor="useWhatsapp" className="font-normal cursor-pointer">
                Send via WhatsApp instead of SMS
              </Label>
            </div>
          </div>

          {/* Schedule (Optional) */}
          <div className="space-y-2">
            <Label>Schedule Send (Optional)</Label>
            <Input type="datetime-local" value={scheduleTime} onChange={(e) => setScheduleTime(e.target.value)} />
            <p className="text-xs text-muted-foreground">Leave empty to send immediately.</p>
          </div>

          {/* Cost Estimate */}
          <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center justify-between">
              <span className="text-sm">Estimated Cost:</span>
              <span className="font-semibold text-green-600 dark:text-green-400">FREE (Simulated)</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">All SMS sending is free in this demo version.</p>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSend} disabled={sending}>
            {sending ? "Sending..." : `Send to ${recipients.filter((r) => r.name && r.phone).length} Recipient(s)`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
