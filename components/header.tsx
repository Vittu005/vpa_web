"use client"
import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Search, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NavigationDropdown from "./navigation-dropdown"

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#1e40af] text-white py-1">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>vpa-vpt@gov.in</span>
            </span>
            <span className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>+91 8912874677</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-blue-200">
              Hindi
            </Link>
            <Link href="#" className="hover:text-blue-200">
              A+
            </Link>
            <Link href="#" className="hover:text-blue-200">
              A
            </Link>
            <Link href="#" className="hover:text-blue-200">
              A-
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#2563eb] text-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">VPA</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">VISAKHAPATNAM PORT AUTHORITY</h1>
                <p className="text-xs text-blue-100">Ministry of Ports, Shipping and Waterways, Government of India</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search..." className="w-48 h-8 text-sm bg-white text-black" />
                <Button size="sm" className="bg-blue-700 hover:bg-blue-800 h-8">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-[#1e40af] border-t border-blue-400 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <ul className="flex items-center space-x-8 py-3">
                <li>
                  <Link href="/" className="hover:text-blue-200 transition-colors text-sm font-medium">
                    HOME
                  </Link>
                </li>
                <li className="relative" onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}>
                  <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors text-sm font-medium">
                    <span>ABOUT US</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  {activeDropdown === "about" && <NavigationDropdown type="about" />}
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("business")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors text-sm font-medium">
                    <span>BUSINESS</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  {activeDropdown === "business" && <NavigationDropdown type="business" />}
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("explore")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors text-sm font-medium">
                    <span>EXPLORE THE PORT</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  {activeDropdown === "explore" && <NavigationDropdown type="explore" />}
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-200 transition-colors text-sm font-medium">
                    NEWS & EVENTS
                  </Link>
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("others")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors text-sm font-medium">
                    <span>OTHERS</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  {activeDropdown === "others" && <NavigationDropdown type="others" />}
                </li>
              </ul>
              <div className="flex items-center space-x-6">
                <Link href="#" className="hover:text-blue-200 transition-colors text-sm font-medium">
                  VIGILANCE CORNER
                </Link>
                <Link href="#" className="hover:text-blue-200 transition-colors text-sm font-medium">
                  VPA ONLINE PAYMENT
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
