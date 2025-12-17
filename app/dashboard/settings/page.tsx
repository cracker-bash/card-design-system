"use client"

import { useState } from "react"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"
import { Home, Sun, Moon, Monitor } from "lucide-react"
import { cn } from "@/lib/utils"

const accentColors = [
  { name: "Cyan", value: "oklch(0.65 0.19 220)" },
  { name: "Blue", value: "oklch(0.55 0.2 260)" },
  { name: "Purple", value: "oklch(0.55 0.2 290)" },
  { name: "Pink", value: "oklch(0.65 0.2 350)" },
  { name: "Red", value: "oklch(0.55 0.2 25)" },
  { name: "Orange", value: "oklch(0.65 0.2 50)" },
  { name: "Green", value: "oklch(0.55 0.2 145)" },
  { name: "Teal", value: "oklch(0.55 0.15 180)" },
]

export default function SettingsPage() {
  const { theme, setTheme } = useApp()
  const { toast } = useToast()
  const [selectedAccent, setSelectedAccent] = useState("Cyan")
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: true,
    marketingEmails: false,
    autoSave: true,
    showWatermark: true,
  })

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    })
  }

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Home className="h-4 w-4" />
        <span>Home</span>
        <span>/</span>
        <span>Settings</span>
      </div>

      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Theme Settings */}
      <div className="bg-card rounded-lg border border-border p-6 space-y-6">
        <h2 className="font-semibold">Theme Settings</h2>

        <div className="space-y-4">
          <Label>Appearance</Label>
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => setTheme("light")}
              className={cn(
                "flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-colors",
                theme === "light" ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground",
              )}
            >
              <Sun className="h-6 w-6" />
              <span className="text-sm">Light</span>
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={cn(
                "flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-colors",
                theme === "dark" ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground",
              )}
            >
              <Moon className="h-6 w-6" />
              <span className="text-sm">Dark</span>
            </button>
            <button
              className="flex flex-col items-center gap-2 p-4 rounded-lg border-2 border-border hover:border-muted-foreground transition-colors opacity-50 cursor-not-allowed"
              disabled
            >
              <Monitor className="h-6 w-6" />
              <span className="text-sm">System</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <Label>Accent Color</Label>
          <div className="flex flex-wrap gap-3">
            {accentColors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedAccent(color.name)}
                className={cn(
                  "h-10 w-10 rounded-full transition-transform",
                  selectedAccent === color.name && "ring-2 ring-offset-2 ring-foreground scale-110",
                )}
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Preview */}
        <div className="space-y-2">
          <Label>Preview</Label>
          <div
            className={cn(
              "p-4 rounded-lg border",
              theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900",
            )}
          >
            <p className="font-medium mb-2">Theme Preview</p>
            <p className="text-sm opacity-70">This is how your interface will look with the selected theme.</p>
            <Button className="mt-3" size="sm">
              Sample Button
            </Button>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-card rounded-lg border border-border p-6 space-y-6">
        <h2 className="font-semibold">Notification Preferences</h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Email Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive email notifications for important updates</p>
            </div>
            <Switch checked={settings.emailNotifications} onCheckedChange={() => handleToggle("emailNotifications")} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>SMS Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive SMS alerts for card deliveries</p>
            </div>
            <Switch checked={settings.smsNotifications} onCheckedChange={() => handleToggle("smsNotifications")} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>Marketing Emails</Label>
              <p className="text-sm text-muted-foreground">Receive promotional offers and updates</p>
            </div>
            <Switch checked={settings.marketingEmails} onCheckedChange={() => handleToggle("marketingEmails")} />
          </div>
        </div>
      </div>

      {/* Editor Settings */}
      <div className="bg-card rounded-lg border border-border p-6 space-y-6">
        <h2 className="font-semibold">Editor Settings</h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Auto-save</Label>
              <p className="text-sm text-muted-foreground">Automatically save your work every few minutes</p>
            </div>
            <Switch checked={settings.autoSave} onCheckedChange={() => handleToggle("autoSave")} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>Show Watermark</Label>
              <p className="text-sm text-muted-foreground">Display watermark on preview cards</p>
            </div>
            <Switch checked={settings.showWatermark} onCheckedChange={() => handleToggle("showWatermark")} />
          </div>
        </div>
      </div>

      <Button onClick={handleSave}>Save Settings</Button>
    </div>
  )
}
