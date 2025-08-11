export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Hacelotodo.com — Encuentra y reserva profesionales en minutos.</p>
        <div className="flex gap-4">
          <a className="hover:underline" href="/explore">Explorar</a>
          <a className="hover:underline" href="/provider">Publicar</a>
        </div>
      </div>
    </footer>
  );
}


