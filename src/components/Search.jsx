import { useMemo, useState } from 'react';
import { Search as SearchIcon, MapPin, Clock, Bus, Shield } from 'lucide-react';

const sampleBuses = [
  {
    id: 'BBSR-PURI-101',
    from: 'Bhubaneswar',
    to: 'Puri',
    operator: 'Jagannath Express',
    depart: '07:30',
    arrive: '09:15',
    duration: '1h 45m',
    price: 180,
    ac: true,
    seats: 18,
    rating: 4.6,
  },
  {
    id: 'BBSR-CTC-202',
    from: 'Bhubaneswar',
    to: 'Cuttack',
    operator: 'Mahanadi Travels',
    depart: '08:00',
    arrive: '08:55',
    duration: '55m',
    price: 60,
    ac: false,
    seats: 30,
    rating: 4.2,
  },
  {
    id: 'BBSR-SBP-303',
    from: 'Bhubaneswar',
    to: 'Sambalpur',
    operator: 'Hirakud Lines',
    depart: '21:00',
    arrive: '05:30',
    duration: '8h 30m',
    price: 650,
    ac: true,
    seats: 12,
    rating: 4.4,
  },
  {
    id: 'ROU-BERH-404',
    from: 'Rourkela',
    to: 'Berhampur',
    operator: 'Utkal Star',
    depart: '18:15',
    arrive: '05:45',
    duration: '11h 30m',
    price: 820,
    ac: true,
    seats: 8,
    rating: 4.1,
  },
];

const cities = [
  'Bhubaneswar',
  'Cuttack',
  'Puri',
  'Sambalpur',
  'Rourkela',
  'Berhampur',
  'Balasore',
  'Jeypore',
  'Bargarh',
  'Jharsuguda',
];

