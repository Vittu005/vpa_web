export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">VPA</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Visakhapatnam Port Authority</h3>
                <p className="text-xs text-gray-600">Port Area, Visakhapatnam-530035</p>
                <p className="text-xs text-gray-600">Andhra Pradesh, India</p>
              </div>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p>+91 891-2874677</p>
              <p>FAX: +91 891-2562068</p>
              <p>Email: vpa-vpt@gov.in</p>
              <p>PAN: AAAJV3635C</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-3">Important Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Law certificate for Pensioner's of VPA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Tenders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-3">Quick links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Grievance & Vigilance Corner
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Our Stakeholders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  VPA Online Payment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  News & Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-3">Pages</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Gati Shakti
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Vigilance Corner
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Citizens / Employees Corner
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-blue-600">Tweets by vpt_india</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600">
          <p>
            Design and Developed by <span className="text-blue-600">Swayam Infotech</span>
          </p>
          <p>All Rights Reserved by Visakhapatnam Port Authority © 2025</p>
          <p className="mt-2">Website version: v.5.4.5.1.6.8</p>
        </div>
      </div>
    </footer>
  )
}
