import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-black text-xl tracking-tight">
          Hacelotodo<span className="text-emerald-600">.com</span>
        </Link>
        <nav className="flex items-center gap-6">
          <NavLink to="/explore" className="hover:text-emerald-600">Explorar</NavLink>
          <Link
            to="/provider"
            className="px-4 py-2 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700 transition"
          >
            Publica tu servicio
          </Link>
        </nav>
      </div>
    </header>
  );
}


