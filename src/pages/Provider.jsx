import { useEffect, useMemo, useState } from 'react'

const initial = {
  title: '',
  description: '',
  category: '',
  price: '',
  city: '',
  zip: '',
  images: ['', '', ''],
  availability: [], // { date: 'YYYY-MM-DD', time: 'HH:MM' }
}

export default function Provider() {
  const [service, setService] = useState(() => {
    try {
      const saved = localStorage.getItem('hacelotodo_service')
      return saved ? JSON.parse(saved) : initial
    } catch {
      return initial
    }
  })

  useEffect(() => {
    localStorage.setItem('hacelotodo_service', JSON.stringify(service))
  }, [service])

  function updateField(field, value) {
    setService((s) => ({ ...s, [field]: value }))
  }

  function updateImage(index, value) {
    setService((s) => {
      const next = [...s.images]
      next[index] = value
      return { ...s, images: next }
    })
  }

  function addSlot(date, time) {
    if (!date || !time) return
    setService((s) => ({ ...s, availability: [...s.availability, { date, time }] }))
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 lg:grid-cols-2">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Tu servicio</h2>
        <div className="mt-4 grid grid-cols-1 gap-4">
          <input className="rounded-xl border-gray-300" placeholder="Título" value={service.title} onChange={(e) => updateField('title', e.target.value)} />
          <textarea className="rounded-xl border-gray-300" placeholder="Descripción" value={service.description} onChange={(e) => updateField('description', e.target.value)} />
          <input className="rounded-xl border-gray-300" placeholder="Categoría" value={service.category} onChange={(e) => updateField('category', e.target.value)} />
          <input className="rounded-xl border-gray-300" placeholder="Precio base" value={service.price} onChange={(e) => updateField('price', e.target.value)} />
          <input className="rounded-xl border-gray-300" placeholder="Ciudad" value={service.city} onChange={(e) => updateField('city', e.target.value)} />
          <input className="rounded-xl border-gray-300" placeholder="ZIP" value={service.zip} onChange={(e) => updateField('zip', e.target.value)} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {service.images.map((img, i) => (
              <input key={i} className="rounded-xl border-gray-300" placeholder={`URL foto ${i + 1}`} value={img} onChange={(e) => updateImage(i, e.target.value)} />
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-gray-900">Disponibilidad</h3>
          <SlotEditor onAdd={addSlot} />
          <div className="mt-3 grid gap-2">
            {service.availability.map((s, i) => (
              <div key={i} className="rounded-xl border px-3 py-2 text-sm text-gray-700">
                {s.date} {s.time}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Preview</h2>
        <div className="mt-4">
          <div className="rounded-2xl border p-4">
            <div className="font-semibold text-gray-900">{service.title || 'Título del servicio'}</div>
            <div className="text-sm text-gray-600">{service.city || 'Ciudad'} • {service.category || 'Categoría'}</div>
            <div className="mt-1 text-gray-900 font-semibold">${service.price || '0'}</div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {service.images.map((img, i) => (
                <div key={i} className="h-24 bg-gray-100 rounded-xl overflow-hidden">
                  {img ? <img src={img} alt="" className="h-full w-full object-cover" /> : null}
                </div>
              ))}
            </div>
            <div className="mt-3 text-sm text-gray-600">{service.description || 'Descripción del servicio...'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SlotEditor({ onAdd }) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
      <input type="date" className="rounded-xl border-gray-300" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="time" className="rounded-xl border-gray-300" value={time} onChange={(e) => setTime(e.target.value)} />
      <button type="button" onClick={() => { onAdd(date, time); setDate(''); setTime('') }} className="rounded-xl bg-blue-600 text-white px-4 py-2">Agregar</button>
    </div>
  )
}


