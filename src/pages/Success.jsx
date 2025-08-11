import { Link } from "react-router-dom";

export default function Success(){
  return (
    <section className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-bold text-emerald-700">¡Reserva confirmada!</h1>
      <p className="mt-2 text-neutral-600">Te enviamos un correo con los detalles.</p>
      <Link to="/explore" className="mt-6 inline-block px-4 py-2 rounded-2xl border hover:bg-neutral-100">Seguir explorando</Link>
    </section>
  );
}


