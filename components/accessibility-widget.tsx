"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Slider } from "@/components/ui/slider"
import {
  Accessibility,
  X,
  Play,
  Contrast,
  Link,
  Type,
  ArrowLeftRight,
  Loader,
  ImageOff,
  MousePointer,
  MessageSquare,
  AlignLeft,
  Droplet,
  RotateCcw,
  Move,
} from "lucide-react"

// Accessibility Context
interface AccessibilitySettings {
  oversizedWidget: boolean
  contrast: number
  highlightLinks: boolean
  textSize: number
  textSpacing: number
  pauseAnimations: boolean
  hideImages: boolean
  dyslexiaFriendly: boolean
  largeCursor: boolean
  tooltips: boolean
  lineHeight: number
  textAlign: "left" | "center" | "right"
  saturation: number
}

interface AccessibilityContextType {
  settings: AccessibilitySettings
  updateSetting: (key: keyof AccessibilitySettings, value: any) => void
  resetSettings: () => void
}

const defaultSettings: AccessibilitySettings = {
  oversizedWidget: false,
  contrast: 100,
  highlightLinks: false,
  textSize: 100,
  textSpacing: 0,
  pauseAnimations: false,
  hideImages: false,
  dyslexiaFriendly: false,
  largeCursor: false,
  tooltips: false,
  lineHeight: 1.5,
  textAlign: "left",
  saturation: 100,
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings)

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const resetSettings = () => {
    setSettings(defaultSettings)
  }

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement

    // Contrast and Saturation
    const filterString = `contrast(${settings.contrast}%) saturate(${settings.saturation}%)`
    root.style.filter = filterString

    // Text Size
    root.style.fontSize = `${settings.textSize}%`

    // Text Spacing
    if (settings.textSpacing > 0) {
      root.style.letterSpacing = `${settings.textSpacing}px`
      root.style.wordSpacing = `${settings.textSpacing * 2}px`
    } else {
      root.style.letterSpacing = ""
      root.style.wordSpacing = ""
    }

    // Line Height
    root.style.lineHeight = settings.lineHeight.toString()

    // Dyslexia Friendly Font
    if (settings.dyslexiaFriendly) {
      root.style.fontFamily = '"Comic Sans MS", "Trebuchet MS", Verdana, sans-serif'
    } else {
      root.style.fontFamily = ""
    }

    // Large Cursor
    if (settings.largeCursor) {
      const style = document.createElement("style")
      style.textContent = `
        * {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path d="M12,2 L12,30 L20,22 L28,30 L30,28 L22,20 L30,12 L2,12 Z" fill="black" stroke="white" strokeWidth="2"/></svg>') 12 12, auto !important;
        }
        a, button, [role="button"], [role="link"] {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path d="M12,2 L12,30 L20,22 L28,30 L30,28 L22,20 L30,12 L2,12 Z" fill="blue" stroke="white" strokeWidth="2"/></svg>') 12 12, pointer !important;
        }
      `
      style.id = "accessibility-cursor"
      document.head.appendChild(style)
    } else {
      const existingStyle = document.getElementById("accessibility-cursor")
      if (existingStyle) {
        existingStyle.remove()
      }
    }

    // Pause Animations
    if (settings.pauseAnimations) {
      const style = document.createElement("style")
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `
      style.id = "accessibility-animations"
      document.head.appendChild(style)
    } else {
      const existingStyle = document.getElementById("accessibility-animations")
      if (existingStyle) {
        existingStyle.remove()
      }
    }

    // Hide Images
    if (settings.hideImages) {
      const style = document.createElement("style")
      style.textContent = `
        img, [role="img"], .image, [class*="image"] {
          opacity: 0 !important;
        }
      `
      style.id = "accessibility-images"
      document.head.appendChild(style)
    } else {
      const existingStyle = document.getElementById("accessibility-images")
      if (existingStyle) {
        existingStyle.remove()
      }
    }

    // Highlight Links
    if (settings.highlightLinks) {
      const style = document.createElement("style")
      style.textContent = `
        a, button, [role="button"], [role="link"] {
          outline: 3px solid #007bff !important;
          outline-offset: 2px !important;
          background-color: rgba(0, 123, 255, 0.1) !important;
        }
      `
      style.id = "accessibility-links"
      document.head.appendChild(style)
    } else {
      const existingStyle = document.getElementById("accessibility-links")
      if (existingStyle) {
        existingStyle.remove()
      }
    }

    // Text Align
    if (settings.textAlign !== "left") {
      const style = document.createElement("style")
      style.textContent = `
        p, h1, h2, h3, h4, h5, h6, div, span {
          text-align: ${settings.textAlign} !important;
        }
      `
      style.id = "accessibility-text-align"
      document.head.appendChild(style)
    } else {
      const existingStyle = document.getElementById("accessibility-text-align")
      if (existingStyle) {
        existingStyle.remove()
      }
    }
  }, [settings])

  return (
    <AccessibilityContext.Provider value={{ settings, updateSetting, resetSettings }}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error("useAccessibility must be used within AccessibilityProvider")
  }
  return context
}

// Custom icon components
const DyslexiaIcon = () => <span className="font-bold text-sm">Df</span>

const LineHeightIcon = () => (
  <div className="flex flex-col gap-0.5">
    <div className="h-0.5 w-4 bg-current"></div>
    <div className="h-0.5 w-4 bg-current"></div>
    <div className="h-0.5 w-4 bg-current"></div>
  </div>
)

// Accessibility Widget Component
export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const { settings, updateSetting, resetSettings } = useAccessibility()

  const toggleTextAlign = () => {
    const alignments: Array<"left" | "center" | "right"> = ["left", "center", "right"]
    const currentIndex = alignments.indexOf(settings.textAlign)
    const nextIndex = (currentIndex + 1) % alignments.length
    updateSetting("textAlign", alignments[nextIndex])
  }

  // Keyboard shortcut (Ctrl+U)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault()
        setIsOpen(!isOpen)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  return (
    <>
      {/* Floating Accessibility Button */}
      <Button
  onClick={() => setIsOpen(true)}
  className="fixed top-1/2 right-4 -translate-y-1/2 z-50 rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
  aria-label="Open Accessibility Menu (Ctrl+U)"
>
        <Accessibility className="w-6 h-6" />
      </Button>

      {/* Accessibility Widget Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className={`max-w-sm p-0 ${settings.oversizedWidget ? "max-w-md" : ""}`}>
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between text-white">
                <span className="text-sm font-medium">Accessibility Menu (CTRL+U)</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-blue-700 h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </DialogTitle>
            </DialogHeader>

            <Button
              variant="secondary"
              className="w-full mt-3 bg-blue-500 hover:bg-blue-400 text-white border-0"
              onClick={() => window.open("https://userway.org", "_blank")}
            >
              <Play className="w-4 h-4 mr-2" />
              How UserWay Works
            </Button>
          </div>

          <div className="p-4 space-y-4">
            {/* Oversized Widget Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Oversized Widget</span>
              <Switch
                checked={settings.oversizedWidget}
                onCheckedChange={(checked) => updateSetting("oversizedWidget", checked)}
              />
            </div>

            {/* Slider Controls */}
            <div className="space-y-4">
              {/* Contrast Slider */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
                    <Contrast className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Contrast</span>
                      <span className="text-xs text-gray-500">{settings.contrast}%</span>
                    </div>
                    <Slider
                      value={[settings.contrast]}
                      onValueChange={(value) => updateSetting("contrast", value[0])}
                      min={50}
                      max={200}
                      step={10}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Text Size Slider */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
                    <Type className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Text Size</span>
                      <span className="text-xs text-gray-500">{settings.textSize}%</span>
                    </div>
                    <Slider
                      value={[settings.textSize]}
                      onValueChange={(value) => updateSetting("textSize", value[0])}
                      min={100}
                      max={200}
                      step={10}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Text Spacing Slider */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Text Spacing</span>
                      <span className="text-xs text-gray-500">{settings.textSpacing}px</span>
                    </div>
                    <Slider
                      value={[settings.textSpacing]}
                      onValueChange={(value) => updateSetting("textSpacing", value[0])}
                      min={0}
                      max={10}
                      step={1}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Line Height Slider */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
                    <LineHeightIcon />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Line Height</span>
                      <span className="text-xs text-gray-500">{settings.lineHeight.toFixed(1)}</span>
                    </div>
                    <Slider
                      value={[settings.lineHeight]}
                      onValueChange={(value) => updateSetting("lineHeight", value[0])}
                      min={1}
                      max={3}
                      step={0.1}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Saturation Slider */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
                    <Droplet className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Saturation</span>
                      <span className="text-xs text-gray-500">{settings.saturation}%</span>
                    </div>
                    <Slider
                      value={[settings.saturation]}
                      onValueChange={(value) => updateSetting("saturation", value[0])}
                      min={0}
                      max={200}
                      step={10}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Toggle Controls */}
            <div className="space-y-3">
              {/* Highlight Links */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
                    <Link className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">Highlight Links</span>
                </div>
                <Switch
                  checked={settings.highlightLinks}
                  onCheckedChange={(checked) => updateSetting("highlightLinks", checked)}
                />
              </div>

              {/* Pause Animations */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
                    <Loader className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">Pause Animations</span>
                </div>
                <Switch
                  checked={settings.pauseAnimations}
                  onCheckedChange={(checked) => updateSetting("pauseAnimations", checked)}
                />
              </div>

              {/* Hide Images */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
                    <ImageOff className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">Hide Images</span>
                </div>
                <Switch
                  checked={settings.hideImages}
                  onCheckedChange={(checked) => updateSetting("hideImages", checked)}
                />
              </div>

              {/* Dyslexia Friendly */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
                    <DyslexiaIcon />
                  </div>
                  <span className="text-sm font-medium">Dyslexia Friendly</span>
                </div>
                <Switch
                  checked={settings.dyslexiaFriendly}
                  onCheckedChange={(checked) => updateSetting("dyslexiaFriendly", checked)}
                />
              </div>

              {/* Large Cursor */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
                    <MousePointer className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">Large Cursor</span>
                </div>
                <Switch
                  checked={settings.largeCursor}
                  onCheckedChange={(checked) => updateSetting("largeCursor", checked)}
                />
              </div>

              {/* Tooltips */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">Tooltips</span>
                </div>
                <Switch checked={settings.tooltips} onCheckedChange={(checked) => updateSetting("tooltips", checked)} />
              </div>

              {/* Text Align */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
                    <AlignLeft className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">Text Align: {settings.textAlign}</span>
                </div>
                <Button variant="outline" size="sm" onClick={toggleTextAlign}>
                  Toggle
                </Button>
              </div>
            </div>

            {/* Reset Button */}
            <Button onClick={resetSettings} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset All Accessibility Settings
            </Button>

            {/* Move/Hide Widget */}
            <div className="flex items-center gap-2 text-blue-600 text-sm">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <Move className="w-3 h-3 text-white" />
              </div>
              <span>Move/Hide Widget</span>
              <span className="ml-auto">▶</span>
            </div>

            {/* UserWay Branding */}
            <div className="text-center pt-2 border-t">
              <div className="text-xs text-gray-500">
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs mr-2">Manage</span>
                <span className="font-bold text-blue-600">USERWAY</span>
                <div className="text-xs text-gray-400 mt-1">a Level Access company</div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
