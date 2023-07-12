export type typesInput = "text" | "password";

export interface inputTypes
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type?: typesInput;
  testId?: string;
  label?: string;
  register?: any;
  validate?: any;
}
