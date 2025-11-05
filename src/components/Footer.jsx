import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-blue-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold text-gray-900">About</h4>
          <p className="mt-2 text-sm text-gray-600">
            A simple, modern platform focused on intercity bus travel in Odisha. Compare operators, schedules, and prices to plan your journey with ease.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Popular Cities</h4>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li>Bhubaneswar</li>
            <li>Cuttack</li>
            <li>Puri</li>
            <li>Sambalpur</li>
            <li>Rourkela</li>
            <li>Berhampur</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Contact</h4>
          <ul className="mt-2 text-sm text-gray-600 space-y-2">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-600" /> +91 60000 00000</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-600" /> support@odbus.example</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Bhubaneswar, Odisha</li>
          </ul>
        </div>
      </div>
      <div className="py-4 bg-blue-50 text-center text-sm text-blue-900">
        © {new Date().getFullYear()} Odisha Bus Booking. All rights reserved.
      </div>
    </footer>
  );
}
