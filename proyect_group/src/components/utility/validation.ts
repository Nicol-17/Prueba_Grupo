export const errorMessages = {
  email: "Debe ser un correo de @gmail, @hotmail o @outlook.",
  password: "Debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo.",
  confirmPassword: "Las contraseñas no coinciden.",
  passwordLength: "Debe tener al menos 8 caracteres.",
  passwordUppercase: "Debe incluir al menos una mayúscula.",
  passwordLowercase: "Debe incluir al menos una minúscula.",
  passwordNumber: "Debe incluir al menos un número.",
  passwordSymbol: "Debe incluir al menos un símbolo (@$!%*?&).",
};

export const validateEmail = (email: string): string => {
  const emailRegex = /\S+@(gmail\.com|hotmail\.com|outlook\.com)$/;
  return emailRegex.test(email) ? "" : errorMessages.email;
};

export const validatePassword = (password: string): string => {
  if (password.length < 8) {
    return errorMessages.passwordLength;
  }
  if (!/[A-Z]/.test(password)) {
    return errorMessages.passwordUppercase;
  }
  if (!/[a-z]/.test(password)) {
    return errorMessages.passwordLowercase;
  }
  if (!/\d/.test(password)) {
    return errorMessages.passwordNumber;
  }
  if (!/[@$!%*?&]/.test(password)) {
    return errorMessages.passwordSymbol;
  }
  return ""; 
};

export const validateConfirmPassword = (password: string, confirm: string): string => {
  return password === confirm ? "" : errorMessages.confirmPassword;
};