export default function Search() {
  const [from, setFrom] = useState('Bhubaneswar');
  const [to, setTo] = useState('Puri');
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [passengers, setPassengers] = useState(1);
  const [results, setResults] = useState(sampleBuses);
  const [queryRan, setQueryRan] = useState(false);
  const [booking, setBooking] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [seats, setSeats] = useState(1);

  const filtered = useMemo(() => {
    const list = results.filter(
      (b) =>
        b.from.toLowerCase().includes(from.toLowerCase()) &&
        b.to.toLowerCase().includes(to.toLowerCase())
    );
    return list;
  }, [from, to, results]);

  const onSearch = (e) => {
    e.preventDefault();
    setQueryRan(true);
  };

  const openBooking = (bus) => {
    setBooking(bus);
    setName('');
    setPhone('');
    setSeats(Math.min(1, bus.seats));
  };

  const totalFare = useMemo(() => {
    return booking ? booking.price * seats : 0;
  }, [booking, seats]);

  const confirmBooking = () => {
    if (!booking) return;
    if (!name || !/^\+?\d{10,13}$/.test(phone.replace(/\s/g, ''))) {
      alert('Please enter a valid name and phone number');
      return;
    }
    if (seats < 1 || seats > booking.seats) {
      alert('Please select valid seats');
      return;
    }
    // Reduce available seats locally to simulate booking
    setResults((prev) =>
      prev.map((b) =>
        b.id === booking.id ? { ...b, seats: b.seats - seats } : b
      )
    );
    const msg = `Booking confirmed!\n\n${booking.operator} (${booking.from} → ${booking.to})\nDate: ${date}\nPassengers: ${seats}\nTotal Fare: ₹${totalFare}`;
    alert(msg);
    setBooking(null);
  };

  return (
    <section id="search" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">Search Buses</h2>
          <p className="mt-1 text-gray-600">Plan your trip across Odisha with real city options and sample schedules.</p>

          <form onSubmit={onSearch} className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700">From</label>
              <div className="mt-1 relative">
                <MapPin className="w-4 h-4 text-blue-600 absolute left-3 top-3" />
                <select value={from} onChange={(e) => setFrom(e.target.value)} className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {cities.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700">To</label>
              <div className="mt-1 relative">
                <MapPin className="w-4 h-4 text-blue-600 absolute left-3 top-3" />
                <select value={to} onChange={(e) => setTo(e.target.value)} className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {cities.filter((c) => c !== from).map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Date</label>
              <div className="mt-1 relative">
                <Clock className="w-4 h-4 text-blue-600 absolute left-3 top-3" />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Passengers</label>
              <div className="mt-1">
                <input type="number" min={1} max={6} value={passengers} onChange={(e) => setPassengers(Number(e.target.value))} className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <div className="md:col-span-5 flex justify-end">
              <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                <SearchIcon className="w-5 h-5" /> Find buses
              </button>
            </div>
          </form>

          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">Available buses</h3>
              <p className="text-sm text-gray-500">Date: {new Date(date).toLocaleDateString()}</p>
            </div>

            {queryRan && filtered.length === 0 && (
              <div className="p-6 rounded-lg border border-dashed text-center text-gray-600">
                No buses found for this route. Try different cities.
              </div>
            )}

            <ul className="grid gap-4">
              {filtered.map((b) => (
                <li key={b.id} className="p-4 border rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                      <Bus className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900">{b.operator}</p>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">{b.ac ? 'AC' : 'Non-AC'}</span>
                      </div>
                      <p className="text-sm text-gray-600">{b.from} → {b.to} • {b.duration}</p>
                      <p className="text-xs text-gray-500">Dep {b.depart} • Arr {b.arrive}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Starting at</p>
                      <p className="text-xl font-bold">₹{b.price}</p>
                      <p className={`text-sm ${b.seats > 5 ? 'text-gray-600' : 'text-orange-600'}`}>{b.seats} seats left</p>
                    </div>
                    <button onClick={() => openBooking(b)} disabled={b.seats === 0} className={`px-5 py-2 rounded-lg font-semibold text-white ${b.seats === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
                      {b.seats === 0 ? 'Sold out' : 'Book'}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div id="routes" className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border bg-blue-50">
              <p className="font-semibold text-blue-800">Bhubaneswar ↔ Puri</p>
              <p className="text-sm text-blue-900/80">Hourly services • 1h 30m</p>
            </div>
            <div className="p-4 rounded-xl border bg-blue-50">
              <p className="font-semibold text-blue-800">Bhubaneswar ↔ Cuttack</p>
              <p className="text-sm text-blue-900/80">Frequent shuttles • 55m</p>
            </div>
            <div className="p-4 rounded-xl border bg-blue-50">
              <p className="font-semibold text-blue-800">Bhubaneswar ↔ Sambalpur</p>
              <p className="text-sm text-blue-900/80">Overnight AC • 8h 30m</p>
            </div>
            <div className="p-4 rounded-xl border bg-blue-50">
              <p className="font-semibold text-blue-800">Rourkela ↔ Berhampur</p>
              <p className="text-sm text-blue-900/80">Express • 11h 30m</p>
            </div>
          </div>

          {booking && (
            <div className="fixed inset-0 z-30 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/40" onClick={() => setBooking(null)} />
              <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">Confirm your booking</h4>
                  <button onClick={() => setBooking(null)} className="text-gray-500 hover:text-gray-700">✕</button>
                </div>
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2"><Bus className="w-4 h-4 text-blue-600" /><span className="font-medium">{booking.operator}</span></div>
                  <p>{booking.from} → {booking.to} • Dep {booking.depart} • Arr {booking.arrive}</p>
                  <p className="inline-flex items-center gap-2"><Shield className="w-4 h-4 text-blue-600" /> Secure checkout</p>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Full name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="mt-1 w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone (WhatsApp preferred)</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g. +91 98765 43210" className="mt-1 w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Seats</label>
                    <input type="number" min={1} max={booking.seats} value={seats} onChange={(e) => setSeats(Math.max(1, Math.min(booking.seats, Number(e.target.value))))} className="mt-1 w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <p className="mt-1 text-xs text-gray-500">{booking.seats} available</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Travel date</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-blue-50 text-blue-900">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Fare</span>
                    <span className="font-semibold">₹{booking.price} × {seats} = ₹{totalFare}</span>
                  </div>
                  <p className="text-sm mt-1">No extra platform fees. Free cancellation up to 12 hours before departure.</p>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button onClick={() => setBooking(null)} className="px-4 py-2 rounded-lg border">Cancel</button>
                  <button onClick={confirmBooking} className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">Confirm booking</button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
