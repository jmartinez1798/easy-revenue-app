import { Link } from "react-router-dom";

export default function Cancel(){
  return (
    <section className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-bold text-red-600">Pago cancelado</h1>
      <p className="mt-2 text-neutral-600">Tu reserva no se completó.</p>
      <Link to="/explore" className="mt-6 inline-block px-4 py-2 rounded-2xl border hover:bg-neutral-100">Volver a explorar</Link>
    </section>
  );
}


