import { Link } from 'react-router-dom'

export default function ServiceCard({ id, title, city, price, rating, image, featured }) {
  return (
    <div className={`rounded-2xl border bg-white p-4 shadow-sm hover:shadow-lg transition ${featured ? 'ring-1 ring-blue-200' : ''}`}>
      <img src={image} alt={title} className="h-40 w-full object-cover rounded-xl" />
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <div className="font-semibold text-gray-900">{title}</div>
          <div className="text-sm text-gray-600">{city}</div>
        </div>
        <div className="text-right">
          <div className="text-gray-900 font-semibold">${price}</div>
          <div className="text-xs text-yellow-600">★ {Number(rating).toFixed(1)}</div>
        </div>
      </div>
      <div className="mt-3 flex justify-between">
        <Link to={`/service/${id}`} className="text-blue-600 hover:underline">Ver</Link>
      </div>
    </div>
  )
}


