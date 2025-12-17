"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface User {
  id: string
  name: string
  email: string
  phone: string
  avatar?: string
}

export interface Design {
  id: string
  userId: string
  title: string
  designJson: any
  thumbnailUrl: string
  createdAt: string
  updatedAt: string
}

export interface EditableField {
  id: string
  type: "text" | "date" | "time" | "location"
  label: string
  defaultValue: string
  x: number
  y: number
  width: number
  height: number
  fontSize: number
  fontFamily: string
  fontWeight: string
  color: string
  textAlign: "left" | "center" | "right"
  isScript?: boolean
}

export interface Template {
  id: string
  title: string
  previewUrl: string
  templateJson: {
    editableFields: EditableField[]
    backgroundColor?: string
    backgroundImage?: string
  }
  category: string
  color: string
  rating: number
  number: number
}

export interface SentCard {
  id: string
  userId: string
  designId: string
  recipientName: string
  phone: string
  message: string
  status: "pending" | "sent" | "delivered" | "failed"
  sentAt: string
  thumbnailUrl?: string
}

export interface Notification {
  id: string
  userId: string
  message: string
  isRead: boolean
  createdAt: string
  type: "success" | "info" | "warning" | "error"
}

export interface Agent {
  id: string
  name: string
  phone: string
  email?: string
  avatar?: string
  password?: string
}

