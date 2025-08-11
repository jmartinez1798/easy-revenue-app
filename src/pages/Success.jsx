import { Link } from 'react-router-dom'

export default function Success() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 text-center">
      <div className="mx-auto w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <div className="text-5xl">✅</div>
        <h1 className="mt-3 text-2xl font-bold text-gray-900">Pago simulado exitoso</h1>
        <p className="mt-2 text-gray-600">Recibirás un email con la confirmación.</p>
        <div className="mt-6">
          <Link to="/" className="rounded-2xl bg-blue-600 text-white px-5 py-2.5 inline-flex">Volver al inicio</Link>
        </div>
      </div>
    </div>
  )
}


