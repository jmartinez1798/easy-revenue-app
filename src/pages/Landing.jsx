import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const categories = [
  { key: 'hogar', label: 'Hogar' },
  { key: 'belleza', label: 'Belleza' },
  { key: 'tecnologia', label: 'Tecnología' },
  { key: 'eventos', label: 'Eventos' },
  { key: 'mascotas', label: 'Mascotas' },
  { key: 'fitness', label: 'Fitness' },
]

function CategoryCard({ label }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition">
      <div className="text-lg font-semibold text-gray-900">{label}</div>
      <div className="mt-2 text-sm text-gray-500">Ver servicios</div>
    </div>
  )
}

export default function Landing() {
  const formsprreeId = import.meta.env.VITE_FORMSPREE_ID
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const formAction = useMemo(() => {
    if (!formsprreeId) return ''
    return `https://formspree.io/f/${formsprreeId}`
  }, [formsprreeId])

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section className="py-16 sm:py-20">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Encuentra y reserva profesionales en minutos.
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Publica tu servicio gratis. Solo pagas comisión si te reservan.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/provider"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 font-medium transition shadow-sm hover:shadow-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Publica tu servicio
              </Link>
              <Link
                to="/explore"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 font-medium transition shadow-sm hover:shadow-lg bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
              >
                Explorar servicios
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border bg-gradient-to-br from-blue-50 to-indigo-50 p-12 text-center shadow-sm">
            <div className="text-6xl">🧰</div>
            <div className="mt-3 font-semibold text-gray-800">Hacelotodo te conecta con clientes reales</div>
            <div className="text-gray-600 text-sm mt-1">Cobra por tu trabajo, no por publicar</div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-10">
        <h2 className="text-xl font-bold text-gray-900">Categorías populares</h2>
        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <CategoryCard key={c.key} label={c.label} />
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-10">
        <h2 className="text-xl font-bold text-gray-900">Cómo funciona</h2>
        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Publica',
              desc: 'Crea tu servicio en minutos con precio y fotos.',
            },
            {
              title: 'Recibe reservas',
              desc: 'Los clientes eligen fecha y hora disponibles.',
            },
            {
              title: 'Cobra',
              desc: 'Confirma y cobra por tu trabajo (mock por ahora).',
            },
          ].map((step) => (
            <div key={step.title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-lg font-semibold text-gray-900">{step.title}</div>
              <div className="mt-2 text-sm text-gray-600">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Únete como proveedor */}
      <section className="py-12">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Únete como proveedor</h3>
          {!formsprreeId ? (
            <p className="mt-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl p-3">
              Configura VITE_FORMSPREE_ID en tu entorno
            </p>
          ) : (
            <form
              action={formAction}
              method="POST"
              onSubmit={() => setStatus('sending')}
              className="mt-4 flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                className="flex-1 rounded-2xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 font-medium transition shadow-sm hover:shadow-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                {status === 'sending' ? 'Enviando…' : 'Quiero unirme'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}


