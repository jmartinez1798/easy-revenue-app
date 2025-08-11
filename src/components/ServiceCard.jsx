import { Link } from "react-router-dom";

export default function ServiceCard({ id, title, city, price, rating, image, featured }) {
  return (
    <div className={"rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition " + (featured ? "ring-2 ring-emerald-500" : "")}>
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{title}</h3>
          <span className="text-emerald-700 font-semibold">${price}</span>
        </div>
        <p className="text-sm text-neutral-500">{city} • ⭐ {rating}</p>
        <Link
          to={`/service/${id}`}
          className="mt-3 inline-block px-3 py-1.5 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800"
        >
          Ver
        </Link>
      </div>
    </div>
  );
}


