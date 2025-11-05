import { Bus, Phone, Mail } from 'lucide-react';

export default function Navbar({ onNavigate }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => onNavigate('top')} className="flex items-center gap-2 text-blue-700 hover:text-blue-800">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white">
              <Bus className="w-5 h-5" />
            </span>
            <span className="font-semibold tracking-tight">Odisha Bus Booking</span>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => onNavigate('search')} className="text-sm font-medium text-gray-700 hover:text-blue-700">Search</button>
            <button onClick={() => onNavigate('routes')} className="text-sm font-medium text-gray-700 hover:text-blue-700">Popular Routes</button>
            <button onClick={() => onNavigate('contact')} className="text-sm font-medium text-gray-700 hover:text-blue-700">Contact</button>
          </nav>

          <div className="hidden md:flex items-center gap-4 text-sm">
            <a href="tel:+916000000000" className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-700">
              <Phone className="w-4 h-4" /> +91 60000 00000
            </a>
            <a href="mailto:support@odbus.example" className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-700">
              <Mail className="w-4 h-4" /> support@odbus.example
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
