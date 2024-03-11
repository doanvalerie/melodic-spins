export default function InputField({
  label,
  value,
  type,
}: {
  label?: string;
  value: string;
  type: string;
}) {
  return (
    <div className="flex flex-col gap-xs">
      {label && (
        <label htmlFor={value} className="font-semibold">
          {label}
        </label>
      )}
      <input
        id={value}
        type={type}
        name={value}
        className="rounded-lg bg-stone p-sm py-xs outline-none"
      />
    </div>
  );
}
