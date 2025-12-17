"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useApp } from "@/lib/context/app-context"
import { useToast } from "@/hooks/use-toast"

interface SendSampleModalProps {
  open: boolean
  onClose: () => void
  designId: string | null
}

export function SendSampleModal({ open, onClose, designId }: SendSampleModalProps) {
  const [phone, setPhone] = useState("255733100000")
  const [sending, setSending] = useState(false)
  const { addNotification } = useApp()
  const { toast } = useToast()

  const handleSend = async () => {
    if (!phone) {
      toast({
        title: "Error",
        description: "Please enter a WhatsApp number",
        variant: "destructive",
      })
      return
    }

    setSending(true)

    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 1500))

    addNotification({
      message: `Sample card sent to ${phone} via WhatsApp`,
      isRead: false,
      type: "success",
    })

    toast({
      title: "Success",
      description: "Sample card sent successfully!",
    })

    setSending(false)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Confirmation</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="whatsapp">Enter WhatsApp Number</Label>
            <Input id="whatsapp" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="255733100000" />
          </div>
          <p className="text-sm text-muted-foreground">NOTE: Sample cards are sent to WhatsApp only</p>
          <p className="text-sm text-orange-500">Sample card will be deduct from your Gold Float</p>
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSend} disabled={sending} className="bg-red-500 hover:bg-red-600">
            {sending ? "Sending..." : "Send"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
