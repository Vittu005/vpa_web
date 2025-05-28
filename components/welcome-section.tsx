import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

export default function WelcomeSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation direction="left" delay={0}>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 font-serif leading-tight">
                Welcome to
                <br />
                <span className="text-blue-600">Visakhapatnam Port</span>
                <br />
                Authority !
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed font-light text-lg">
                Visakhapatnam Port is one of the <span className="font-semibold">13 major ports</span> of India and the
                only major port of Andhra Pradesh. It is the{" "}
                <span className="font-semibold text-blue-600">third largest port</span> in India in terms of cargo
                handling and the largest port on the east coast of India. The port was declared as major port in{" "}
                <span className="font-semibold">1970</span>. The port has been performing consistently well over the
                years by means of smart policies tools.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  LEARN MORE
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  CONTACT
                </Button>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="right" delay={300}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative bg-gray-200 rounded-lg overflow-hidden h-48 hover:shadow-lg transition-shadow duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-80"></div>
                    <Button
                      size="icon"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-blue-600 hover:bg-gray-100 rounded-full w-12 h-12 transition-all duration-300 hover:scale-110"
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="bg-gray-200 rounded-lg h-32 hover:shadow-lg transition-shadow duration-300"></div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-gray-200 rounded-lg h-32 hover:shadow-lg transition-shadow duration-300"></div>
                  <div className="bg-gray-200 rounded-lg h-48 hover:shadow-lg transition-shadow duration-300"></div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
