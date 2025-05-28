export default function RecentEvents() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Recent Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-200 rounded-lg h-32"></div>
          <div className="bg-gray-200 rounded-lg h-32"></div>
          <div className="bg-gray-200 rounded-lg h-32"></div>
          <div className="bg-gray-200 rounded-lg h-32"></div>
        </div>

        {/* Partner Logos */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <div className="w-16 h-16 bg-gray-200 rounded"></div>
          <div className="w-16 h-16 bg-gray-200 rounded"></div>
          <div className="w-16 h-16 bg-gray-200 rounded"></div>
          <div className="w-16 h-16 bg-gray-200 rounded"></div>
          <div className="w-16 h-16 bg-gray-200 rounded"></div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Sign up for our Newsletter</h3>
          <div className="flex justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Type your email here"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  )
}
