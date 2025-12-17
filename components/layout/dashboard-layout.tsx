"use client"

import type React from "react"

import { useApp } from "@/lib/context/app-context"
import { Sidebar } from "./sidebar"
import { Topbar } from "./topbar"
import { cn } from "@/lib/utils"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { isAuthenticated, sidebarCollapsed } = useApp()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Topbar />
      <Sidebar />
      <main
        className={cn("pt-[60px] min-h-screen transition-all duration-300", sidebarCollapsed ? "ml-0" : "ml-[220px]")}
      >
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}
