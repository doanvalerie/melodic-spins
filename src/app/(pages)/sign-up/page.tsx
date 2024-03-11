import Description from './_components/Description';
import Form from './_components/Form';

export default function SignUp() {
  return (
    <div>
      <div className="flex h-[calc(100vh-theme(spacing.navbar))] min-h-fit grow flex-col items-center justify-center gap-lg p-lg lg:flex-row">
        <Description />
        <Form />
      </div>
    </div>
  );
}
