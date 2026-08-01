export default function Card({ children }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      {children}
    </div>
  );
}