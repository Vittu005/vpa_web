import ScrollAnimation from "./scroll-animation"

export default function MinistrySection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollAnimation direction="fade" delay={0}>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 font-serif">
            Ministry of Ports, <span className="underline decoration-blue-500 decoration-4">Shipping</span> and
            Waterways
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollAnimation direction="left" delay={200}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-gray-800 text-lg font-sans">Shri Sarbananda Sonowal</h3>
                <p className="text-sm text-gray-600 font-light italic">Hon'ble Cabinet Minister</p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="right" delay={400}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-orange-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-gray-800 text-lg font-sans">Shri Shantanu Thakur</h3>
                <p className="text-sm text-gray-600 font-light italic">Hon'ble Minister of State</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
