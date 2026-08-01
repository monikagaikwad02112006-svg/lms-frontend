import { useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  const path = location.pathname
    .split("/")
    .filter(Boolean);

  return (
    <div className="px-6 py-3 text-sm text-gray-500">
      Home
      {path.map((item, index) => (
        <span key={index}>
          {" / "}
          {item}
        </span>
      ))}
    </div>
  );
}