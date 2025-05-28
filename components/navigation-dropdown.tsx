"use client"

export default function NavigationDropdown({ type }: { type: string }) {
  const dropdownItems = {
    about: [
      { label: "About VPA", href: "#" },
      { label: "Vision & Mission", href: "#" },
      { label: "Board of Trustees", href: "#" },
      { label: "Organisation Chart", href: "#" },
      { label: "Citizen's Charter", href: "#" },
    ],
    business: [
      { label: "Trade Information", href: "#" },
      { label: "Berth Hiring Policy", href: "#" },
      { label: "Cargo Handling", href: "#" },
      { label: "Warehousing", href: "#" },
    ],
    explore: [
      { label: "Marine Services", href: "#" },
      { label: "Terminal Facilities", href: "#" },
      { label: "Connectivity", href: "#" },
      { label: "Tourism", href: "#" },
    ],
    others: [
      { label: "RTI", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Important Links", href: "#" },
      { label: "Downloads", href: "#" },
    ],
  }

  const items = dropdownItems[type as keyof typeof dropdownItems] || []

  return (
    <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
