export const validateEmail = {
  maxLength: (v: string) =>
    v.length <= 50 || "The email should have at most 50 characters",
  matchPattern: (v: string) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
    "Email address must be a valid address",
};

export const validateFullName = {
  maxLength: (v: string) =>
    v.length <= 80 || "The Full Name should have at most 80 characters",
  minLength: (v: string) =>
    v.length >= 8 || "The full name must have at least 8 characters",
};

export const validatePwd = {
  matchPattern: (v: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(v) ||
    "a password must be eight characters including one uppercase letter, one special character and alphanumeric characters",
}
