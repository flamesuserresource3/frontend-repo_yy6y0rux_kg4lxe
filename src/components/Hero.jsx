import { MapPin, Shield, Clock } from 'lucide-react';

export default function Hero({ onExplore }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Smart Bus Booking in Odisha
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Find and book buses across Bhubaneswar, Cuttack, Puri, Sambalpur, Rourkela, Berhampur and more. Fast, reliable, and secure travel at your fingertips.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button onClick={onExplore} className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow">
                Search Buses
              </button>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2"><Shield className="w-4 h-4 text-blue-600" /> Safe & Secure</span>
                <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-blue-600" /> On-time schedules</span>
                <span className="hidden sm:inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> 200+ routes</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-blue-100 bg-white shadow-sm p-4">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2070&auto=format&fit=crop"
                alt="Odisha bus travel"
                className="w-full h-72 object-cover rounded-lg"
              />
              <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                <div className="p-3 rounded-lg bg-blue-50">
                  <p className="font-semibold text-blue-700">AC/Non-AC</p>
                  <p className="text-gray-600">Multiple classes</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-50">
                  <p className="font-semibold text-blue-700">Live Tracking</p>
                  <p className="text-gray-600">Stay updated</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-50">
                  <p className="font-semibold text-blue-700">Easy Refunds</p>
                  <p className="text-gray-600">Hassle-free</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
