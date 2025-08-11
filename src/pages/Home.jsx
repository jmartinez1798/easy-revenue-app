import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard.jsx";
import Button from "../components/Button.jsx";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!FORMSPREE_ID) return;
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });
    alert(res.ok ? "¡Gracias! Te avisaremos cuando lancemos." : "No se pudo enviar. Intenta luego.");
    setEmail("");
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight">
              Encuentra y reserva <span className="text-emerald-600">profesionales</span> en minutos.
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Publica tu servicio <b>gratis</b>. Solo pagas comisión si te reservan.
              Agenda integrada, cobro seguro y opción de destacar tu perfil.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button as={Link} to="/provider">Publica tu servicio</Button>
              <Link to="/explore" className="px-4 py-2 rounded-2xl border hover:bg-neutral-100">Explorar servicios</Link>
            </div>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-lg">
            <h3 className="font-semibold">Únete como proveedor</h3>
            {FORMSPREE_ID ? (
              <form onSubmit={handleSubmit} className="mt-3 flex gap-3">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="flex-1 px-3 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <Button type="submit">Anotarme</Button>
              </form>
            ) : (
              <p className="mt-3 text-sm text-neutral-500">
                Configura <code>VITE_FORMSPREE_ID</code> para activar el formulario.
              </p>
            )}
            <ul className="mt-4 text-sm text-neutral-600 list-disc pl-5">
              <li>Sin mensualidad al inicio</li>
              <li>Comisión solo por reserva</li>
              <li>Destaca tu servicio para salir arriba</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Categorías populares</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <CategoryCard title="Hogar" icon="🏠" />
          <CategoryCard title="Belleza" icon="💇‍♀️" />
          <CategoryCard title="Tecnología" icon="💻" />
          <CategoryCard title="Eventos" icon="🎉" />
          <CategoryCard title="Mascotas" icon="🐶" />
          <CategoryCard title="Fitness" icon="🏋️" />
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6">¿Cómo funciona?</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border bg-white p-5">
            <div className="text-3xl">📝</div>
            <h3 className="font-semibold mt-2">Publica tu servicio</h3>
            <p className="text-sm text-neutral-600">Crea tu perfil gratis en minutos.</p>
          </div>
          <div className="rounded-2xl border bg-white p-5">
            <div className="text-3xl">📅</div>
            <h3 className="font-semibold mt-2">Recibe reservas</h3>
            <p className="text-sm text-neutral-600">Agenda integrada y notificaciones.</p>
          </div>
          <div className="rounded-2xl border bg-white p-5">
            <div className="text-3xl">💳</div>
            <h3 className="font-semibold mt-2">Cobra seguro</h3>
            <p className="text-sm text-neutral-600">Pagos protegidos con comisión justa.</p>
          </div>
        </div>
      </section>
    </>
  );
}


