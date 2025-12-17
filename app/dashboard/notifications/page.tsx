"use client"

import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Home, Bell, Check, Trash2, CheckCheck } from "lucide-react"
import { cn } from "@/lib/utils"

export default function NotificationsPage() {
  const { notifications, setNotifications, markNotificationRead } = useApp()

  const handleMarkAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, isRead: true })))
  }

  const handleDelete = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const handleClearAll = () => {
    setNotifications([])
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "success":
        return <div className="h-2 w-2 rounded-full bg-green-500" />
      case "warning":
        return <div className="h-2 w-2 rounded-full bg-yellow-500" />
      case "error":
        return <div className="h-2 w-2 rounded-full bg-red-500" />
      default:
        return <div className="h-2 w-2 rounded-full bg-blue-500" />
    }
  }

  // Add sample notifications if empty
  const displayNotifications =
    notifications.length > 0
      ? notifications
      : [
          {
            id: "1",
            userId: "1",
            message: "Welcome to nyamiziDigitals! Start creating beautiful cards.",
            isRead: false,
            createdAt: new Date().toISOString(),
            type: "info" as const,
          },
          {
            id: "2",
            userId: "1",
            message: 'Your card "Wedding Invitation" has been saved successfully.',
            isRead: true,
            createdAt: new Date(Date.now() - 3600000).toISOString(),
            type: "success" as const,
          },
          {
            id: "3",
            userId: "1",
            message: "Sample card sent to +255733100000 via WhatsApp.",
            isRead: true,
            createdAt: new Date(Date.now() - 86400000).toISOString(),
            type: "success" as const,
          },
        ]

  const unreadCount = displayNotifications.filter((n) => !n.isRead).length

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Home className="h-4 w-4" />
        <span>Home</span>
        <span>/</span>
        <span>Notifications</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">Notifications</h1>
          {unreadCount > 0 && (
            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">{unreadCount} new</span>
          )}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleMarkAllRead}>
            <CheckCheck className="h-4 w-4 mr-1" />
            Mark all read
          </Button>
          <Button variant="outline" size="sm" onClick={handleClearAll}>
            <Trash2 className="h-4 w-4 mr-1" />
            Clear all
          </Button>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border divide-y divide-border">
        {displayNotifications.map((notification) => (
          <div
            key={notification.id}
            className={cn(
              "p-4 flex items-start gap-4 hover:bg-muted/50 transition-colors",
              !notification.isRead && "bg-primary/5",
            )}
          >
            <div className="mt-2">{getNotificationIcon(notification.type)}</div>
            <div className="flex-1 min-w-0">
              <p className={cn("text-sm", !notification.isRead && "font-medium")}>{notification.message}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {new Date(notification.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <div className="flex items-center gap-1">
              {!notification.isRead && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => markNotificationRead(notification.id)}
                  className="h-8 w-8"
                >
                  <Check className="h-4 w-4" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(notification.id)}
                className="h-8 w-8 text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        {displayNotifications.length === 0 && (
          <div className="p-8 text-center">
            <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No notifications yet</p>
          </div>
        )}
      </div>
    </div>
  )
}
