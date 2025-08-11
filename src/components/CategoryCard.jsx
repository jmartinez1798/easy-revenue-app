export default function CategoryCard({ label }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition">
      <div className="text-lg font-semibold text-gray-900">{label}</div>
      <div className="mt-2 text-sm text-gray-500">Ver servicios</div>
    </div>
  )
}


