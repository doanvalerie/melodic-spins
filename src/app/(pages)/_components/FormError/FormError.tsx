import { BsExclamationCircleFill } from 'react-icons/bs';

export default function FormError({ errors }: { errors: string[] }) {
  return (
    <div className="font-medium text-red-error">
      {errors.map((error) => (
        <div key={error} className="flex items-center gap-xs">
          <BsExclamationCircleFill size={12} />
          {error}
        </div>
      ))}
    </div>
  );
}
