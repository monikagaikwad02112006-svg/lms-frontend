function Select({
  label,
  options = [],
  value,
  onChange,
}) {
  return (
    <div>
      {label && <label>{label}</label>}

      <select
        value={value}
        onChange={onChange}
        className="border rounded px-3 py-2 w-full"
      >
        <option value="">Select an option</option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}