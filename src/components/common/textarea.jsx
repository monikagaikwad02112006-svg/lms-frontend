import "./Textarea.css";

export default function Textarea({
  label,
  placeholder = "Write something...",
  value,
  onChange,
  rows = 5,
  error,
  required = false,
  maxLength,
}) {
  return (
    <div className="textarea-group">
      {label && (
        <div className="textarea-header">
          <label className="textarea-label">
            {label}

            {required && (
              <span className="required">
                *
              </span>
            )}
          </label>

          {maxLength && (
            <span className="character-count">
              {value?.length || 0}/{maxLength}
            </span>
          )}
        </div>
      )}

      <textarea
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`textarea-field ${
          error ? "textarea-error" : ""
        }`}
      />

      {error && (
        <p className="textarea-error-text">
          {error}
        </p>
      )}
    </div>
  );
}