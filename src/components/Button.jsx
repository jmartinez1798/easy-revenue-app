export default function Button({ as:Tag="button", className="", ...props }) {
  return (
    <Tag
      className={
        "px-4 py-2 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700 transition " +
        className
      }
      {...props}
    />
  );
}


