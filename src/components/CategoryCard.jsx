export default function CategoryCard({ title, icon="🛠️" }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition grid place-items-start">
      <div className="text-3xl">{icon}</div>
      <div className="mt-3 font-semibold">{title}</div>
    </div>
  );
}


