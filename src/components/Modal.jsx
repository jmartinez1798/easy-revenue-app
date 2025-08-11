export default function Modal({ open, onClose, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-lg">
        {children}
        <div className="mt-4 text-right">
          <button onClick={onClose} className="rounded-xl border px-4 py-2">Cerrar</button>
        </div>
      </div>
    </div>
  )
}


