export default function FormToJSON(formData: FormData) {
  const regex = new RegExp('^\\$ACTION.*');
  let output: { [key: string]: any } = {};
  for (const [key, value] of formData.entries()) {
    if (!regex.test(key)) {
      output[key] = value;
    }
  }
  return output;
}
