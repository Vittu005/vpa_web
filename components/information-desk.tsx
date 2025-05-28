import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "./scroll-animation"

export default function InformationDesk() {
  const infoCards = [
    {
      title: "Notice about VPA Layout Consultancy",
      subtitle: "Explore now",
      color: "bg-green-100",
      hoverColor: "hover:bg-green-200",
    },
    {
      title: "VPA Passenger Train & Goods Handling",
      subtitle: "Explore now",
      color: "bg-blue-100",
      hoverColor: "hover:bg-blue-200",
    },
    {
      title: "VPA Govt. Stakeholders",
      subtitle: "Explore now",
      color: "bg-yellow-100",
      hoverColor: "hover:bg-yellow-200",
    },
    { title: "Call Center Facility", subtitle: "Explore now", color: "bg-gray-100", hoverColor: "hover:bg-gray-200" },
    { title: "FAQ", subtitle: "Explore now", color: "bg-purple-100", hoverColor: "hover:bg-purple-200" },
    { title: "Pensioners Corner", subtitle: "Explore now", color: "bg-orange-100", hoverColor: "hover:bg-orange-200" },
    { title: "Employees Corner", subtitle: "Explore now", color: "bg-red-100", hoverColor: "hover:bg-red-200" },
    { title: "Medical Services", subtitle: "Explore now", color: "bg-blue-100", hoverColor: "hover:bg-blue-200" },
    {
      title: "Forms, Circulars, Suppliers & Contractors",
      subtitle: "Explore now",
      color: "bg-gray-100",
      hoverColor: "hover:bg-gray-200",
    },
    {
      title: "VPA Railway Indent Management System",
      subtitle: "Explore now",
      color: "bg-green-100",
      hoverColor: "hover:bg-green-200",
    },
    { title: "FMP Operations", subtitle: "Explore now", color: "bg-blue-100", hoverColor: "hover:bg-blue-200" },
    {
      title: "N.I.T Marine",
      subtitle: "Explore now",
      color: "bg-teal-600 text-white",
      hoverColor: "hover:bg-teal-700",
    },
    {
      title: "Port Operations System (POS)",
      subtitle: "Explore now",
      color: "bg-blue-100",
      hoverColor: "hover:bg-blue-200",
    },
    {
      title: "Sagarmala Projects in VPA",
      subtitle: "Explore now",
      color: "bg-orange-100",
      hoverColor: "hover:bg-orange-200",
    },
    { title: "Project Status", subtitle: "Explore now", color: "bg-gray-100", hoverColor: "hover:bg-gray-200" },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollAnimation direction="fade" delay={0}>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 font-serif">
            Information <span className="underline decoration-blue-500 decoration-4">Desk</span>
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {infoCards.map((card, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 100} className="h-full">
              <Card
                className={`${card.color} ${card.hoverColor} hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105 border-0 h-full`}
              >
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm mb-2 font-sans leading-tight">{card.title}</h3>
                  <p className="text-xs text-gray-600 font-light italic">{card.subtitle}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
