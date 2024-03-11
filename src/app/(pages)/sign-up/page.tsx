import Description from './_components/Description';
import Form from './_components/Form';

export default function SignUp() {
  return (
    <div className="flex grow flex-col items-center justify-center gap-lg p-lg lg:flex-row">
      <Description />
      <Form />
    </div>
  );
}
