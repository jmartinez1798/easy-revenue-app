import { Outlet, Link, NavLink } from 'react-router-dom'

function Button({ variant = 'primary', children, to }) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-5 py-2.5 font-medium transition shadow-sm hover:shadow-lg'
  const styles =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'
  const content = <span className={`${base} ${styles}`}>{children}</span>
  return to ? <Link to={to}>{content}</Link> : content
}

function Navbar() {
  return (
    <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold tracking-tight">
          Hacelotodo
        </Link>
        <nav className="flex items-center gap-6">
          <NavLink to="/explore" className="text-gray-700 hover:text-gray-900">
            Explorar
          </NavLink>
          <Button to="/provider" variant="primary">Publica tu servicio</Button>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Hacelotodo.com — Todos los derechos reservados
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
