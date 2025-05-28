import ScrollAnimation from "./scroll-animation"

export default function ChairmanMessage() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-start space-x-8">
          <ScrollAnimation direction="left" delay={0} className="flex-1">
            <div className="bg-yellow-100 p-6 rounded-lg border-l-4 border-yellow-500 hover:bg-yellow-50 transition-colors duration-300 hover:shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center font-serif">
                <span className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4 shadow-md">
                  1
                </span>
                Chairman's Message
              </h2>
              <p className="text-gray-700 leading-relaxed font-light text-lg">
                As we reflect on a year of record-breaking achievements at Visakhapatnam Port Authority, I am pleased to
                report that we handled an unprecedented{" "}
                <span className="font-semibold text-blue-600">81.09 Million Tonnes</span> of cargo in the fiscal year
                2023-24. This milestone not only reflects our operational excellence but also sets the stage for our
                next ambitious target—handling <span className="font-semibold text-green-600">90 Million Tonnes</span>{" "}
                in the fiscal year 2024-25.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="right" delay={300} className="w-48 flex-shrink-0">
            <div className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 shadow-lg">
              <div className="w-24 h-24 bg-white rounded-lg mx-auto mb-3 flex items-center justify-center">
                <div className="w-20 h-20 bg-gray-300 rounded"></div>
              </div>
              <h3 className="font-bold text-sm font-sans">Shri Rajesh Kumar Sinha, IAS</h3>
              <p className="text-xs text-blue-100 font-light">Chairman</p>
              <p className="text-xs text-blue-100 font-light">Visakhapatnam Port Authority</p>
              <div className="mt-3 bg-white p-2 rounded">
                <div className="w-16 h-16 bg-gray-200 mx-auto"></div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
