import { createUserSchema } from '@schemas/createUserSchema';

interface ValidationErrors {
  invalid: boolean;
  message: {
    [key: string]: string[];
  };
}

export async function validateSignUpData(userData: Record<string, any>) {
  const validationResult = await createUserSchema.safeParseAsync(userData);
  const validationErrors: ValidationErrors = { invalid: false, message: {} };

  if (!validationResult.success) {
    const fieldErrors = validationResult.error.flatten().fieldErrors;
    validationErrors.message = { ...validationErrors.message, ...fieldErrors };
    validationErrors.invalid = true;
  }

  return validationErrors;
}
