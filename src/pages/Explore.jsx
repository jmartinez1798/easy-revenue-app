import { useMemo, useState } from "react";
import data from "../data/services.json";
import ServiceCard from "../components/ServiceCard.jsx";

export default function Explore() {
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const services = useMemo(() => {
    return data
      .filter((s) => {
        const okCat = category ? s.category === category : true;
        const okCity = city ? s.city.toLowerCase().includes(city.toLowerCase()) : true;
        const okMin = min ? s.price >= Number(min) : true;
        const okMax = max ? s.price <= Number(max) : true;
        return okCat && okCity && okMin && okMax;
      })
      .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }, [category, city, min, max]);

  const categories = Array.from(new Set(data.map((s) => s.category)));

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Explorar servicios</h1>
      <div className="grid md:grid-cols-4 gap-3 mb-6">
        <select className="rounded-xl border p-2" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Todas las categorías</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <input className="rounded-xl border p-2" placeholder="Ciudad" value={city} onChange={(e) => setCity(e.target.value)} />
        <input className="rounded-xl border p-2" placeholder="Min $" value={min} onChange={(e) => setMin(e.target.value)} />
        <input className="rounded-xl border p-2" placeholder="Max $" value={max} onChange={(e) => setMax(e.target.value)} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => (
          <ServiceCard key={s.id} {...s} />
        ))}
      </div>
    </section>
  );
}


