import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "./scroll-animation"

export default function UsefulInformation() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollAnimation direction="fade" delay={0}>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 font-serif">
            Useful <span className="underline decoration-orange-500 decoration-4">Information</span>
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollAnimation direction="left" delay={0}>
            <Card className="bg-gradient-to-r from-orange-400 to-pink-400 text-white hover:from-orange-500 hover:to-pink-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border-0">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 font-sans">Circulars</h3>
                <div className="space-y-2 text-sm mb-4 font-light">
                  <p>• Filling up of the post of Dy. Chief (C&I) in Finance and Accounts Department</p>
                  <p>
                    • Filling up of the post of Assistant Engineer (Elec) on behalf of the Senior Electrical Engineer
                  </p>
                  <p className="font-medium">• View Downloads</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-200 font-medium"
                >
                  VIEW ALL
                </Button>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={200}>
            <Card className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border-0">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 font-sans">Announcements</h3>
                <div className="space-y-2 text-sm mb-4 font-light">
                  <p>• Visakhapatnam Tender invites bids for various projects and procurement on 08.08.2024</p>
                  <p className="font-medium">• 07.08.2024</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-200 font-medium"
                >
                  VIEW ALL
                </Button>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={400}>
            <Card className="bg-gradient-to-r from-gray-400 to-blue-400 text-white hover:from-gray-500 hover:to-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border-0">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 font-sans">Tenders</h3>
                <div className="space-y-2 text-sm mb-4 font-light">
                  <p>• Various tender notifications and procurement opportunities</p>
                  <p className="font-medium">• Updated regularly</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-200 font-medium"
                >
                  VIEW ALL
                </Button>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
