import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data/services.json";
import Modal from "../components/Modal.jsx";
import Button from "../components/Button.jsx";

function generateSlots() {
  const slots = []
  const now = new Date()
  for (let d = 0; d < 7; d += 1) {
    const date = new Date(now)
    date.setDate(now.getDate() + d)
    for (let h = 9; h <= 17; h += 2) {
      const slotDate = new Date(date)
      slotDate.setHours(h, 0, 0, 0)
      slots.push({ id: `${date.toDateString()}-${h}`, date: slotDate })
    }
  }
  return slots
}

// using shared Modal component

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = useMemo(() => data.find((s) => String(s.id) === String(id)), [id]);
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const slots = useMemo(() => generateSlots(), []);

  if (!service) return <div className="mx-auto max-w-6xl px-4 py-10">Servicio no encontrado</div>;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <img src={service.images?.[0] || service.image} alt="" className="rounded-2xl object-cover w-full h-64" />
          <div className="grid grid-cols-3 gap-3">
            {(service.images || [service.image]).slice(0, 3).map((img, i) => (
              <img key={i} src={img} alt="" className="rounded-xl object-cover w-full h-24" />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{service.title}</h1>
          <div className="mt-1 text-gray-600">{service.city} • {service.category}</div>
          <div className="mt-2 text-gray-900 font-semibold text-lg">${service.price} • ★ {Number(service.rating).toFixed(1)}</div>
          <p className="mt-4 text-gray-700">{service.description}</p>

          <div className="mt-6">
            <h3 className="font-semibold text-gray-900">Disponibilidad</h3>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {slots.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelected(s)}
                  className={`rounded-xl border px-3 py-2 text-sm hover:bg-gray-50 ${selected?.id === s.id ? 'ring-2 ring-blue-500 border-blue-500' : ''}`}
                >
                  {s.date.toLocaleDateString()} {s.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Button
              disabled={!selected}
              onClick={() => setOpen(true)}
            >
              Reservar
            </Button>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Confirmar reserva">
        <div className="space-y-3">
          <div className="text-sm text-gray-700">Servicio: {service.title}</div>
          {selected && (
            <div className="text-sm text-gray-700">Fecha: {selected.date.toLocaleString()}</div>
          )}
          <Button
            onClick={() => navigate('/success')}
            className="w-full"
          >
            Pagar ahora (mock)
          </Button>
        </div>
      </Modal>
    </div>
  );
}


