import { useEffect, useMemo, useState } from 'react'
import data from '../data/services.json'
import ServiceCard from '../components/ServiceCard.jsx'

export default function Explore() {
  const [category, setCategory] = useState('')
  const [city, setCity] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const categories = useMemo(() => Array.from(new Set(data.map((s) => s.category))), [])

  const filtered = useMemo(() => {
    return data.filter((s) => {
      const matchesCategory = category ? s.category === category : true
      const matchesCity = city ? s.city.toLowerCase().includes(city.toLowerCase()) : true
      const matchesMin = minPrice ? s.price >= Number(minPrice) : true
      const matchesMax = maxPrice ? s.price <= Number(maxPrice) : true
      return matchesCategory && matchesCity && matchesMin && matchesMax
    })
  }, [category, city, minPrice, maxPrice])

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-2xl border bg-white p-4 shadow-sm">
        <div className="grid gap-3 sm:grid-cols-4">
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl border-gray-300">
            <option value="">Todas las categorías</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Ciudad" className="rounded-xl border-gray-300" />
          <input value={minPrice} onChange={(e) => setMinPrice(e.target.value)} placeholder="Precio min" className="rounded-xl border-gray-300" />
          <input value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="Precio max" className="rounded-xl border-gray-300" />
        </div>
      </div>

      <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <ServiceCard key={s.id} {...s} image={s.images?.[0]} />
        ))}
      </div>
    </div>
  )
}


