"use client"

import { useState, useRef, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { useApp, type EditableField } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Type,
  Square,
  ImageIcon,
  Layers,
  Layout,
  Home,
  Undo,
  Redo,
  Download,
  Send,
  ZoomIn,
  ZoomOut,
  Save,
  Trash2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { SendSMSModal } from "@/components/modals/send-sms-modal"
import { useToast } from "@/hooks/use-toast"

interface CanvasElement {
  id: string
  type: "text" | "image" | "shape"
  x: number
  y: number
  width: number
  height: number
  content?: string
  fontSize?: number
  fontFamily?: string
  fontWeight?: string
  color?: string
  textAlign?: "left" | "center" | "right"
  src?: string
  shapeType?: "rectangle" | "circle" | "triangle"
  backgroundColor?: string
  isScript?: boolean
  isTemplateField?: boolean
  fieldLabel?: string
}

const tools = [
  { id: "text", icon: Type, label: "Text" },
  { id: "shape", icon: Square, label: "Shape" },
  { id: "image", icon: ImageIcon, label: "Image" },
  { id: "background", icon: Layers, label: "Background" },
  { id: "overlay", icon: Layout, label: "Overlay" },
]

const fontFamilies = [
  { value: "sans-serif", label: "Sans Serif" },
  { value: "serif", label: "Serif" },
  { value: "script", label: "Script" },
  { value: "monospace", label: "Monospace" },
]

export default function EditorPage() {
  const params = useParams()
  const router = useRouter()
  const { templates, designs, addNotification } = useApp()
  const { toast } = useToast()
  const canvasRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const draggingRef = useRef<{ id: string; startX: number; startY: number; origX: number; origY: number } | null>(null)
  const resizingRef = useRef<{ id: string; startX: number; startY: number; origW: number; origH: number } | null>(null)

  const [activeTool, setActiveTool] = useState("text")
  const [elements, setElements] = useState<CanvasElement[]>([])
  const [selectedElement, setSelectedElement] = useState<string | null>(null)
  const [zoom, setZoom] = useState(100)
  const [saved, setSaved] = useState(true)
  const [canvasBackground, setCanvasBackground] = useState("#f5f5f5")
  const [showSMSModal, setShowSMSModal] = useState(false)
  const [history, setHistory] = useState<CanvasElement[][]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  // Find template or design
  const template = templates.find((t) => t.id === params.id)
  const design = designs.find((d) => d.id === params.id)
  const cardTitle = template?.title || design?.title || "New Card"
  const cardThumbnail = template?.previewUrl || design?.thumbnailUrl

  useEffect(() => {
    let initialElements: CanvasElement[] = []

    if (template?.templateJson?.editableFields) {
      // Convert template fields to canvas elements
      initialElements = template.templateJson.editableFields.map((field: EditableField) => ({
        id: field.id,
        type: "text" as const,
        x: field.x,
        y: field.y,
        width: field.width,
        height: field.height,
        content: field.defaultValue,
        fontSize: field.fontSize,
        fontFamily: field.fontFamily,
        fontWeight: field.fontWeight,
        color: field.color,
        textAlign: field.textAlign,
        isScript: field.isScript,
        isTemplateField: true,
        fieldLabel: field.label,
      }))
    } else {
      // Default elements for non-template designs
      initialElements = [
        {
          id: "1",
          type: "text",
          x: 150,
          y: 80,
          width: 200,
          height: 40,
          content: "INVITEE NAME",
          fontSize: 16,
          fontFamily: "sans-serif",
          color: "#333333",
          textAlign: "center",
        },
      ]
    }

    setElements(initialElements)
    setHistory([initialElements])
    setHistoryIndex(0)
  }, [template])

  const saveToHistory = (newElements: CanvasElement[]) => {
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(newElements)
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1)
      setElements(history[historyIndex - 1])
      setSaved(false)
    }
  }

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1)
      setElements(history[historyIndex + 1])
      setSaved(false)
    }
  }

  const addElement = (type: "text" | "image" | "shape") => {
    const newElement: CanvasElement = {
      id: Date.now().toString(),
      type,
      x: 100,
      y: 100,
      width: type === "text" ? 200 : 100,
      height: type === "text" ? 40 : 100,
      content: type === "text" ? "New Text" : undefined,
      fontSize: 16,
      fontFamily: "sans-serif",
      fontWeight: "normal",
      color: "#333333",
      textAlign: "center",
      shapeType: type === "shape" ? "rectangle" : undefined,
      backgroundColor: type === "shape" ? "#3b82f6" : undefined,
    }
    const newElements = [...elements, newElement]
    setElements(newElements)
    saveToHistory(newElements)
    setSelectedElement(newElement.id)
    setSaved(false)
  }

  // Drag handlers
  const onElementMouseDown = (e: React.MouseEvent, el: CanvasElement) => {
    e.stopPropagation()
    if (e.button !== 0) return
    draggingRef.current = { id: el.id, startX: e.clientX, startY: e.clientY, origX: el.x, origY: el.y }
    window.addEventListener("mousemove", onWindowMouseMove)
    window.addEventListener("mouseup", onWindowMouseUp)
  }

  const onWindowMouseMove = (ev: MouseEvent) => {
    if (!draggingRef.current) return
    const d = draggingRef.current
    const dx = ev.clientX - d.startX
    const dy = ev.clientY - d.startY
    updateElement(d.id, { x: Math.max(0, Math.round(d.origX + dx)), y: Math.max(0, Math.round(d.origY + dy)) })
  }

  const onWindowMouseUp = () => {
    if (draggingRef.current) {
      saveToHistory(elements)
    }
    draggingRef.current = null
    window.removeEventListener("mousemove", onWindowMouseMove)
    window.removeEventListener("mouseup", onWindowMouseUp)
  }

  // Resize handlers
  const onResizeMouseDown = (e: React.MouseEvent, el: CanvasElement) => {
    e.stopPropagation()
    resizingRef.current = { id: el.id, startX: e.clientX, startY: e.clientY, origW: el.width, origH: el.height }
    window.addEventListener("mousemove", onWindowResizeMove)
    window.addEventListener("mouseup", onWindowResizeUp)
  }

  const onWindowResizeMove = (ev: MouseEvent) => {
    if (!resizingRef.current) return
    const r = resizingRef.current
    const dx = ev.clientX - r.startX
    const dy = ev.clientY - r.startY
    updateElement(r.id, { width: Math.max(20, Math.round(r.origW + dx)), height: Math.max(20, Math.round(r.origH + dy)) })
  }

  const onWindowResizeUp = () => {
    if (resizingRef.current) saveToHistory(elements)
    resizingRef.current = null
    window.removeEventListener("mousemove", onWindowResizeMove)
    window.removeEventListener("mouseup", onWindowResizeUp)
  }

  const updateElement = (id: string, updates: Partial<CanvasElement>) => {
    const newElements = elements.map((el) => (el.id === id ? { ...el, ...updates } : el))
    setElements(newElements)
    setSaved(false)
  }

  const deleteElement = (id: string) => {
    const newElements = elements.filter((el) => el.id !== id)
    setElements(newElements)
    saveToHistory(newElements)
    setSelectedElement(null)
    setSaved(false)
  }

  const handleSave = () => {
    addNotification({
      message: "Design saved successfully",
      isRead: false,
      type: "success",
    })
    setSaved(true)
    toast({
      title: "Saved",
      description: "Your design has been saved.",
    })
  }

  const handleExport = (format: "png" | "pdf") => {
    addNotification({ message: `Exporting as ${format.toUpperCase()}...`, isRead: false, type: "info" })
    toast({ title: "Export Started", description: `Exporting card as ${format.toUpperCase()}...` })

    ;(async () => {
      try {
        const el = canvasRef.current
        if (!el) throw new Error("Canvas not found")
        const html2canvas = (await import("html2canvas")).default
        const canvas = await html2canvas(el, { useCORS: true, scale: 2 })

        if (format === "png") {
          const dataUrl = canvas.toDataURL("image/png")
          const a = document.createElement("a")
          a.href = dataUrl
          a.download = `${cardTitle.replace(/\s+/g, "-") || "card"}.png`
          document.body.appendChild(a)
          a.click()
          a.remove()
          toast({ title: "Export Complete", description: "PNG downloaded." })
        } else {
          const { jsPDF } = await import("jspdf")
          const imgData = canvas.toDataURL("image/png")
          const pdf = new jsPDF({ orientation: "portrait", unit: "px", format: [canvas.width, canvas.height] })
          pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height)
          pdf.save(`${cardTitle.replace(/\s+/g, "-") || "card"}.pdf`)
          toast({ title: "Export Complete", description: "PDF downloaded." })
        }
      } catch (err) {
        console.error(err)
        toast({ title: "Export Failed", description: "Could not export the card." })
      }
    })()
  }

  const selectedEl = elements.find((el) => el.id === selectedElement)

  const getFontStyle = (element: CanvasElement) => {
    let fontFamily = element.fontFamily || "sans-serif"
    if (element.isScript || fontFamily === "script") {
      fontFamily = "'Great Vibes', cursive, serif"
    } else if (fontFamily === "serif") {
      fontFamily = "Georgia, 'Times New Roman', serif"
    } else if (fontFamily === "monospace") {
      fontFamily = "'Courier New', monospace"
    } else {
      fontFamily = "system-ui, sans-serif"
    }
    return fontFamily
  }

  return (
    <div className="h-[calc(100vh-60px)] flex flex-col -m-6">
      {/* Top Bar */}
      <div className="h-14 bg-card border-b border-border flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <span className="font-semibold">Edit customer card</span>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Home className="h-4 w-4" />
            <Link href="/dashboard" className="hover:text-foreground">
              Home
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={cn("text-sm", saved ? "text-muted-foreground" : "text-orange-500")}>
            {saved ? "Saved" : "Not saved"}
          </span>
          <Button variant="outline" size="sm" onClick={undo} disabled={historyIndex <= 0}>
            <Undo className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={redo} disabled={historyIndex >= history.length - 1}>
            <Redo className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handleSave}>
            <Save className="h-4 w-4 mr-1" />
            Save
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleExport("png")}>
            <Download className="h-4 w-4 mr-1" />
            PNG
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleExport("pdf")}>
            <Download className="h-4 w-4 mr-1" />
            PDF
          </Button>
          <Button size="sm" onClick={() => setShowSMSModal(true)}>
            <Send className="h-4 w-4 mr-1" />
            Send SMS
          </Button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Canvas Area */}
        <div className="flex-1 bg-muted/30 overflow-auto p-8 flex items-start justify-center">
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground">Card Preview ({cardTitle})</div>
            <div
              ref={canvasRef}
              className="relative bg-white shadow-lg overflow-hidden"
              style={{
                width: 400,
                height: 600,
                transform: `scale(${zoom / 100})`,
                transformOrigin: "top left",
              }}
              onClick={() => setSelectedElement(null)}
            >
              {/* Background Image */}
              {cardThumbnail && (
                <img
                  src={cardThumbnail || "/placeholder.svg"}
                  alt="Card background"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-6xl font-bold text-gray-400/20 rotate-[-45deg]">SAMPLE</span>
              </div>

              {/* Elements */}
              {elements.map((element) => (
                <div
                  key={element.id}
                  className={cn(
                    "absolute cursor-pointer transition-all",
                    selectedElement === element.id && "ring-2 ring-primary ring-offset-1",
                  )}
                  style={{
                    left: element.x,
                    top: element.y,
                    width: element.width,
                    minHeight: element.type === "text" ? "auto" : element.height,
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedElement(element.id)
                  }}
                  onMouseDown={(e) => onElementMouseDown(e, element)}
                >
                  {element.type === "text" && (
                    <div
                      className="whitespace-pre-wrap break-words"
                      style={{
                        fontSize: element.fontSize,
                        fontFamily: getFontStyle(element),
                        fontWeight: element.fontWeight || "normal",
                        color: element.color,
                        textAlign: element.textAlign || "center",
                        lineHeight: 1.3,
                      }}
                    >
                      {element.content}
                    </div>
                  )}
                  {element.type === "shape" && (
                    <div
                      className={cn("w-full h-full", element.shapeType === "circle" && "rounded-full")}
                      style={{ backgroundColor: element.backgroundColor, height: element.height }}
                    />
                  )}
                  {element.type === "image" && (
                    <img
                      src={element.src || "/placeholder.svg?height=100&width=100&query=placeholder image"}
                      alt="Element"
                      className="w-full h-full object-cover"
                      style={{ height: element.height }}
                    />
                  )}

                  {/* Resize handle */}
                  {selectedElement === element.id && (
                    <div
                      onMouseDown={(e) => onResizeMouseDown(e, element)}
                      className="absolute bottom-0 right-0 h-4 w-4 bg-primary rounded-sm cursor-se-resize"
                    />
                  )}
                </div>
              ))}

              {/* QR Code & Branding */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="text-xs font-bold bg-white/80 px-1 rounded">DOUBLE</span>
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-8 h-8">
                    <rect x="10" y="10" width="20" height="20" fill="#000" />
                    <rect x="40" y="10" width="10" height="10" fill="#000" />
                    <rect x="60" y="10" width="10" height="10" fill="#000" />
                    <rect x="70" y="10" width="20" height="20" fill="#000" />
                    <rect x="10" y="40" width="10" height="10" fill="#000" />
                    <rect x="30" y="40" width="10" height="10" fill="#000" />
                    <rect x="50" y="40" width="20" height="10" fill="#000" />
                    <rect x="80" y="40" width="10" height="10" fill="#000" />
                    <rect x="10" y="70" width="20" height="20" fill="#000" />
                    <rect x="40" y="60" width="10" height="10" fill="#000" />
                    <rect x="60" y="70" width="10" height="10" fill="#000" />
                    <rect x="80" y="60" width="10" height="30" fill="#000" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center justify-center gap-2">
              <Button variant="outline" size="icon" onClick={() => setZoom((z) => Math.max(50, z - 10))}>
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-sm w-16 text-center">{zoom}%</span>
              <Button variant="outline" size="icon" onClick={() => setZoom((z) => Math.min(150, z + 10))}>
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Right Panel - Card Widgets */}
        <div className="w-80 bg-card border-l border-border overflow-y-auto">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold">Card Widgets</h3>
          </div>

          {/* Tools */}
          <div className="absolute right-80 top-14 w-16 bg-card border-l border-border h-[calc(100%-56px)] flex flex-col items-center py-4 gap-4">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => {
                  setActiveTool(tool.id)
                  if (tool.id === "text" || tool.id === "shape" || tool.id === "image") {
                    addElement(tool.id as "text" | "image" | "shape")
                  }
                }}
                className={cn(
                  "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors",
                  activeTool === tool.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted",
                )}
              >
                <tool.icon className="h-5 w-5" />
                <span className="text-xs">{tool.label}</span>
              </button>
            ))}
          </div>

          <div className="p-4 space-y-4">
            {/* Template Fields Section */}
            {template?.templateJson?.editableFields && (
              <>
                <div className="bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 px-3 py-2 rounded font-medium">
                  Template Fields
                </div>
                <div className="space-y-2">
                  {elements
                    .filter((el) => el.isTemplateField)
                    .map((field) => (
                      <button
                        key={field.id}
                        onClick={() => setSelectedElement(field.id)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded transition-colors text-sm",
                          selectedElement === field.id ? "bg-primary/10 text-primary" : "hover:bg-muted",
                        )}
                      >
                        <span className="font-medium">{field.fieldLabel}</span>
                        <p className="text-xs text-muted-foreground truncate">{field.content}</p>
                      </button>
                    ))}
                </div>
              </>
            )}

            {/* Text Settings Header */}
            <div className="bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 px-3 py-2 rounded font-medium">
              Text Settings
            </div>

            {/* Quick Add Headings */}
            <div className="space-y-1">
              {[
                { label: "Heading 1", fontSize: 36 },
                { label: "Heading 2", fontSize: 28 },
                { label: "Heading 3", fontSize: 22 },
                { label: "Heading 4", fontSize: 18 },
                { label: "Body Text", fontSize: 14 },
              ].map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => {
                    const newEl: CanvasElement = {
                      id: Date.now().toString(),
                      type: "text",
                      x: 100,
                      y: 100,
                      width: 200,
                      height: 40,
                      content: preset.label,
                      fontSize: preset.fontSize,
                      fontFamily: "sans-serif",
                      fontWeight: preset.label.includes("Heading") ? "bold" : "normal",
                      color: "#333333",
                      textAlign: "center",
                    }
                    setElements([...elements, newEl])
                    setSelectedElement(newEl.id)
                    setSaved(false)
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-muted rounded transition-colors"
                  style={{ fontSize: Math.min(preset.fontSize, 20) }}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            {/* Selected Element Properties */}
            {selectedEl && selectedEl.type === "text" && (
              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-medium flex items-center gap-2">Edit: {selectedEl.fieldLabel || "Text Element"}</h4>

                <div className="space-y-2">
                  <Label>Content</Label>
                  <Textarea
                    value={selectedEl.content}
                    onChange={(e) => updateElement(selectedEl.id, { content: e.target.value })}
                    rows={4}
                    className="text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <Label>Font Size</Label>
                    <Input
                      type="number"
                      value={selectedEl.fontSize}
                      onChange={(e) => updateElement(selectedEl.id, { fontSize: Number(e.target.value) })}
                      min={8}
                      max={72}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Font</Label>
                    <Select
                      value={selectedEl.fontFamily}
                      onValueChange={(value) =>
                        updateElement(selectedEl.id, { fontFamily: value, isScript: value === "script" })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {fontFamilies.map((font) => (
                          <SelectItem key={font.value} value={font.value}>
                            {font.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <Label>Weight</Label>
                    <Select
                      value={selectedEl.fontWeight || "normal"}
                      onValueChange={(value) => updateElement(selectedEl.id, { fontWeight: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="bold">Bold</SelectItem>
                        <SelectItem value="light">Light</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Align</Label>
                    <Select
                      value={selectedEl.textAlign || "center"}
                      onValueChange={(value) =>
                        updateElement(selectedEl.id, { textAlign: value as "left" | "center" | "right" })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="left">Left</SelectItem>
                        <SelectItem value="center">Center</SelectItem>
                        <SelectItem value="right">Right</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={selectedEl.color}
                      onChange={(e) => updateElement(selectedEl.id, { color: e.target.value })}
                      className="h-10 w-16 p-1"
                    />
                    <Input
                      type="text"
                      value={selectedEl.color}
                      onChange={(e) => updateElement(selectedEl.id, { color: e.target.value })}
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <Label>X Position</Label>
                    <Input
                      type="number"
                      value={selectedEl.x}
                      onChange={(e) => updateElement(selectedEl.id, { x: Number(e.target.value) })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Y Position</Label>
                    <Input
                      type="number"
                      value={selectedEl.y}
                      onChange={(e) => updateElement(selectedEl.id, { y: Number(e.target.value) })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Width</Label>
                  <Slider
                    value={[selectedEl.width]}
                    onValueChange={([value]) => updateElement(selectedEl.id, { width: value })}
                    min={50}
                    max={380}
                    step={5}
                  />
                </div>

                {!selectedEl.isTemplateField && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteElement(selectedEl.id)}
                    className="w-full"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete Element
                  </Button>
                )}
              </div>
            )}

            {selectedEl && selectedEl.type === "shape" && (
              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-medium">Edit Shape</h4>
                <div className="space-y-2">
                  <Label>Background Color</Label>
                  <Input
                    type="color"
                    value={selectedEl.backgroundColor}
                    onChange={(e) => updateElement(selectedEl.id, { backgroundColor: e.target.value })}
                    className="h-10 w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Width: {selectedEl.width}px</Label>
                  <Slider
                    value={[selectedEl.width]}
                    onValueChange={([value]) => updateElement(selectedEl.id, { width: value })}
                    min={20}
                    max={300}
                    step={5}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Height: {selectedEl.height}px</Label>
                  <Slider
                    value={[selectedEl.height]}
                    onValueChange={([value]) => updateElement(selectedEl.id, { height: value })}
                    min={20}
                    max={300}
                    step={5}
                  />
                </div>
                <Button variant="destructive" size="sm" onClick={() => deleteElement(selectedEl.id)} className="w-full">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete Element
                </Button>
              </div>
            )}

            {selectedEl && selectedEl.type === "image" && (
              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-medium">Image Options</h4>
                <div className="space-y-2">
                  <Button onClick={() => fileInputRef.current?.click()}>Upload / Browse Image</Button>
                  <div className="text-sm text-muted-foreground">Or drag the image on the card to reposition/resize it.</div>
                </div>
              </div>
            )}


            {!selectedEl && (
              <div className="text-sm text-muted-foreground text-center py-4">
                Click on an element to edit it, or use the tools to add new elements.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SMS Modal */}
      <SendSMSModal
        open={showSMSModal}
        onClose={() => setShowSMSModal(false)}
        designId={params.id as string}
        designTitle={cardTitle}
      />

      {/* Hidden file input for image upload */}
      <input
        ref={(el) => (fileInputRef.current = el)}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0]
          if (!f) return
          const reader = new FileReader()
          reader.onload = () => {
            const data = String(reader.result)
            if (selectedElement) {
              updateElement(selectedElement, { src: data })
              saveToHistory(elements)
            }
          }
          reader.readAsDataURL(f)
          // clear value so same file can be reselected
          ;(e.target as HTMLInputElement).value = ""
        }}
      />
    </div>
  )
}