interface AppContextType {
  user: User | null
  setUser: (user: User | null) => void
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  agents: Agent[]
  setAgents: (agents: Agent[]) => void
  addAgent: (agent: Agent) => void
  removeAgent: (id: string) => void
  designs: Design[]
  setDesigns: (designs: Design[]) => void
  templates: Template[]
  setTemplates: (templates: Template[]) => void
  sentCards: SentCard[]
  setSentCards: (cards: SentCard[]) => void
  notifications: Notification[]
  setNotifications: (notifications: Notification[]) => void
  addNotification: (notification: Omit<Notification, "id" | "userId" | "createdAt">) => void
  markNotificationRead: (id: string) => void
  sidebarCollapsed: boolean
  setSidebarCollapsed: (collapsed: boolean) => void
  theme: "light" | "dark"
  setTheme: (theme: "light" | "dark") => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const sampleTemplates: Template[] = [
  {
    id: "gilded-floral",
    title: "Gilded Floral Enlace",
    previewUrl: "/images/28free-29-208-2b-20gilded-20floral-20enlace-20canva-20wedding-e2-80-a6.jpg",
    templateJson: {
      editableFields: [
        {
          id: "monogram",
          type: "text",
          label: "Monogram",
          defaultValue: "H & M",
          x: 180,
          y: 40,
          width: 120,
          height: 40,
          fontSize: 28,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#1a1a1a",
          textAlign: "center",
        },
        {
          id: "intro",
          type: "text",
          label: "Introduction",
          defaultValue: "TOGETHER WITH THEIR FAMILIES",
          x: 100,
          y: 100,
          width: 280,
          height: 24,
          fontSize: 12,
          fontFamily: "sans-serif",
          fontWeight: "normal",
          color: "#666666",
          textAlign: "center",
        },
        {
          id: "names",
          type: "text",
          label: "Couple Names",
          defaultValue: "Hannah & Morgan",
          x: 80,
          y: 130,
          width: 320,
          height: 60,
          fontSize: 42,
          fontFamily: "script",
          fontWeight: "normal",
          color: "#1a1a1a",
          textAlign: "center",
          isScript: true,
        },
        {
          id: "invite-text",
          type: "text",
          label: "Invitation Text",
          defaultValue: "INVITING YOU TO CELEBRATING\nTHEIR WEDDING",
          x: 100,
          y: 210,
          width: 280,
          height: 50,
          fontSize: 12,
          fontFamily: "sans-serif",
          fontWeight: "normal",
          color: "#666666",
          textAlign: "center",
        },
        {
          id: "date",
          type: "date",
          label: "Wedding Date",
          defaultValue: "SATURDAY, 15 JULY 2023",
          x: 100,
          y: 290,
          width: 280,
          height: 30,
          fontSize: 16,
          fontFamily: "serif",
          fontWeight: "bold",
          color: "#1a1a1a",
          textAlign: "center",
        },
        {
          id: "time-venue",
          type: "text",
          label: "Time & Venue",
          defaultValue: "CEREMONY | HOTEL WARNER\n2PM | & SPENCER",
          x: 100,
          y: 340,
          width: 280,
          height: 60,
          fontSize: 14,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#1a1a1a",
          textAlign: "center",
        },
        {
          id: "note",
          type: "text",
          label: "Note",
          defaultValue: "PLEASE BRING\nTHIS INVITATION",
          x: 130,
          y: 420,
          width: 220,
          height: 40,
          fontSize: 11,
          fontFamily: "sans-serif",
          fontWeight: "normal",
          color: "#666666",
          textAlign: "center",
        },
      ],
    },
    category: "Wedding",
    color: "Gold",
    rating: 5,
    number: 301,
  },
  {
    id: "modern-floral-blush",
    title: "Modern Floral Blush",
    previewUrl: "/images/cool-208-2b-20modern-20floral-20wedding-20invitation-20templates-e2-80-a6.jpg",
    templateJson: {
      editableFields: [
        {
          id: "intro",
          type: "text",
          label: "Introduction",
          defaultValue: "TOGETHER WITH OUR LOVED\nFRIENDS AND FAMILY\ncelebrating our wedding",
          x: 80,
          y: 60,
          width: 320,
          height: 70,
          fontSize: 12,
          fontFamily: "sans-serif",
          fontWeight: "normal",
          color: "#8b7355",
          textAlign: "center",
        },
        {
          id: "bride",
          type: "text",
          label: "Bride Name",
          defaultValue: "Karin",
          x: 100,
          y: 150,
          width: 280,
          height: 50,
          fontSize: 48,
          fontFamily: "script",
          fontWeight: "normal",
          color: "#8b7355",
          textAlign: "center",
          isScript: true,
        },
        {
          id: "and",
          type: "text",
          label: "And",
          defaultValue: "and",
          x: 180,
          y: 200,
          width: 120,
          height: 30,
          fontSize: 18,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#8b7355",
          textAlign: "center",
        },
        {
          id: "groom",
          type: "text",
          label: "Groom Name",
          defaultValue: "Kevin",
          x: 100,
          y: 230,
          width: 280,
          height: 50,
          fontSize: 48,
          fontFamily: "script",
          fontWeight: "normal",
          color: "#8b7355",
          textAlign: "center",
          isScript: true,
        },
        {
          id: "date",
          type: "date",
          label: "Wedding Date",
          defaultValue: "September 15th, 2021",
          x: 100,
          y: 310,
          width: 280,
          height: 30,
          fontSize: 18,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#5a4a3a",
          textAlign: "center",
        },
        {
          id: "time",
          type: "time",
          label: "Time",
          defaultValue: "at five o'clock in the afternoon",
          x: 100,
          y: 340,
          width: 280,
          height: 24,
          fontSize: 14,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#8b7355",
          textAlign: "center",
        },
        {
          id: "venue",
          type: "location",
          label: "Venue",
          defaultValue: "The East Bay Hotel\n338 Richardson Street\nWaynesboro, PA 17268",
          x: 100,
          y: 380,
          width: 280,
          height: 70,
          fontSize: 14,
          fontFamily: "serif",
          fontWeight: "bold",
          color: "#5a4a3a",
          textAlign: "center",
        },
      ],
    },
    category: "Wedding",
    color: "Pink",
    rating: 5,
    number: 302,
  },
  {
    id: "dark-floral-frame",
    title: "Dark Floral Frame",
    previewUrl: "/images/die-20vorlage-20verf-c3-bcgt-20-c3-bcber-20ein-20gut-20ausgearbeitetes-e2-80-a6-20-281-29.jpg",
    templateJson: {
      editableFields: [
        {
          id: "intro",
          type: "text",
          label: "Introduction",
          defaultValue: "TOGETHER WITH THEIR FAMILIES",
          x: 80,
          y: 120,
          width: 240,
          height: 24,
          fontSize: 11,
          fontFamily: "sans-serif",
          fontWeight: "normal",
          color: "#666666",
          textAlign: "center",
        },
        {
          id: "names",
          type: "text",
          label: "Couple Names",
          defaultValue: "Sarah & James",
          x: 60,
          y: 160,
          width: 280,
          height: 60,
          fontSize: 38,
          fontFamily: "script",
          fontWeight: "normal",
          color: "#1a1a1a",
          textAlign: "center",
          isScript: true,
        },
        {
          id: "invite-text",
          type: "text",
          label: "Invitation Text",
          defaultValue: "REQUEST THE PLEASURE OF YOUR\nCOMPANY AT THEIR WEDDING",
          x: 60,
          y: 240,
          width: 280,
          height: 50,
          fontSize: 11,
          fontFamily: "sans-serif",
          fontWeight: "normal",
          color: "#666666",
          textAlign: "center",
        },
        {
          id: "date",
          type: "date",
          label: "Wedding Date",
          defaultValue: "SATURDAY, JUNE 20TH 2024",
          x: 80,
          y: 310,
          width: 240,
          height: 28,
          fontSize: 14,
          fontFamily: "serif",
          fontWeight: "bold",
          color: "#1a1a1a",
          textAlign: "center",
        },
        {
          id: "time",
          type: "time",
          label: "Time",
          defaultValue: "AT 4 O'CLOCK IN THE AFTERNOON",
          x: 80,
          y: 340,
          width: 240,
          height: 24,
          fontSize: 11,
          fontFamily: "sans-serif",
          fontWeight: "normal",
          color: "#666666",
          textAlign: "center",
        },
        {
          id: "venue",
          type: "location",
          label: "Venue",
          defaultValue: "THE GRAND BALLROOM\n123 ELEGANT AVENUE",
          x: 80,
          y: 380,
          width: 240,
          height: 50,
          fontSize: 12,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#1a1a1a",
          textAlign: "center",
        },
      ],
    },
    category: "Wedding",
    color: "Black",
    rating: 5,
    number: 303,
  },
  {
    id: "emerald-tropical",
    title: "Emerald Tropical Luxury",
    previewUrl: "/images/transform-20your-20wedding-20stationery-20instantly-20with-e2-80-a6.jpg",
    templateJson: {
      editableFields: [
        {
          id: "intro",
          type: "text",
          label: "Introduction",
          defaultValue: "TOGETHER WITH\nTHEIR FAMILIES",
          x: 120,
          y: 80,
          width: 200,
          height: 50,
          fontSize: 12,
          fontFamily: "sans-serif",
          fontWeight: "normal",
          color: "#1a1a1a",
          textAlign: "center",
        },
        {
          id: "names",
          type: "text",
          label: "Couple Names",
          defaultValue: "George &\nSalomey",
          x: 80,
          y: 140,
          width: 280,
          height: 100,
          fontSize: 44,
          fontFamily: "script",
          fontWeight: "normal",
          color: "#d4af37",
          textAlign: "center",
          isScript: true,
        },
        {
          id: "invite-text",
          type: "text",
          label: "Invitation Text",
          defaultValue: "INVITES YOU TO THEIR\nWEDDING CELEBRATION",
          x: 120,
          y: 260,
          width: 200,
          height: 40,
          fontSize: 10,
          fontFamily: "sans-serif",
          fontWeight: "normal",
          color: "#666666",
          textAlign: "center",
        },
        {
          id: "date",
          type: "date",
          label: "Date",
          defaultValue: "SAT, 25TH\nOCT. 2024",
          x: 100,
          y: 310,
          width: 100,
          height: 50,
          fontSize: 14,
          fontFamily: "serif",
          fontWeight: "bold",
          color: "#1a1a1a",
          textAlign: "center",
        },
        {
          id: "time",
          type: "time",
          label: "Time",
          defaultValue: "12 PM\nGMT",
          x: 220,
          y: 310,
          width: 100,
          height: 50,
          fontSize: 24,
          fontFamily: "serif",
          fontWeight: "bold",
          color: "#1a1a1a",
          textAlign: "center",
        },
        {
          id: "venue",
          type: "location",
          label: "Venue",
          defaultValue: "@ THE CHURCH PREMISES\nASSEMBLIES OF GOD, MARVILE\nHOMES, MANET-TESHIE LINK,\nGREATER ACCRA",
          x: 80,
          y: 380,
          width: 280,
          height: 80,
          fontSize: 9,
          fontFamily: "sans-serif",
          fontWeight: "normal",
          color: "#666666",
          textAlign: "center",
        },
      ],
    },
    category: "Wedding",
    color: "Green",
    rating: 5,
    number: 304,
  },
  {
    id: "gold-geometric-rings",
    title: "Gold Geometric Rings",
    previewUrl: "/images/june-205-2c-202022-20-20baryh-20stumbled-20upon-20this-20pin-e2-80-a6-20-281-29.jpg",
    templateJson: {
      editableFields: [
        {
          id: "intro",
          type: "text",
          label: "Introduction",
          defaultValue: "TOGETHER WITH THEIR FAMILIES",
          x: 80,
          y: 80,
          width: 240,
          height: 24,
          fontSize: 11,
          fontFamily: "sans-serif",
          fontWeight: "normal",
          color: "#8b7355",
          textAlign: "center",
        },
        {
          id: "names",
          type: "text",
          label: "Couple Names",
          defaultValue: "Emma & Michael",
          x: 60,
          y: 120,
          width: 280,
          height: 60,
          fontSize: 36,
          fontFamily: "script",
          fontWeight: "normal",
          color: "#d4af37",
          textAlign: "center",
          isScript: true,
        },
        {
          id: "invite-text",
          type: "text",
          label: "Invitation Text",
          defaultValue: "REQUEST THE HONOR OF YOUR PRESENCE\nAT THEIR WEDDING CELEBRATION",
          x: 60,
          y: 200,
          width: 280,
          height: 50,
          fontSize: 11,
          fontFamily: "sans-serif",
          fontWeight: "normal",
          color: "#666666",
          textAlign: "center",
        },
        {
          id: "date",
          type: "date",
          label: "Wedding Date",
          defaultValue: "SATURDAY, MARCH 15TH 2025",
          x: 80,
          y: 270,
          width: 240,
          height: 28,
          fontSize: 14,
          fontFamily: "serif",
          fontWeight: "bold",
          color: "#1a1a1a",
          textAlign: "center",
        },
        {
          id: "time",
          type: "time",
          label: "Time",
          defaultValue: "AT 3 O'CLOCK IN THE AFTERNOON",
          x: 80,
          y: 300,
          width: 240,
          height: 24,
          fontSize: 11,
          fontFamily: "sans-serif",
          fontWeight: "normal",
          color: "#666666",
          textAlign: "center",
        },
        {
          id: "venue",
          type: "location",
          label: "Venue",
          defaultValue: "THE GARDEN PAVILION\n456 ROSE AVENUE, CITY",
          x: 80,
          y: 340,
          width: 240,
          height: 50,
          fontSize: 12,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#1a1a1a",
          textAlign: "center",
        },
      ],
    },
    category: "Wedding",
    color: "Gold",
    rating: 5,
    number: 305,
  },
  {
    id: "beige-floral-nikkah",
    title: "Beige Floral Nikkah",
    previewUrl: "/images/elegant-20beige-20floral-20nikkah-20invite-20-20simple-20yet-e2-80-a6-20-281-29.jpg",
    templateJson: {
      editableFields: [
        {
          id: "bismillah",
          type: "text",
          label: "Bismillah",
          defaultValue: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
          x: 60,
          y: 30,
          width: 280,
          height: 40,
          fontSize: 20,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#1a1a1a",
          textAlign: "center",
        },
        {
          id: "intro",
          type: "text",
          label: "Introduction",
          defaultValue: "TOGETHER\nWITH OUR FAMILIES",
          x: 120,
          y: 80,
          width: 200,
          height: 50,
          fontSize: 12,
          fontFamily: "sans-serif",
          fontWeight: "normal",
          color: "#8b7355",
          textAlign: "center",
        },
        {
          id: "bride",
          type: "text",
          label: "Bride Name",
          defaultValue: "Halima",
          x: 80,
          y: 150,
          width: 280,
          height: 60,
          fontSize: 48,
          fontFamily: "script",
          fontWeight: "normal",
          color: "#5a4a3a",
          textAlign: "center",
          isScript: true,
        },
        {
          id: "and",
          type: "text",
          label: "And",
          defaultValue: "&",
          x: 180,
          y: 210,
          width: 80,
          height: 30,
          fontSize: 24,
          fontFamily: "script",
          fontWeight: "normal",
          color: "#8b7355",
          textAlign: "center",
        },
        {
          id: "groom",
          type: "text",
          label: "Groom Name",
          defaultValue: "Yunus",
          x: 80,
          y: 240,
          width: 280,
          height: 60,
          fontSize: 48,
          fontFamily: "script",
          fontWeight: "normal",
          color: "#5a4a3a",
          textAlign: "center",
          isScript: true,
        },
        {
          id: "invite-text",
          type: "text",
          label: "Invitation Text",
          defaultValue: "REQUEST THE HONOR OF YOUR\nPRESENCE AT THE NIKKAH ON",
          x: 80,
          y: 320,
          width: 280,
          height: 50,
          fontSize: 11,
          fontFamily: "sans-serif",
          fontWeight: "normal",
          color: "#8b7355",
          textAlign: "center",
        },
        {
          id: "month",
          type: "text",
          label: "Month",
          defaultValue: "DECEMBER",
          x: 140,
          y: 380,
          width: 160,
          height: 28,
          fontSize: 16,
          fontFamily: "serif",
          fontWeight: "bold",
          color: "#1a1a1a",
          textAlign: "center",
        },
        {
          id: "day-time",
          type: "text",
          label: "Day & Time",
          defaultValue: "SUNDAY | 30 | AT 5 PM\n2023",
          x: 100,
          y: 410,
          width: 240,
          height: 50,
          fontSize: 14,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#1a1a1a",
          textAlign: "center",
        },
        {
          id: "venue",
          type: "location",
          label: "Venue",
          defaultValue: "43 MEAM STREET\nBLACKBURN\nBB19TQ",
          x: 120,
          y: 480,
          width: 200,
          height: 60,
          fontSize: 12,
          fontFamily: "serif",
          fontWeight: "bold",
          color: "#5a4a3a",
          textAlign: "center",
        },
      ],
    },
    category: "Wedding",
    color: "Ivory",
    rating: 5,
    number: 306,
  },
  {
    id: "navy-gold-luxury",
    title: "Navy & Gold Luxury",
    previewUrl: "/images/customize-20this-20design-20with-20your-20video-2c-20photos-20and-e2-80-a6.jpg",
    templateJson: {
      editableFields: [
        {
          id: "intro",
          type: "text",
          label: "Introduction",
          defaultValue: "TOGETHER WITH THEIR\nFAMILIES",
          x: 80,
          y: 80,
          width: 200,
          height: 50,
          fontSize: 14,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#d4af37",
          textAlign: "center",
        },
        {
          id: "groom",
          type: "text",
          label: "Groom Name",
          defaultValue: "Jason",
          x: 100,
          y: 150,
          width: 160,
          height: 50,
          fontSize: 42,
          fontFamily: "script",
          fontWeight: "normal",
          color: "#ffffff",
          textAlign: "center",
          isScript: true,
        },
        {
          id: "and",
          type: "text",
          label: "And",
          defaultValue: "&",
          x: 150,
          y: 200,
          width: 60,
          height: 30,
          fontSize: 24,
          fontFamily: "script",
          fontWeight: "normal",
          color: "#d4af37",
          textAlign: "center",
        },
        {
          id: "bride",
          type: "text",
          label: "Bride Name",
          defaultValue: "Emmy",
          x: 100,
          y: 230,
          width: 160,
          height: 50,
          fontSize: 42,
          fontFamily: "script",
          fontWeight: "normal",
          color: "#ffffff",
          textAlign: "center",
          isScript: true,
        },
        {
          id: "wedding",
          type: "text",
          label: "Wedding Text",
          defaultValue: "WEDDING",
          x: 80,
          y: 290,
          width: 200,
          height: 40,
          fontSize: 32,
          fontFamily: "serif",
          fontWeight: "bold",
          color: "#d4af37",
          textAlign: "center",
        },
        {
          id: "invite-text",
          type: "text",
          label: "Invitation Text",
          defaultValue: "REQUEST THE PLEASURE\nOF YOUR COMPANY AT THE CELEBRATION OF THEIR",
          x: 60,
          y: 350,
          width: 240,
          height: 50,
          fontSize: 10,
          fontFamily: "sans-serif",
          fontWeight: "normal",
          color: "#ffffff",
          textAlign: "center",
        },
        {
          id: "date-time",
          type: "date",
          label: "Date & Time",
          defaultValue: "DECEMBER 24TH 2020\nAT 9:00AM",
          x: 60,
          y: 420,
          width: 200,
          height: 50,
          fontSize: 14,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#d4af37",
          textAlign: "left",
        },
        {
          id: "quote",
          type: "text",
          label: "Quote",
          defaultValue: "What God has joined let not man separate",
          x: 60,
          y: 490,
          width: 240,
          height: 30,
          fontSize: 12,
          fontFamily: "script",
          fontWeight: "normal",
          color: "#ffffff",
          textAlign: "center",
          isScript: true,
        },
      ],
    },
    category: "Wedding",
    color: "Navy",
    rating: 5,
    number: 307,
  },
  {
    id: "olive-minimalist",
    title: "Olive Branch Minimalist",
    previewUrl: "/images/simple-20wedding-20invitation-20card-2c-20simple-20wedding-e2-80-a6.jpg",
    templateJson: {
      editableFields: [
        {
          id: "intro",
          type: "text",
          label: "Introduction",
          defaultValue: "No dia em que festejamos a nossa união\npedimos a honra da vossa presença",
          x: 60,
          y: 60,
          width: 280,
          height: 50,
          fontSize: 12,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#666666",
          textAlign: "center",
        },
        {
          id: "bride",
          type: "text",
          label: "Bride Name",
          defaultValue: "Marisa",
          x: 80,
          y: 130,
          width: 240,
          height: 50,
          fontSize: 42,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#1a1a1a",
          textAlign: "center",
        },
        {
          id: "and",
          type: "text",
          label: "And",
          defaultValue: "&",
          x: 180,
          y: 180,
          width: 40,
          height: 30,
          fontSize: 24,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#666666",
          textAlign: "center",
        },
        {
          id: "groom",
          type: "text",
          label: "Groom Name",
          defaultValue: "Daniel",
          x: 80,
          y: 210,
          width: 240,
          height: 50,
          fontSize: 42,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#1a1a1a",
          textAlign: "center",
        },
        {
          id: "year",
          type: "text",
          label: "Year",
          defaultValue: "2019",
          x: 180,
          y: 280,
          width: 60,
          height: 24,
          fontSize: 14,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#666666",
          textAlign: "center",
        },
        {
          id: "date",
          type: "date",
          label: "Date",
          defaultValue: "Sexta-Feira | 13 | Setembro\n12:00",
          x: 100,
          y: 310,
          width: 200,
          height: 50,
          fontSize: 14,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#1a1a1a",
          textAlign: "center",
        },
        {
          id: "ceremony",
          type: "location",
          label: "Ceremony Venue",
          defaultValue: "Igreja S. Julião, Praça do Bocage\nSetúbal, Portugal",
          x: 80,
          y: 380,
          width: 240,
          height: 50,
          fontSize: 12,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#1a1a1a",
          textAlign: "center",
        },
        {
          id: "reception",
          type: "location",
          label: "Reception Venue",
          defaultValue: "Segue-se a celebração - Quinta da Serralheira,\nPalmela, Setúbal",
          x: 60,
          y: 440,
          width: 280,
          height: 50,
          fontSize: 12,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#666666",
          textAlign: "center",
        },
      ],
    },
    category: "Wedding",
    color: "White",
    rating: 5,
    number: 308,
  },
  // Keep some original templates
  {
    id: "1",
    title: "Olivia Benny Wedding",
    previewUrl: "/elegant-wedding-invitation-card-with-pink-flowers.jpg",
    templateJson: {
      editableFields: [
        {
          id: "names",
          type: "text",
          label: "Couple Names",
          defaultValue: "Olivia & Benny",
          x: 100,
          y: 150,
          width: 280,
          height: 60,
          fontSize: 38,
          fontFamily: "script",
          fontWeight: "normal",
          color: "#d4af37",
          textAlign: "center",
          isScript: true,
        },
        {
          id: "date",
          type: "date",
          label: "Wedding Date",
          defaultValue: "23 APRIL 2026",
          x: 140,
          y: 230,
          width: 200,
          height: 30,
          fontSize: 16,
          fontFamily: "serif",
          fontWeight: "bold",
          color: "#1a1a1a",
          textAlign: "center",
        },
        {
          id: "venue",
          type: "location",
          label: "Venue",
          defaultValue: "JACK HALL\nMIEZI BEACH",
          x: 140,
          y: 280,
          width: 200,
          height: 50,
          fontSize: 14,
          fontFamily: "serif",
          fontWeight: "normal",
          color: "#1a1a1a",
          textAlign: "center",
        },
      ],
    },
    category: "Wedding",
    color: "Gold",
    rating: 5,
    number: 280,
  },
  {
    id: "2",
    title: "Doreen Maria Save the Date",
    previewUrl: "/save-the-date-wedding-card-elegant-design.jpg",
    templateJson: {
      editableFields: [
        {
          id: "names",
          type: "text",
          label: "Couple Names",
          defaultValue: "Doreen & Maria",
          x: 100,
          y: 140,
          width: 280,
          height: 60,
          fontSize: 36,
          fontFamily: "script",
          fontWeight: "normal",
          color: "#1a1a1a",
          textAlign: "center",
          isScript: true,
        },
        {
          id: "date",
          type: "date",
          label: "Save the Date",
          defaultValue: "April 21 2025",
          x: 140,
          y: 220,
          width: 200,
          height: 40,
          fontSize: 24,
          fontFamily: "serif",
          fontWeight: "bold",
          color: "#1a1a1a",
          textAlign: "center",
        },
      ],
    },
    category: "Wedding",
    color: "Pink",
    rating: 5,
    number: 45,
  },
]

const sampleDesigns: Design[] = [
  {
    id: "1",
    userId: "1",
    title: "Mtoto wa Tenth J. Maruhe (Nyamiaga) mchango wa harusi",
    designJson: {},
    thumbnailUrl: "/wedding-invitation-card-blue-floral.jpg",
    createdAt: "2024-11-28T10:00:00Z",
    updatedAt: "2024-11-28T10:00:00Z",
  },
  {
    id: "2",
    userId: "1",
    title: "Stephen and Lucy Wedding Day",
    designJson: {},
    thumbnailUrl: "/wedding-day-invitation-elegant.jpg",
    createdAt: "2024-11-27T10:00:00Z",
    updatedAt: "2024-11-27T10:00:00Z",
  },
  {
    id: "3",
    userId: "1",
    title: "Kisula Wedding",
    designJson: {},
    thumbnailUrl: "/traditional-wedding-card-design.jpg",
    createdAt: "2024-11-26T10:00:00Z",
    updatedAt: "2024-11-26T10:00:00Z",
  },
]

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [designs, setDesigns] = useState<Design[]>(sampleDesigns)
  const [templates, setTemplates] = useState<Template[]>(sampleTemplates)
  const [agents, setAgents] = useState<Agent[]>(() => {
    try {
      const raw = localStorage.getItem("nyamizi_agents")
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [sentCards, setSentCards] = useState<SentCard[]>([])
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const storedUser = localStorage.getItem("nyamizi_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }

    const storedTheme = localStorage.getItem("nyamizi_theme") as "light" | "dark"
    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.classList.toggle("dark", storedTheme === "dark")
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem("nyamizi_agents", JSON.stringify(agents))
    } catch {}
  }, [agents])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("nyamizi_theme", theme)
  }, [theme])

  const normalizePhone = (p: string) => p.replace(/\D/g, "")

  const addAgent = async (agent: Agent) => {
    try {
      const res = await fetch("/api/agents", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(agent) })
      if (res.ok) {
        const json = await res.json()
        setAgents((prev) => [...prev, json.agent])
        return json.agent
      }
    } catch (err) {
      // fallback to local
      const next = [...agents, agent]
      setAgents(next)
      try {
        localStorage.setItem("nyamizi_agents", JSON.stringify(next))
      } catch {}
      return agent
    }
  }

  const removeAgent = async (id: string) => {
    try {
      await fetch(`/api/agents?id=${id}`, { method: "DELETE" })
      setAgents((prev) => prev.filter((a) => a.id !== id))
    } catch {
      setAgents((prev) => prev.filter((a) => a.id !== id))
      try {
        localStorage.setItem("nyamizi_agents", JSON.stringify(agents.filter((a) => a.id !== id)))
      } catch {}
    }
  }

  const login = async (phone: string, password: string): Promise<boolean> => {
    if (!phone || !password) return false

    try {
      const res = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ phone, password }) })
      if (res.ok) {
        const json = await res.json()
        if (json.ok && json.user) {
          setUser(json.user)
          localStorage.setItem("nyamizi_user", JSON.stringify(json.user))
          addNotification({ message: `Welcome ${json.user.name}!`, isRead: false, type: "success" })
          return true
        }
      }
    } catch (err) {
      // fallback to local logic
    }

    // fallback: check local agents or admin
    const normalized = normalizePhone(phone)
    const adminPhone = normalizePhone(process.env.NEXT_PUBLIC_ADMIN_PHONE || "0744427017")
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "nyanda1316"
    if (normalized === adminPhone && password === adminPassword) {
      const adminUser: User = {
        id: "admin",
        name: "NNYAMIZI STATIONERY",
        email: "nnyamizi@example.com",
        phone: "+255744427017",
        avatar: "/user-avatar-profile.png",
      }
      setUser(adminUser)
      localStorage.setItem("nyamizi_user", JSON.stringify(adminUser))
      addNotification({ message: "Welcome back! You have successfully logged in.", isRead: false, type: "success" })
      return true
    }

    const match = agents.find((a) => normalizePhone(a.phone || "") === normalized)
    if (match && match.password && match.password === password) {
      const agentUser: User = {
        id: match.id,
        name: match.name,
        email: match.email || "",
        phone: match.phone,
        avatar: match.avatar || "/user-avatar-profile.png",
      }
      setUser(agentUser)
      localStorage.setItem("nyamizi_user", JSON.stringify(agentUser))
      addNotification({ message: `Welcome ${agentUser.name}!`, isRead: false, type: "success" })
      return true
    }

    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("nyamizi_user")
  }

  const addNotification = (notification: Omit<Notification, "id" | "userId" | "createdAt">) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      userId: user?.id || "",
      createdAt: new Date().toISOString(),
    }
    setNotifications((prev) => [newNotification, ...prev])
  }

  const markNotificationRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)))
  }

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated: !!user,
        login,
        logout,
        agents,
        setAgents,
        addAgent,
        removeAgent,
        designs,
        setDesigns,
        templates,
        setTemplates,
        sentCards,
        setSentCards,
        notifications,
        setNotifications,
        addNotification,
        markNotificationRead,
        sidebarCollapsed,
        setSidebarCollapsed,
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
