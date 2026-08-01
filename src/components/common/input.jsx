import "./Input.css";

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  error,
  required = false,
  disabled = false,
}) {
  return (
    <div className="input-group">
      {label && (
        <label className="input-label">
          {label}
          {required && (
            <span className="required">*</span>
          )}
        </label>
      )}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`input-field ${
          error ? "input-error" : ""
        }`}
      />

      {error && (
        <p className="error-text">{error}</p>
      )}
    </div>
  );
}