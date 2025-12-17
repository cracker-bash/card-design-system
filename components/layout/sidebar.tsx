"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, User, ChevronDown, ChevronRight, Users, Gift } from "lucide-react"
import { cn } from "@/lib/utils"
import { useApp } from "@/lib/context/app-context"
import { useState } from "react"

interface NavItem {
  label: string
  href?: string
  icon: React.ReactNode
  children?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
  {
    label: "My nyamizi",
    icon: <LayoutDashboard className="h-5 w-5" />,
    children: [
      { label: "nyamizi Templates", href: "/dashboard/templates" },
      { label: "Templates Pro", href: "/dashboard/templates-pro" },
      { label: "My Design", href: "/dashboard/my-designs" },
      { label: "nyamizi Events", href: "/dashboard/events" },
      { label: "nyamizi Sample", href: "/dashboard/sample" },
      { label: "Save Drafts", href: "/dashboard/drafts" },
    ],
  },
  {
    label: "nyamizi Wakala",
    icon: <Users className="h-5 w-5" />,
    children: [
      { label: "Customer Cards", href: "/dashboard/customer-cards" },
      { label: "Agents", href: "/dashboard/agents" },
    ],
  },
  {
    label: "My Profile",
    href: "/dashboard/profile",
    icon: <User className="h-5 w-5" />,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const { sidebarCollapsed } = useApp()
  const [expandedItems, setExpandedItems] = useState<string[]>(["My nyamizi"])

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }

  const isActive = (href: string) => pathname === href
  const hasActiveChild = (children?: { label: string; href: string }[]) =>
    children?.some((child) => pathname === child.href)

  return (
    <aside
      className={cn(
        "fixed left-0 top-[60px] h-[calc(100vh-60px)] bg-sidebar-bg text-sidebar-foreground transition-all duration-300 z-40 flex flex-col",
        sidebarCollapsed ? "w-0 overflow-hidden" : "w-[220px]",
      )}
    >
      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-4 mb-4">
          <span className="text-xs font-semibold text-sidebar-accent uppercase tracking-wider">NYAMIZI AGENT</span>
        </div>

        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleExpanded(item.label)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                      hasActiveChild(item.children)
                        ? "text-sidebar-accent"
                        : "text-sidebar-foreground hover:bg-sidebar-border",
                    )}
                  >
                    <span className="flex items-center gap-3">
                      {item.icon}
                      {item.label}
                    </span>
                    {expandedItems.includes(item.label) ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                  {expandedItems.includes(item.label) && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-3 py-2 rounded-md text-sm transition-colors",
                            isActive(child.href)
                              ? "text-sidebar-accent font-medium"
                              : "text-sidebar-muted hover:text-sidebar-foreground",
                          )}
                        >
                          - {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href!}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                    isActive(item.href!) ? "text-sidebar-accent" : "text-sidebar-foreground hover:bg-sidebar-border",
                  )}
                >
                  {item.icon}
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Help Desk Button */}
      <div className="p-4">
        <a
          href="https://wa.me/255614538424"
          className="flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-lg py-3 px-4 text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <span>Help Desk</span>
          <span className="text-xs mt-0.5">+255614538424</span>
        </a>
      </div>
    </aside>
  )
}
