export default function Badge({
  children,
}) {
  return (
    <span className="px-2 py-1 text-sm rounded bg-gray-200">
      {children}
    </span>
  );
}